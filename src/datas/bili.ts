import { biliPGCReview } from '~/api'

interface BiliResp {
  code: number
  message: string
  result?: any
}

function biliRespWrapper(resp: BiliResp): any {
  // window.console.info('[biliRespWrapper]', resp)
  if (resp.code === 0) {
    return resp.result
  }
  else {
    window.console.error('[biliRespWrapper]Failed resp: ', resp)
    throw resp
  }
}

export async function pgcReview(mid: number): Promise<BiliPGCReviewMedia> {
  const resp = await biliPGCReview({ media_id: mid })
  return biliRespWrapper(resp).media
}
