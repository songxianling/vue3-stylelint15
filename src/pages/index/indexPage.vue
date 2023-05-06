<template>
  <view class="index-page-wrap">
    index-page2
    <!-- <nut-button type="primary">主要按钮</nut-button> -->
  </view>
</template>

<script setup lang="ts">

// const route = useRouter()


/** 设置页面属性 */
definePageConfig({
  navigationBarTitleText: '首页',
  navigationBarBackgroundColor: '#FEAA00',
  enableShareAppMessage: true
})
</script>

<style lang="scss">
.index-page-wrap {
  background: #f7f7f7;
  padding-bottom: 20px;
  position: relative;
  top: 21px;
}
</style>
