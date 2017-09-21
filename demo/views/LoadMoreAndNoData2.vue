<template>
  <div>
    <nav-bar title="Load More & No Data"></nav-bar>
    <scroller :on-infinite="infinite" ref="my_scroller">
      <div style="height: 44px;"></div>
      <div v-for="(item, index) in items"
          class="row" :class="{'grey-bg': index % 2 == 0}">
        {{ item }}
      </div>
    </scroller>
  </div>
</template>
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
      for (let i = 1; i <= 10; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 10
    },

    methods: {
      infinite(done) {
        console.log('infinite..')

        if (this.bottom >= 10) {
          setTimeout(() => {
            done(true)
            this.infinite = undefined
          }, 1500)
          return;
        }

        setTimeout(() => {
          let start = this.bottom + 1
          for (let i = start; i < start + 5; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }
          this.bottom = this.bottom + 5;
          setTimeout(() => {
            done()
          })
        }, 1500)
      }
    }
  }
</script>
