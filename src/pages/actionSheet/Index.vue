<template>
  <page-wraper>
    <wui-toast />
    <view>
      <demo-block title="基本用法">
        <wui-button @click="showActions1">弹出菜单</wui-button>
        <wui-action-sheet v-model="show" :actions="actions" />
      </demo-block>
      <demo-block title="选项状态">
        <wui-button @click="showActions2">弹出菜单</wui-button>
      </demo-block>
      <demo-block title="取消按钮">
        <wui-button @click="showActions3">弹出菜单</wui-button>
        <wui-action-sheet v-model="show1" :actions="actions" cancel-text="取消" @close="close1" />
      </demo-block>
      <demo-block title="自定义面板单行">
        <wui-button @click="showActions4">弹出菜单</wui-button>
        <wui-action-sheet v-model="show2" :panels="panels" cancel-text="取消" @close="close2" @select="select" />
      </demo-block>
      <demo-block title="自定义面板多行">
        <wui-button @click="showActions5">弹出菜单</wui-button>
        <wui-action-sheet v-model="show3" :panels="panels" cancel-text="取消" @close="close3" @select="select1" />
      </demo-block>
      <demo-block title="标题">
        <wui-button @click="showActions6">弹出菜单</wui-button>
      </demo-block>
      <wui-action-sheet v-model="show4" title="标题" @close="close4" :cancelText="cancelText">
        <view style="padding: 15px 15px 150px 15px">内容</view>
      </wui-action-sheet>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/elegant-wui-uni'
import { ref } from 'vue'

const show = ref<boolean>(false)
const actions = ref<any[]>([])
const panels = ref<any[]>([])
const cancelText = ref<string>('')
const show1 = ref<boolean>(false)
const show2 = ref<boolean>(false)
const show3 = ref<boolean>(false)
const show4 = ref<boolean>(false)

function showActions1() {
  show.value = true
  actions.value = [
    {
      name: '选项1'
    },
    {
      name: '选项2'
    },
    {
      name: '选项3',
      subname: '描述信息'
    }
  ]
}
function showActions2() {
  show.value = true
  actions.value = [
    {
      name: '颜色',
      color: '#0083ff'
    },
    {
      name: '禁用',
      disabled: true
    },
    {
      loading: true
    }
  ]
}
function showActions3() {
  show1.value = true
  actions.value = [
    {
      name: '选项1'
    },
    {
      name: '选项2'
    },
    {
      name: '选项3',
      subname: '描述信息'
    }
  ]
}
function showActions4() {
  show2.value = true
  panels.value = [
    {
      iconUrl: 'https://img12.360buyimg.com/imagetools/jfs/t1/122016/33/6657/1362/5f0692a1E8708d245/e47299e5945a6956.png',
      title: '微信好友'
    },
    {
      iconUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/111572/11/11734/1245/5f0692a1E39d13d21/b35dfe9243bd6c2a.png',
      title: '微信朋友圈'
    },
    {
      iconUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/132639/25/4003/945/5f069336E18778248/fa181913030bed8a.png',
      title: 'QQ好友'
    },
    {
      iconUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/134807/4/3950/1256/5f069336E76949e27/d20641da8e699f07.png',
      title: '微信收藏'
    },
    {
      iconUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/111572/11/11734/1245/5f0692a1E39d13d21/b35dfe9243bd6c2a.png',
      title: '微信朋友圈'
    },
    {
      iconUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/132639/25/4003/945/5f069336E18778248/fa181913030bed8a.png',
      title: 'QQ好友'
    }
  ]
}
function showActions5() {
  show3.value = true
  panels.value = [
    [
      {
        iconUrl: 'https://img12.360buyimg.com/imagetools/jfs/t1/122016/33/6657/1362/5f0692a1E8708d245/e47299e5945a6956.png',
        title: '微信好友'
      },
      {
        iconUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/111572/11/11734/1245/5f0692a1E39d13d21/b35dfe9243bd6c2a.png',
        title: '微信朋友圈'
      },
      {
        iconUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/132639/25/4003/945/5f069336E18778248/fa181913030bed8a.png',
        title: 'QQ好友'
      },
      {
        iconUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/134807/4/3950/1256/5f069336E76949e27/d20641da8e699f07.png',
        title: '微信收藏'
      },
      {
        iconUrl: 'https://img12.360buyimg.com/imagetools/jfs/t1/122016/33/6657/1362/5f0692a1E8708d245/e47299e5945a6956.png',
        title: '微信好友'
      },
      {
        iconUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/111572/11/11734/1245/5f0692a1E39d13d21/b35dfe9243bd6c2a.png',
        title: '微信朋友圈'
      },
      {
        iconUrl: 'https://img12.360buyimg.com/imagetools/jfs/t1/122016/33/6657/1362/5f0692a1E8708d245/e47299e5945a6956.png',
        title: '微信好友'
      },
      {
        iconUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/111572/11/11734/1245/5f0692a1E39d13d21/b35dfe9243bd6c2a.png',
        title: '微信朋友圈'
      }
    ],
    [
      {
        iconUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/132639/25/4003/945/5f069336E18778248/fa181913030bed8a.png',
        title: 'QQ好友'
      },
      {
        iconUrl: 'https://img14.360buyimg.com/imagetools/jfs/t1/134807/4/3950/1256/5f069336E76949e27/d20641da8e699f07.png',
        title: '微信收藏'
      },
      {
        iconUrl: 'https://img12.360buyimg.com/imagetools/jfs/t1/122016/33/6657/1362/5f0692a1E8708d245/e47299e5945a6956.png',
        title: '微信好友'
      }
    ]
  ]
}
function showActions6() {
  show4.value = true
}
function close() {
  show.value = false
}
function close1() {
  show1.value = false
}
function close2() {
  show2.value = false
}
function close3() {
  show3.value = false
}
function close4() {
  show4.value = false
}

const toast = useToast()
function select({ item, index }: { item: any; index: number }) {
  toast.show(`当前选中项: ${item.title}, 下标: ${index}`)
}
function select1({ item, rowIndex, colIndex }: { item: any; rowIndex: number; colIndex: number }) {
  toast.show(`当前选中项: ${item.title}, 行下标: ${rowIndex}, 列下标: ${colIndex}`)
}
</script>
<style lang="scss" scoped></style>
