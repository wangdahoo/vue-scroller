;(function (window) {

  function Accessor() { this.scrollers = {}; this.name = 'vue_scroller_accessor' }

  Accessor.prototype.add = function (id, scroller) {
    if (id in this.scrollers && document.querySelector('[' + id + ']')) {
      throw '重复的scroller id';
    }
    this.scrollers[id] = scroller
  };

  Accessor.prototype.delegate = Accessor.prototype.get = function (id) {
    if (id in this.scrollers) {
      return this.scrollers[id];
    } else {
      throw 'scroller 不存在, 错误的scroller id';
    }
  };

  Accessor.prototype.del = function (id) {
    if (id in this.scrollers) {
      delete this.scrollers[id];
    } else {
      throw 'scroller 不存在, 错误的scroller id';
    }
  };

  var accessor = new Accessor();

  if (typeof module != 'undefined' && module.exports) {
    module.exports = accessor;
  } else if (typeof define == 'function' && define.amd) {
    define( function () { return accessor; } );
  } else {
    window.$scroller = accessor;
  }
})(window);
