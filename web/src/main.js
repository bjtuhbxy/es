// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入ele-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入路由
import router from './router'
// 引入http axios框架
import axios from 'axios'
// 扩展vue原型方法
Vue.prototype.$http = axios
// 使用ele-ui
Vue.use(ElementUI)
// 使用axios框架
// Vue.use(axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
