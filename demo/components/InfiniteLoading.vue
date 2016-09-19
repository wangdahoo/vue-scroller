<template>
  <scroller :on-infinite-loading="loadMore">
    <div v-for="(index, item) in items"
         class="row"
         :class="{'grey-bg': index % 2 == 0}">
      {{ item.text }}
    </div>
  </scroller>
</template>

<style>

</style>

<script>
  import {Scroller} from 'scroller'

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
      for (let i = 0; i < 20; i++) {
        this.items.push({
          text: parseInt(Math.random(1) * 100) + ' - keep walking, be 2 with you.'
        });
      }

      setTimeout(() => {
        $scrollerDelegate.resize()
      })
    },

    methods: {
      loadMore() {
        setTimeout(() => {

          this.items = this.items.concat([
            { text: 'NEW - keep walking, be 2 with you.' },
            { text: 'NEW - keep walking, be 2 with you.' },
            { text: 'NEW - keep walking, be 2 with you.' },
            { text: 'NEW - keep walking, be 2 with you.' },
            { text: 'NEW - keep walking, be 2 with you.' },
            { text: 'NEW - keep walking, be 2 with you.' },
            { text: 'NEW - keep walking, be 2 with you.' },
            { text: 'NEW - keep walking, be 2 with you.' },
            { text: 'NEW - keep walking, be 2 with you.' },
            { text: 'NEW - keep walking, be 2 with you.' }
          ])
          setTimeout(() => {
            $scrollerDelegate.resize()
          })

        }, 1500)
      }
    }

  }
</script>
