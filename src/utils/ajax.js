import axios from 'axios'
// import { Message } from '@arco-design/web-vue'
// import store from "@/store";
// 根据环境不同引入不同api地址
const baseApi = import.meta.env.BASE_URL
// create an axios instance
const service = axios.create({
  baseURL: baseApi, // url = base api url + request url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 15000, // request timeout

})

// request拦截器 request interceptor
service.interceptors.request.use(
  (config) => {
    // 不传递默认开启loading
    // if (!config.hideloading) {
    //   // loading
    //   Message.loading({
    //     forbidClick: true,
    //   });
    // }
    // 设置请求头
    if (localStorage.getItem('TOKEN')) {
      // loading
      config.headers.Authorization = `bearer ${localStorage.getItem('TOKEN')}`
    }

    return config
  },
  (error) => {
    // do something with request error
    return Promise.reject(error)
  },
)
// respone拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    return Promise.resolve(res)
  },
  (error) => {
    // const res = error.response
    // window.console.error(res)
    // Message.error(res)
    return Promise.reject(error)
  },
)

/**
 * http 请求基础类
 * 参考文档 https://www.kancloud.cn/yunye/axios/234845
 *
 */
const request = ['post', 'put', 'patch'].reduce((request, method) => {
  /**
   *
   * @param url string 接口地址
   * @param data object get参数
   * @param options object axios 配置项
   * @returns {AxiosPromise}
   */
  request[method] = (url, data = {}, options = {}) => {
    return service(Object.assign({ url, data, method }, options))
  }
  return request
}, {});

['get', 'delete', 'head'].forEach((method) => {
  /**
   *
   * @param url string 接口地址
   * @param params object get参数
   * @param options object axios 配置项
   * @returns {AxiosPromise}
   */
  request[method] = (url, params = {}, options = {}) => {
    return service(Object.assign({ url, params, method }, options))
  }
})

export default request
