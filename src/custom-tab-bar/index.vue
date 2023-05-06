<template>
  <nut-tabbar v-model:visible="active" @tab-switch="tabSwitch">
    <nut-tabbar-item v-for="(item, index) in tabbarList" :key="index" :tab-title="item.text" :img="item.normal" :active-img="item.active"></nut-tabbar-item>
  </nut-tabbar>
</template>

<script>
import Taro from '@tarojs/taro'
import { useSystem } from '@/store'
const system = useSystem()

export default {
  name: 'CustomTabBar',
  options: {
    addGlobalClass: true
  },
  data() {
    return {
      tabbarList: [
        {
          text: '首页t',
          url: '/pages/index/indexPage',
          normal: require('../assets/img/index.png'),
          active: require('../assets/img/index-active.png')
        },
        {
          text: '优惠券',
          url: '/pages/coupon/couponPage',
          normal: require('../assets/img/coupon.png'),
          active: require('../assets/img/coupon-active.png')
        },
        {
          text: '我的',
          url: '/pages/mine/minePage',
          normal: require('../assets/img/mine.png'),
          active: require('../assets/img/mine-active.png')
        }
      ]
    }
  },
  computed: {
    active: () => {
      return system.tabbarIndex
    }
  },
  methods: {
    tabSwitch(item, index) {
      const url = this.tabbarList[index].url
      Taro.switchTab({ url })
      system.setTabbarIndex(index)
    }
  }
}
</script>

<style></style>
