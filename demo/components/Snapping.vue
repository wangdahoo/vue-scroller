<template>
  <div>
    <nav-bar title="Snapping"></nav-bar>
    <scroller 
      ref="scroller" 
      :snapping="snapping"
      :snap-height="snapHeight"
      style="padding-top: 44px;">
      <div v-for="(item, index) in items"
          class="row"
          :class="{'grey-bg': index % 2 == 0}">
        {{ item }}
      </div>
    </scroller>
  </div>
</template>
<style>
  
</style>
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
        snapping: true,
        snapHeight: 50,
        items: []
      }
    },

    mounted() {
      for (let i = 1; i < 100; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }

      setTimeout(() => {
        this.$refs.scroller.resize()
      })
    }
  }
</script>
