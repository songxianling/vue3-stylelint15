import { defineStore } from 'pinia'

interface UserInfoProp {
  nickName: string
  avatarUrl: string
}

const useAuth = defineStore({
  /** 区分不通状态的唯一标识 */
  id: 'authStore',
  state: () => ({
    userInfo: {
      nickName: '',
      avatarUrl: ''
    },
    isLogin: false
  }),
  actions: {
    login() {
      this.isLogin = true
    },
    logout() {
      this.isLogin = false
    },
    setUserInfo(userInfo: UserInfoProp) {
      this.userInfo = userInfo
    }
  }
})
export { useAuth }
