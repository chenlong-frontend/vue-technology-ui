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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/card-item/src/card-item.vue?vue&type=template&id=789ce0dc&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      staticClass: "kview-card-item",
      class: { "kview-card-item--selected": _vm.itemSelected },
      style: _vm.styles,
      on: {
        click: _vm.onClick,
        mouseenter: _vm.onMouseenter,
        mouseleave: _vm.onMouseleave
      }
    },
    [
      _c("div", { staticClass: "kview-card-item__content" }, [
        _c(
          "div",
          {
            staticClass: "kview-card-item__slot",
            class: { "kview-card-item__slot--selected": _vm.itemSelected }
          },
          [
            _vm.img && _vm.selectedImg
              ? _c("img", {
                  attrs: {
                    src:
                      _vm.itemSelected || _vm.isHover
                        ? _vm.svgStringToImg(_vm.selectedImg)
                        : _vm.svgStringToImg(_vm.img),
                    alt: "picture"
                  }
                })
              : _vm._e()
          ]
        ),
        _c(
          "div",
          {
            staticClass: "kview-card-item__title",
            class: { "kview-card-item__title--selected": _vm.itemSelected }
          },
          [_vm._t("default")],
          2
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/card-item/src/card-item.vue?vue&type=template&id=789ce0dc&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/card-item/src/card-item.vue?vue&type=script&lang=ts&
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var card_itemvue_type_script_lang_ts_KCardItem = /** @class */function (_super) {
    __extends(KCardItem, _super);
    function KCardItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'KCardItem';
        _this.isHover = false;
        return _this;
    }
    Object.defineProperty(KCardItem.prototype, "styles", {
        get: function get() {
            return {
                marginBottom: this.bottomGap,
                width: this.width,
                height: this.height
            };
        },
        enumerable: false,
        configurable: true
    });
    KCardItem.prototype.svgStringToImg = function (svg) {
        if (svg.indexOf('<svg') === -1) return svg;
        return "data:image/svg+xml;charset=utf-8," + svg.replace(/#/g, '%23').replace(/\n/g, '%0A');
    };
    KCardItem.prototype.onMouseenter = function () {
        this.isHover = true;
    };
    KCardItem.prototype.onMouseleave = function () {
        this.isHover = false;
    };
    KCardItem.prototype.onClick = function () {
        this.$emit('click');
    };
    __decorate([Object(external_vue_property_decorator_["Prop"])({ default: 0 })], KCardItem.prototype, "width", void 0);
    __decorate([Object(external_vue_property_decorator_["Prop"])({ default: 0 })], KCardItem.prototype, "height", void 0);
    __decorate([Object(external_vue_property_decorator_["Prop"])({ default: false })], KCardItem.prototype, "itemSelected", void 0);
    __decorate([Object(external_vue_property_decorator_["Prop"])({ default: '0px' })], KCardItem.prototype, "bottomGap", void 0);
    __decorate([Object(external_vue_property_decorator_["Prop"])()], KCardItem.prototype, "img", void 0);
    __decorate([Object(external_vue_property_decorator_["Prop"])()], KCardItem.prototype, "selectedImg", void 0);
    KCardItem = __decorate([external_vue_property_decorator_["Component"]], KCardItem);
    return KCardItem;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var card_itemvue_type_script_lang_ts_ = (card_itemvue_type_script_lang_ts_KCardItem);
// CONCATENATED MODULE: ./packages/card-item/src/card-item.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_card_itemvue_type_script_lang_ts_ = (card_itemvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/card-item/src/card-item.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_card_itemvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/card-item/src/card-item.vue"
/* harmony default export */ var card_item = (component.exports);
// CONCATENATED MODULE: ./packages/card-item/index.ts

card_item.install = function (Vue) {
    Vue.component(card_item.name, card_item);
};
/* harmony default export */ var packages_card_item = __webpack_exports__["default"] = (card_item);

/***/ })

/******/ });