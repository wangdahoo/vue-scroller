<template>
  <div>
    <nav-bar title="详情页" back-to="/master-detail"></nav-bar>

    <div style="padding-top: 44px; text-align: center; font-size: 20px; color: #ddd;">
      Item {{$route.params.id}}
    </div>
  </div>
</template>

<script>
  import NavBar from '../NavBar.vue'

  export default {
    components: {
      NavBar
    }
  }
</script>
