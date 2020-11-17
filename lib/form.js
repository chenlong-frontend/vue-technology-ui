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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/src/form.vue?vue&type=template&id=a1b5ff34&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("form", { staticClass: "kview-from" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/form/src/form.vue?vue&type=template&id=a1b5ff34&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/src/form.vue?vue&type=script&lang=ts&
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

var formvue_type_script_lang_ts_KForm = /** @class */ (function (_super) {
    __extends(KForm, _super);
    function KForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'KForm';
        _this.componentName = 'KForm';
        _this.kForm = _this;
        _this.fields = [];
        _this.potentialLabelWidthArr = [];
        return _this;
    }
    KForm.prototype.getRules = function () {
        this.fields.forEach(function (field) {
            field.removeValidateEvents();
            field.addValidateEvents();
        });
    };
    KForm.prototype.created = function () {
        var _this = this;
        this.$on('k.form.addField', function (field) {
            if (field) {
                _this.fields.push(field);
            }
        });
        this.$on('k.form.removeField', function (field) {
            if (field.prop) {
                _this.fields.splice(_this.fields.indexOf(field), 1);
            }
        });
    };
    Object.defineProperty(KForm.prototype, "autoLabelWidth", {
        get: function () {
            if (!this.potentialLabelWidthArr.length)
                return 0;
            var max = Math.max.apply(Math, this.potentialLabelWidthArr);
            return max ? max + "px" : '';
        },
        enumerable: false,
        configurable: true
    });
    KForm.prototype.resetFields = function () {
        if (!this.model) {
            console.warn('[kview Warn][Form]model is required for resetFields to work.');
            return;
        }
        this.fields.forEach(function (field) {
            field.resetField();
        });
    };
    KForm.prototype.clearValidate = function (props) {
        if (props === void 0) { props = []; }
        var fields = props.length
            ? (typeof props === 'string'
                ? this.fields.filter(function (field) { return props === field.prop; })
                : this.fields.filter(function (field) { return props.indexOf(field.prop) > -1; })) : this.fields;
        fields.forEach(function (field) {
            field.clearValidate();
        });
    };
    KForm.prototype.validate = function (callback) {
        var _this = this;
        if (!this.model) {
            console.warn('[kview Warn][Form]model is required for validate to work!');
            return;
        }
        var promise;
        // if no callback, return promise
        if (typeof callback !== 'function' && window.Promise) {
            promise = new window.Promise(function (resolve, reject) {
                callback = function (valid) {
                    valid ? resolve(valid) : reject(valid);
                };
            });
        }
        var valid = true;
        var count = 0;
        // 如果需要验证的fields为空，调用验证时立刻返回callback
        if (this.fields.length === 0 && callback) {
            callback(true);
        }
        var invalidFields = {};
        this.fields.forEach(function (field) {
            field.validate('', function (message, field) {
                if (message) {
                    valid = false;
                }
                invalidFields = Object.assign({}, invalidFields, field);
                if (typeof callback === 'function' && ++count === _this.fields.length) {
                    callback(valid, invalidFields);
                }
            });
        });
        if (promise) {
            return promise;
        }
    };
    KForm.prototype.validateField = function (props, cb) {
        props = [].concat(props);
        var fields = this.fields.filter(function (field) { return props.indexOf(field.prop) !== -1; });
        if (!fields.length) {
            console.warn('[kview Warn]please pass correct props!');
            return;
        }
        fields.forEach(function (field) {
            field.validate('', cb);
        });
    };
    KForm.prototype.getLabelWidthIndex = function (width) {
        var index = this.potentialLabelWidthArr.indexOf(width);
        // it's impossible
        if (index === -1) {
            throw new Error('[KForm]unpected width ' + width);
        }
        return index;
    };
    KForm.prototype.registerLabelWidth = function (val, oldVal) {
        if (val && oldVal) {
            var index = this.getLabelWidthIndex(oldVal);
            this.potentialLabelWidthArr.splice(index, 1, val);
        }
        else if (val) {
            this.potentialLabelWidthArr.push(val);
        }
    };
    KForm.prototype.deregisterLabelWidth = function (val) {
        var index = this.getLabelWidthIndex(val);
        this.potentialLabelWidthArr.splice(index, 1);
    };
    __decorate([
        Object(external_vue_property_decorator_["Provide"])('kForm')
    ], KForm.prototype, "kForm", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KForm.prototype, "rules", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KForm.prototype, "inline", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KForm.prototype, "model", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])('rules')
    ], KForm.prototype, "getRules", null);
    KForm = __decorate([
        external_vue_property_decorator_["Component"]
    ], KForm);
    return KForm;
}(external_vue_property_decorator_["Vue"]));
/* harmony default export */ var formvue_type_script_lang_ts_ = (formvue_type_script_lang_ts_KForm);

// CONCATENATED MODULE: ./packages/form/src/form.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_formvue_type_script_lang_ts_ = (formvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/form/src/form.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_formvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/form/src/form.vue"
/* harmony default export */ var src_form = (component.exports);
// CONCATENATED MODULE: ./packages/form/index.ts

src_form.install = function (Vue) {
    Vue.component(src_form.name, src_form);
};
/* harmony default export */ var packages_form = __webpack_exports__["default"] = (src_form);


/***/ })

/******/ });