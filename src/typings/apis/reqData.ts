export interface ReqData {
  [x: string]: string | number | object | undefined
}

export interface HelpGetScoreReqData {
  /** 集点数(用于回显)*/
  score?: number
  /**类型 0-不能获取 1-已上限 2-未上限(默认) */
  type?: number
}
export interface GetOrderDetailReqData {
  /** 订单项ID*/
  orderItemId: number | string
}

export interface OrderRecordReqData {
  /** 页码 */
  pageNum: number
  /** 大小 */
  pageSize: number
}

export interface CouponReqData extends OrderRecordReqData {
  /** 状态 */
  status?: number
}

export interface GetCheckMemberReqData {
  /** 临时code*/
  grantData: string
  /** 平台 1 : 微信 2 : 支付宝 */
  platform: number
}
export interface HandExchangeReqData {
  /** 兑换优惠券id*/
  couponBatchId: number
}
export interface QueryTotalMoneyReqData {
  /** 设备id*/
  deviceId: number
  /** 优惠券id*/
  couponCode: string | number
  /** 商品信息*/
  goodsInfo: any
  /** 支付方式 微信: 1004 支付宝: 2006 */
  payType: string
}
