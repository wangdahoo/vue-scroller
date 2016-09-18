<template>
  <scroller>
    <div v-for="(index, item) in items"
         class="row"
         :class="{'grey-bg': index % 2 == 0}">
      {{ item.text }}
    </div>
  </scroller>
</template>

<style scoped>

  * {
    box-sizing: border-box;
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
  import { Scroller } from 'scroller'

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
      for (let i=0; i<20; i++) {
        this.items.push({
          text: 'keep walking, be 2 with you.'
        });
      }
    }
  }
</script>


