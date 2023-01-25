declare interface BiliPGCReviewMedia {
    areas: BiliPGCReviewMediaArea[]
    cover: string
    horizontal_picture: string
    media_id: number
    new_ep: BiliPGCReviewMediaEp
    rating: BiliPGCReviewMediaRating
    season_id: number
    share_url: string
    title: string
    type: number
    type_name: string
}

declare interface BiliPGCReviewMediaArea {
    id: number
    name: string
}

declare interface BiliPGCReviewMediaEp {
    id: number
    index: string
    index_show: string
}

declare interface BiliPGCReviewMediaRating {
    count: number
    score: number
}