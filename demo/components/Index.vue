<template>
  <scroller>
    <h1 class="title">
      Show Cases
    </h1>

    <div class="row grey-bg" v-link="{ path: '/smoothingScroll' }">
      Smooth Scrolling
    </div>

    <div class="row" v-link="{ path: '/refreshAndInfinite' }">
      Refresh & Infinite
    </div>

    <div class="row grey-bg" v-link="{ path: '/custom' }">
      陈妍希
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

  .title {
    text-align: center;
    color: #ec4949;
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

