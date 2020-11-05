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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
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

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("async-validator");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("kview-c-ui/lib/utils/emitter");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("kview-c-ui/lib/utils/util");

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/src/form-item.vue?vue&type=template&id=b6f3db6c&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "kview-from-item", style: _vm.styles }, [
    _c(
      "span",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isRequired || _vm.required,
            expression: "isRequired || required"
          }
        ],
        staticClass: "kview-from-item__require"
      },
      [_vm._v("*")]
    ),
    _c("div", { staticClass: "kview-from-item__title" }, [
      _c("div", { staticClass: "kview-from-item__label" }, [
        _c("span", [_vm._v(_vm._s(_vm.label))])
      ])
    ]),
    _c(
      "div",
      { staticClass: "kview-from-item__component" },
      [_vm._t("default")],
      2
    ),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.validateMessage,
            expression: "validateMessage"
          }
        ],
        staticClass: "kview-from-item__tip"
      },
      [
        _c("span", {
          staticClass: "kview-from-item__icon iconfont kview-icon-error"
        }),
        _c("span", [_vm._v(_vm._s(_vm.validateMessage))])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/form/src/form-item.vue?vue&type=template&id=b6f3db6c&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// EXTERNAL MODULE: external "async-validator"
var external_async_validator_ = __webpack_require__(15);
var external_async_validator_default = /*#__PURE__*/__webpack_require__.n(external_async_validator_);

// EXTERNAL MODULE: external "kview-c-ui/lib/utils/util"
var util_ = __webpack_require__(4);

// EXTERNAL MODULE: external "kview-c-ui/lib/utils/emitter"
var emitter_ = __webpack_require__(2);
var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/src/form-item.vue?vue&type=script&lang=ts&
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




var form_itemvue_type_script_lang_ts_KFormItem = /** @class */ (function (_super) {
    __extends(KFormItem, _super);
    function KFormItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'KFormItem';
        _this.componentName = 'KFormItem';
        _this.kFormItem = _this;
        _this.validateState = '';
        _this.isNested = false;
        _this.validateDisabled = false;
        _this.validateMessage = '';
        return _this;
    }
    KFormItem.prototype.getValidateStatus = function (value) {
        this.validateState = value;
    };
    Object.defineProperty(KFormItem.prototype, "isRequired", {
        get: function () {
            var rules = this.getRules();
            var isRequired = false;
            if (rules && rules.length) {
                rules.every(function (rule) {
                    if (rule.required) {
                        isRequired = true;
                        return false;
                    }
                    return true;
                });
            }
            return isRequired;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KFormItem.prototype, "form", {
        get: function () {
            var parent = this.$parent;
            var parentName = parent.componentName;
            while (parentName !== 'KForm') {
                if (parentName === 'KFormItem') {
                    this.isNested = true;
                }
                parent = parent.$parent;
                parentName = parent.componentName;
            }
            return parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KFormItem.prototype, "fieldValue", {
        get: function () {
            var model = this.form.model;
            if (!model || !this.prop) {
                return;
            }
            var path = this.prop;
            if (path.indexOf(':') !== -1) {
                path = path.replace(/:/, '.');
            }
            return Object(util_["getPropByPath"])(model, path, true).v;
        },
        enumerable: false,
        configurable: true
    });
    KFormItem.prototype.validate = function (trigger, callback) {
        var _this = this;
        if (callback === void 0) { callback = function (a, b) { }; }
        this.validateDisabled = false;
        var rules = this.getFilteredRule(trigger);
        if ((!rules || rules.length === 0) && this.required === undefined) {
            callback();
            return true;
        }
        this.validateState = 'validating';
        var descriptor = {};
        if (rules && rules.length > 0) {
            rules.forEach(function (rule) {
                delete rule.trigger;
            });
        }
        descriptor[this.prop] = rules;
        var validator = new external_async_validator_default.a(descriptor);
        var model = {};
        model[this.prop] = this.fieldValue;
        validator.validate(model, { firstFields: true }, function (errors, invalidFields) {
            _this.validateState = !errors ? 'success' : 'error';
            _this.validateMessage = errors ? errors[0].message : '';
            callback(_this.validateMessage, invalidFields);
            _this.kForm && _this.kForm.$emit('validate', _this.prop, !errors, _this.validateMessage || null);
        });
    };
    KFormItem.prototype.getFilteredRule = function (trigger) {
        var rules = this.getRules();
        return rules.filter(function (rule) {
            if (!rule.trigger || trigger === '')
                return true;
            if (Array.isArray(rule.trigger)) {
                return rule.trigger.indexOf(trigger) > -1;
            }
            else {
                return rule.trigger === trigger;
            }
        }).map(function (rule) { return Object.assign({}, rule); });
    };
    KFormItem.prototype.getRules = function () {
        var formRules = this.form.rules;
        var selfRules = this.rules;
        var requiredRule = this.required !== undefined ? { required: !!this.required } : [];
        var prop = Object(util_["getPropByPath"])(formRules, this.prop || '');
        formRules = formRules ? (prop.o[this.prop || ''] || prop.v) : [];
        return [].concat(selfRules || formRules || []).concat(requiredRule);
    };
    KFormItem.prototype.addValidateEvents = function () {
        var rules = this.getRules();
        if (rules.length || this.required !== undefined) {
            this.$on('k.form.blur', this.onFieldBlur);
            this.$on('k.form.change', this.onFieldChange);
        }
    };
    KFormItem.prototype.onFieldBlur = function () {
        this.validate('blur');
    };
    KFormItem.prototype.onFieldChange = function () {
        if (this.validateDisabled) {
            this.validateDisabled = false;
            return;
        }
        this.validate('change');
    };
    KFormItem.prototype.removeValidateEvents = function () {
        this.$off();
    };
    KFormItem.prototype.mounted = function () {
        if (this.prop) {
            this.dispatch('KForm', 'k.form.addField', [this]);
            var initialValue = this.fieldValue;
            if (Array.isArray(initialValue)) {
                initialValue = [].concat(initialValue);
            }
            Object.defineProperty(this, 'initialValue', {
                value: initialValue
            });
            this.addValidateEvents();
        }
    };
    KFormItem.prototype.resetField = function () {
        var _this = this;
        this.validateState = '';
        this.validateMessage = '';
        var model = this.form.model;
        var value = this.fieldValue;
        var path = this.prop;
        if (path.indexOf(':') !== -1) {
            path = path.replace(/:/, '.');
        }
        var prop = Object(util_["getPropByPath"])(model, path, true);
        this.validateDisabled = true;
        if (Array.isArray(value)) {
            prop.o[prop.k] = [].concat(this.initialValue);
        }
        else {
            prop.o[prop.k] = this.initialValue;
        }
        this.$nextTick(function () {
            _this.validateDisabled = false;
        });
    };
    KFormItem.prototype.beforeDestroy = function () {
        this.dispatch('KForm', 'k.form.removeField', [this]);
    };
    __decorate([
        Object(external_vue_property_decorator_["Inject"])('kForm')
    ], KFormItem.prototype, "kForm", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Provide"])('kFormItem')
    ], KFormItem.prototype, "kFormItem", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: '' })
    ], KFormItem.prototype, "label", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: undefined })
    ], KFormItem.prototype, "required", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KFormItem.prototype, "styles", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KFormItem.prototype, "prop", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KFormItem.prototype, "rules", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KFormItem.prototype, "validateStatus", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])('validateStatus')
    ], KFormItem.prototype, "getValidateStatus", null);
    KFormItem = __decorate([
        external_vue_property_decorator_["Component"]
    ], KFormItem);
    return KFormItem;
}(emitter_default.a));
/* harmony default export */ var form_itemvue_type_script_lang_ts_ = (form_itemvue_type_script_lang_ts_KFormItem);

// CONCATENATED MODULE: ./packages/form/src/form-item.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_form_itemvue_type_script_lang_ts_ = (form_itemvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/form/src/form-item.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_form_itemvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/form/src/form-item.vue"
/* harmony default export */ var form_item = (component.exports);
// CONCATENATED MODULE: ./packages/form-item/index.ts

form_item.install = function (Vue) {
    Vue.component(form_item.name, form_item);
};
/* harmony default export */ var packages_form_item = __webpack_exports__["default"] = (form_item);


/***/ })

/******/ });