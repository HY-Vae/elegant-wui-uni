<template>
  <page-wraper>
    <demo-block title="单个日期选择" :hor="0">
      <view style="margin: 0 15px 10px">
        <view style="margin-bottom: 10px; font-size: 13px">切换类型：</view>
        <wui-radio-group v-model="type1" shape="button">
          <wui-radio value="date">date</wui-radio>
          <wui-radio value="week">week</wui-radio>
          <wui-radio value="month">month</wui-radio>
        </wui-radio-group>
      </view>
      <wui-calendar-view :type="type1" v-model="value1" @change="handleChange1"></wui-calendar-view>
    </demo-block>
    <demo-block title="多个日期选择" :hor="0">
      <wui-calendar-view type="dates" v-model="value2" @change="handleChange2"></wui-calendar-view>
    </demo-block>
    <demo-block title="日期范围选择" :hor="0">
      <view style="margin: 0 24rpx 20rpx">
        <view style="margin-bottom: 20rpx; font-size: 26rpx">切换类型：</view>
        <wui-radio-group v-model="type2" shape="button" @change="handleTypeChange2">
          <wui-radio value="daterange">daterange</wui-radio>
          <wui-radio value="weekrange">weekrange</wui-radio>
          <wui-radio value="monthrange">monthrange</wui-radio>
        </wui-radio-group>
      </view>
      <wui-calendar-view :type="type2" allow-same-day v-model="value3" @change="handleChange3"></wui-calendar-view>
    </demo-block>
    <demo-block title="时间类型" :hor="0">
      <wui-calendar-view type="datetime" v-model="value4" :time-filter="timeFilter"></wui-calendar-view>
    </demo-block>
    <demo-block title="时间范围类型" :hor="0">
      <wui-calendar-view type="datetimerange" v-model="value5"></wui-calendar-view>
    </demo-block>
    <demo-block title="限制最大选择范围" :hor="0">
      <wui-calendar-view type="daterange" :max-range="3" v-model="value7"></wui-calendar-view>
    </demo-block>
    <demo-block title="自定义日期" :hor="0">
      <wui-calendar-view type="daterange" allow-same-day v-model="value6" :formatter="formatter"></wui-calendar-view>
    </demo-block>
    <demo-block title="设置周起始日" :hor="0">
      <wui-calendar-view :first-day-of-week="1" v-model="value8"></wui-calendar-view>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import type { CalendarFormatter } from '@/uni_modules/elegant-wui-uni/components/wui-calendar-view/types'
import { ref } from 'vue'

const type1 = ref<any>('date')
const type2 = ref<any>('daterange')
const minDate = ref(Date.now())
const value1 = ref(Date.now())
const value2 = ref(null)
const value3 = ref([Date.now() - 24 * 60 * 60 * 1000 * 33, Date.now()])
const value4 = ref(Date.now())
const value5 = ref([Date.now() - 24 * 60 * 60 * 1000 * 3, Date.now() - 24 * 60 * 60 * 1000])
const value6 = ref([Date.now() - 24 * 60 * 60 * 1000 * 3, Date.now() - 24 * 60 * 60 * 1000])
const value7 = ref([Date.now() - 24 * 60 * 60 * 1000 * 3, Date.now() - 24 * 60 * 60 * 1000])
const value8 = ref([Date.now() - 24 * 60 * 60 * 1000 * 3, Date.now() - 24 * 60 * 60 * 1000])

const timeFilter = ({ type, values }: any) => {
  if (type === 'minute') {
    // 只展示 0,10,20,30,40,50 分钟选项
    return values.filter((item: any) => {
      return item.value % 10 === 0
    })
  }

  return values
}

const formatter: CalendarFormatter = (day) => {
  const date = new Date(day.date)
  const now = new Date()

  const year = date.getFullYear()
  const month = date.getMonth()
  const da = date.getDate()
  const nowYear = now.getFullYear()
  const nowMonth = now.getMonth()
  const nowDa = now.getDate()

  if (year === nowYear && month === nowMonth && da === nowDa) {
    day.topInfo = '今天'
  }

  if (month === 5 && da === 18) {
    day.topInfo = '618大促'
  }

  if (month === 10 && da === 11) {
    day.topInfo = '京东双11'
  }

  if (day.type === 'start') {
    day.bottomInfo = '开始'
  }

  if (day.type === 'end') {
    day.bottomInfo = '结束'
  }

  if (day.type === 'same') {
    day.bottomInfo = '开始/结束'
  }

  return day
}

function handleTypeChange2({ value }: any) {
  type2.value = value
}
function handleChange1({ value }: any) {
  console.log(value)
  // value1.value = value
}
function handleChange2({ value }: any) {
  value2.value = value
}
function handleChange3({ value }: any) {
  value3.value = value
}
</script>
<style lang="scss" scoped></style>
