<!--
 * @Author: Mr zhang
 * @Date: 2023-06-13 11:47:12
 * @LastEditTime: 2023-08-11 18:49:11
 * @LastEditors: Mr zhang
 * @Description: 
 * @FilePath: \elegant-wui-uni\src\pages\card\Index.vue
 * 记得注释
-->
<template>
  <page-wraper>
    <view>
      <demo-block title="基本使用" transparent>
        <wui-card title="经营分析">
          一般的，检举内容由承办的党的委员会或纪律检查委员会将处理意见或复议、复查结论同申诉人见面，听取其意见。复议、复查的结论和决定，应交给申诉人一份。
          <template #footer>
            <wui-button size="small" plain>查看详情</wui-button>
          </template>
        </wui-card>
        <wui-card title="新订单">
          <view class="content">
            <image
              src="https://img11.360buyimg.com/imagetools/jfs/t1/143248/37/5695/265818/5f3a8546E98d998a4/745897ca9c9e474b.jpg"
              alt="joy"
              style="width: 70px; height: 70px; border-radius: 4px; margin-right: 12px"
            />
            <view>
              <view>蜜滋兰(mizland)新西兰进口多花种…</view>
              <view>数量：1件</view>
              <view>金额：29.08</view>
              <view>买家昵称：Joy</view>
            </view>
          </view>
          <template #footer>
            <wui-button size="small" plain>查看详情</wui-button>
          </template>
        </wui-card>
      </demo-block>
      <demo-block title="矩形卡片" transparent>
        <wui-card title="2020-02-03服务到期" type="rectangle">
          <view style="height: 40px" class="content">
            <image
              src="https://img11.360buyimg.com/imagetools/jfs/t1/143248/37/5695/265818/5f3a8546E98d998a4/745897ca9c9e474b.jpg"
              width="40"
              height="40"
              alt="joy"
              style="width: 40px; height: 40px; border-radius: 4px; margin-right: 12px"
            />
            <view>
              <view class="custom-main">智云好客CRM短信_催评营销</view>
              <view class="custom-sub">高级版-快速吸粉 | 周期一年</view>
            </view>
          </view>
          <template #footer>
            <view>
              <wui-button size="small" plain custom-style="margin-right: 8px">评价</wui-button>
              <wui-button size="small">立即使用</wui-button>
            </view>
          </template>
        </wui-card>
        <wui-card type="rectangle">
          <template #title>
            <view class="title">
              <view>2020-02-03服务到期</view>
              <view class="title-tip">
                <wui-icon name="warning" size="14px" custom-style="vertical-align: bottom" />
                您可以去电脑上使用该服务
              </view>
            </view>
          </template>

          <view style="height: 40px" class="content">
            <image
              src="https://img11.360buyimg.com/imagetools/jfs/t1/143248/37/5695/265818/5f3a8546E98d998a4/745897ca9c9e474b.jpg"
              width="40"
              height="40"
              alt="joy"
              style="width: 40px; height: 40px; border-radius: 4px; margin-right: 12px"
            />
            <view>
              <view class="custom-main">智云好客CRM短信_催评营销</view>
              <view class="custom-sub">高级版-快速吸粉 | 周期一年</view>
            </view>
          </view>
          <template #footer>
            <view>
              <wui-button size="small" plain custom-style="margin-right: 8px">评价</wui-button>
              <wui-button size="small">立即使用</wui-button>
            </view>
          </template>
        </wui-card>
      </demo-block>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.wui-theme-dark {
  .title-tip {
    color: rgba(232, 230, 227, 0.8);
  }

  .custom-main {
    color: $-dark-color;
  }
  .custom-sub {
    color: $-dark-color-gray;
  }
}

.content,
.title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.content {
  justify-content: flex-start;
}
.title {
  justify-content: space-between;
}
.title-tip {
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
}

.custom-main {
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
}
.custom-sub {
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
}
</style>
