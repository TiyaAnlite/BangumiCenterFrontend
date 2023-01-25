import api from '~/utils/ajax'

export default api
export const selfTest = () => api.get('/api/main/scfTest/test')
export const bgmBrowser = data => api.get('/bgm/anime/browser', data)
export const bgmCalendar = () => api.get('/api/bgm/calendar')
export const bgmSubjects = subject => api.get(`/api/bgm/v0/subjects/${subject}`)
export const biliPGCReview = data => api.get('/api/bili/pgc/review/user', data)
// export const get = () => api.get('/get')
// export const post = data => api.post('post', data)
// export const getId = id => api.get('/getId', { id })
