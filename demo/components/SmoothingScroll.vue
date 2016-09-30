<template>
  <nav-bar title="Smoothing Scroll"></nav-bar>
  <scroller v-ref:my_scroller style="top: 44px;">
    <div v-for="(index, item) in items"
         class="row"
         :class="{'grey-bg': index % 2 == 0}">
      {{ item }}
    </div>
  </scroller>
</template>

<script>
  import Scroller from 'scroller'
  import NavBar from './NavBar.vue'

  export default {
    components: {
      Scroller,
      NavBar
    },

    data () {
      return {
        items: []
      }
    },

    ready() {
      for (let i = 1; i < 1000; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }

      setTimeout(() => {
        this.$refs.my_scroller.resize()
      })
    }

  }
</script>
