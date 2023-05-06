import { createPinia } from 'pinia'
// 抽离分开返回
export { useSystem } from './system'
export { useAuth } from './auth'
export { useSettings } from './settings'
export const store = createPinia()

export function setupStore(app) {
  app.use(store)
}
