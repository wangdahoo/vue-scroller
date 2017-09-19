<template>
  <div>
    <nav-bar title="Multi Scrollers"></nav-bar>

    <scroller width="50%" style="padding-top: 44px"
              :on-refresh="refresh"
              ref="my_scroller_1">
      <div v-for="(item, index) in items1"
          class="row" :class="{'grey-bg': index % 2 == 0}">
        {{ item }}
      </div>
    </scroller>

    <scroller width="50%" style="left: 50%; padding-top: 44px"
              :on-refresh="refresh2"
              ref="my_scroller_2">
      <div v-for="(item, index) in items2"
          class="row" :class="{'grey-bg': index % 2 == 1}">
        {{ item }}
      </div>
    </scroller>
  </div>
</template>

<script>
  import NavBar from './NavBar.vue'

  export default {
    components: {
      NavBar
    },

    data () {
      return {
        items1: [],
        items2: []
      }
    },

    mounted () {
      for (let i = 1; i <= 20; i++) {
        this.items1.push(i + ' - Scroller 1')
        this.items2.push(i + ' - Scroller 2')
      }
      this.top = [1, 1]
      this.bottom = [20, 20]
    },

    methods: {
      refresh (done) {
        setTimeout(() => {
          let start = this.top[0] - 1
          for (let i = start; i > start - 10; i--) {
            this.items1.splice(0, 0, i + ' - Scroller 1')
          }
          this.top[0] = this.top[0] - 10;
          done()
        }, 1500)
      },

      refresh2 (done) {
        setTimeout(() => {
          let start = this.top[1] - 1
          for (let i = start; i > start - 10; i--) {
            this.items2.splice(0, 0, i + ' - Scroller 2')
          }
          this.top[1] = this.top[1] - 10;
          done()
        }, 1500)
      }
    }
  }
</script>
