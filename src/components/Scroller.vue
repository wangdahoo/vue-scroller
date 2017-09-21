<template>
  <div class="_v-container" :id="containerId"
    @touchstart="touchStart($event)"
    @touchmove="touchMove($event)"
    @touchend="touchEnd($event)"
    @mousedown="mouseDown($event)"
    @mousemove="mouseMove($event)"
    @mouseup="mouseUp($event)"
  >
    <div class="_v-content" :id="contentId">
      <div v-if="onRefresh" class="pull-to-refresh-layer"
        :class="{'active': state == 1, 'active refreshing': state == 2}"
      >
        <span class="spinner-holder">
          <arrow class="arrow" :fillColor="refreshLayerColor" v-if="state != 2"></arrow>

          <span class="text" v-if="state != 2" :style="{color: refreshLayerColor}" v-text="refreshText"></span>

          <span v-if="state == 2">
            <slot name="refresh-spinner">
              <spinner :style="{fill: refreshLayerColor, stroke: refreshLayerColor}"></spinner>
            </slot>
          </span>
        </span>
      </div>

      <slot></slot>

      <div v-if="showInfiniteLayer" class="loading-layer">
        <span class="spinner-holder" :class="{'active': showLoading}">
          <slot name="infinite-spinner">
            <spinner :style="{fill: loadingLayerColor, stroke: loadingLayerColor}"></spinner>
          </slot>
        </span>

        <div class="no-data-text"
          :class="{'active': !showLoading && loadingState == 2}" :style="{color: loadingLayerColor}" 
          v-text="noDataText">
        </div>
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
    color: #AAA;
  }

  ._v-container > ._v-content > .loading-layer {
    width: 100%;
    height: 60px;
    text-align: center;
    font-size: 16px;
    line-height: 60px;
    color: #AAA;
    position: relative;
  }

  ._v-container > ._v-content > .loading-layer > .no-data-text
  {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  ._v-container > ._v-content > .loading-layer > .spinner-holder,
  ._v-container > ._v-content > .loading-layer > .no-data-text
  {
    opacity: 0;
    transition: opacity .15s linear;
    -webkit-transition: opacity .15s linear;
  }

  ._v-container > ._v-content > .loading-layer > .spinner-holder.active,
  ._v-container > ._v-content > .loading-layer > .no-data-text.active
  {
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
    fill: #444;
    stroke: #69717d;
  }

  ._v-container > ._v-content > .pull-to-refresh-layer.active .spinner-holder .arrow {
    -webkit-transform: translate3d(0,0,0) rotate(180deg);
    transform: translate3d(0,0,0) rotate(180deg);
  }
</style>
<script>
  import Scroller from '../module/core'
  import getContentRender from '../module/render'
  import Spinner from './Spinner.vue'
  import Arrow from './Arrow.vue'

  const re = /^[\d]+(\%)?$/

  const widthAndHeightCoerce = (v) => {
    if (v[v.length - 1] != '%') return v + 'px'
    return v
  }

  const widthAndHeightValidator = (v) => {
    return re.test(v)
  }

  export default {
    components: {
      Spinner,
      Arrow
    },

    props: {
      onRefresh: Function,
      onInfinite: Function,

      refreshText: {
        type: String,
        default: '下拉刷新'
      },

      noDataText: {
        type: String,
        default: '没有更多数据'
      },

      width: {
        type: String,
        default: '100%',
        validator: widthAndHeightValidator
      },

      height: {
        type: String,
        default: '100%',
        validator: widthAndHeightValidator
      },

      snapping: {
        type: Boolean,
        default: false
      },

      snapWidth: {
        type: Number,
        default: 100
      },

      snapHeight: {
        type: Number,
        default: 100
      },

      animating: {
        type: Boolean,
        default: true
      },

      animationDuration: {
        type: Number,
        default: 250
      },

      bouncing: {
        type: Boolean,
        default: true
      },

      refreshLayerColor: {
        type: String,
        default: '#AAA'
      },

      loadingLayerColor: {
        type: String,
        default: '#AAA'
      },

      cssClass: String, // content css class

      minContentHeight: {
        type: Number,
        default: 0 // px
      }
    },

    computed: {
      w: function () {
        return widthAndHeightCoerce(this.width)
      },

      h: function () {
        return widthAndHeightCoerce(this.height)
      },

      showInfiniteLayer () {
        let contentHeight = 0 
        this.content
          ? contentHeight = this.content.offsetHeight
          : void 666

        return this.onInfinite
          ? contentHeight > this.minContentHeight
          : false
      }
    },

    data() {
      return {
        containerId: 'outer-' + Math.random().toString(36).substring(3, 8),
        contentId: 'inner-' + Math.random().toString(36).substring(3, 8),
        state: 0, // 0: pull to refresh, 1: release to refresh, 2: refreshing
        loadingState: 0, // 0: stop, 1: loading, 2: stopping loading

        showLoading: false,

        container: undefined,
        content: undefined,
        scroller: undefined,
        pullToRefreshLayer: undefined,
        mousedown: false,
        infiniteTimer: undefined,
        resizeTimer: undefined
      }
    },

    mounted () {
      this.container = document.getElementById(this.containerId)
      this.container.style.width = this.w
      this.container.style.height = this.h

      this.content = document.getElementById(this.contentId)
      if (this.cssClass) this.content.classList.add(this.cssClass)
      this.pullToRefreshLayer = this.content.getElementsByTagName("div")[0]

      let render = getContentRender(this.content)

      let scrollerOptions = {
        scrollingX: false
      }

      this.scroller = new Scroller(render, {
        scrollingX: false,
        snapping: this.snapping,
        animating: this.animating,
        animationDuration: this.animationDuration,
        bouncing: this.bouncing
      })

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

          this.onRefresh(this.finishPullToRefresh)
        })
      }

      // enable infinite loading
      if (this.onInfinite) {
        this.infiniteTimer = setInterval(() => {
          let {left, top, zoom} = this.scroller.getValues()

          // 在 keep alive 中 deactivated 的组件长宽变为 0 
          if (this.content.offsetHeight > 0 && 
            top + 60 > this.content.offsetHeight - this.container.clientHeight) {
            if (this.loadingState) return
            this.loadingState = 1
            this.showLoading = true
            this.onInfinite(this.finishInfinite)
          }
        }, 10);
      }

      // setup scroller
      let rect = this.container.getBoundingClientRect()
      this.scroller.setPosition(rect.left + this.container.clientLeft, rect.top + this.container.clientTop)

      // snapping
      if (this.snapping) {
        // console.log(this.snapWidth, this.snapHeight)
        this.scroller.setSnapSize(this.snapWidth, this.snapHeight)
      }

      // onContentResize
      const contentSize = () => {
        return {
          width: this.content.offsetWidth,
          height: this.content.offsetHeight
        }
      }

      let { content_width, content_height } = contentSize()
      
      this.resizeTimer = setInterval(() => {
        let {width, height} = contentSize()
        if (width !== content_width || height !== content_height) {
          content_width = width
          content_height = height
          this.resize()
        }
      }, 10);
    },

    destroyed () {
      clearInterval(this.resizeTimer);
      if (this.infiniteTimer) clearInterval(this.infiniteTimer);
    },

    methods: {
      resize() {
        let container = this.container;
        let content = this.content;
        this.scroller.setDimensions(container.clientWidth, container.clientHeight, content.offsetWidth, content.offsetHeight);
      },

      finishPullToRefresh() {
        this.scroller.finishPullToRefresh()
      },

      finishInfinite(hideSpinner) {
        this.loadingState = hideSpinner ? 2 : 0
        this.showLoading = false

        if (this.loadingState == 2) {
          this.resetLoadingState()
        }
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
      },

      resetLoadingState() {
        let {left, top, zoom} = this.scroller.getValues()
        let container = this.container;
        let content = this.content;

        if (top + 60 > this.content.offsetHeight - this.container.clientHeight) {
          setTimeout(() => {
            this.resetLoadingState()
          }, 1000)
        } else {
          this.loadingState = 0
        }
      }
    }
  }
</script>
