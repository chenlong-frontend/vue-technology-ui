module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("kview-ui/lib/utils/dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("kview-ui/lib/utils/resize-event");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("kview-ui/lib/utils/scrollbar-width");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("kview-ui/lib/utils/util");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "kview-ui/lib/utils/resize-event"
var resize_event_ = __webpack_require__(2);

// EXTERNAL MODULE: external "kview-ui/lib/utils/scrollbar-width"
var scrollbar_width_ = __webpack_require__(3);
var scrollbar_width_default = /*#__PURE__*/__webpack_require__.n(scrollbar_width_);

// EXTERNAL MODULE: external "kview-ui/lib/utils/util"
var util_ = __webpack_require__(4);

// EXTERNAL MODULE: external "kview-ui/lib/utils/dom"
var dom_ = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/scrollbar/src/util.js
var BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top'
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left'
  }
};

function renderThumbStyle(_ref) {
  var move = _ref.move,
      size = _ref.size,
      bar = _ref.bar;

  var style = {};
  var translate = 'translate' + bar.axis + '(' + move + '%)';

  style[bar.size] = size;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;

  return style;
};
// CONCATENATED MODULE: ./packages/scrollbar/src/bar.js



/* istanbul ignore next */
/* harmony default export */ var src_bar = ({
  name: 'Bar',

  props: {
    vertical: Boolean,
    size: String,
    move: Number
  },

  computed: {
    bar: function bar() {
      return BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
    },
    wrap: function wrap() {
      return this.$parent.wrap;
    }
  },

  render: function render(h) {
    var size = this.size,
        move = this.move,
        bar = this.bar;


    return h(
      'div',
      {
        'class': ['kview-scrollbar__bar', 'is-' + bar.key],
        on: {
          'mousedown': this.clickTrackHandler
        }
      },
      [h('div', {
        ref: 'thumb',
        'class': 'kview-scrollbar__thumb',
        on: {
          'mousedown': this.clickThumbHandler
        },

        style: renderThumbStyle({ size: size, move: move, bar: bar }) })]
    );
  },


  methods: {
    clickThumbHandler: function clickThumbHandler(e) {
      // prevent click event of right button
      if (e.ctrlKey || e.button === 2) {
        return;
      }
      this.startDrag(e);
      this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
    },
    clickTrackHandler: function clickTrackHandler(e) {
      var offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
      var thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
      var thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset];

      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    startDrag: function startDrag(e) {
      e.stopImmediatePropagation();
      this.cursorDown = true;

      Object(dom_["on"])(document, 'mousemove', this.mouseMoveDocumentHandler);
      Object(dom_["on"])(document, 'mouseup', this.mouseUpDocumentHandler);
      document.onselectstart = function () {
        return false;
      };
    },
    mouseMoveDocumentHandler: function mouseMoveDocumentHandler(e) {
      if (this.cursorDown === false) return;
      var prevPage = this[this.bar.axis];

      if (!prevPage) return;

      var offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
      var thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
      var thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset];

      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    mouseUpDocumentHandler: function mouseUpDocumentHandler(e) {
      this.cursorDown = false;
      this[this.bar.axis] = 0;
      Object(dom_["off"])(document, 'mousemove', this.mouseMoveDocumentHandler);
      document.onselectstart = null;
    }
  },

  destroyed: function destroyed() {
    Object(dom_["off"])(document, 'mouseup', this.mouseUpDocumentHandler);
  }
});
// CONCATENATED MODULE: ./packages/scrollbar/src/main.js
// reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js






/* istanbul ignore next */
/* harmony default export */ var main = ({
  name: 'ElScrollbar',

  components: { Bar: src_bar },

  props: {
    native: Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div'
    }
  },

  data: function data() {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0
    };
  },


  computed: {
    wrap: function wrap() {
      return this.$refs.wrap;
    }
  },

  render: function render(h) {
    var gutter = scrollbar_width_default()();
    var style = this.wrapStyle;

    if (gutter) {
      var gutterWith = '-' + gutter + 'px';
      var gutterStyle = 'margin-bottom: ' + gutterWith + '; margin-right: ' + gutterWith + ';';

      if (Array.isArray(this.wrapStyle)) {
        style = Object(util_["toObject"])(this.wrapStyle);
        style.marginRight = style.marginBottom = gutterWith;
      } else if (typeof this.wrapStyle === 'string') {
        style += gutterStyle;
      } else {
        style = gutterStyle;
      }
    }
    var view = h(this.tag, {
      class: ['kview-scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize'
    }, this.$slots.default);
    var wrap = h(
      'div',
      {
        ref: 'wrap',
        style: style,
        on: {
          'scroll': this.handleScroll
        },

        'class': [this.wrapClass, 'kview-scrollbar__wrap', gutter ? '' : 'kview-scrollbar__wrap--hidden-default'] },
      [[view]]
    );
    var nodes = void 0;

    if (!this.native) {
      nodes = [wrap, h(src_bar, {
        attrs: {
          move: this.moveX,
          size: this.sizeWidth }
      }), h(src_bar, {
        attrs: {
          vertical: true,
          move: this.moveY,
          size: this.sizeHeight }
      })];
    } else {
      nodes = [h(
        'div',
        {
          ref: 'wrap',
          'class': [this.wrapClass, 'kview-scrollbar__wrap'],
          style: style },
        [[view]]
      )];
    }
    return h('div', { class: 'kview-scrollbar' }, nodes);
  },


  methods: {
    handleScroll: function handleScroll() {
      var wrap = this.wrap;

      this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
      this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
    },
    update: function update() {
      var heightPercentage = void 0,
          widthPercentage = void 0;
      var wrap = this.wrap;
      if (!wrap) return;

      heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
      widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;

      this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
      this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
    }
  },

  mounted: function mounted() {
    if (this.native) return;
    this.$nextTick(this.update);
    !this.noresize && Object(resize_event_["addResizeListener"])(this.$refs.resize, this.update);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.native) return;
    !this.noresize && Object(resize_event_["removeResizeListener"])(this.$refs.resize, this.update);
  }
});
// CONCATENATED MODULE: ./packages/scrollbar/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var scrollbar = (main);
// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/row/src/row.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var row_KRow = /** @class */ (function (_super) {
    __extends(KRow, _super);
    function KRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'KRow';
        _this.componentName = 'KRow';
        return _this;
    }
    Object.defineProperty(KRow.prototype, "style", {
        get: function () {
            var ret = { marginLeft: null, marginRight: null };
            if (this.gutter) {
                ret.marginLeft = "-" + this.gutter / 2 + "px";
                ret.marginRight = ret.marginLeft;
            }
            return ret;
        },
        enumerable: false,
        configurable: true
    });
    KRow.prototype.render = function (h) {
        return h(this.tag, {
            class: [
                'kview-row',
                this.justify !== 'start' ? "is-justify-" + this.justify : '',
                this.align !== 'top' ? "is-align-" + this.align : '',
                { 'kview-row--flex': this.type === 'flex' }
            ],
            style: this.style
        }, this.$slots.default);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: 'div' })
    ], KRow.prototype, "tag", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KRow.prototype, "gutter", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KRow.prototype, "type", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: 'start' })
    ], KRow.prototype, "justify", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: 'top' })
    ], KRow.prototype, "align", void 0);
    KRow = __decorate([
        external_vue_property_decorator_["Component"]
    ], KRow);
    return KRow;
}(external_vue_property_decorator_["Vue"]));
/* harmony default export */ var row = (row_KRow);
;

// CONCATENATED MODULE: ./packages/row/index.ts

row.install = function (Vue) {
    Vue.component(row.name, row);
};
/* harmony default export */ var packages_row = (row);

// CONCATENATED MODULE: ./packages/col/src/col.ts
var col_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var col_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var col_KCol = /** @class */ (function (_super) {
    col_extends(KCol, _super);
    function KCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'KCol';
        return _this;
    }
    Object.defineProperty(KCol.prototype, "gutter", {
        get: function () {
            var parent = this.$parent;
            while (parent && parent.componentName !== 'KRow') {
                parent = parent.$parent;
            }
            return parent ? parent.gutter : 0;
        },
        enumerable: false,
        configurable: true
    });
    KCol.prototype.render = function (h) {
        var _this = this;
        var classList = [];
        var style = { paddingLeft: null, paddingRight: null };
        if (this.gutter) {
            style.paddingLeft = this.gutter / 2 + 'px';
            style.paddingRight = style.paddingLeft;
        }
        ['span', 'offset', 'pull', 'push'].forEach(function (prop) {
            if (_this[prop] || _this[prop] === 0) {
                classList.push(prop !== 'span'
                    ? "kview-col-" + prop + "-" + _this[prop]
                    : "kview-col-" + _this[prop]);
            }
        });
        ['xs', 'sm', 'md', 'lg', 'xl'].forEach(function (size) {
            if (typeof _this[size] === 'number') {
                classList.push("kview-col-" + size + "-" + _this[size]);
            }
            else if (typeof _this[size] === 'object') {
                var props_1 = _this[size];
                Object.keys(props_1).forEach(function (prop) {
                    classList.push(prop !== 'span'
                        ? "kview-col-" + size + "-" + prop + "-" + props_1[prop]
                        : "kview-col-" + size + "-" + props_1[prop]);
                });
            }
        });
        return h(this.tag, {
            class: ['kview-col', classList],
            style: style
        }, this.$slots.default);
    };
    col_decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: 24 })
    ], KCol.prototype, "span", void 0);
    col_decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: 'div' })
    ], KCol.prototype, "tag", void 0);
    col_decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KCol.prototype, "offset", void 0);
    col_decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KCol.prototype, "pull", void 0);
    col_decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KCol.prototype, "push", void 0);
    col_decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KCol.prototype, "xs", void 0);
    col_decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KCol.prototype, "md", void 0);
    col_decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KCol.prototype, "lg", void 0);
    col_decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KCol.prototype, "xl", void 0);
    KCol = col_decorate([
        external_vue_property_decorator_["Component"]
    ], KCol);
    return KCol;
}(external_vue_property_decorator_["Vue"]));
/* harmony default export */ var col = (col_KCol);
;

// CONCATENATED MODULE: ./packages/col/index.ts

col.install = function (Vue) {
    Vue.component(col.name, col);
};
/* harmony default export */ var packages_col = (col);

// CONCATENATED MODULE: ./src/index.js
/* Automatically generated by './build/bin/build-entry.js' */





var components = [scrollbar, packages_row, packages_col];

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  components.forEach(function (component) {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var src = __webpack_exports__["default"] = ({
  version: '1.0.0',
  install: install,
  Scrollbar: scrollbar,
  Row: packages_row,
  Col: packages_col
});

/***/ })
/******/ ])["default"];