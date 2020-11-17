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

/***/ 2:
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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/number-input/src/number-input.vue?vue&type=template&id=c9e452b4&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "kview-number-input", style: _vm.styles },
    [
      _c("k-input", {
        attrs: { value: _vm.displayValue, disabled: _vm.disabled },
        on: {
          focus: _vm.handleFocus,
          blur: _vm.handleBlur,
          change: _vm.inputChange,
          input: _vm.input
        }
      }),
      _vm.unit
        ? _c("span", { staticClass: "kview-number-input__unit" }, [
            _vm._v(_vm._s(_vm.unit))
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/number-input/src/number-input.vue?vue&type=template&id=c9e452b4&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// EXTERNAL MODULE: ./src/utils/emitter.ts
var emitter = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./packages/number-input/src/number-input.vue?vue&type=script&lang=ts&
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


var number_inputvue_type_script_lang_ts_KNumberInput = /** @class */ (function (_super) {
    __extends(KNumberInput, _super);
    function KNumberInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'KNumberInput';
        _this.userInput = null;
        _this.currentValue = 0;
        _this.focused = false;
        return _this;
    }
    KNumberInput.prototype.getValue = function (value) {
        if (this.validateEvent) {
            this.dispatch('KFormItem', 'k.form.change', [value]);
        }
        var newVal = value === undefined ? value : Number(value);
        if (newVal !== undefined) {
            if (isNaN(newVal)) {
                return;
            }
            if (this.precision !== undefined) {
                newVal = this.toPrecision(newVal, this.precision);
            }
        }
        if (newVal >= this.max)
            newVal = this.max;
        if (newVal <= this.min)
            newVal = this.min;
        this.currentValue = newVal;
        this.userInput = null;
        this.$emit('input', newVal);
    };
    Object.defineProperty(KNumberInput.prototype, "styles", {
        get: function () {
            return {
                width: this.width,
                height: this.height
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KNumberInput.prototype, "numPrecision", {
        get: function () {
            var _a = this, value = _a.value, getPrecision = _a.getPrecision, precision = _a.precision;
            if (precision !== undefined) {
                return precision;
            }
            else {
                return getPrecision(value);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KNumberInput.prototype, "displayValue", {
        get: function () {
            if (this.userInput !== null) {
                return this.userInput;
            }
            var currentValue = this.currentValue;
            if (typeof currentValue === 'number') {
                if (this.precision !== undefined) {
                    currentValue = currentValue.toFixed(this.precision);
                }
            }
            return currentValue;
        },
        enumerable: false,
        configurable: true
    });
    KNumberInput.prototype.getPrecision = function (value) {
        if (value === undefined)
            return 0;
        var valueString = value.toString();
        var dotPosition = valueString.indexOf('.');
        var precision = 0;
        if (dotPosition !== -1) {
            precision = valueString.length - dotPosition - 1;
        }
        return precision;
    };
    KNumberInput.prototype.toPrecision = function (num, precision) {
        if (precision === undefined)
            precision = this.numPrecision;
        return parseFloat(Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision) + '');
    };
    KNumberInput.prototype.setCurrentValue = function (newVal) {
        var oldVal = this.currentValue;
        if (typeof newVal === 'number' && this.precision !== undefined) {
            newVal = this.toPrecision(newVal, this.precision);
        }
        if (newVal >= this.max)
            newVal = this.max;
        if (newVal <= this.min)
            newVal = this.min;
        if (oldVal === newVal)
            return;
        this.userInput = null;
        this.$emit('input', newVal);
        this.$emit('change', newVal, oldVal);
        this.currentValue = newVal;
    };
    KNumberInput.prototype.input = function (v) {
        this.userInput = v;
    };
    KNumberInput.prototype.handleFocus = function (event) {
        this.focused = true;
        this.$emit('focus', event);
    };
    KNumberInput.prototype.handleBlur = function (event) {
        this.focused = false;
        this.$emit('blur', event);
        if (this.validateEvent) {
            this.dispatch('KFormItem', 'k.form.blur', [this.value]);
        }
    };
    KNumberInput.prototype.inputChange = function (value) {
        var newVal = value === '' ? undefined : Number(value);
        if (!isNaN(newVal) || value === '') {
            this.setCurrentValue(newVal);
        }
        this.userInput = null;
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: '' })
    ], KNumberInput.prototype, "unit", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: '' })
    ], KNumberInput.prototype, "placeholder", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KNumberInput.prototype, "max", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KNumberInput.prototype, "min", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KNumberInput.prototype, "value", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: '100%' })
    ], KNumberInput.prototype, "width", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: 'auto' })
    ], KNumberInput.prototype, "height", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ validator: function (val) { return val >= 0 && val === parseInt(val, 10); } })
    ], KNumberInput.prototype, "precision", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: true })
    ], KNumberInput.prototype, "validateEvent", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KNumberInput.prototype, "disabled", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])('value', { immediate: true })
    ], KNumberInput.prototype, "getValue", null);
    KNumberInput = __decorate([
        external_vue_property_decorator_["Component"]
    ], KNumberInput);
    return KNumberInput;
}(emitter["a" /* default */]));
/* harmony default export */ var number_inputvue_type_script_lang_ts_ = (number_inputvue_type_script_lang_ts_KNumberInput);

// CONCATENATED MODULE: ./packages/number-input/src/number-input.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_number_inputvue_type_script_lang_ts_ = (number_inputvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/number-input/src/number-input.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_number_inputvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/number-input/src/number-input.vue"
/* harmony default export */ var number_input = (component.exports);
// CONCATENATED MODULE: ./packages/number-input/index.ts

number_input.install = function (Vue) {
    Vue.component(number_input.name, number_input);
};
/* harmony default export */ var packages_number_input = __webpack_exports__["default"] = (number_input);


/***/ })

/******/ });