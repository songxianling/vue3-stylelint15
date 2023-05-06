import { createApp } from 'vue'
import { getSystemInfoSync, getEnv } from '@tarojs/taro'
import { setupStore } from './store'
import { useSystem } from '@/store'
// import { useIsLogin } from '@/hooks'

import './app.scss'

const App = createApp({
  // 对应 onLaunch
  onLaunch(options) {
    // 启动将携带参数和系统信息存进store
    const system = useSystem()
    system.init(options)
    system.setInfo(getSystemInfoSync())
    system.setAppEnv(getEnv())
    // my.alert({
    //   content: options.query.qrCode
    // })

    console.log('----小程序启动onLaunch参数options----', options.query)

    if (options.scene === 1047) {
      // removeStorageSync('token')
      // setStorageSync('scanCodeScene', options.query.scene)
    }

    // 先wx.login -> code -> 后端 -> 看看是否在系统内有此用户 -> 1.有（直接返回给前端token）2.无（没有后续）
    // useIsLogin()
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onShow(options) {
    console.log('----小程序onShow-options参数', options)
  }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

function setupApp() {
  /** 挂载store */
  setupStore(App)
}

setupApp()

export default App
