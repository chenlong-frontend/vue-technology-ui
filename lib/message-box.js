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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("kview-c-ui/lib/utils/merge");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("kview-c-ui/lib/utils/aria-dialog");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/message-box/src/messagebox.vue?vue&type=template&id=3abf147d&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "kview-msgbox-fade" } }, [
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
        staticClass: "kview-messagebox",
        attrs: { role: "dialog" }
      },
      [
        _c("div", { staticClass: "kview-messagebox__container" }, [
          _c("span", {
            staticClass:
              "kview-messagebox__closeicon iconfont kview-icon-baseline-close-px",
            on: {
              click: function($event) {
                _vm.handleAction("close")
              }
            }
          }),
          _c("div", { staticClass: "kview-messagebox__title" }, [
            _c("span", {
              staticClass: "kview-messagebox__warnicon iconfont kview-icon-warn"
            }),
            _c("span", { staticClass: "kview-messagebox__titletext" }, [
              _vm._v(_vm._s(_vm.title))
            ])
          ]),
          _c("div", [
            _c("p", { staticClass: "kview-messagebox__contenttext" }, [
              _vm._v(_vm._s(_vm.message))
            ])
          ]),
          _c("div", { staticClass: "kview-messagebox__footer" }, [
            _c(
              "div",
              { staticClass: "kview-messagebox__footerbtns" },
              [
                _c(
                  "k-button",
                  {
                    attrs: { type: "warn", styles: { marginRight: "18px" } },
                    on: {
                      click: function($event) {
                        _vm.handleAction("cancel")
                      }
                    }
                  },
                  [_vm._v("取消")]
                ),
                _c(
                  "k-button",
                  {
                    ref: "confirm",
                    on: {
                      click: function($event) {
                        _vm.handleAction("confirm")
                      }
                    }
                  },
                  [_vm._v("确认")]
                )
              ],
              1
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/message-box/src/messagebox.vue?vue&type=template&id=3abf147d&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// EXTERNAL MODULE: external "kview-c-ui/lib/utils/popup"
var popup_ = __webpack_require__(7);
var popup_default = /*#__PURE__*/__webpack_require__.n(popup_);

// EXTERNAL MODULE: external "kview-c-ui/lib/utils/aria-dialog"
var aria_dialog_ = __webpack_require__(12);
var aria_dialog_default = /*#__PURE__*/__webpack_require__.n(aria_dialog_);

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./packages/message-box/src/messagebox.vue?vue&type=script&lang=ts&
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



var messageBox;
var messageboxvue_type_script_lang_ts_Messagebox = /** @class */ (function (_super) {
    __extends(Messagebox, _super);
    function Messagebox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uid = 1;
        _this.focusAfterClosed = null;
        _this.action = '';
        return _this;
    }
    Messagebox.prototype.getVisible = function (val) {
        var _this = this;
        this.watchVisible(val);
        if (val) {
            this.uid++;
            if (this.$type === 'confirm') {
                this.$nextTick(function () {
                    var confirm = _this.$refs.confirm;
                    confirm.$el.focus();
                });
            }
            this.focusAfterClosed = document.activeElement;
            messageBox = new aria_dialog_default.a(this.$el, this.focusAfterClosed, this.getFirstFocus());
        }
    };
    Messagebox.prototype.getFirstFocus = function () {
        var btn = this.$el;
        return btn;
    };
    Messagebox.prototype.doClose = function () {
        var _this = this;
        if (!this.visible)
            return;
        this.visible = false;
        this._closing = true;
        messageBox.closeDialog(); // 解绑
        if (this.lockScroll) {
            setTimeout(this.restoreBodyStyle, 200);
        }
        this.opened = false;
        this.doAfterClose();
        setTimeout(function () {
            if (_this.action)
                _this.callback(_this.action, _this);
        });
    };
    Messagebox.prototype.handleAction = function (action) {
        this.action = action;
        this.doClose();
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: '' })
    ], Messagebox.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: '' })
    ], Messagebox.prototype, "message", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])('visible')
    ], Messagebox.prototype, "getVisible", null);
    Messagebox = __decorate([
        external_vue_property_decorator_["Component"]
    ], Messagebox);
    return Messagebox;
}(popup_default.a));
/* harmony default export */ var messageboxvue_type_script_lang_ts_ = (messageboxvue_type_script_lang_ts_Messagebox);

// CONCATENATED MODULE: ./packages/message-box/src/messagebox.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_messageboxvue_type_script_lang_ts_ = (messageboxvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/message-box/src/messagebox.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_messageboxvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/message-box/src/messagebox.vue"
/* harmony default export */ var messagebox = (component.exports);
// EXTERNAL MODULE: external "kview-c-ui/lib/utils/vdom"
var vdom_ = __webpack_require__(6);

// EXTERNAL MODULE: external "kview-c-ui/lib/utils/merge"
var merge_ = __webpack_require__(10);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge_);

// CONCATENATED MODULE: ./packages/message-box/index.ts




var currentMsg, instance;
var msgQueue = [];
var defaults = {};
var defaultCallback = function (action) {
    if (currentMsg) {
        if (currentMsg.resolve) {
            if (action === 'confirm') {
                currentMsg.resolve(action);
            }
            else if (currentMsg.reject && (action === 'cancel' || action === 'close')) {
                currentMsg.reject(action);
            }
        }
    }
};
var initInstance = function () {
    instance = new messagebox({
        el: document.createElement('div')
    });
    instance.callback = defaultCallback;
};
var showNextMsg = function () {
    if (!instance) {
        initInstance();
    }
    instance.action = '';
    if (!instance.visible || instance.closeTimer) {
        if (msgQueue.length > 0) {
            currentMsg = msgQueue.shift();
            var options = currentMsg.options;
            for (var prop in options) {
                if (options.hasOwnProperty(prop)) {
                    instance[prop] = options[prop];
                }
            }
            if (options.callback === undefined) {
                instance.callback = defaultCallback;
            }
            var oldCb_1 = instance.callback;
            instance.callback = function (action, instance) {
                oldCb_1(action, instance);
                showNextMsg();
            };
            if (Object(vdom_["isVNode"])(instance.message)) {
                instance.$slots.default = [instance.message];
                instance.message = null;
            }
            else {
                delete instance.$slots.default;
            }
            ['modal', 'showClose', 'closeOnClickModal', 'closeOnPressEscape', 'closeOnHashChange'].forEach(function (prop) {
                if (instance[prop] === undefined) {
                    instance[prop] = true;
                }
            });
            if (instance.appendDom) {
                instance.appendDom.appendChild(instance.$el);
            }
            else {
                document.body.appendChild(instance.$el);
            }
            external_vue_default.a.nextTick(function () {
                instance.visible = true;
            });
        }
    }
};
var MessageBox = function (options, callback) {
    if (typeof options === 'string' || Object(vdom_["isVNode"])(options)) {
        options = {
            message: options
        };
        if (typeof arguments[1] === 'string') {
            options.title = arguments[1];
        }
    }
    else if (options.callback && !callback) {
        callback = options.callback;
    }
    return new Promise(function (resolve, reject) {
        msgQueue.push({
            options: merge_default()({}, defaults, MessageBox.defaults, options),
            callback: callback,
            resolve: resolve,
            reject: reject
        });
        showNextMsg();
    });
};
MessageBox.defaults = {};
MessageBox.setDefaults = function (defaults) {
    MessageBox.defaults = defaults;
};
MessageBox.confirm = function (title, message, options) {
    if (typeof title === 'object') {
        options = title;
        title = '';
    }
    else if (title === undefined) {
        title = '';
    }
    return MessageBox(merge_default()({
        title: title,
        message: message,
        $type: 'confirm',
        showCancelButton: true
    }, options));
};
MessageBox.close = function () {
    instance.doClose();
    instance.visible = false;
    msgQueue = [];
    currentMsg = null;
};
/* harmony default export */ var message_box = __webpack_exports__["default"] = (MessageBox);


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