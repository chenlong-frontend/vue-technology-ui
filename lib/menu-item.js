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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
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

/***/ 17:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjIycHgiIGhlaWdodD0iMjJweCIgdmlld0JveD0iMCAwIDIyIDIyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjAgKDg4MTAzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8dGl0bGU+aWNvbl9yaWdodCBhcnJvdzwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9Iue7hOS7tiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJpY29uLzIyeDIyL+WQkeWPs+eureWktCI+DQogICAgICAgICAgICA8ZyBpZD0i57yW57uELTE1Ij4NCiAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiBmaWxsPSIjNTk1OTU5IiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS4xNzkzNjgxOCw2LjExMTYzMTgyIEwxMS42NjM5NjIsMTEuODc1NDEzNiBDMTEuODE1NTE2NCwxMi4wMTAxMjg2IDEyLjA0Mzg5ODYsMTIuMDEwMTI4NiAxMi4xOTU0NTMsMTEuODc1NDEzNiBMMTguNjc5MzY4Miw2LjExMTYzMTgyIEwyMi42NzEwNDY4LDYuMTExNjMxODIgQzIyLjY5OTIyMTMsNi4xMTE2MzE4MiAyMi43MjYwODg2LDYuMTIzNTE3MTEgMjIuNzQ1MDQwOCw2LjE0NDM2NDU0IEMyMi43NzI5MDM4LDYuMTc1MDEzODcgMjIuNzc4MTc1NSw2LjIxODI1MTQxIDIyLjc2MTgyOTcsNi4yNTM2Mjc1NSBMMjIuNzM4MzE0MSw2LjI4NTYyNTgzIEwxMi4xOTg3NzY2LDE1Ljg2NzAyMzUgQzEyLjA2ODAwMzYsMTUuOTg1OTA4MSAxMS44NzgxMzcyLDE2LjAwMjg5MTYgMTEuNzMwNDgwMywxNS45MTc5NzQxIEwxMS42NjA2Mzg0LDE1Ljg2NzAyMzUgTDEuMTIxMTAwOSw2LjI4NTYyNTgzIEMxLjEwMDI1MzQ2LDYuMjY2NjczNjEgMS4wODgzNjgxOCw2LjIzOTgwNjMyIDEuMDg4MzY4MTgsNi4yMTE2MzE4MiBDMS4wODgzNjgxOCw2LjE3MDIxMDQ3IDEuMTEzNTUyMTYsNi4xMzQ2NzExNSAxLjE0OTQ0MzY2LDYuMTE5NDkwMzIgTDEuMTg4MzY4MTgsNi4xMTE2MzE4MiBMNS4xNzkzNjgxOCw2LjExMTYzMTgyIFogTTE1LjY4ODI4NjEsNi4xMTE2MzE4MiBDMTUuNzE0ODA3OCw2LjExMTYzMTgyIDE1Ljc0MDI0MzIsNi4xMjIxNjc1MSAxNS43NTg5OTY4LDYuMTQwOTIxMTUgQzE1Ljc4ODI4NjEsNi4xNzAyMTA0NyAxNS43OTU2MDg1LDYuMjEzMTQ4MzMgMTUuNzgwOTYzOCw2LjI0OTI2MTkyIEwxNS43NTg5OTY4LDYuMjgyMzQyNSBMMTIuMjEyNTUwMiw5LjgyODc4OTExIEMxMi4wNzU4NjY3LDkuOTY1NDcyNjEgMTEuODY0ODc0NSw5Ljk4MjU1ODA1IDExLjcwOTYxMzgsOS44ODAwNDU0MyBMMTEuNjQ2ODY0OCw5LjgyODc4OTExIEw4LjEwMDQxODE3LDYuMjgyMzQyNSBDOC4wODE2NjQ1Myw2LjI2MzU4ODg2IDguMDcxMTI4ODQsNi4yMzgxNTM0NyA4LjA3MTEyODg0LDYuMjExNjMxODIgQzguMDcxMTI4ODQsNi4xNzAyMTA0NyA4LjA5NjMxMjgzLDYuMTM0NjcxMTUgOC4xMzIyMDQzMyw2LjExOTQ5MDMyIEw4LjE3MTEyODg0LDYuMTExNjMxODIgTDE1LjY4ODI4NjEsNi4xMTE2MzE4MiBaIiBpZD0iaWNvbl9yaWdodC1hcnJvdyIgZmlsbD0iI0ZGRURCQiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuOTI5NzA4LCAxMS4wNDEzNDApIHNjYWxlKC0xLCAxKSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTExLjkyOTcwOCwgLTExLjA0MTM0MCkgIj48L3BhdGg+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/menu-item/src/menu-item.vue?vue&type=template&id=08cd5af4&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "kview-menu-item",
      style: _vm.styles,
      on: { click: _vm.onClick }
    },
    [
      _c(
        "div",
        { staticClass: "kview-menu-item__content", class: _vm.activeClass },
        [
          _c(
            "span",
            { staticClass: "kview-menu-item__icon", class: _vm.activeClass },
            [_vm._t("default")],
            2
          ),
          _c(
            "p",
            {
              staticClass: "kview-menu-item__description",
              class: _vm.activeClass
            },
            [_c("span", [_vm._v(_vm._s(_vm.description))])]
          )
        ]
      ),
      _c(
        "transition",
        {
          attrs: { name: "kview-fade" },
          on: {
            "before-enter": _vm.beforeWidthEnter,
            "after-enter": _vm.afterWidthEnter
          }
        },
        [
          _vm.active
            ? _c("div", { staticClass: "kview-menu-item__mask" })
            : _vm._e()
        ]
      ),
      _vm.active && _vm.maskEnd
        ? _c("img", {
            staticClass: "kview-menu-item__arrow",
            attrs: { src: _vm.arrowImg, alt: "img" }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/menu-item/src/menu-item.vue?vue&type=template&id=08cd5af4&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./packages/menu-item/src/menu-item.vue?vue&type=script&lang=ts&
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

var arrowImg = __webpack_require__(17);
var menu_itemvue_type_script_lang_ts_KMenuItem = /** @class */ (function (_super) {
    __extends(KMenuItem, _super);
    function KMenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'KMenuItem';
        _this.arrowImg = arrowImg;
        _this.maskEnd = false;
        return _this;
    }
    Object.defineProperty(KMenuItem.prototype, "activeClass", {
        get: function () {
            if (this.active)
                return 'is-active';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    KMenuItem.prototype.onClick = function (evnet) {
        this.$emit('click', this.$el);
    };
    KMenuItem.prototype.beforeWidthEnter = function () {
        this.maskEnd = false;
        this.$emit('before');
    };
    KMenuItem.prototype.afterWidthEnter = function () {
        this.maskEnd = true;
        this.$emit('after');
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: '' })
    ], KMenuItem.prototype, "description", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: false })
    ], KMenuItem.prototype, "active", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: function () { return ({}); } })
    ], KMenuItem.prototype, "styles", void 0);
    KMenuItem = __decorate([
        external_vue_property_decorator_["Component"]
    ], KMenuItem);
    return KMenuItem;
}(external_vue_property_decorator_["Vue"]));
/* harmony default export */ var menu_itemvue_type_script_lang_ts_ = (menu_itemvue_type_script_lang_ts_KMenuItem);

// CONCATENATED MODULE: ./packages/menu-item/src/menu-item.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_menu_itemvue_type_script_lang_ts_ = (menu_itemvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/menu-item/src/menu-item.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_menu_itemvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/menu-item/src/menu-item.vue"
/* harmony default export */ var menu_item = (component.exports);
// CONCATENATED MODULE: ./packages/menu-item/index.ts

menu_item.install = function (Vue) {
    Vue.component(menu_item.name, menu_item);
};
/* harmony default export */ var packages_menu_item = __webpack_exports__["default"] = (menu_item);


/***/ })

/******/ });