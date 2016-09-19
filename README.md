# vue-scroller ![version](https://img.shields.io/badge/release-%20v0.1.2%20-green.svg)

Vue component for smooth scrolling, pull to refresh & infinite loading.

## [Demo](https://wangdahoo.github.io/vue-scroller/)

## How To Use
#### 创建vue项目, 并安装插件
```bash
$ vue init webpack-simple#1.0 my-project
$ cd my-project
$ npm install
$ npm install vue-scroller
$ npm run dev
```

#### 在webpack.config.js中添加loader
```
{
  test: /vue-scroller.src.*?js$/,
  loader: 'babel'
}
```

#### 在组件中使用
```
<template>
  <scroller :on-refresh="refresh"
            :on-infinite-loading="loadMore"
            v-ref:my_scroller>
    <div v-for="(index, item) in items"
         class="row"
         :class="{'grey-bg': index % 2 == 0}">
      {{ item.text }}
    </div>
  </scroller>
</template>

<script>
  import {Scroller} from 'vue-scroller'

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
        /* 下面2种方式都可以调用 resize 方法 */

        // $scrollerDelegate.resize()

        this.$refs.my_scroller.resize()
      })
    },

    methods: {
      refresh() {
        setTimeout(() => {
          this.items.splice(0, 0, {
            text: 'NEW - keep walking, be 2 with you.'
          })

          /* 下面3种方式都可以调用 finishPullToRefresh 方法 */
          // this.$broadcast('$finishPullToRefresh')

          // $scrollerDelegate.finishPullToRefresh()

          this.$refs.my_scroller.finishPullToRefresh()

        }, 1500)
      },

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
```

That's it, have fun.
