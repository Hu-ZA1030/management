import Vue from 'vue'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI,{size: 'small', zIndex: 3000 })

// 引入 router 实例并挂载
import router from "./router"

// 把所以api接口方法,都挂载在Vue的原型上,在组件中就可以使用 
// this.$http 来访问所有的接口的方法
import http from "./utils/api.js"
Vue.prototype.$http = http

// 挂载 socket,然后是就可以使用this 访问
import socket from "./utils/socket.js"
Vue.prototype.$socket = socket

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
