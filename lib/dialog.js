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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__);
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

function broadcast(componentName, eventName, params) {
    this.$children.forEach(function (child) {
        var name = child.componentName;
        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        }
        else {
            broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}
var Emmiter = /** @class */ (function (_super) {
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
    Emmiter = __decorate([
        vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"]
    ], Emmiter);
    return Emmiter;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]));
/* harmony default export */ __webpack_exports__["a"] = (Emmiter);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (target) {
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


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ popup_manager; });

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
// CONCATENATED MODULE: ./src/utils/popup/popup-manager.ts

var hasModal = false;
var getModal = function () {
    var modalDom = PopupManager.modalDom;
    if (modalDom) {
        hasModal = true;
    }
    else {
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
    doOnModalClick: function () {
        var topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
        if (!topItem)
            return;
        var instance = PopupManager.getInstance(topItem.id);
        if (instance && instance.closeOnClickModal) {
            instance.close();
        }
    },
    openModal: function (id, zIndex, dom, modalClass, modalFade) {
        if (!id || zIndex === undefined)
            return;
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
            classArr.forEach(function (item) { return addClass(modalDom, item); });
        }
        setTimeout(function () {
            removeClass(modalDom, 'v-modal-enter');
        }, 200);
        if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
            dom.parentNode.appendChild(modalDom);
        }
        else {
            document.body.appendChild(modalDom);
        }
        if (zIndex) {
            modalDom.style.zIndex = zIndex;
        }
        modalDom.tabIndex = 0;
        modalDom.style.display = '';
        this.modalStack.push({ id: id, zIndex: zIndex, modalClass: modalClass });
    },
    getInstance: function (id) {
        return instances[id];
    },
    register: function (id, instance) {
        if (id && instance) {
            instances[id] = instance;
        }
    },
    deregister: function (id) {
        if (id) {
            instances[id] = null;
            delete instances[id];
        }
    },
    nextZIndex: function () {
        return PopupManager.zIndex++;
    },
    closeModal: function (id) {
        var modalStack = this.modalStack;
        var modalDom = getModal();
        if (modalStack.length > 0) {
            var topItem = modalStack[modalStack.length - 1];
            if (topItem.id === id) {
                if (topItem.modalClass) {
                    var classArr = topItem.modalClass.trim().split(/\s+/);
                    classArr.forEach(function (item) { return removeClass(modalDom, item); });
                }
                modalStack.pop();
                if (modalStack.length > 0) {
                    modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
                }
            }
            else {
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
// EXTERNAL MODULE: ./src/utils/emitter.ts
var emitter = __webpack_require__(2);

// EXTERNAL MODULE: ./src/utils/merge.ts
var merge = __webpack_require__(5);

// CONCATENATED MODULE: ./src/utils/popup/index.ts
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






var idSeed = 1;
var popup_scrollBarWidth;
var popup_Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
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
            if (this._opening)
                return;
            if (!this.rendered) {
                this.rendered = true;
                external_vue_property_decorator_["Vue"].nextTick(function () {
                    _this.open();
                });
            }
            else {
                this.open();
            }
        }
        else {
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
            removeClass(document.body, 'kviewpopup-parent--hidden');
        }
        this.withoutHiddenClass = true;
    };
    Popup.prototype.open = function (options) {
        var _this = this;
        if (!this.rendered) {
            this.rendered = true;
        }
        var props = Object(merge["a" /* default */])({}, this.$props || this, options);
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
        }
        else {
            this.doOpen(props);
        }
    };
    Popup.prototype.doOpen = function (props) {
        if (this.$isServer)
            return;
        if (this.opened)
            return;
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
                this.withoutHiddenClass = !hasClass(document.body, 'kviewpopup-parent--hidden');
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
                addClass(document.body, 'kviewpopup-parent--hidden');
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
        }
        else {
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
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: true })
    ], Popup.prototype, "modal", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: false })
    ], Popup.prototype, "visible", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: false })
    ], Popup.prototype, "modalAppendToBody", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], Popup.prototype, "closeDelay", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: true })
    ], Popup.prototype, "lockScroll", void 0);
    return Popup;
}(emitter["a" /* default */]));
/* harmony default export */ var popup = __webpack_exports__["b"] = (popup_Popup);



/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
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
      class: [_vm.center ? "kview-dialog-container--center" : ""]
    },
    [
      _c(
        "div",
        {
          staticClass: "kview-dialog",
          class: [_vm.center ? "kview-dialog--center" : "", _vm.typeClass],
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
                      _c("div", { staticClass: "kview-dialog__closeimg" }),
                      _c("span", {
                        staticClass:
                          "kview-dialog__icon iconfont kview-icon-baseline-close-px",
                        on: { click: _vm.handleClose }
                      })
                    ])
                  : _vm._e(),
                _c("div", { staticClass: "kview-dialog__title" }, [
                  _c("div", { staticClass: "kview-dialog__leftimg" }),
                  _c("div", { staticClass: "kview-dialog__txt" }, [
                    _c("span", [_vm._v(_vm._s(_vm.title))])
                  ]),
                  _c("div", { staticClass: "kview-dialog__rightimg" })
                ]),
                _c("div", { staticClass: "kview-dialog__outer" }, [
                  _c(
                    "div",
                    {
                      staticClass: "kview-dialog__outerwarn",
                      style: _vm.outerStyle
                    },
                    [
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
                    ]
                  )
                ]),
                _c("div", { staticClass: "kview-dialog__bottom" })
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

// EXTERNAL MODULE: ./src/utils/popup/index.ts + 3 modules
var popup = __webpack_require__(6);

// CONCATENATED MODULE: ./src/utils/repeatImg.ts
function repeatImg(imgSrc, width, height, offsetX, offsetY) {
    if (width === void 0) { width = 90; }
    if (height === void 0) { height = 30; }
    if (offsetX === void 0) { offsetX = 30; }
    if (offsetY === void 0) { offsetY = 0; }
    return new Promise(function (resolve, reject) {
        if (!imgSrc)
            return reject();
        var cw = document.createElement('canvas');
        cw.width = width;
        cw.height = height;
        var ctx = cw.getContext('2d');
        var img = new Image();
        img.onload = function () {
            for (var i = 0; i * offsetX <= width; i++) {
                ctx.drawImage(img, i * offsetX, offsetY);
            }
            resolve(cw.toDataURL());
        };
        img.src = imgSrc;
    });
}
/* harmony default export */ var utils_repeatImg = (repeatImg);

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



var gridWarnImg = __webpack_require__(13);
var Type;
(function (Type) {
    Type["DEFAULT"] = "default";
    Type["WARN"] = "warn";
})(Type || (Type = {}));
var dialogvue_type_script_lang_ts_KDialog = /** @class */ (function (_super) {
    __extends(KDialog, _super);
    function KDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'KDialog';
        _this.contentAnimation = false;
        _this.closed = false;
        _this.key = 0;
        _this.gridImag = null;
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
        var _this = this;
        utils_repeatImg(gridWarnImg, 1920, 52, 30, -2).then(function (data) {
            _this.gridImag = data;
        });
        if (this.visible) {
            this.rendered = true;
            this.open();
            if (this.appendToDom) {
                this.appendToDom.appendChild(this.$el);
            }
        }
    };
    Object.defineProperty(KDialog.prototype, "typeClass", {
        get: function () {
            if (this.type === Type.WARN)
                return 'kview-dialog--warn';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KDialog.prototype, "animationClass", {
        get: function () {
            return this.animation ? 'kview-scale-in-full' : '';
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
    Object.defineProperty(KDialog.prototype, "outerStyle", {
        get: function () {
            if (this.gridImag && this.type === Type.WARN) {
                return { background: 'url(' + this.gridImag + ') bottom no-repeat' };
            }
            return {};
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
        Object(external_vue_property_decorator_["Prop"])({ default: 'default' })
    ], KDialog.prototype, "type", void 0);
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
}(popup["b" /* default */]));
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