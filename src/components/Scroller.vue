<template>
  <div class="page" id="{{ pageId }}"
       @touchstart="touchStart($event)"
       @touchmove="touchMove($event)"
       @touchend="touchEnd($event)"
  >
    <div class="page-content" id="{{ contentId }}">
      <div v-if="onRefresh" class="pull-to-refresh-layer"
           :class="{'active': state == 1, 'active refreshing': state == 2}">
        <span class="spinner">
          <img class="arrow" v-if="state != 2" src="../assets/arrow.svg">
          <span v-if="state != 2">{{ refreshText }}</span>
          <svg v-if="state == 2" viewBox="0 0 64 64"><g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g></svg>
        </span>
      </div>

      <slot></slot>

      <div v-if="onInfiniteLoading" class="loading-layer" :class="{'active': showLoading}">
        <span class="spinner">
          <svg viewBox="0 0 64 64"><g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g></svg>
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped>

  .page {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    font-family: sans-serif;
    cursor: default;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .page-content {
    width: 100%;

    -webkit-transform-origin: left top;
    -webkit-transform: translateZ(0);
    -moz-transform-origin: left top;
    -moz-transform: translateZ(0);
    -ms-transform-origin: left top;
    -ms-transform: translateZ(0);
    -o-transform-origin: left top;
    -o-transform: translateZ(0);
    transform-origin: left top;
    transform: translateZ(0);
  }

  .pull-to-refresh-layer {
    width: 100%;
    height: 60px;
    margin-top: -60px;
    text-align: center;
    font-size: 16px;
    color: #ccc;
  }

  .pull-to-refresh-layer.active {

  }

  .pull-to-refresh-layer.refreshing {

  }

  .loading-layer {
    width: 100%;
    height: 60px;
    text-align: center;
    font-size: 16px;
    line-height: 60px;
    color: #ccc;

    opacity: 0;
    transition: opacity .15s linear;
    -webkit-transition: opacity .15s linear;
  }

  .loading-layer.active {
    opacity: 1;
  }

  .spinner {
    fill: #444;
    stroke: #69717d;
    text-align: center;
    -webkit-font-smoothing: antialiased;
  }

  .spinner svg {
    margin-top: 14px;
    width: 32px;
    height: 32px;
  }

  .spinner img {
    width: 20px;
    height: 20px;
    margin: 8px auto 0 auto;
  }

  .spinner span {
    display: block;
    margin: 0 auto;
    font-size: 14px;
    line-height: 28px;
    color: #aaa;
  }

  .pull-to-refresh-layer > .spinner > .arrow
  {
    -webkit-transform: translate3d(0,0,0) rotate(0deg);
    transform: translate3d(0,0,0) rotate(0deg);

    transition: transform .2s linear;
    -webkit-transition: -webkit-transform .2s linear;
  }

  .pull-to-refresh-layer.active > .spinner > .arrow
  {
    -webkit-transform: translate3d(0,0,0) rotate(180deg);
    transform: translate3d(0,0,0) rotate(180deg);
  }

</style>
<script>
  import uuid from 'node-uuid'
  import '../module/core'
  import getContentRender from '../module/render'

  const page_id = 'page-' + uuid.v4().substr(0, 8)
  const content_id = 'content-' + uuid.v4().substr(0, 8)

  let scroller, page, content, pullToRefreshLayer;
  let mousedown = false;

  let loadMoreTimer;
  let scrollbottom = false;

  export default{
    props: {
      onRefresh: Function,
      onInfiniteLoading: Function,

      refreshText: {
        type: Text,
        default: '下拉刷新'
      },
    },

    data(){
      return {
        pageId: page_id,
        contentId: content_id,
        state: 0, // 0: pull to refresh, 1: release to refresh, 2: refreshing
        stateText: 'Pull to Refresh',

        showLoading: false
      }
    },

    ready() {
      page = document.getElementById(this.pageId)
      content = document.getElementById(this.contentId)
      pullToRefreshLayer = content.getElementsByTagName("div")[0]

      scroller = new Scroller(getContentRender(content), {
        scrollingX: false,
        scrollingY: true
      });

      // enable PullToRefresh
      if (this.onRefresh) {
        scroller.activatePullToRefresh(60, () => {
          this.state = 1
        }, () => {
          this.state = 0
        }, () => {
          this.state = 2

          this.$on('$finishPullToRefresh', () => {
            setTimeout(() => {
              this.state = 0
              this.finishPullToRefresh()
            })
          })

          this.onRefresh()
        })
      }

      // enable infinite loading
      if (this.onInfiniteLoading) {
        // TODO

        loadMoreTimer = setInterval(() => {
          let {left, top, zoom} = scroller.getValues()

          if (top + 60 > content.offsetHeight - page.clientHeight) {
            if (scrollbottom) return
            scrollbottom = true
            this.showLoading = true
            // scroller.scrollTo(0, 50000, true)

            this.onInfiniteLoading()

            setTimeout(() => {
              scrollbottom = false
            }, 1500)
          }

        }, 20);
      }

      // setup scroller
      let rect = page.getBoundingClientRect()
      scroller.setPosition(rect.left + page.clientLeft, rect.top + page.clientTop)

      window.$scrollerDelegate = {
        resize: this.resize,
        finishPullToRefresh: this.finishPullToRefresh,
        triggerPullToRefresh: this.triggerPullToRefresh
      }
    },

    destroyed() {
//      console.log('Scroller Component Destroyed.');

      if (loadMoreTimer) clearInterval(loadMoreTimer);
    },

    methods: {
      getStateText(state) {
        if (state == 1) {
          return 'Release to Refresh'
        } else if (state == 2) {
          return 'Refreshing...'
        } else {
          return 'Pull to Refresh'
        }
      },

      resize() {
        scroller.setDimensions(page.clientWidth, page.clientHeight, content.offsetWidth, content.offsetHeight);
      },

      finishPullToRefresh() {
        scroller.finishPullToRefresh()
        setTimeout(() => {
          this.resize()
        })
      },

      triggerPullToRefresh() {
        scroller.triggerPullToRefresh()
      },

      scrollTo(x, y, animate) {
        scroller.scrollTo(x, y, animate)
      },

      scrollBy(x, y, animate) {
        scroller.scrollBy(x, y, animate)
      },

      touchStart(e) {
        // Don't react if initial down happens on a form element
        if (e.target.tagName.match(/input|textarea|select/i)) {
          return
        }
        scroller.doTouchStart(e.touches, e.timeStamp)
        e.preventDefault()
      },

      touchMove(e) {
        scroller.doTouchMove(e.touches, e.timeStamp)
      },

      touchEnd(e) {
        scroller.doTouchEnd(e.timeStamp)
      },

      mouseDown(e) {
        // Don't react if initial down happens on a form element
        if (e.target.tagName.match(/input|textarea|select/i)) {
          return
        }
        scroller.doTouchStart([{
          pageX: e.pageX,
          pageY: e.pageY
        }], e.timeStamp)
        mousedown = true
      },

      mouseMove(e) {
        if (!mousedown) {
          return
        }
        scroller.doTouchMove([{
          pageX: e.pageX,
          pageY: e.pageY
        }], e.timeStamp)
        mousedown = true
      },

      mouseUp(e) {
        if (!mousedown) {
          return
        }
        scroller.doTouchEnd(e.timeStamp)
        mousedown = false
      },

    }

  }
</script>
