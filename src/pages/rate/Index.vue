<!--
 * @Author: Mr zhang
 * @Date: 2023-07-29 17:03:39
 * @LastEditTime: 2024-03-17 20:19:52
 * @LastEditors: Mr zhang
 * @Description: 
 * @FilePath: /elegant-wui-uni/src/pages/rate/Index.vue
 * 记得注释
-->
<template>
  <page-wraper>
    <demo-block title="基本用法">
      <wui-rate v-model="value1" @change="changeValue1" />
    </demo-block>

    <demo-block title="只读状态 readonly">
      <wui-rate v-model="value2" readonly />
    </demo-block>

    <demo-block title="禁用状态">
      <wui-rate v-model="value3" disabled />
    </demo-block>

    <demo-block title="修改选中颜色">
      <view style="margin-bottom: 10px">
        <wui-rate v-model="value4" active-color="linear-gradient(180deg, rgba(255,238,0,1) 0%,rgba(250,176,21,1) 100%)" @change="changeValue2" />
      </view>
      <wui-rate
        v-model="value5"
        :active-color="[
          'linear-gradient(180deg, rgba(255,238,0,1) 0%,rgba(250,176,21,1) 100%)',
          'linear-gradient(315deg, rgba(245,34,34,1) 0%,rgba(255,117,102,1) 100%)'
        ]"
      />
    </demo-block>

    <demo-block title="修改icon和选中颜色">
      <wui-rate v-model="value6" icon="dong" active-icon="dong" active-color="#4D80F0" />
    </demo-block>

    <demo-block title="修改size、space">
      <wui-rate v-model="value7" space="10px" size="30px" />
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref<number>(5)
const value2 = ref<number>(3)
const value3 = ref<number>(2)
const value4 = ref<number>(3)
const value5 = ref<number>(4)
const value6 = ref<number>(3)
const value7 = ref<number>(5)

function changeValue1({ value }: any) {
  console.log(value)
}
function changeValue2({ value }: any) {
  console.log(value)
}
</script>
