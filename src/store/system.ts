import { defineStore } from 'pinia'

export interface Options {
  path: string
  scene: number | string
  query: object
  shareTicket: string
  referrerInfo: object
}

const useSystem = defineStore({
  /** 区分不通状态的唯一标识 */
  id: 'systemStore',
  /** 状态 */
  state: () => ({
    options: {} as Options,
    info: {} as Taro.getSystemInfoSync.Result,
    tabbarIndex: 1 as number,
    // 当前小程序环境
    appEnv: '' as string
  }),
  actions: {
    init(options: Options) {
      this.options = options
    },
    setInfo(info: Taro.getSystemInfoSync.Result) {
      this.info = info
    },
    setAppEnv(env: string) {
      this.appEnv = env
    },
    setTabbarIndex(index: number) {
      this.tabbarIndex = index
    }
  }
})
export { useSystem }
