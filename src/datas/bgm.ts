import { animeParser } from './parser/bgm'
import { bgmCalendar, bgmSubjects } from '~/api'

export async function anime(sortType: string, pageNum: number): Promise<BgmAnimeItem[]> {
  return await animeParser(sortType, pageNum) as any as BgmAnimeItem[]
}

export async function calendar(): Promise<BgmCalendar[]> {
  return await bgmCalendar() as any as BgmCalendar[]
}

export async function subjects(subjects_id: number): Promise<BgmSubjects[]> {
  return await bgmSubjects(subjects_id) as any as BgmSubjects[]
}
