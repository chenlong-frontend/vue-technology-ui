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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
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

/***/ 21:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjEycHgiIGhlaWdodD0iMTJweCIgdmlld0JveD0iMCAwIDEyIDEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuNSAoNjc0NjkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT5pY29uLWFycm93bGluZTItbGVmdDwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9IjAwLeWbvuagh+iuvuiuoSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSLlm77moIflkIjpm4YtY29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc1OC4wMDAwMDAsIC01NDUuMDAwMDAwKSIgZmlsbD0iIzBDRjFGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIGlkPSJpY29uLWFycm93bGluZTItY29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzU4LjAwMDAwMCwgNTQ1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05LjM5Njk3NzczLDYuNDk5ODU5NjIgTDAuNyw2LjQ5OTg1OTYyIEwwLjcsNS40OTk4NTk2MiBMOS4zOTIyOTg5OCw1LjQ5OTg1OTYyIEw2Ljc2Njc2MzIyLDIuODU0NDMzNDQgTDcuNDc2NTMzMjcsMi4xNSBMMTEuMjk5Nzg2LDYuMDAyMjE2NzIgTDcuNDc2NTMzMjcsOS44NTQ0MzM0NCBMNi43NjY3NjMyMiw5LjE1IEw5LjM5Njk3NzczLDYuNDk5ODU5NjIgWiIgaWQ9IuWQiOW5tuW9oueKtiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS45OTk4OTMsIDYuMDAyMjE3KSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC01Ljk5OTg5MywgLTYuMDAyMjE3KSAiPjwvcGF0aD4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjEycHgiIGhlaWdodD0iMTJweCIgdmlld0JveD0iMCAwIDEyIDEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuNSAoNjc0NjkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT5pY29uLWFycm93bGluZTI8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSIwMS3npLrkvovkuK3lv4Porr7orqEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iMS0wLTEtMC1LU2lnbi1BUi3ogZrlkIjmoLflvI8t5YiX6KGoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA3Mi4wMDAwMDAsIC03MjMuMDAwMDAwKSIgZmlsbD0iIzBDRjFGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIGlkPSLliIbnu4QtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA2NS4wMDAwMDAsIDcxNy4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbi1hcnJvd2xpbmUyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3LjAwMDAwMCwgNi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTkuMzk2OTc3NzMsNi40OTk4NTk2MiBMMC43LDYuNDk5ODU5NjIgTDAuNyw1LjQ5OTg1OTYyIEw5LjM5MjI5ODk4LDUuNDk5ODU5NjIgTDYuNzY2NzYzMjIsMi44NTQ0MzM0NCBMNy40NzY1MzMyNywyLjE1IEwxMS4yOTk3ODYsNi4wMDIyMTY3MiBMNy40NzY1MzMyNyw5Ljg1NDQzMzQ0IEw2Ljc2Njc2MzIyLDkuMTUgTDkuMzk2OTc3NzMsNi40OTk4NTk2MiBaIiBpZD0i5ZCI5bm25b2i54q2Ij48L3BhdGg+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/pagination/src/pagination.vue?vue&type=template&id=734cbb26&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "kview-paination" }, [
    _c(
      "button",
      {
        staticClass: "kview-paination__button",
        attrs: { disabled: _vm.isPrevDisabled, type: "button" },
        on: { click: _vm.onPreClik }
      },
      [_c("img", { attrs: { src: _vm.arrowLeft, alt: "left" } })]
    ),
    _c(
      "ul",
      { staticClass: "kview-paination__list" },
      _vm._l(_vm.pageCount, function(n) {
        return _c(
          "li",
          {
            key: n,
            staticClass: "kview-paination__number",
            class: _vm.currentPage === n ? "active" : "",
            on: {
              click: function($event) {
                _vm.onPageChange(n)
              }
            }
          },
          [_vm._v(_vm._s(n))]
        )
      }),
      0
    ),
    _c(
      "button",
      {
        staticClass: "kview-paination__button",
        attrs: { disabled: _vm.isNextDisabled, type: "button" },
        on: { click: _vm.onNextClick }
      },
      [_c("img", { attrs: { src: _vm.arrowRight, alt: "right" } })]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/pagination/src/pagination.vue?vue&type=template&id=734cbb26&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./packages/pagination/src/pagination.vue?vue&type=script&lang=ts&
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

var arrowLeft = __webpack_require__(21);
var arrowRight = __webpack_require__(22);
var paginationvue_type_script_lang_ts_KPagination = /** @class */ (function (_super) {
    __extends(KPagination, _super);
    function KPagination() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'KPagination';
        _this.arrowLeft = arrowLeft;
        _this.arrowRight = arrowRight;
        return _this;
    }
    Object.defineProperty(KPagination.prototype, "pageCount", {
        get: function () {
            var count = this.total / this.pageSize;
            if (count === 0)
                return 1;
            return Math.ceil(count);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KPagination.prototype, "isPrevDisabled", {
        get: function () {
            if (this.currentPage === 1)
                return true;
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KPagination.prototype, "isNextDisabled", {
        get: function () {
            if (this.currentPage === this.pageCount)
                return true;
            return false;
        },
        enumerable: false,
        configurable: true
    });
    KPagination.prototype.onPageChange = function (v) {
        this.$emit('update:currentPage', v);
    };
    KPagination.prototype.onPreClik = function () {
        if (this.isPrevDisabled)
            return;
        this.$emit('update:currentPage', this.currentPage - 1);
    };
    KPagination.prototype.onNextClick = function () {
        if (this.isNextDisabled)
            return;
        this.$emit('update:currentPage', this.currentPage + 1);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: 0 })
    ], KPagination.prototype, "total", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: 10 })
    ], KPagination.prototype, "pageSize", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: 1 })
    ], KPagination.prototype, "currentPage", void 0);
    KPagination = __decorate([
        external_vue_property_decorator_["Component"]
    ], KPagination);
    return KPagination;
}(external_vue_property_decorator_["Vue"]));
/* harmony default export */ var paginationvue_type_script_lang_ts_ = (paginationvue_type_script_lang_ts_KPagination);

// CONCATENATED MODULE: ./packages/pagination/src/pagination.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_paginationvue_type_script_lang_ts_ = (paginationvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/pagination/src/pagination.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_paginationvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/pagination/src/pagination.vue"
/* harmony default export */ var pagination = (component.exports);
// CONCATENATED MODULE: ./packages/pagination/index.ts

pagination.install = function (Vue) {
    Vue.component(pagination.name, pagination);
};
/* harmony default export */ var packages_pagination = __webpack_exports__["default"] = (pagination);


/***/ })

/******/ });