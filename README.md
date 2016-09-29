# Vue Scroller ![version](https://img.shields.io/badge/release-%20v0.3.4%20-green.svg)

Vue component for smooth scrolling, pull to refresh and infinite loading.

## [Demo](https://wangdahoo.github.io/vue-scroller/)

## Change Logs
- v0.3.4
change required property 'delegate-id' to non-required any more.
- v0.3.3
support multi scrollers in one page.

## How To Use
#### 创建vue项目, 并安装插件
```bash
$ vue init webpack-simple#1.0 my-project
$ cd my-project
$ npm install
$ npm install vue-scroller
```

#### 在webpack.config.js中添加resolve和loader
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

#### 粘贴下面代码覆盖 App.vue
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

#### 在index.html中添加
```html
<meta name="viewport" content="width=device-width, user-scalable=no">
```

#### 运行
```bash
$ npm run dev
```

That's it, have fun.
