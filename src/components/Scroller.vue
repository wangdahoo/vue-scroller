<template>
  <div class="page" id="{{ pageId }}"
       @touchstart="touchStart($event)"
       @touchmove="touchMove($event)"
       @touchend="touchEnd($event)"
  >
    <div class="content" id="{{ contentId }}">
      <div class="pull-to-refresh-layer" :class="{'active': state == 1, 'active refreshing': state == 2}">
        {{ getStateText(state) }}
      </div>
      <slot></slot>
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

  .content {
    background: #f5f5f5;
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
    background: #7b91aa;
    color: white;
    font-weight: bold;
    height: 50px;
    margin-top: -50px;
    text-align: center;
    font-size: 16px;
    line-height: 50px;

    -webkit-transition: background-color 300ms;
    -moz-transition: background-color 300ms;
    -ms-transition: background-color 300ms;
    -o-transition: background-color 300ms;
    transition: background-color 300ms;
  }

  .pull-to-refresh-layer.active {
    background: #006eb3;
  }

  .pull-to-refresh-layer.refreshing {
    background: #00b373;
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

  export default{
    props: {

    },

    data(){
      return {
        pageId: page_id,
        contentId: content_id,
        state: 0, // 0: pull to refresh, 1: release to refresh, 2: refreshing
        stateText: 'Pull to Refresh',

      }
    },

    ready() {
      page = document.getElementById(this.pageId)
      content = document.getElementById(this.contentId)
      pullToRefreshLayer = content.getElementsByTagName("div")[0]

      scroller = new Scroller(getContentRender(content), {
        scrollingX: false
      });

      scroller.activatePullToRefresh(50, () => {
        this.state = 1
      }, () => {
        this.state = 0
      }, () => {
        this.state = 2
        setTimeout(() => {
          this.state = 0;
          scroller.finishPullToRefresh()
        }, 2000)
      })

      // setup scroller
      let rect = page.getBoundingClientRect()
      scroller.setPosition(rect.left + page.clientLeft, rect.top + page.clientTop)
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
