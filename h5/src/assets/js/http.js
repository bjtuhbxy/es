import Vue from 'vue'
import axios from 'axios'
import cookies from 'vue-cookies'//引入cookies
Vue.use(cookies)
Vue.prototype.$cookies = cookies
// import VueAxios from 'vue-axios'
export const $axios = axios.create({
  timeout: 7000
})
//拦截请求
$axios.interceptors.request.use(
  (config) => {
    let t = cookies.get("token")
    if (t) {
      config.headers.token = t//拦截到所有的请求，给请求头设置token
    }
    return config
  })
