<template>
  <div>
    <nav-bar title="Snapping"></nav-bar>
    <scroller 
      ref="scroller" 
      :snapping="snapping"
      :snap-height="snapHeight"
      :animationDuration="animationDuration"
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
  import NavBar from './NavBar.vue'

  export default {
    components: {
      NavBar
    },

    data () {
      return {
        snapping: true,
        snapHeight: 50,
        animationDuration: 150,
        items: []
      }
    },

    mounted() {
      for (let i = 1; i < 100; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
    }
  }
</script>
