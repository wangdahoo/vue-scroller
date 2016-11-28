import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Vue.config.silent = true

import Index from './components/Index.vue'
// import RefreshAndInfinite from './components/RefreshAndInfinite.vue'
// import SmoothingScroll from './components/SmoothingScroll.vue'
// import Custom from './components/Custom.vue'
// import MultiScrollers from './components/MultiScrollers.vue'

const routes = [
  { path: '/index', component: Index },
  // { path: '/refreshAndInfiniteref', component: RefreshAndInfinite },
  // { path: '/smoothingScroll', component: SmoothingScroll },
  // { path: '/custom', component: Custom },
  // { path: '/multiScrollers', component: MultiScrollers }
]

const router = new VueRouter({
  routes: routes
})

const app = new Vue({
  router
}).$mount('#app')