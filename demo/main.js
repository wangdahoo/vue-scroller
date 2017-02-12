import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Vue.config.silent = true

import App from './App.vue'

import Index from './components/Index.vue'
import RefreshAndInfinite from './components/RefreshAndInfinite.vue'
import SmoothingScroll from './components/SmoothingScroll.vue'
import Custom from './components/Custom.vue'
import MultiScrollers from './components/MultiScrollers.vue'
import LoadMoreAndNoData from './components/LoadMoreAndNoData.vue'
import Snapping from './components/Snapping.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/refreshAndInfinite', component: RefreshAndInfinite },
  { path: '/smoothingScroll', component: SmoothingScroll },
  { path: '/custom', component: Custom },
  { path: '/multiScrollers', component: MultiScrollers },
  { path: '/loadMoreAndNoData', component: LoadMoreAndNoData },
  { path: '/Snapping', component: Snapping },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})

