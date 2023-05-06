export interface GoodsItem {
  [propName: string]: number | string | undefined
  /** 商品图 */
  pic: string
  /** 商品名称 */
  goodsName?: string
  /** 商品ID */
  goodsId?: string | number
  /** 商品无优惠支付价 */
  payPrice: number
  /** 商品显示价格: 当前优惠最低价 */
  salePrice: number
  /** 商品数量 */
  amount: number
}

export interface UserInfo {
  /** 用户头像 */
  portrait?: string
  /** 用户昵称 */
  nickname?: string
  /** 会员id */
  memberId?: string | number
  [propName: string]: any
}

export interface RepScoreNum {
  /**能否获得集点 true/false */
  canGetScore?: boolean
  /**集点上限标志 true/false */
  limitFlag?: boolean
  /**获得集点数 */
  scoreNum?: number
}

/**扫码展示组件传递参数 */
export interface ScanComponentParams {
  /** 设备id */
  deviceId?: number
  /** 商品信息 */
  goodsIdList?: GoodsItem[]
  /** 支付方式 */
  payType?: string
}
