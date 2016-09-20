import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from './components/Index.vue'
import RefreshAndInfinite from './components/RefreshAndInfinite.vue'
import SmoothingScroll from './components/SmoothingScroll.vue'
import Custom from './components/Custom.vue'

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
}

let router = new VueRouter({
  history: false
})

router.map(routers)

router.redirect({
  '*': '/index'
})

router.start(Vue.extend(), '#app')
