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

const routes = [
  { path: '/', component: Index },
  { path: '/refreshAndInfinite', component: RefreshAndInfinite },
  { path: '/smoothingScroll', component: SmoothingScroll },
  { path: '/custom', component: Custom },
  { path: '/multiScrollers', component: MultiScrollers }
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

