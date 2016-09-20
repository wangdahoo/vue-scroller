<template>
  <scroller :on-refresh="refresh" v-ref:my_scroller class="my-scroller">
    <div v-for="(index, item) in items"
         class="row"
         :class="{'grey-bg': index % 2 == 0}">
      {{ item.text }}
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
    background-size: 30px 30px;

    -webkit-transform: scale(1);
    transform: scale(1);
  }

  .my-scroller .pull-to-refresh-layer.active {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);

    transition: transform .1s linear;
    -webkit-transition: -webkit-transform .1s linear;
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
      for (let i = 0; i < 20; i++) {
        this.items.push({
          text: parseInt(Math.random(1) * 100) + ' - keep walking, be 2 with you.'
        });
      }

      setTimeout(() => {
        /* 下面2种方式都可以调用 resize 方法 */

        // $scrollerDelegate.resize()

        this.$refs.my_scroller.resize()
      })
    },

    methods: {
      refresh() {
        setTimeout(() => {
          this.items.splice(0, 0, {
            text: 'NEW - keep walking, be 2 with you.'
          })

          /* 下面3种方式都可以调用 finishPullToRefresh 方法 */
          // this.$broadcast('$finishPullToRefresh')

          // $scrollerDelegate.finishPullToRefresh()

          this.$refs.my_scroller.finishPullToRefresh()

        }, 1500)
      }
    }

  }
</script>
