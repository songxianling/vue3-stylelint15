import { defineStore } from 'pinia'

const useSettings = defineStore({
  /** 区分不通状态的唯一标识 */
  // 内部调试工具
  id: 'settingsStore',
  state: () => ({
    openHttpLog: false,
    openQuickButton: false,
    isMe: false
  }),
  actions: {
    setOpenHttpLog(val: boolean) {
      this.openHttpLog = val
    },
    setOpenQuickButton(val: boolean) {
      this.openQuickButton = val
    },
    setIsMe(val: boolean) {
      this.isMe = val
    }
  }
})
export { useSettings }
