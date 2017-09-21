import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

// Vue.config.silent = true

import App from './App.vue'

import Index from './views/Index.vue'
import RefreshAndInfinite from './views/RefreshAndInfinite.vue'
import SmoothingScroll from './views/SmoothingScroll.vue'
import Custom from './views/Custom.vue'
import MultiScrollers from './views/MultiScrollers.vue'
import LoadMoreAndNoData from './views/LoadMoreAndNoData.vue'
import Snapping from './views/Snapping.vue'
import CustomSpinner from './views/CustomSpinner.vue'
import NoContent from './views/NoContent.vue'
import LoadMoreAndNoData2 from './views/LoadMoreAndNoData2.vue'
import Master from './views/MasterDetail/Master.vue'
import Detail from './views/MasterDetail/Detail.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/refreshAndInfinite', component: RefreshAndInfinite },
  { path: '/smoothingScroll', component: SmoothingScroll },
  { path: '/custom', component: Custom },
  { path: '/customSpinner', component: CustomSpinner },
  { path: '/multiScrollers', component: MultiScrollers },
  { path: '/loadMoreAndNoData', component: LoadMoreAndNoData },
  { path: '/snapping', component: Snapping },
  { path: '/noContent', component: NoContent },
  { path: '/loadMoreAndNoData2', component: LoadMoreAndNoData2 },
  { path: '/master-detail', component: Master },
  { path: '/master-detail/:id', component: Detail },
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

