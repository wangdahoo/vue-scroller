<template>
  <div>
    <nav-bar title="Smoothing Scroll"></nav-bar>
    <scroller ref="my_scroller" style="padding-top: 44px;">
      <div v-for="(item, index) in items"
          class="row"
          :class="{'grey-bg': index % 2 == 0}">
        {{ item }}
      </div>
    </scroller>

    <div class="info-position">{{ x + ',' + y }}</div>
  </div>
</template>
<style>
  .info-position {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    color: #fff;
    font-size: 12px;
    line-height: 50px;
    border-radius: 25px;
    background-color: rgba(0,0,0,0.4);
    text-align: center;
  }
</style>
<script>
  import NavBar from './NavBar.vue'

  export default {
    components: {
      NavBar
    },

    data () {
      return {
        items: [],
        x: 0,
        y: 0,
        timer: 0
      }
    },

    mounted() {
      for (let i = 1; i < 1000; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }

      this.timer = setInterval(() => {
        let {left, top} = this.$refs.my_scroller.getPosition()

        this.x = left
        this.y = top
      }, 50)
    },

    beforeDestroy() {
      clearInterval(this.timer)
    }
  }
</script>
