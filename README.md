# Vue Scroller ![version](https://img.shields.io/badge/release-%20v0.3.9%20-green.svg) ![vue](https://img.shields.io/badge/vue-%20v1.0%20-green.svg)

[Vue Scroller](https://github.com/wangdahoo/vue-scroller) is a foundational one of [Vonic](https://github.com/wangdahoo/vonic) UI Components.
For smooth scrolling, pull to refresh and infinite loading.

## [Demo](https://wangdahoo.github.io/vue-scroller/)

## Change Logs
- v0.3.9
add getPosition method for scroller instance.
- v0.3.8
fix bug
- v0.3.7
publish bower version
- v0.3.6
support mouse events
- v0.3.4
change required property 'delegate-id' to non-required.
- v0.3.3
support multi scrollers in one page.

## How To Use
#### Step 1: create vue project and install vue-scroller via npm. (we use vue webpack-simple template here)
```bash
$ vue init webpack-simple#1.0 my-project
$ cd my-project
$ npm install
$ npm install vue-scroller
```

#### Step 2: add resolve option and loader in webpack.config.js as below.
```js
module.exports = {
  // ...
  
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, './node_modules')]
  },

  // ...
  
  module: {
    loaders: [
      // ...
      
      {
        test: /vue-scroller.src.*?js$/,
        loader: 'babel'
      }
    ]
  },
  
  // ...

}
```

#### Step 3: copy codes below to overwrite App.vue
```vue
<template>
  <scroller delegate-id="myScroller"
            :on-refresh="refresh"
            :on-infinite="loadMore"
            v-ref:my_scroller>
    <div v-for="(index, item) in items" @click="onItemClick(index, item)"
         class="row" :class="{'grey-bg': index % 2 == 0}">
      {{ item }}
    </div>
  </scroller>
</template>

<script>
  import Scroller from 'vue-scroller'

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
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 20

      setTimeout(() => {
        /* 下面2种方式都可以调用 resize 方法 */
        // 1. use scroller accessor
        $scroller.get('myScroller').resize()

        // 2. use component ref
        // this.$refs.my_scroller.resize()
      })
    },

    methods: {
      refresh() {
        setTimeout(() => {
          let start = this.top - 1

          for (let i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }

          this.top = this.top - 10;

          /* 下面3种方式都可以调用 finishPullToRefresh 方法 */

          // this.$broadcast('$finishPullToRefresh')
          $scroller.get('myScroller').finishPullToRefresh()
          // this.$refs.my_scroller.finishPullToRefresh()

        }, 1500)
      },

      loadMore() {
        setTimeout(() => {

          let start = this.bottom + 1

          for (let i = start; i < start + 10; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }

          this.bottom = this.bottom + 10;

          setTimeout(() => {
            $scroller.get('myScroller').resize()
          })
        }, 1500)
      },

      onItemClick(index, item) {
        console.log(index)
      }
    }

  }
</script>

<style>
  html, body {
    margin: 0;
  }

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
```

#### Step 4: add viewport meta in index.html
```html
<meta name="viewport" content="width=device-width, user-scalable=no">
```

#### Step 5: run the project
```bash
$ npm run dev
```

## Scroller instance API
#### Methods
- resize :Void
- triggerPullToRefresh :Void
- Void finishPullToRefresh :Void
- scrollTo(x:Integer, y:Integer, animate:Boolean) :Void
- scrollBy(x:Integer, y:Integer, animate:Boolean) :Void
- getPosition :Object


That's it, have fun.
