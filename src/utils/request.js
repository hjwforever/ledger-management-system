import axios from 'axios'
import {Message} from "element-ui";
import {getKey, getAuth, setAuth} from  "./auth";
// import {
//   Loading
// } from 'element-ui'

const config = {
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000,
  headers: {
    'X-LC-Id': process.env.VUE_APP_appId,
    'X-LC-Key': process.env.VUE_APP_appKey,
    'Content-Type': 'application/json;charset=utf-8',
    'X-Requested-With':'XMLHttpRequest',
  }
}
const instance = axios.create(config)

instance.interceptors.request.use((config) => {
  // setAuth("test");
  // config.url += '?date=' + new Date().getTime()
  // if (config.url.indexOf("login") === -1 && config.url.indexOf("register") === -1) {
  //   // console.log('session', sessionStorage.getItem(getKey()))
  //   console.log('auth',getAuth())
  //   config.headers['token'] = getAuth()
  // }
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Message.error('服务端异常！');
    return Promise.reject(res)
  }
  if (res.data.resultCode !== 200) {
    if (res.data.message) Message.error(res.data.message)
    if (res.data.resultCode === 416) {
      // 返回 416 代表没有登录状态，路由跳转到/login 页面（目前还为创建组件），这里的 window.vRouter 是在
      // main.js 里面设置好的 window.vRouter = router
      window.router.push({path: '/login'}).then(() => {
        Message.error('请先登录！');
        console.log("请先登录");
      })
    }
    return Promise.reject(res.data)
  }

  return res.data
})

// Loading.service()
// // Loading.setDefaults({
// //   color: 'light-blue-4',
// //   size: '4px',
// //   position: 'top'
// // })

export default instance
