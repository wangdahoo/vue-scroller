<template>
  <div>
    <nav-bar title="No Content"></nav-bar>
    <scroller :on-infinite="infinite" :min-content-height="44">
      <div style="height: 44px;"></div>
    </scroller>
  </div>
</template>
<script>
  import NavBar from './NavBar.vue'

  export default {
    components: {
      NavBar
    },

    methods: {
      infinite(done) {
        console.log('infinite..')
        setTimeout(() => { done() }, 2000)
      }
    }
  }
</script>