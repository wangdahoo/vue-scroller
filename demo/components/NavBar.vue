<template>
  <div class="nav-bar">
    <router-link class="btn-back" tag="div" to="/">
      <img class="arrow-back" src="../assets/arrow-back.png">
    </router-link>

    <div class="title" v-if="title">
      {{title}}
    </div>
  </div>
</template>
<style>
  .nav-bar {
    width: 100%;
    height: 44px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
    background-color: #fff;
    position: relative;
    z-index: 1000;
  }

  .nav-bar .btn-back {
    height: 100%;
    position: absolute;
    top: 0;
    left: 10px;
  }

  .nav-bar .arrow-back {
    width: 8px;
    height: 16px;
    float: left;
    margin-top: 14px;
    margin-right: 15px;
  }

  .nav-bar .title {
    width: 100%;
    text-align: center;
    font-size: 16px;
    line-height: 46px;
    color: #666;
  }
</style>

<script>
  export default {
    props: {
      title: {
        type: String
      }
    }
  }
</script>
