<template>
  <view class="coupon-page-wrap">
    coupon-page
  </view>
</template>

<script setup lang="ts">
// import { ref } from 'vue'


/** 设置页面属性 */
definePageConfig({
  navigationBarTitleText: '优惠券',
  navigationBarBackgroundColor: '#FEAA00'
})
</script>

<style lang="scss">
.coupon-page-wrap {
  .coupon-tabs-box {
    .nut-tabs__titles {
      background: #fff;
    }
    .nut-tabs__titles-item.active {
      color: #ff6200;
    }
    .nut-tabpane {
      padding: 0;
      background: #f5f5f5;
    }
  }
  .scroll-view {
    height: 100vh;
  }
  .go-login {
    width: 277px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 280px auto 0;
    color: #fff;
    font-size: 14px;
    background: linear-gradient(0deg, #ff6200 0%, #ff951a 100%);
    border-radius: 30px;
  }
  .nut-dialog__content {
    max-height: 400px;
  }
}
</style>
