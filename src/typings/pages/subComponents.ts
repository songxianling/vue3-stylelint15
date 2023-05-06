export interface BaderItem {
  /** 积分变动类型（1-下单获得 2-兑换优惠券 3-注册送积分 4-退款扣减 5-过期失效） */
  changeType: number
  /** 数量变化 */
  changeNumDesc: string
  name: string
  collapseActive?: number
  orderCode: string
  createTime: string
  validTime: string
  /** 加or减 */
  inOrOut: number
}

export interface ExchangeBaderItem {
  /** 当前状态 */
  couponStatusDesc: string
  /** 消耗集点 */
  achievedNum: string
  /** 优惠券名称 */
  couponBatchName: string
  collapseActive?: number
  createTime: string
  validityTime: string
}

export interface SelfBadgeTotalInfo {
  /** 存在进行中活动 */
  haveActivity: boolean
  /** 拥有总数 */
  scoreTotal: number
  /** 已兑款优惠券 */
  couponCount: number
  /** 当前兑换需要的数量 */
  achievedNum: number
  /** 优惠券类型名称 */
  typeDesc: string
}
