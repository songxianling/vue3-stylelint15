/** 请求的相关类型 */
declare namespace Service {
  /** 请求错误 */
  interface RequestError {
    /** 错误码 */
    errorCode: string | number
    /** 错误信息 */
    message: string
  }

  /** 后端接口返回的数据结构配置 */
  interface BackendResultConfig<T> {
    /** 表示后端返回状态码的属性字段 */
    status: string | number
    /** 表示后端返回数据的属性字段 */
    data: T
    /** 表示后端返回消息的属性字段 */
    result: string
    /** 兼容老接口 */
    code?: string | number
  }

  /** 自定义的请求成功结果 */
  interface SuccessResult<T = any> {
    /** 请求错误 */
    error: null | RequestError

    /** 返回数据 */
    data: null | T
  }

  /** 自定义的请求结果 */
  type RequestResult<T = any> = BackendResultConfig<T>
}
