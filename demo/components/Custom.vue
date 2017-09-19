<template>
  <div>
    <nav-bar title="陈妍希"></nav-bar>

    <scroller style="padding-top: 44px;"
      :on-refresh="refresh" ref="my_scroller" class="my-scroller">
      <div v-for="(item, index) in items"
          class="row"
          :class="{'grey-bg': index % 2 == 0}">
        {{ item }}
      </div>
    </scroller>
  </div>
</template>
<style>

  .my-scroller .pull-to-refresh-layer .spinner-holder
  {
    visibility: hidden;
  }

  .my-scroller .pull-to-refresh-layer {
    background-image: url(http://qianka.b0.upaiyun.com/images/4f013b6bc7d96fc347f416ad3673f937.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 40px 40px;

    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);

    transition: all .15s linear;
    -webkit-transition: all .15s linear;
  }

  .my-scroller .pull-to-refresh-layer.active {
    -webkit-transform: scale(1.35);
    transform: scale(1.35);
    opacity: 1;
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
        items: []
      }
    },

    mounted() {
      for (let i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 20
    },

    methods: {
      refresh(done) {
        setTimeout(() => {
          let start = this.top - 1
          for (let i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          this.top = this.top - 10;
          done()
        }, 1500)
      }
    }

  }
</script>
