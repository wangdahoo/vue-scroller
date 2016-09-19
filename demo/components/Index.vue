<template>
  <scroller>
    <div class="title">
      Show Cases
    </div>

    <div class="item" v-link="{ path: '/pullToRefresh' }">
      Pull to Refresh
    </div>

    <div class="item" v-link="{ path: '/infiniteLoading' }">
      Infinite Loading
    </div>

  </scroller>
</template>

<style>

  html, body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  .title, .item {
    width: 100%;
    height: 50px;
    font-size: 16px;
    line-height: 30px;
    color: #444;
    padding: 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
  }

  .title {
    text-align: center;
    background-color: #fff;
    padding: 10px 0;
  }

  .row {
    width: 100%;
    height: 50px;
    padding: 10px 0;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #444;
    background-color: #fff;
  }

  .grey-bg {
    background-color: #eee;
  }

</style>

<script>

  export default {
    components: {},

    data () {
      return {}
    },

    ready() {

    },

    methods: {}

  }
</script>


