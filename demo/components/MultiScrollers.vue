<template>
  <scroller delegate-id="myScroller1" width="50%"
            :on-refresh="refresh"
            v-ref:my_scroller_1>
    <div v-for="(index, item) in items1"
         class="row" :class="{'grey-bg': index % 2 == 0}">
      {{ item }}
    </div>
  </scroller>

  <scroller delegate-id="myScroller2" width="50%" style="left: 50%"
            :on-refresh="refresh2"
            v-ref:my_scroller_2>
    <div v-for="(index, item) in items2"
         class="row" :class="{'grey-bg': index % 2 == 1}">
      {{ item }}
    </div>
  </scroller>
</template>

<script>
  import Scroller from 'scroller'

  export default {
    components: {
      Scroller
    },

    data () {
      return {
        items1: [],
        items2: []
      }
    },

    ready() {
      for (let i = 1; i <= 20; i++) {
        this.items1.push(i + ' - Scroller 1')
        this.items2.push(i + ' - Scroller 2')
      }
      this.top = [1, 1]
      this.bottom = [20, 20]

      setTimeout(() => {
        $scroller.get('myScroller1').resize()
        $scroller.get('myScroller2').resize()
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
          $scroller.get('myScroller1').finishPullToRefresh()
        }, 1500)
      },

      refresh2() {
        setTimeout(() => {
          let start = this.top[1] - 1
          for (let i = start; i > start - 10; i--) {
            this.items2.splice(0, 0, i + ' - Scroller 2')
          }
          this.top[1] = this.top[1] - 10;
          $scroller.get('myScroller2').finishPullToRefresh()
        }, 1500)
      }

    }

  }
</script>


