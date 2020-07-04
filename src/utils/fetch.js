// 封装 axios
// 引入 axios
import axios from "axios"

let baseURL_dev = 'http://10.36.147.147:8787'

// 创建 axios实例
const fetch = axios.create({
    baseURL:baseURL_dev,
    timeout:7000, //设置超时
    headers:{
        'Content-Type': 'application/json;charset=UTF-8'
    }
})


// 封装请求拦截器
fetch.interceptors.request.use((config) => {
    // 在这里做一些检测或者包装等处理
    console.log('请求拦截', config)
    // 鉴权 token添加
    config.headers.Authorization = localStorage.getItem('token') || ''
    return config
  })


// 封装响应拦截器
fetch.interceptors.response.use((response) => {
    // 请求成功
    console.log('响应拦截', response)
    // 数据过滤，根据后端标识字符来进行数据
    if (response.data && response.data.err ==0) {
      return response.data.data
    } else {
      console.log('网络异步，请稍后再试')
    }
  }, (error) => {
    return Promise.reject(error)
  })


export default fetch