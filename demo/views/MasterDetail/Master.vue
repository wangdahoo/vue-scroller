<template>
  <div>
    <nav-bar title="列表页"></nav-bar>

    <scroller style="padding-top: 44px;"
      :on-refresh="refresh" ref="my_scroller" class="my-scroller">
      <div v-for="(item, index) in items"
        class="row"
        :class="{'grey-bg': index % 2 == 0}"
        @click="onClick(index)"
      >
        {{ item }}
      </div>
    </scroller>
  </div>
</template>

<script>
  import NavBar from '../NavBar.vue'

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
      },

      onClick (index) {
        this.$router.push(`/master-detail/${index}`)
      }
    }
  }
</script>
