export default defineAppConfig({
  pages: ['pages/index/indexPage', 'pages/coupon/couponPage', 'pages/mine/minePage'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#f4f4f4',
    navigationBarTitleText: 'tpl',
    navigationBarTextStyle: 'black'
    // navigationStyle: 'custom'
  },
  tabBar: {
    // custom: true,
    color: '#666666',
    selectedColor: '#333333',
    borderStyle: 'black',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/indexPage',
        iconPath: 'assets/img/index.png',
        selectedIconPath: 'assets/img/index-active.png',
        text: '首页2'
      },
      {
        pagePath: 'pages/coupon/couponPage',
        iconPath: 'assets/img/coupon.png',
        selectedIconPath: 'assets/img/coupon-active.png',
        text: '优惠券'
      },
      {
        pagePath: 'pages/mine/minePage',
        iconPath: 'assets/img/mine.png',
        selectedIconPath: 'assets/img/mine-active.png',
        text: '我的'
      }
    ]
  }
})
