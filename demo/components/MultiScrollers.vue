<template>
  <div>
    <nav-bar title="Multi Scrollers"></nav-bar>

    <scroller width="50%" style="top: 44px"
              :on-refresh="refresh"
              ref="my_scroller_1">
      <div v-for="(item, index) in items1"
          class="row" :class="{'grey-bg': index % 2 == 0}">
        {{ item }}
      </div>
    </scroller>

    <scroller width="50%" style="left: 50%; top: 44px"
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
  import Scroller from 'vue-scroller'
  import NavBar from './NavBar.vue'

  export default {
    components: {
      Scroller,
      NavBar
    },

    data () {
      return {
        items1: [],
        items2: []
      }
    },

    mounted() {
      for (let i = 1; i <= 20; i++) {
        this.items1.push(i + ' - Scroller 1')
        this.items2.push(i + ' - Scroller 2')
      }
      this.top = [1, 1]
      this.bottom = [20, 20]

      setTimeout(() => {
        this.$refs.my_scroller_1.resize()
        this.$refs.my_scroller_2.resize()
      })
    },

    methods: {
      refresh() {
        setTimeout(() => {
          let start = this.top[0] - 1
          for (let i = start; i > start - 10; i--) {
            this.items1.splice(0, 0, i + ' - Scroller 1')
          }
          this.top[0] = this.top[0] - 10;
          if (this.$refs.my_scroller_1)
            this.$refs.my_scroller_1.finishPullToRefresh()
        }, 1500)
      },

      refresh2() {
        setTimeout(() => {
          let start = this.top[1] - 1
          for (let i = start; i > start - 10; i--) {
            this.items2.splice(0, 0, i + ' - Scroller 2')
          }
          this.top[1] = this.top[1] - 10;
          if (this.$refs.my_scroller_2)
            this.$refs.my_scroller_2.finishPullToRefresh()
        }, 1500)
      }
    }

  }
</script>


