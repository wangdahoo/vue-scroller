<template>
  <scroller delegate-id="myScroller"
            :on-refresh="refresh"
            :on-infinite="loadMore"
            v-ref:my_scroller>
    <div v-for="(index, item) in items" @click="onItemClick(index, item)"
         class="row" :class="{'grey-bg': index % 2 == 0}">
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
        items: []
      }
    },

    ready() {

      for (let i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 20

      setTimeout(() => {
        /* 下面2种方式都可以调用 resize 方法 */
        // 1. use scroller accessor
        $scroller.get('myScroller').resize()

        // 2. use component ref
        // this.$refs.my_scroller.resize()
      })
    },

    methods: {
      refresh() {
        setTimeout(() => {
          let start = this.top - 1

          for (let i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }

          this.top = this.top - 10;

          /* 下面3种方式都可以调用 finishPullToRefresh 方法 */

          // this.$broadcast('$finishPullToRefresh')
          $scroller.get('myScroller').finishPullToRefresh()
          // this.$refs.my_scroller.finishPullToRefresh()

        }, 1500)
      },

      loadMore() {
        setTimeout(() => {

          let start = this.bottom + 1

          for (let i = start; i < start + 10; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }

          this.bottom = this.bottom + 10;

          setTimeout(() => {
            $scroller.get('myScroller').resize()
          })
        }, 1500)
      },

      onItemClick(index, item) {
        console.log(index)
      }
    }

  }
</script>


