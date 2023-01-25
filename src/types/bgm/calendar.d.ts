declare interface BgmCalendar {
    weekday: BgmCalendarWeekday
    items: BgmCalendarItem[]
}

declare interface BgmCalendarWeekday {
    en: string
    cn: string
    ja: string
    id: number
}

declare interface BgmCalendarItem {
    id: number
    url: string
    type: number
    name: string
    name_cn: string
    summary: string
    air_date: string
    air_weekday: number
    rating: BgmCalendarItemRating
    rank: number
    images: BgmImages
    collection: BgmCalendarItemCollection
}

declare interface BgmCalendarItemRating {
    total: number
    count: BgmRatingCount
    score: number
}

declare interface BgmCalendarItemCollection {
    doing: number
}