<template>
  <scroller v-ref:my_scroller>
    <div v-for="(index, item) in items"
         class="row"
         :class="{'grey-bg': index % 2 == 0}">
      {{ item }}
    </div>
  </scroller>
</template>

<script>
  import Scroller from 'scroller'

  export default {
    components: {
      Scroller
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
