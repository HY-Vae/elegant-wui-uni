<template>
  <wui-config-provider :theme="theme" :theme-vars="isRed ? themeVars : {}">
    <view class="page-wraper">
      <wui-cell title="切换暗黑" title-width="240px" center v-if="showDarkMode">
        <wui-switch v-model="isDark" />
      </wui-cell>
      <wui-cell title="切换主题色" title-width="240px" center v-if="showDarkMode">
        <wui-switch v-model="isRed" />
      </wui-cell>
      <slot />
      <!-- #ifdef MP-WEIXIN -->
      <!-- 横幅广告和格子广告可以共存，但插屏广告展示时，不显示横幅广告和格子广告 -->
      <template v-if="useWxAd && !showWxAd3">
        <ad-custom v-if="showWxAd" unit-id="adunit-06191d6d3d1ddfc4"></ad-custom>
        <ad-custom
          v-if="showWxAd2"
          style="width: 120rpx; height: auto; position: fixed; right: 12rpx; top: 160rpx; z-index: 999"
          unit-id="adunit-95aad07aafad3619"
        ></ad-custom>
      </template>
      <!-- #endif -->

      <wui-gap height="0" v-if="safeAreaInsetBottom" safe-area-bottom></wui-gap>
    </view>
    <wui-notify />
    <wui-toast />
  </wui-config-provider>
</template>
<script lang="ts">
export default {
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>
<script lang="ts" setup>
import { computed, ref, onMounted, nextTick } from 'vue'
import { setNotifyDefaultOptions, type ConfigProviderThemeVars } from '@/uni_modules/elegant-wui-uni'
import { useDark } from '@/store'

interface Props {
  showDarkMode?: boolean
  safeAreaInsetBottom?: boolean
  useWxAd?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showDarkMode: false,
  safeAreaInsetBottom: true,
  useWxAd: process.env.NODE_ENV === 'development' ? false : true
})

const darkMode = useDark()
const isDark = ref<boolean>(false)
const isRed = ref<boolean>(false)
// #ifdef MP-WEIXIN
// 横幅广告和格子广告可以共存，但插屏广告展示时，不显示横幅广告和格子广告
const showWxAd = ref<boolean>(Math.random() > 0.5) // 横幅广告
const showWxAd2 = ref<boolean>(Math.random() > 0.33) // 格子广告
const showWxAd3 = ref<boolean>(Math.random() > 0.66) // 插屏广告
let interstitialAd: UniApp.InterstitialAdContext | null = null
// #endif

const themeVars: ConfigProviderThemeVars = {
  colorTheme: 'red'
}

const theme = computed(() => {
  return darkMode.isDark.value || isDark.value ? 'dark' : 'light'
})

onMounted(() => {
  setNotifyDefaultOptions({
    onClick: (event) => console.log('onClick', event),
    onClosed: () => console.log('onClosed'),
    onOpened: () => console.log('onOpened')
  })
  // #ifdef MP-WEIXIN
  // 微信广告
  if (uni.createInterstitialAd && showWxAd3.value && props.useWxAd) {
    interstitialAd = uni.createInterstitialAd({ adUnitId: 'adunit-fc8522e2b1185c89' })
    nextTick(() => {
      console.log(interstitialAd)
      interstitialAd && interstitialAd.show()
    })
  }
  // #endif
})
</script>
<style lang="scss" scoped>
.wui-theme-dark {
  .page-wraper {
    background: #000;
  }
}
.page-wraper {
  min-height: calc(100vh - var(--window-top));
  box-sizing: border-box;
}
</style>
