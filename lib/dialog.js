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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),
/* 1 */
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
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: PopupManager

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./src/utils/dom.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* istanbul ignore next */



var isServer = external_vue_default.a.prototype.$isServer;
var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = isServer ? 0 : Number(document.documentMode);

/* istanbul ignore next */
var trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */
var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

/* istanbul ignore next */
var on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};

/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};

/* istanbul ignore next */
var getStyle = ieVersion < 9 ? function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }
      default:
        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

/* istanbul ignore next */
function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if ((typeof styleName === 'undefined' ? 'undefined' : _typeof(styleName)) === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
};

var isScroll = function isScroll(el, vertical) {
  if (isServer) return;

  var determinedDirection = vertical !== null || vertical !== undefined;
  var overflow = determinedDirection ? vertical ? getStyle(el, 'overflow-y') : getStyle(el, 'overflow-x') : getStyle(el, 'overflow');

  return overflow.match(/(scroll|auto)/);
};

var getScrollContainer = function getScrollContainer(el, vertical) {
  if (isServer) return;

  var parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, vertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }

  return parent;
};

var isInContainer = function isInContainer(el, container) {
  if (isServer || !el || !container) return false;

  var elRect = el.getBoundingClientRect();
  var containerRect = void 0;

  if ([window, document, document.documentElement, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  } else {
    containerRect = container.getBoundingClientRect();
  }

  return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
};
// CONCATENATED MODULE: ./src/utils/popup/popup-manager.js

var hasModal = false;
var getModal = function getModal() {
    var modalDom = PopupManager.modalDom;
    if (modalDom) {
        hasModal = true;
    } else {
        hasModal = false;
        modalDom = document.createElement('div');
        PopupManager.modalDom = modalDom;
        modalDom.addEventListener('touchmove', function (event) {
            event.preventDefault();
            event.stopPropagation();
        });
        modalDom.addEventListener('click', function () {
            PopupManager.doOnModalClick && PopupManager.doOnModalClick();
        });
    }
    return modalDom;
};
var instances = {};
var PopupManager = {
    zIndex: 2000,
    modalDom: null,
    modalStack: [],
    doOnModalClick: function doOnModalClick() {
        var topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
        if (!topItem) return;
        var instance = PopupManager.getInstance(topItem.id);
        if (instance && instance.closeOnClickModal) {
            instance.close();
        }
    },
    openModal: function openModal(id, zIndex, dom, modalClass, modalFade) {
        if (!id || zIndex === undefined) return;
        this.modalFade = modalFade;
        var modalStack = this.modalStack;
        for (var i = 0, j = modalStack.length; i < j; i++) {
            var item = modalStack[i];
            if (item.id === id) {
                return;
            }
        }
        var modalDom = getModal();
        addClass(modalDom, 'v-modal');
        if (this.modalFade && !hasModal) {
            addClass(modalDom, 'v-modal-enter');
        }
        if (modalClass) {
            var classArr = modalClass.trim().split(/\s+/);
            classArr.forEach(function (item) {
                return addClass(modalDom, item);
            });
        }
        setTimeout(function () {
            removeClass(modalDom, 'v-modal-enter');
        }, 200);
        if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
            dom.parentNode.appendChild(modalDom);
        } else {
            document.body.appendChild(modalDom);
        }
        if (zIndex) {
            modalDom.style.zIndex = zIndex;
        }
        modalDom.tabIndex = 0;
        modalDom.style.display = '';
        this.modalStack.push({ id: id, zIndex: zIndex, modalClass: modalClass });
    },
    getInstance: function getInstance(id) {
        return instances[id];
    },
    register: function register(id, instance) {
        if (id && instance) {
            instances[id] = instance;
        }
    },
    deregister: function deregister(id) {
        if (id) {
            instances[id] = null;
            delete instances[id];
        }
    },
    nextZIndex: function nextZIndex() {
        return PopupManager.zIndex++;
    },
    closeModal: function closeModal(id) {
        var modalStack = this.modalStack;
        var modalDom = getModal();
        if (modalStack.length > 0) {
            var topItem = modalStack[modalStack.length - 1];
            if (topItem.id === id) {
                if (topItem.modalClass) {
                    var classArr = topItem.modalClass.trim().split(/\s+/);
                    classArr.forEach(function (item) {
                        return removeClass(modalDom, item);
                    });
                }
                modalStack.pop();
                if (modalStack.length > 0) {
                    modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
                }
            } else {
                for (var i = modalStack.length - 1; i >= 0; i--) {
                    if (modalStack[i].id === id) {
                        modalStack.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
};
/* harmony default export */ var popup_manager = (PopupManager);
// CONCATENATED MODULE: ./src/utils/scrollbar-width.js


var scrollBarWidth = void 0;

/* harmony default export */ var scrollbar_width = (function () {
  if (external_vue_default.a.prototype.$isServer) return 0;
  if (scrollBarWidth !== undefined) return scrollBarWidth;

  var outer = document.createElement('div');
  outer.className = 'kview-scrollbar__wrap';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);

  var widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';

  var inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  var widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;

  return scrollBarWidth;
});;
// CONCATENATED MODULE: ./src/utils/emitter.js
var emitter_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
    if ((typeof Reflect === "undefined" ? "undefined" : emitter_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function broadcast(componentName, eventName, params) {
    this.$children.forEach(function (child) {
        var name = child.componentName;
        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}
var emitter_Emmiter = /** @class */function (_super) {
    __extends(Emmiter, _super);
    function Emmiter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Emmiter.prototype.dispatch = function (componentName, eventName, params) {
        var parent = this.$parent || this.$root;
        var name = parent.componentName;
        while (parent && (!name || name !== componentName)) {
            parent = parent.$parent;
            if (parent) {
                name = parent.componentName;
            }
        }
        if (parent) {
            parent.$emit.apply(parent, [eventName].concat(params));
        }
    };
    Emmiter.prototype.broadcast = function (componentName, eventName, params) {
        broadcast.call(this, componentName, eventName, params);
    };
    Emmiter = __decorate([external_vue_property_decorator_["Component"]], Emmiter);
    return Emmiter;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var emitter = (emitter_Emmiter);
// CONCATENATED MODULE: ./src/utils/merge.js
/* harmony default export */ var merge = (function (target) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    for (var i = 1, j = arguments.length; i < j; i++) {
        var source = arguments[i] || {};
        for (var prop in source) {
            if (source.hasOwnProperty(prop)) {
                var value = source[prop];
                if (value !== undefined) {
                    target[prop] = value;
                }
            }
        }
    }
    return target;
});
;
// CONCATENATED MODULE: ./src/utils/popup/index.js
var popup_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var popup_extends = undefined && undefined.__extends || function () {
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
var popup_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : popup_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var idSeed = 1;
var popup_scrollBarWidth;
var popup_Popup = /** @class */function (_super) {
    popup_extends(Popup, _super);
    function Popup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rendered = false;
        _this.withoutHiddenClass = true;
        _this.bodyPaddingRight = null;
        _this._closeTimer = null;
        _this._openTimer = null;
        _this.opened = false;
        _this._opening = false;
        _this._closing = false;
        _this.computedBodyPaddingRight = 0;
        return _this;
    }
    Popup.prototype.watchVisible = function (val) {
        var _this = this;
        if (val) {
            if (this._opening) return;
            if (!this.rendered) {
                this.rendered = true;
                external_vue_property_decorator_["Vue"].nextTick(function () {
                    _this.open();
                });
            } else {
                this.open();
            }
        } else {
            this.close();
        }
    };
    Popup.prototype.beforeMount = function () {
        this._popupId = 'popup-' + idSeed++;
        popup_manager.register(this._popupId, this);
    };
    Popup.prototype.beforeDestroy = function () {
        popup_manager.deregister(this._popupId);
        popup_manager.closeModal(this._popupId);
        this.restoreBodyStyle();
    };
    Popup.prototype.restoreBodyStyle = function () {
        if (this.modal && this.withoutHiddenClass) {
            document.body.style.paddingRight = this.bodyPaddingRight;
            removeClass(document.body, 'kview-popup-parent--hidden');
        }
        this.withoutHiddenClass = true;
    };
    Popup.prototype.open = function (options) {
        var _this = this;
        if (!this.rendered) {
            this.rendered = true;
        }
        var props = merge({}, this.$props || this, options);
        if (this._closeTimer) {
            clearTimeout(this._closeTimer);
            this._closeTimer = null;
        }
        clearTimeout(this._openTimer);
        var openDelay = Number(props.openDelay);
        if (openDelay > 0) {
            this._openTimer = setTimeout(function () {
                _this._openTimer = null;
                _this.doOpen(props);
            }, openDelay);
        } else {
            this.doOpen(props);
        }
    };
    Popup.prototype.doOpen = function (props) {
        if (this.$isServer) return;
        if (this.opened) return;
        this._opening = true;
        var dom = this.$el;
        var modal = props.modal;
        var zIndex = props.zIndex;
        if (zIndex) {
            popup_manager.zIndex = zIndex;
        }
        if (modal) {
            if (this._closing) {
                popup_manager.closeModal(this._popupId);
                this._closing = false;
            }
            popup_manager.openModal(this._popupId, popup_manager.nextZIndex(), this.modalAppendToBody ? undefined : dom, props.modalClass, props.modalFade);
            if (props.lockScroll) {
                this.withoutHiddenClass = !hasClass(document.body, 'kview-popup-parent--hidden');
                if (this.withoutHiddenClass) {
                    this.bodyPaddingRight = document.body.style.paddingRight;
                    this.computedBodyPaddingRight = parseInt(getStyle(document.body, 'paddingRight'), 10);
                }
                popup_scrollBarWidth = scrollbar_width();
                var bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
                var bodyOverflowY = getStyle(document.body, 'overflowY');
                if (popup_scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && this.withoutHiddenClass) {
                    document.body.style.paddingRight = this.computedBodyPaddingRight + popup_scrollBarWidth + 'px';
                }
                addClass(document.body, 'kview-popup-parent--hidden');
            }
        }
        if (getComputedStyle(dom).position === 'static') {
            dom.style.position = 'absolute';
        }
        dom.style.zIndex = popup_manager.nextZIndex() + '';
        this.opened = true;
        this.doAfterOpen();
    };
    Popup.prototype.doAfterOpen = function () {
        this._opening = false;
    };
    Popup.prototype.close = function () {
        var _this = this;
        if (this._openTimer !== null) {
            clearTimeout(this._openTimer);
            this._openTimer = null;
        }
        clearTimeout(this._closeTimer);
        var closeDelay = Number(this.closeDelay);
        if (closeDelay > 0) {
            this._closeTimer = setTimeout(function () {
                _this._closeTimer = null;
                _this.doClose();
            }, closeDelay);
        } else {
            this.doClose();
        }
    };
    Popup.prototype.doClose = function () {
        this._closing = true;
        if (this.lockScroll) {
            setTimeout(this.restoreBodyStyle, 200);
        }
        this.opened = false;
        this.doAfterClose();
    };
    Popup.prototype.doAfterClose = function () {
        popup_manager.closeModal(this._popupId);
        this._closing = false;
    };
    popup_decorate([Object(external_vue_property_decorator_["Prop"])({ default: true })], Popup.prototype, "modal", void 0);
    popup_decorate([Object(external_vue_property_decorator_["Prop"])({ default: false })], Popup.prototype, "visible", void 0);
    popup_decorate([Object(external_vue_property_decorator_["Prop"])({ default: false })], Popup.prototype, "modalAppendToBody", void 0);
    popup_decorate([Object(external_vue_property_decorator_["Prop"])()], Popup.prototype, "closeDelay", void 0);
    popup_decorate([Object(external_vue_property_decorator_["Prop"])({ default: true })], Popup.prototype, "lockScroll", void 0);
    return Popup;
}(emitter);
/* harmony default export */ var popup = __webpack_exports__["a"] = (popup_Popup);


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAQCAYAAACFvCj8AAAAAXNSR0IArs4c6QAAA21JREFUWAntmL1uFEkUhU9Vdff0DFjyCBASEhIRiRMewS8Bj7HxZpYDXmDDjTZZApBA5ARIkJAhwBLaCGlhWYQt/8x4pqe7fjin243MwG6OxyX1VHX99Oh+fW/VuW3AklIyqrcBs/MAZuMK2vt//urq/XFXa84qlvE+kuy+drOrdz4jbdxG2iI69Rtjkukh3nkAywW2LuD2aliTwQ08bDODaQarDTJfIOUjpEWGmDzCpQKxqBHoYPH+bcQWpkAKIm9ctY+sBPLpAoXLUcSAzFg4l2Cjh4lutYDagGQzpGAIMCJYBx8a1BcHqCugKcfw5BYEM1M4K5Tprs7NUIQRhhwcEdzIJgx9QGEiMi+gcbVAklLK6HnBwmcGdUyYk80s8CKrOcYM8SuIYphxAIRoQZCmRLFxFb8OMvyi/vPyYwILj9/efMRdMvM79MgNICqk2zIN3A8Z1i/f43eG9h8n3efVEgGxESOxErN++Guj72g83OsP+PNwjkd933ndERCTV3/jnhgtM2lB6njPLyAVFjHPECI3V8J8uHeMJ8sLVvVeLMQkOQQxalmRWS+NrLSQ9JGOdbpr4yMqqiOKHhy//YjHu1M8W1V4vd1iIBZiIjZiJFZiJnZi2IX2JqKOcr9APRwQInCURexTpu++/RePdid43j901WrZLgZiISZiI0Zi1cofshOTNoORltx+CvfuHbKDA5SpwFoTsU7ZczkkXDa8OHPMh12kJCpTQkZJ/93+ehYgE0g0Bp7bW0W7p/TA1qEcQdLtdnOLA1Njsr6O6sYN+K1NBGU2rfxRgyUQJgizIkzYkiK0gjcOcxtxxPN9jWBHBDiQSCdMa033Is4CQNlAnZgIMdK2QIgLusqMtk9o+yECDm2BI1PheBmi1rYeqYbKac/8NEGRRwy5uY44a0TPHAqi88hDRogE2a06W786aGljpI0N4SzoiXPtiyZg1ljMr66hPu2JvfXfgFSnYPYpY1khn+whl1Dn7loMmDIuXJcyau5ZSxmVEsoupYS0NdBWX+aoGZn12iU0VQmeMV1KqCjW3L60od3fqD4Jc6U9CU8RXxwwPbLMLx3slBHPP7D9R4zv3sLpB/2E7ZOjFwN+pCDESJtjRUnoKXluXWdwbyJukcsyxJbbf9krz9QYga7Up7VeF/7fJ7MfMfsC3Ge/2Je0K2gAAAAASUVORK5CYII="

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAoCAYAAAC2LgceAAAAAXNSR0IArs4c6QAADhxJREFUaAXlWlusXUUZ/mfNWmuvc6P0QksLhJsJWiiiYAmx0FZBIFxjpC/y5LsPqC8IgWDiA6+++2Ri1CZGo4ESBIPhUiIQglAuKpdCb+f0tPScvc9ee681M37fP2vtc3rBIDE0nM7pWjNr5r/NN//8c9k1IQQjnyIZY8KnIFvWJOaHv3is80k9PHjkwrByfT9sODAf3ti4LVy+RxSwhx+WcCaCZ+65b9eqpWAtdGoFJCuqkPUnwyAs+BW+8KWb8ude/LEfdNb6oyuv9gTuTAMtdYmbWgpWpzJSpT6EORP6ofT5WMd3h+JSmauPHJF6Tg7UFw0edyJj7pFHtoEwyJniZWlt6hVLwWLZAApMuGDy4KtB5Yz3dZ0nQzfMqjSUww8+8sOD1dn1yi+/XO/YeTUB82cCYGlwbuWJYOl3YoPUtUf4dyazFaAaBFMN6iwrU59byXuDAwdmTXFgDwDbKGcCYKk39iTPIlhY/ILx8C74mfOhsokZ1pL2vTP5MK1Sk6TWl6Ysi3el2CNyJgBmdj5f/vt4zzp+JxHED+fnF17/y3O7f9PrIWQlspCI7/k66UomCy6x/aQIg0IuqWXjRve7e2TZTknz22d7/pRgATMG7yzPJEsz0y/L9x9/+sWHjswemyFgIUm6qau6WDN7Y5L1yxVVudwBM5tu/bFf6ksJ9p5BLKYhpqJNkCdy2+3flc3XXCMLg/KjJ/66+6HpmWPTJsC7EtPNQ5hvASusGZST51fL1cOSupyXqn2GPRkO+lIhr6u+1IOBuKqSP/1xpzy/+wUZ7xTn37z1up+vWb3yXGPtJACdGhozlWR+ElxjpQudovtRJnv22B07JYFnLh2H4x34C/hlLr3u+yPPwo5JTII9qaFnWbFpKonNxVqLvCM333qnbNmyRfqDwaEnn3nxwUOHZg8FeFeCKYm+z/sq6XJKLlcPMxdedRe3B9xXASpkACsAqIQPpqHNCkkzAlag3JGbbrldtl6/VcrB8PBTz/39wf37Z/YbsT1JZZ6ApZL1sNFYWI6AmXWXbUeAX5wt8C0Ahu4DKHpVAu+yKfyl05E0HwdwHbnxO7fL9q3b6WFHnn725Qf2HZjedyYAZlZfunm0GuqhMCCo8wFgESh4FQBKMwBWEKwCK+SYbL/pNvn29htl0B8ce2r3yz/dt+/Qhy1gwSXdzNrucvMwc9YFVwEswhS9CxDpnEQcAliYiphfSdoRmxeSAywL78o74wrYDd++RW761s1SDsv5Z1545f69+2c+TLzp4koCMczME7Bgy/5kNVEuh1UywWYKnkR8iBm27AEHQzze1VJVTio/xKkHK2O1IMNyQVzZk2qwgBV0Qf721C7Z9cRjMtbpTG299upHLz5//YU+CZPAHYfzMFU5N2lcMdbNesWJq+QXcaUEWI5nZvQNgGligOcnKnyNZuzhncMWYgDwsLXAU5ddlLFZAGDPPvOkPLbrz1IU2cT1m6989JIL1l8EjomlgPlBMk7ARKbzdltBVV80wMxZ520axSzFirtRArcY8wXzUDgtLXOsjCmmZJZPIIbhQSzLkW/esk3uvOUOGVRV+fwrr93/z/f2v4sp3YOs+dTWXR6PcA7tG+sHq8bPqvL1U669F1O9p/HFe7kT1Z/qFgVgXcELGQ4zOUBDsLSESq6N6gGCKI/VMW4pbM6VEVsKANYBUAz6XAA2f3Ob3HXH3Ziuw+HuV/fc//Z7H/5LfFggYDiId02Gm8Qk6Ttvh+PFRFVK1xfHVoeJFYOTjKVJn0eaWtVX3ae6FW5BbIEzUxs2AqzGmxDbGb8QoFmjoQyXD7AZ30QNnmUSAMYHHpYh0HM7kXcmNeATtGuu3SJ33/09qeqqeunVNx94/Z2972Avv2Bw+IZv9rxJ+jhBDTKbVTb4uhy6kObVaQErLcdVL2+Hx0PHL70VlhUr3OUyjVm3zbeg2c7kmocVCEWJ3sWAvxj01dOIFkFk8AcxD9iKpOcMVo/UNRQoysED++XosTm5YtOVdt05q7bj2vAfh2ePzgf4JXYk1mJ/kVQeV0MuBVYZJOU4NeQQjN8CPt/Hp3UHm8rcuDobOp8ViU1hUVpNHMOW3JkF9G5h/az86t0Ncs/lEmwOsFAXQULegMMqBYYOFadlzHGAxic9kTkeAAb4gF0DMtxm+tBBmZ09Ipuu/Gqy4ZzV24fevXF45uh8Ard0IWTeSoarxQw3Fx3cynbAX4D9tDyVNwUOsZ0EA8bBGwZJfd9aVw1N1nHS25fJysnpQMDM5LrL4C70EGxEYbF6DnN8MembrqfTMc5TAhrgJty0JohlNsMhJ5tk3DIawxjHENM2XfUN2bHjXq6m/qXX3vzZ6++891ZwpjLGVybY2tlQQ4o3uJhWZafh5ROc9jCC6L7DYMK2MHA+LRGh+8Gk/fFJh/LY8CKR2namVsOzCAntJWDwFHgOaxQo5EwKH/uk/+BFKATP2liHaRXhJi/9DNnhQzMyPTODKfk1s37tmhtwo78X1zuHERNTYJ1Z8Zh+mIKJ70Dp5/sIPNmEAn0sYHgRTFIY3AI7E1LxgDDDdQInD4iqFJMBC4GZXPsl7KQIDNg0bgEGFvVPJxexYqsCpi8NcqwFZ3M7YRJcEuKiMI0eJmmHWwsuALn5yhVfl3vv/QECVmrm5uboyVT5f0mfba/G3pycuvNz1cGZ2T+89ObeX6a4FEgSP2ekmB8kvjc+WFXabPzsh8AWsYjBaCkqJ0gkivSqJmmX8WLf6U2AnRf39ExPOu+0fHh2Rt5+a4+sXXcethoFoeZ8XvLw+7M+FPe/PuwC/J8HYLWcc8GYVatXp+dvOG/TiqmJ6fc/OPh+8EmNXxvqcZPUMgG/G19zca1e1QKAvBl2hCbKIjjY6DftrOJsTFBg3cgLGcMQuxJsL2yKmYW9WIZtRYYbC9vB9Q7Pl7wby+Df2HpoavvYyB5lrTKVPqr9xEK0MjYvltmrODPaXpBiZD9Wbvzooptt5sRtYmxS7vvRT3ib8uqvf//EA1i2PjYhO5p1smNjue+lKggeADE61gSCEjHU8HB8ACt6iyYQt5efXAUjDysxuRHrXIVcJzqXOic16n3tJHVDgDcmKcGqCBSdCjoIGg3Qlxb4sTSNYIuVHJoTEmtaKi3jpf8AFfTHD8bvOLgtWsYSKAamVNIU7WkmvX5X8FsDBtWejV7nSbCZQ3x1ZZl+7FOLvQ4EqhKMgtoCzajSzQCK6NNiWEA7VjKl4wiRj0Ge9/TElT8xEneOJxYPTEMPIypxDismzpY1LxFhNm8zYCloOCTRr8lBzugP+qFmNcahggpJoMayqBWsjDxRgs4GFkk3yrWgIiI3wMG1E08kKW6AYTfaYKss/rcPzEsLfos9J/aGWZIPrEEcY++iXvyuTN2YYhE41ac2EFAqpwcxpx8hKXhEsyZXbAZIGADihiMSjKor8TDKpUOxw0wcyrSaIzrqDHEjcFrBZvBCBKMavZtgNGrRFD0EdbCsBRe/vi1yRxq1reHX1ii99TCLi4AE25vAbbHKxOYPClUXZWHJRi85pNhPhKRKfALP0rlGXUhRJTHmFkLjNuuorAni7A87QAoUWpzxFcs6gUHsEOwTGIzLHmyj4O6Yih5uTwQYVnnHH8cIAlHGCw9HBuZG0Ys19Fy2NQ0teJGcfFpiRslRlHLHYiN18QNtKeJq5rzgN3eINdjHYMfgaAepY8KNsS4C3mLu4ESm0xDBraFQjwJrE8PUaAhrbOBoc0DZWWIcXZ6doPBoEo9EpGe/xA84QqhCG66pg+B/nTBOqRPxhSLpUNQzqDKhIopSsdCidM0HCBswdfAUNq1riNgBQNboJxPNowi+KLdx2eByHXSctbD4YBB58sEmmxLRL/qV/iKPyaipyHUaQjgVI0VCaqNc9JggITF+6bxrFRKM2KJvJSUdjz7oPQUwtqqRpOWPIABMYdSgFvWRIA5L7EfU30rmYKBexwQyRyxRvk6n1p7GGmbq8ZGvNQA5RkMFQANRgMFZDnt8iniaSw0Pw2ECe2MGl9hX7EuhuVEaewnPQq/UQ7SLMAT0OuYQqow0CGDqaDUKNXKxZxq4aEs0Rm1v62gwyxCDI452nCKbFTbqVOPAS4XUxnbGKvDSpsiPFk4V/mHANYZxEPmTXUPAqR+7BZNgI1pjipVRuNZE/QTMIcxZyPWUgUc9u2H7pCwlYzN8MaMXjJSwr4vfsRrv2BHgxy6ABCOjHtWAQ2VcWWk0ZakvqFCtUVvYHgm4wLAIKuWhPtI1CW34h6T1sQUmK36oVdn6f6TAo62sifIi56LOqDC2c3jxR6Va3S4kURf1nZzwX46wkrHzjUWql3REAmk0Tg0BaWkp1CgPSrGLdL3IoBkJaDsrWxnRIH639Q2pdpIy2xbKbrkoJEohNSniS4npjVERtZBMG6Ont/ojiGiKLA0/aZUYXNTNt0rXhlO9uH5HhNmqDKqR1doFrW2qIkEjkNkIHxjKgYcy7rlaSdTdqm9I9Vu9iLTayL625ZYeDcfbgk8a0UhbAp4yR41xiipdu8VpB0xdHuyNDPBzMGJSy2MP26qm5cQM8RB4UTmn4wh6kKGKzoJKYhD/RtyUTQJkNECJ2NgYAWpFLuZsiBU0kDyRkQWUWKeVS9rYwPoYT9iAiafU5IltDQ/5VUYsKJ02kZ78qoFcSCfxNDWMPWhmt/5LQoDnhjKSYvTAogLBTARRjoBFESNvQ6UK5kvpkUVafqqnNJophMhhVisH6UnK1GQN7vyKFmhjQ63lJpBTbrPeKe1IZyRqBMLBYjeiQh7VcG6NftDY284ZNVaZUQLTaDLFuhPf/wFriavbif+ULQAAAABJRU5ErkJggg=="

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialog/src/dialog.vue?vue&type=template&id=458af334&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
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
      staticClass: "kview-dialog-container",
      class: { "kview-dialog-container--center": _vm.center }
    },
    [
      _c(
        "div",
        {
          staticClass: "kview-dialog",
          class: { "kview-dialog--center": _vm.center },
          style: _vm.styles
        },
        [
          _c("transition", { attrs: { name: _vm.animationClass } }, [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.contentAnimation || !_vm.animation,
                    expression: "contentAnimation || !animation"
                  }
                ],
                style: { width: "100%", height: _vm.height }
              },
              [
                _vm.closeBtn
                  ? _c("div", { staticClass: "kview-dialog__close" }, [
                      _c("img", { attrs: { src: _vm.closeImg } }),
                      _c("span", {
                        staticClass:
                          "kview-dialog__icon iconfont kview-icon-baseline-close-px",
                        on: { click: _vm.handleClose }
                      })
                    ])
                  : _vm._e(),
                _c("div", { staticClass: "kview-dialog__title" }, [
                  _c("img", {
                    staticClass: "kview-dialog__leftimg",
                    attrs: { src: _vm.leftImg }
                  }),
                  _c("div", { staticClass: "kview-dialog__txt" }, [
                    _c("span", [_vm._v(_vm._s(_vm.title))])
                  ]),
                  _c("img", {
                    staticClass: "kview-dialog__rightimg",
                    attrs: { src: _vm.rightImg }
                  })
                ]),
                _c("div", { staticClass: "kview-dialog__outer" }, [
                  _c(
                    "div",
                    {
                      staticClass: "kview-dialog__content",
                      style: { bottom: _vm.footer ? "47px" : "0" }
                    },
                    [_vm._t("default")],
                    2
                  ),
                  _vm.footer
                    ? _c(
                        "div",
                        { staticClass: "kview-dialog__footer" },
                        [
                          _c("k-divider"),
                          _c(
                            "div",
                            { staticClass: "kview-dialog__footer-btns" },
                            [
                              _vm.cancel
                                ? _c(
                                    "k-button",
                                    {
                                      attrs: {
                                        type: "warn",
                                        styles: { marginRight: "18px" }
                                      },
                                      on: { click: _vm.onCancel }
                                    },
                                    [_vm._v("取消")]
                                  )
                                : _vm._e(),
                              _vm.confirm
                                ? _c(
                                    "k-button",
                                    { on: { click: _vm.onConfirm } },
                                    [_vm._v("确认")]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ]),
                _c("img", {
                  staticClass: "kview-dialog__bottom",
                  attrs: { src: _vm.dialogBottomImg }
                })
              ]
            )
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/dialog/src/dialog.vue?vue&type=template&id=458af334&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// EXTERNAL MODULE: ./src/utils/popup/index.js + 5 modules
var popup = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialog/src/dialog.vue?vue&type=script&lang=ts&
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


var closeImg = __webpack_require__(16);
var dialogBottomImg = __webpack_require__(17);
var leftImg = __webpack_require__(18);
var rightImg = __webpack_require__(19);
var dialogvue_type_script_lang_ts_KDialog = /** @class */ (function (_super) {
    __extends(KDialog, _super);
    function KDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'KDialog';
        _this.contentAnimation = false;
        _this.closeImg = closeImg;
        _this.dialogBottomImg = dialogBottomImg;
        _this.leftImg = leftImg;
        _this.rightImg = rightImg;
        _this.closed = false;
        _this.key = 0;
        return _this;
    }
    KDialog.prototype.getVisible = function (val) {
        var _this = this;
        this.watchVisible(val);
        if (val) {
            this.$nextTick(function () {
                _this.contentAnimation = true;
            });
            this.closed = false;
            this.$el.addEventListener('scroll', this.updatePopper);
            this.$nextTick(function () {
                var dialogEl = _this.$refs.dialog;
                if (dialogEl)
                    dialogEl.scrollTop = 0;
            });
            if (this.appendToDom) {
                this.appendToDom.appendChild(this.$el);
            }
        }
        else {
            this.$el.removeEventListener('scroll', this.updatePopper);
            this.updatePopper();
            if (!this.closed)
                this.$emit('close');
            this.contentAnimation = false;
            if (this.destroyOnClose) {
                this.$nextTick(function () {
                    _this.key++;
                });
            }
        }
    };
    KDialog.prototype.mounted = function () {
        if (this.visible) {
            this.rendered = true;
            this.open();
            if (this.appendToDom) {
                this.appendToDom.appendChild(this.$el);
            }
        }
    };
    Object.defineProperty(KDialog.prototype, "animationClass", {
        get: function () {
            return this.animation ? 'kview-scale-in-full' : '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KDialog.prototype, "classes", {
        get: function () {
            if (this.center)
                return 'kview-dialog--center';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KDialog.prototype, "styles", {
        get: function () {
            return {
                left: this.left,
                top: this.top,
                width: this.width,
                height: this.height
            };
        },
        enumerable: false,
        configurable: true
    });
    KDialog.prototype.onCancel = function () {
        this.$emit('cancel');
    };
    KDialog.prototype.onConfirm = function () {
        this.$emit('confirm');
    };
    KDialog.prototype.handleClose = function () {
        this.$emit('close');
        this.closed = true;
    };
    KDialog.prototype.updatePopper = function () {
        this.broadcast('SelectDropdown', 'updatePopper');
    };
    KDialog.prototype.destroyed = function () {
        if (this.appendToDom && this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el);
        }
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: true })
    ], KDialog.prototype, "closeBtn", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: false })
    ], KDialog.prototype, "destroyOnClose", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KDialog.prototype, "appendToDom", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: '' })
    ], KDialog.prototype, "title", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: true })
    ], KDialog.prototype, "center", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: '50%' })
    ], KDialog.prototype, "width", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: 'auto' })
    ], KDialog.prototype, "height", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: true })
    ], KDialog.prototype, "cancel", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: true })
    ], KDialog.prototype, "confirm", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: true })
    ], KDialog.prototype, "footer", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: false })
    ], KDialog.prototype, "animation", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KDialog.prototype, "left", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KDialog.prototype, "top", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])('visible')
    ], KDialog.prototype, "getVisible", null);
    KDialog = __decorate([
        external_vue_property_decorator_["Component"]
    ], KDialog);
    return KDialog;
}(popup["a" /* default */]));
/* harmony default export */ var dialogvue_type_script_lang_ts_ = (dialogvue_type_script_lang_ts_KDialog);

// CONCATENATED MODULE: ./packages/dialog/src/dialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_dialogvue_type_script_lang_ts_ = (dialogvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/dialog/src/dialog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_dialogvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/dialog/src/dialog.vue"
/* harmony default export */ var dialog = (component.exports);
// CONCATENATED MODULE: ./packages/dialog/index.ts

dialog.install = function (Vue) {
    Vue.component(dialog.name, dialog);
};
/* harmony default export */ var packages_dialog = __webpack_exports__["default"] = (dialog);


/***/ })
/******/ ]);