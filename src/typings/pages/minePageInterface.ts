export interface DetailItem {
  /** 名称 */
  name: string
  /** 进出类型（1：增积分；0：减积分） */
  inOrOut: number
  /** 集点变动数量描述 */
  changeNumDesc: string
  /** 积分变动类型（1-下单获得 2-兑换优惠券 3-注册送积分 4-退款扣减 5-过期失效） */
  changeType: number
  /** 购买时间 */
  createTime: string
  /** 订单号 */
  orderCode: string
  /** 有效期 */
  validTime: string
  /** 展开收起（非返回值） */
  collapseActive: any[]
}

export interface ExchangeRecordItem {
  /** 兑换时间 */
  createTime: string
  /** 优惠券名称 */
  couponBatchName: string
  /** 消耗量 */
  achievedNum: string
  /** 优惠券中文描述 */
  couponStatusDesc: string
  /** 过期时间 */
  validityTime: string
}

export interface CouponItem {
  couponId?: number
  /**优惠券状态 0-未使用、1-已核销、2-已过期、3-使用中 */
  status?: number
  couponCode?: string
  startDate?: string
  endDate?: string
  money?: string
  thresholdStr?: string
  /**优惠劵说明 */
  couponBatchDesc?: string
  /**券批次ID */
  couponBatchId?: number
  /**劵名称 */
  couponBatchName?: string
  /**券标题 */
  couponBatchTitle?: string
}

export interface OrderRecordItem {
  /**商品数量 */
  amount?: number
  /**订单ID */
  orderId?: string
  /**订单项ID */
  orderItemId?: number
  /**订单项总金额 */
  totalPayPrice?: string
  /**设备编号 */
  deviceCode?: string
  /**订单项状态（成功/失败/部分失败/未出货） */
  orderItemStatus?: string
  /**支付状态(未支付/已支付) */
  statusPay?: string
  /**商品ID */
  goodsId?: number
  /**订单编号 */
  orderCode?: string
  /**商品名称 */
  goodsName?: string
  /**订单状态(新订单/出货中/已完成/取消) */
  statusOrder?: string
  /**商品图片 */
  pic?: string
  /**创建时间 */
  createTime?: string
  /**点位名称 */
  siteName?: string
  /**订单项获得集点数 */
  scoreNum?: string
  /** 退款状态 */
  refundStatus?: string
  /** 原价 */
  orginalPrice?: string
  /** 优惠券名称 */
  couponName?: string
  /** 折扣金额 */
  discountMoney?: string
  /** 订单类型 */
  orderType?: string
  /** 支付方式 */
  payType?: string
  /** 下单时间 */
  payTime?: string
}
