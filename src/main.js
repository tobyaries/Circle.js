// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { CountDown, InfiniteScroll } from 'moon-ui'
import MoonUI from 'moon-ui'
import axios from 'axios'

Vue.prototype.$ajax = axios
Vue.config.productionTip = false
// Vue.use(CountDown)
// Vue.use(InfiniteScroll)
Vue.use(MoonUI)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
