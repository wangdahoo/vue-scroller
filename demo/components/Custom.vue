<template>
  <scroller :on-refresh="refresh" v-ref:my_scroller class="my-scroller">
    <div v-for="(index, item) in items"
         class="row"
         :class="{'grey-bg': index % 2 == 0}">
      {{ item }}
    </div>
  </scroller>
</template>

<style>

  .my-scroller .pull-to-refresh-layer .spinner-holder
  {
    visibility: hidden;
  }

  .my-scroller .pull-to-refresh-layer {
    background-image: url(http://qianka.b0.upaiyun.com/images/4f013b6bc7d96fc347f416ad3673f937.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 40px 40px;

    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);

    transition: all .15s linear;
    -webkit-transition: all .15s linear;
  }

  .my-scroller .pull-to-refresh-layer.active {
    -webkit-transform: scale(1.35);
    transform: scale(1.35);
    opacity: 1;
  }

</style>


<script>
  import {Scroller} from 'scroller'

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

        // $scrollerDelegate.resize()

        this.$refs.my_scroller.resize()
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

          this.$broadcast('$finishPullToRefresh')
          // $scrollerDelegate.finishPullToRefresh()
          // this.$refs.my_scroller.finishPullToRefresh()

        }, 1500)
      },
    }

  }
</script>
