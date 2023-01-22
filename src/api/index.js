import api from '~/utils/ajax'

export default api
export const get = () => api.get('/get')
export const post = data => api.post('post', data)
export const getId = id => api.get('/getId', { id })
