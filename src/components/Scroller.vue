<template>
  <div class="_v-container" id="{{ containerId }}"
       @touchstart="touchStart($event)"
       @touchmove="touchMove($event)"
       @touchend="touchEnd($event)"
       @mousedown="mouseDown($event)"
       @mousemove="mouseMove($event)"
       @mouseup="mouseUp($event)"
  >

    <div class="_v-content" id="{{ contentId }}">
      <div v-if="onRefresh" class="pull-to-refresh-layer"
           :class="{'active': state == 1, 'active refreshing': state == 2}">
        <span class="spinner-holder">
          <img class="arrow" v-if="state != 2" src="../assets/arrow.svg">
          <span class="text" v-if="state != 2">{{ refreshText }}</span>
          <spinner class="spinner" v-if="state == 2"></spinner>
        </span>
      </div>

      <slot></slot>

      <div v-if="onInfinite" class="loading-layer" :class="{'active': showLoading}">
        <span class="spinner-holder">
          <spinner class="spinner"></spinner>
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>

  ._v-container {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  ._v-container > ._v-content {
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

  ._v-container > ._v-content > .pull-to-refresh-layer {
    width: 100%;
    height: 60px;
    margin-top: -60px;
    text-align: center;
    font-size: 16px;
    color: #ccc;
  }

  ._v-container > ._v-content > .loading-layer {
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

  ._v-container > ._v-content > .loading-layer.active {
    opacity: 1;
  }

  ._v-container > ._v-content > .pull-to-refresh-layer .spinner-holder,
  ._v-container > ._v-content > .loading-layer .spinner-holder {
    text-align: center;
    -webkit-font-smoothing: antialiased;
  }

  ._v-container > ._v-content > .pull-to-refresh-layer .spinner-holder .arrow,
  ._v-container > ._v-content > .loading-layer .spinner-holder .arrow {
    width: 20px;
    height: 20px;
    margin: 8px auto 0 auto;

    -webkit-transform: translate3d(0,0,0) rotate(0deg);
    transform: translate3d(0,0,0) rotate(0deg);

    -webkit-transition: -webkit-transform .2s linear;
    transition: transform .2s linear;
  }

  ._v-container > ._v-content > .pull-to-refresh-layer .spinner-holder .text,
  ._v-container > ._v-content > .loading-layer .spinner-holder .text {
    display: block;
    margin: 0 auto;
    font-size: 14px;
    line-height: 20px;
    color: #aaa;
  }

  ._v-container > ._v-content > .pull-to-refresh-layer .spinner-holder .spinner,
  ._v-container > ._v-content > .loading-layer .spinner-holder .spinner {
    margin-top: 14px;
    width: 32px;
    height: 32px;

    // svg style
    fill: #444;
    stroke: #69717d;
  }

  ._v-container > ._v-content > .pull-to-refresh-layer.active .spinner-holder .arrow {
    -webkit-transform: translate3d(0,0,0) rotate(180deg);
    transform: translate3d(0,0,0) rotate(180deg);
  }


  /* sass version */

  /*._v-container {
    -webkit-tap-highlight-color: rgba(0,0,0,0);

    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;

    ._v-content {
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

      .pull-to-refresh-layer {
        width: 100%;
        height: 60px;
        margin-top: -60px;
        text-align: center;
        font-size: 16px;
        color: #ccc;

        &.active {
          // no style
        }

        &.refreshing {
          // no style
        }
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

        &.active {
          opacity: 1;
        }
      }

      !* spinner & arrow *!
      .pull-to-refresh-layer, .loading-layer {

        .spinner-holder {
          text-align: center;
          -webkit-font-smoothing: antialiased;

          .arrow {
            width: 20px;
            height: 20px;
            margin: 8px auto 0 auto;

            -webkit-transform: translate3d(0,0,0) rotate(0deg);
            transform: translate3d(0,0,0) rotate(0deg);

            -webkit-transition: -webkit-transform .2s linear;
            transition: transform .2s linear;
          }

          .text {
            display: block;
            margin: 0 auto;
            font-size: 14px;
            line-height: 20px;
            color: #aaa;
          }

          .spinner {
            margin-top: 14px;
            width: 32px;
            height: 32px;

            // svg style
            fill: #444;
            stroke: #69717d;
          }
        }

        &.active .spinner-holder {
          .arrow {
            -webkit-transform: translate3d(0,0,0) rotate(180deg);
            transform: translate3d(0,0,0) rotate(180deg);
          }
        }
      }

    }
  }*/

</style>
<script>

  import accessor from '../module/accessor'
  if (!(window.$scroller && window.$scroller.name == 'vue_scroller_accessor')) {
    window.$scroller = accessor
  }

  import Scroller from '../module/core'
  import getContentRender from '../module/render'
  import Spinner from './Spinner'

  function widthAndHeightCoerce(v) {
    if (v[v.length - 1] != '%') return v + 'px'
    return v
  }

  function widthAndHeightValidator(v) {
    return /^[\d]+(\%|px)$/.test(v)
  }

  export default {

    components: {
      Spinner
    },

    props: {
      onRefresh: Function,
      onInfinite: Function,

      refreshText: {
        type: Text,
        default: '下拉刷新'
      },

      delegateId: {
        type: String,
//        required: true
        default() {
          return 'vs_' + Math.random().toString(36).substr(3, 8)
        }
      },

      width: {
        type: String,
        default: '100%',
        validator: widthAndHeightValidator,
        coerce: widthAndHeightCoerce
      },

      height: {
        type: String,
        default: '100%',
        validator: widthAndHeightValidator,
        coerce: widthAndHeightCoerce
      }
    },

    data(){
      return {
        containerId: 'outer-' + Math.random().toString(36).substring(3, 8),
        contentId: 'inner-' + Math.random().toString(36).substring(3, 8),
        state: 0, // 0: pull to refresh, 1: release to refresh, 2: refreshing

        showLoading: false,

        container: undefined,
        content: undefined,
        scroller: undefined,
        pullToRefreshLayer: undefined,
        mousedown: false,
        infiniteTimer: undefined,
        scrollbottom: false
      }
    },

    ready() {
      this.container = document.getElementById(this.containerId)
      this.container.style.width = this.width
      this.container.style.height = this.height

      this.content = document.getElementById(this.contentId)
      this.pullToRefreshLayer = this.content.getElementsByTagName("div")[0]

      let render = getContentRender(this.content)

      this.scroller = new Scroller(render, {
        scrollingX: false
      });

      // enable PullToRefresh
      if (this.onRefresh) {
        this.scroller.activatePullToRefresh(60, () => {
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
      if (this.onInfinite) {
        this.infiniteTimer = setInterval(() => {
          let {left, top, zoom} = this.scroller.getValues()

          if (top + 60 > this.content.offsetHeight - this.container.clientHeight) {
            if (this.scrollbottom) return
            this.scrollbottom = true
            this.showLoading = true
            this.onInfinite()
            setTimeout(() => {
              this.scrollbottom = false
            }, 1500)
          }

        }, 10);
      }

      // setup scroller
      let rect = this.container.getBoundingClientRect()
      this.scroller.setPosition(rect.left + this.container.clientLeft, rect.top + this.container.clientTop)

      let delegate = {
        resize: this.resize,
        finishPullToRefresh: this.finishPullToRefresh,
        triggerPullToRefresh: this.triggerPullToRefresh,
        scrollTo: this.scrollTo,
        scrollBy: this.scrollBy
      }

      window.$scroller.add(this.delegateId, delegate)
    },

    destroyed() {
      if (this.infiniteTimer) clearInterval(this.infiniteTimer);
      window.$scroller.del(this.delegateId)
    },

    methods: {
      resize() {
        let container = this.container;
        let content = this.content;
        this.scroller.setDimensions(container.clientWidth, container.clientHeight, content.offsetWidth, content.offsetHeight);
      },

      finishPullToRefresh() {
        this.scroller.finishPullToRefresh()
        setTimeout(() => {
          this.resize()
        })
      },

      triggerPullToRefresh() {
        this.scroller.triggerPullToRefresh()
      },

      scrollTo(x, y, animate) {
        this.scroller.scrollTo(x, y, animate)
      },

      scrollBy(x, y, animate) {
        this.scroller.scrollBy(x, y, animate)
      },

      touchStart(e) {
        // Don't react if initial down happens on a form element
        if (e.target.tagName.match(/input|textarea|select/i)) {
          return
        }
        this.scroller.doTouchStart(e.touches, e.timeStamp)
      },

      touchMove(e) {
        e.preventDefault()
        this.scroller.doTouchMove(e.touches, e.timeStamp)
      },

      touchEnd(e) {
        this.scroller.doTouchEnd(e.timeStamp)
      },

      mouseDown(e) {
        // Don't react if initial down happens on a form element
        if (e.target.tagName.match(/input|textarea|select/i)) {
          return
        }
        this.scroller.doTouchStart([{
          pageX: e.pageX,
          pageY: e.pageY
        }], e.timeStamp)
        this.mousedown = true
      },

      mouseMove(e) {
        if (!this.mousedown) {
          return
        }
        this.scroller.doTouchMove([{
          pageX: e.pageX,
          pageY: e.pageY
        }], e.timeStamp)
        this.mousedown = true
      },

      mouseUp(e) {
        if (!this.mousedown) {
          return
        }
        this.scroller.doTouchEnd(e.timeStamp)
        this.mousedown = false
      },

      // 获取位置
      getPosition() {
        let v = this.scroller.getValues()

        return {
          left: parseInt(v.left),
          top: parseInt(v.top)
        }
      }

    }

  }
</script>
