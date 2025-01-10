<template>
  <view :class="rootClass" :style="rootStyle">
    <slot v-if="!vertical"></slot>
  </view>
</template>
<script lang="ts">
export default {
  name: 'wui-divider',
  options: {
    virtualHost: true,
    addGlobalClass: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { dividerProps } from './types'

const props = defineProps(dividerProps)
const slots = useSlots()
const rootStyle = computed(() => {
  return `--wui-divider-color:${props.color};${props.customStyle}`
})
const rootClass = computed(() => {
  const prefixCls = 'wui-divider'
  if (!props.vertical) {
    return {
      [prefixCls]: true,
      [`${prefixCls}--center`]: slots.default,
      [`${prefixCls}--left`]: props.contentPosition === 'left',
      [`${prefixCls}--right`]: props.contentPosition === 'right',
      ['is-dashed']: props.dashed,
      ['is-hairline']: props.hairline
    }
  } else {
    return {
      [prefixCls]: true,
      [`${prefixCls}--vertical`]: true,
      ['is-dashed']: props.dashed,
      ['is-hairline']: props.hairline
    }
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
