export interface swiperItem {
  image: string
  adId: number
  adName: string
  description: string
}

export interface TopScoreInfo {
  /** 达成需要的数量 */
  achievedNum: number
  /** 获得集点数 */
  changeAfter: number
  /** 集点活动规则及攻略 */
  description: string
  /** 开始时间 */
  startTime: string
  /** 结束时间 */
  endTime: string
	/** 活动时间文案 */
	activityTimeCn: string
  /** 是否有进行中活动 */
  haveActivity: boolean
}
export interface RepScoreNum {
  /**能否获得集点 true/false */
  canGetScore?: boolean
  /**集点上限标志 true/false */
  limitFlag?: boolean
  /**获得集点数 */
  scoreNum?: number
}
