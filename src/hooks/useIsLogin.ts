import { ref } from 'vue'
import { getStorageSync, login, setStorageSync } from '@tarojs/taro'
import { memberAuthCheckMember, authGrantLogin, memberQueryMemberInfoById } from '@/service/apis'
import { useSystem } from '@/store'

const isLogin = ref<boolean>(false)

const silentLogin = async <T extends string, K extends number>(grantData: T, platform: K) => {
  // 验证是否会员
  const {
    data: { memberFlag }
  } = await memberAuthCheckMember({ platform, grantData })
  console.log('是否是系统内会员可进行静默登录===>', memberFlag)

  if (!memberFlag) return false
  const { code: grantData2 } = await login()

  // 是会员 - 用code去授权登录
  const { data } = await authGrantLogin({ grantType: 1, platform, grantData: grantData2 })
  setStorageSync('token', data)
  isLogin.value = true
  const userInfo = getStorageSync('userInfo')
  if (!Object.keys(userInfo).length) {
    const { data: userInfo } = await memberQueryMemberInfoById()
    // console.log('userInfo', userInfo)

    setStorageSync('userInfo', userInfo)
  }
}

export default async function useIsLogin() {
  const appEnv = useSystem().appEnv
  if (appEnv === 'WEAPP' || appEnv === 'ALIPAY') {
    // 主动退出不需要静默登录
    const manualExit = getStorageSync('manualExit') || false
    // console.log('是否主动退出', manualExit)
    isLogin.value = !!getStorageSync('token')

    try {
      if (!isLogin.value && !manualExit) {
        if (appEnv === 'WEAPP') {
          console.log('微信开始静默登录')
          const { code: grantData } = await login()
          await silentLogin(grantData, 1)
        } else if (appEnv === 'ALIPAY') {
          console.log('支付宝开始静默登录')
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const { authCode: grantData } = await my.getAuthCode({ scopes: 'auth_base' })
          await silentLogin(grantData, 2)
        }
        console.log('静默之后isLogin', !!isLogin.value)
      }
      // console.log('useIsLogin', !!isLogin.value)

      return Promise.resolve(!!isLogin.value)
    } catch (error) {
      console.log('---静默登陆业务接口出错了---', error)
      return Promise.resolve(!!isLogin.value)
    }
  } else {
    return Promise.resolve(!!isLogin.value)
  }
}
