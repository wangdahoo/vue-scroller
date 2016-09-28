<template>
  <scroller delegate-id="myScroller1" width="50%"
            v-ref:my_scroller_1>
    <div v-for="(index, item) in items"
         class="row" :class="{'grey-bg': index % 2 == 0}">
      {{ item }}
    </div>
  </scroller>

  <scroller delegate-id="myScroller2" width="50%" style="left: 50%"
            v-ref:my_scroller_2>
    <div v-for="(index, item) in items"
         class="row" :class="{'grey-bg': index % 2 == 1}">
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
      for (let i = 1; i <= 20; i++) {
        this.items.push(i + ' - Scroller')
      }
      this.top = 1
      this.bottom = 20

      setTimeout(() => {
        $scroller.get('myScroller1').resize()
        $scroller.get('myScroller2').resize()
      })
    },

    methods: {

    }

  }
</script>


