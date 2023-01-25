declare interface BgmSubjects {
    date: string
    platform: string
    images: BgmImages
    summary: string
    name: string
    name_cn: string
    tags: BgmSubjectsTag[]
    infobox: BgmSubjectsInfobox[]
    rating: BgmSubjectsRating
    total_episodes: number
    collection: BgmSubjectsCollection
    id: number
    eps: number
    volumes: number
    locked: boolean
    nsfw: boolean
    type: number
}

declare interface BgmSubjectsTag {
    name: string
    count: number
}

declare interface BgmSubjectsInfobox {
    key: string
    value: string | BgmSubjectsInfoboxValues[]
}

declare interface BgmSubjectsInfoboxValues {
    v: string
}

declare interface BgmSubjectsRating {
    rank: number
    total: number
    count: BgmRatingCount
    score: number
}

declare interface BgmSubjectsCollection {
    on_hold: number
    dropped: number
    wish: number
    collect: number
    doing: number
}