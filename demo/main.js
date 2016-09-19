import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from './components/Index.vue'
import PullToRefresh from './components/PullToRefresh.vue'
import InfiniteLoading from './components/InfiniteLoading.vue'
import Both from './components/Both.vue'

const routers = {
  '/index': {
    component: Index
  },

  '/pullToRefresh': {
    component: PullToRefresh
  },

  '/infiniteLoading': {
    component: InfiniteLoading
  },

  '/both': {
    component: Both
  }
}

let router = new VueRouter({
  history: false
})

router.map(routers)

router.redirect({
  '*': '/index'
})

router.start(Vue.extend(), '#app')
