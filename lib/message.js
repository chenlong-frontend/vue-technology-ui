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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/message/src/message.vue?vue&type=template&id=71e89640&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "kview-message-fade" },
      on: { "after-leave": _vm.handleAfterLeave }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          class: [
            "kview-message",
            _vm.type ? "kview-message--" + _vm.type : ""
          ],
          style: _vm.positionStyle
        },
        [
          _vm._t("default", [
            !_vm.dangerouslyUseHTMLString
              ? _c("p", { staticClass: "kview-message__content" }, [
                  _vm._v(_vm._s(_vm.message))
                ])
              : _c("p", {
                  staticClass: "kview-message__content",
                  domProps: { innerHTML: _vm._s(_vm.message) }
                })
          ])
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/message/src/message.vue?vue&type=template&id=71e89640&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./packages/message/src/message.vue?vue&type=script&lang=ts&
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

var messagevue_type_script_lang_ts_KMessage = /** @class */ (function (_super) {
    __extends(KMessage, _super);
    function KMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'KMessage';
        _this.dangerouslyUseHTMLString = false;
        _this.message = '';
        _this.visible = false;
        _this.timer = null;
        _this.duration = 3000;
        _this.closed = false;
        _this.onClose = null;
        _this.verticalOffset = 20;
        _this.type = 'success';
        return _this;
    }
    KMessage.prototype.getClosed = function (newVal) {
        if (newVal) {
            this.visible = false;
        }
    };
    Object.defineProperty(KMessage.prototype, "positionStyle", {
        get: function () {
            return {
                'top': this.verticalOffset + "px"
            };
        },
        enumerable: false,
        configurable: true
    });
    KMessage.prototype.handleAfterLeave = function () {
        this.$destroy();
        this.$el.parentNode.removeChild(this.$el);
    };
    KMessage.prototype.clearTimer = function () {
        clearTimeout(this.timer);
    };
    KMessage.prototype.close = function () {
        this.closed = true;
        if (typeof this.onClose === 'function') {
            this.onClose(this);
        }
    };
    KMessage.prototype.startTimer = function () {
        var _this = this;
        if (this.duration > 0) {
            this.timer = setTimeout(function () {
                if (!_this.closed) {
                    _this.close();
                }
            }, this.duration);
        }
    };
    KMessage.prototype.mounted = function () {
        this.startTimer();
    };
    __decorate([
        Object(external_vue_property_decorator_["Watch"])('closed')
    ], KMessage.prototype, "getClosed", null);
    KMessage = __decorate([
        external_vue_property_decorator_["Component"]
    ], KMessage);
    return KMessage;
}(external_vue_property_decorator_["Vue"]));
/* harmony default export */ var messagevue_type_script_lang_ts_ = (messagevue_type_script_lang_ts_KMessage);

// CONCATENATED MODULE: ./packages/message/src/message.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_messagevue_type_script_lang_ts_ = (messagevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/message/src/message.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_messagevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/message/src/message.vue"
/* harmony default export */ var message = (component.exports);
// EXTERNAL MODULE: external "kview-c-ui/lib/utils/popup"
var popup_ = __webpack_require__(7);

// EXTERNAL MODULE: external "kview-c-ui/lib/utils/vdom"
var vdom_ = __webpack_require__(6);

// CONCATENATED MODULE: ./packages/message/index.ts



var instance;
var instances = [];
var seed = 1;
var Message = function (options) {
    options = options || {};
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }
    var userOnClose = options.onClose;
    var id = 'message_' + seed++;
    options.onClose = function () {
        Message.close(id, userOnClose);
    };
    instance = new message({
        data: options
    });
    instance.id = id;
    if (Object(vdom_["isVNode"])(instance.message)) {
        instance.$slots.default = [instance.message];
        instance.message = null;
    }
    instance.$mount();
    options.appendDom ? options.appendDom.appendChild(instance.$el) : document.body.appendChild(instance.$el);
    var verticalOffset = options.offset || 20;
    instances.forEach(function (item) {
        verticalOffset += item.$el.offsetHeight + 16;
    });
    instance.verticalOffset = verticalOffset;
    instance.visible = true;
    instance.$el.style.zIndex = popup_["PopupManager"].nextZIndex();
    instances.push(instance);
    return instance;
};
Message.close = function (id, userOnClose) {
    var len = instances.length;
    var index = -1;
    var removedHeight;
    for (var i = 0; i < len; i++) {
        if (id === instances[i].id) {
            removedHeight = instances[i].$el.offsetHeight;
            index = i;
            if (typeof userOnClose === 'function') {
                userOnClose(instances[i]);
            }
            instances.splice(i, 1);
            break;
        }
    }
    if (len <= 1 || index === -1 || index > instances.length - 1)
        return;
    for (var i = index; i < len - 1; i++) {
        var dom = instances[i].$el;
        dom.style['top'] =
            parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px';
    }
};
Message.closeAll = function () {
    for (var i = instances.length - 1; i >= 0; i--) {
        instances[i].close();
    }
};
/* harmony default export */ var packages_message = __webpack_exports__["default"] = (Message);


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("kview-c-ui/lib/utils/vdom");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("kview-c-ui/lib/utils/popup");

/***/ })

/******/ });