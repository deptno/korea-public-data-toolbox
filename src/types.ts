export type JsonResponse<T> = {
  header: JsonResponseHeader
  body: {
    items     : T[]
    totalCount: number
    pageNo    : number
    numOfRows : number
  }
}
export type JsonResponseHeader = {
  code: string
  msg: string
}
