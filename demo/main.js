import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from './components/Index.vue'
import RefreshAndInfinite from './components/RefreshAndInfinite.vue'
import SmoothingScroll from './components/SmoothingScroll.vue'
import Custom from './components/Custom.vue'
import MultiScrollers from './components/MultiScrollers.vue'
import LoadMoreAndNoData from './components/LoadMoreAndNoData.vue'

const routers = {
  '/index': {
    component: Index
  },

  '/refreshAndInfinite': {
    component: RefreshAndInfinite
  },
  '/smoothingScroll': {
    component: SmoothingScroll
  },

  '/custom': {
    component: Custom
  },

  '/multiScrollers': {
    component: MultiScrollers
  },

  '/loadMoreAndNoData': {
    component: LoadMoreAndNoData
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
