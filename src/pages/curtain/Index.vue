<template>
  <page-wraper>
    <demo-block title="基本用法">
      <wui-button @click="handleClick1">关闭按钮在内部</wui-button>
    </demo-block>
    <demo-block title="修改按钮位置">
      <view>
        <wui-button @click="handleClick2">左上</wui-button>
        <wui-button @click="handleClick3">顶部</wui-button>
        <wui-button @click="handleClick4">右上</wui-button>
      </view>
      <view>
        <wui-button @click="handleClick5">左下</wui-button>
        <wui-button @click="handleClick6">底部</wui-button>
        <wui-button @click="handleClick7">右下</wui-button>
      </view>
    </demo-block>
    <demo-block title="点击遮罩关闭">
      <wui-button @click="handleClick8">点击遮罩关闭</wui-button>
    </demo-block>
    <demo-block title="自定义关闭按钮">
      <wui-button @click="handleClick9">自定义关闭按钮</wui-button>
    </demo-block>
    <wui-curtain :value="value1" :src="img" :to="link" @close="handleClose1" :width="280"></wui-curtain>
    <wui-curtain :value="value2" :src="img" :to="link" close-position="top-left" :width="200" @close="handleClose2"></wui-curtain>
    <wui-curtain :value="value3" :src="img" :to="link" close-position="top" :width="200" @close="handleClose3"></wui-curtain>
    <wui-curtain :value="value4" :src="img" :to="link" close-position="top-right" :width="240" @close="handleClose4"></wui-curtain>
    <wui-curtain :value="value5" :src="img" :to="link" close-position="bottom-left" :width="240" @close="handleClose5"></wui-curtain>
    <wui-curtain :value="value6" :src="img" :to="link" close-position="bottom" :width="240" @close="handleClose6"></wui-curtain>
    <wui-curtain :value="value7" :src="img" :to="link" close-position="bottom-right" :width="240" @close="handleClose7"></wui-curtain>
    <wui-curtain
      :value="value8"
      :src="img"
      :to="link"
      close-position="bottom-right"
      :width="240"
      @close="handleClose8"
      :close-on-click-modal="true"
    ></wui-curtain>
    <wui-curtain :value="value9" :src="img" @close="handleClose9" :width="280">
      <template #close>
        <view class="custom-close" @click="handleClose9">关闭</view>
      </template>
    </wui-curtain>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref<boolean>(false)
const value2 = ref<boolean>(false)
const value3 = ref<boolean>(false)
const value4 = ref<boolean>(false)
const value5 = ref<boolean>(false)
const value6 = ref<boolean>(false)
const value7 = ref<boolean>(false)
const value8 = ref<boolean>(false)
const value9 = ref<boolean>(false)
const img = ref<string>('https://img20.360buyimg.com/da/jfs/t1/141592/25/8861/261559/5f68d8c1E33ed78ab/698ad655bfcfbaed.png')
const link = ref<string>('/pages/index/index')

function handleClick1() {
  value1.value = true
}
function handleClose1() {
  value1.value = false
}
function handleClick2() {
  value2.value = true
}
function handleClose2() {
  value2.value = false
}
function handleClick3() {
  value3.value = true
}
function handleClose3() {
  value3.value = false
}
function handleClick4() {
  value4.value = true
}
function handleClose4() {
  value4.value = false
}
function handleClick5() {
  value5.value = true
}
function handleClose5() {
  value5.value = false
}
function handleClick6() {
  value6.value = true
}
function handleClose6() {
  value6.value = false
}
function handleClick7() {
  value7.value = true
}
function handleClose7() {
  value7.value = false
}
function handleClick8() {
  value8.value = true
}
function handleClose8() {
  value8.value = false
}
function handleClick9() {
  value9.value = true
}
function handleClose9() {
  value9.value = false
}
</script>
<style lang="scss" scoped>
:deep(button) {
  margin: 0 10px 10px 0;
}
.custom-close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #ffffff;
  font-size: 28rpx;
  border: 1px solid #ffffff;
  padding: 2rpx 8rpx;
  border-radius: 28rpx;
}
</style>
