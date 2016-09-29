<template>
  <scroller>
    <h1 class="title">
      Scroller for Vue.js
    </h1>

    <label class="row grey-bg" v-link="{ path: '/refreshAndInfinite' }">
      Refresh & Infinite
      <img src="../assets/arrow-right.png" class="arrow-right">
    </label>

    <label class="row" v-link="{ path: '/multiScrollers' }">
      Multi Scrollers
      <img src="../assets/arrow-right.png" class="arrow-right">
    </label>

    <label class="row grey-bg" v-link="{ path: '/smoothingScroll' }">
      Smooth Scrolling
      <img src="../assets/arrow-right.png" class="arrow-right">
    </label>

    <label class="row" v-link="{ path: '/custom' }">
      陈妍希
      <img src="../assets/arrow-right.png" class="arrow-right">
    </label>

    <label class="row grey-bg" @click="starMe()">
      Star Me
      <img src="../assets/arrow-right.png" class="arrow-right">
    </label>

  </scroller>
</template>

<style>

  html, body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  .title {
    text-align: center;
    color: #666;

    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 30px;
    line-height: normal;
    font-family: Italiana, sans-serif;

  }

  .row {
    display: block;
    width: 100%;
    height: 50px;
    padding: 10px 0 10px 15px;
    font-size: 16px;
    line-height: 30px;
    color: #444;
    background-color: #fff;
  }

  .grey-bg {
    background-color: #eee;
  }

  .arrow-right {
    width: 12px;
    height: 24px;
    float: right;
    margin-top: 5px;
    margin-right: 15px;
  }

</style>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      starMe() {
        location.href = 'https://github.com/wangdahoo/vue-scroller'
      }
    }
  }
</script>

