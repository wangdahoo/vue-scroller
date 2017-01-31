import Scroller from './components/Scroller.vue'
export default Scroller

if (typeof module != 'undefined' && module.exports) {
  module.exports = Scroller;
} else if (typeof define == 'function' && define.amd) {
  define( function () { return Scroller; } );
} else {
  window.Scroller = Scroller;
}
