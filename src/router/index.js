import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '@/pages/Catalog'
import CountDown from '@/pages/CountDown'
import InfiniteScroll from '@/pages/InfiniteScroll'
import Hello from '@/components/HelloWorld'
import Picker from '@/pages/Picker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/countdown',
      name: 'countdown',
      component: CountDown
    },
    {
      path: '/infinitescroll',
      name: 'infinitescroll',
      component: InfiniteScroll
    },
    {
      path: '/picker',
      name: 'picker',
      component: Picker
    }
  ]
})
