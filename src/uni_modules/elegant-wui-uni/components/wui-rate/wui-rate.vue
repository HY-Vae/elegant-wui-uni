<template>
  <view :class="`wui-rate ${customClass}`" :style="customStyle">
    <view
      v-for="(rate, index) in rateList"
      :key="index"
      :data-index="index"
      :style="{ 'margin-right': index == rateList.length - 1 ? 0 : space }"
      class="wui-rate__item"
      @click="changeRate(index)"
    >
      <view class="wui-rate__item-star" :style="{ width: size, height: size }">
        <wui-icon :name="icon" :size="size" :custom-style="iconStyle" />
      </view>
      <view class="wui-rate__item-star wui-rate__item-star--active" :style="{ width: rate, height: size }">
        <wui-icon :name="activeIcon" :size="size" :custom-style="iconActiveStyle" />
      </view>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'wui-rate',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>
<script lang="ts" setup>
import wuiIcon from '../wui-icon/wui-icon.vue'
import { computed, ref, watch } from 'vue'
import { rateProps } from './types'

const props = defineProps(rateProps)
const emit = defineEmits(['update:modelValue', 'change'])

const rateList = ref<Array<string>>([])
const activeValue = ref<string>('')

const iconStyle = computed(() => {
  return `background:${props.color}; -webkit-background-clip: text; color: transparent`
})

const iconActiveStyle = computed(() => {
  return `background:${props.disabled ? props.disabledColor : activeValue.value}; -webkit-background-clip: text; color: transparent`
})

watch(
  () => props.activeColor,
  (newVal) => {
    if (Array.isArray(newVal) && !newVal.length) {
      console.error('activeColor cannot be an empty array')
    }
    computeActiveValue()
  },
  {
    immediate: true,
    deep: true
  }
)

watch(
  [() => props.num, () => props.modelValue],
  () => {
    computeRateList()
  },
  {
    immediate: true,
    deep: true
  }
)

/**
 * @description 计算当前应当展示的rate数量
 */
function computeRateList() {
  const { modelValue, num } = props
  // value和num都准备好才能计算
  if (modelValue === null || !num) return
  if (typeof modelValue !== 'number') {
    console.error('[Wui Design] error(wui-rate): the value of wui-rate should be a number')
    return
  }
  const tempRateList: string[] = []
  const fullLength = Math.ceil(modelValue) - 1
  for (let i = 0; i < num; i++) {
    if (i < fullLength) {
      tempRateList.push('100%')
    } else if (i === fullLength) {
      const rate = modelValue - fullLength > 0.5 ? 1 : 0.5
      tempRateList.push(rate * 100 + '%')
    } else {
      tempRateList.push('0')
    }
  }
  rateList.value = tempRateList
  computeActiveValue()
}
/**
 * @description 计算当前应当展示的rate颜色
 */
function computeActiveValue() {
  const { activeColor, modelValue, num } = props
  let tempActiveValue: string = ''
  if (Array.isArray(activeColor) && activeColor.length) {
    tempActiveValue = Number(modelValue) <= num * 0.6 || !activeColor[1] ? activeColor[0] : activeColor[1]
  } else {
    tempActiveValue = activeColor as string
  }
  activeValue.value = tempActiveValue
}
/**
 * @description 点击icon触发组件的change事件
 * @param Event
 */
function changeRate(index: number) {
  if (props.readonly || props.disabled) return
  emit('update:modelValue', index + 1)
  emit('change', {
    value: index + 1
  })
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
