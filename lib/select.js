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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
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
/***/ (function(module, exports) {

module.exports = require("kview-c-ui/lib/utils/emitter");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = require("kview-c-ui/lib/utils/util");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("kview-c-ui/lib/utils/resize-event");

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

module.exports = require("kview-c-ui/lib/utils/vue-popper");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("kview-c-ui/lib/utils/clickoutside");

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=template&id=0e4aade6&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "clickoutside",
          rawName: "v-clickoutside",
          value: _vm.handleClose,
          expression: "handleClose"
        }
      ],
      staticClass: "kview-select",
      class: { active: _vm.visible },
      style: _vm.styles
    },
    [
      _c(
        "div",
        {
          ref: "reference",
          staticClass: "kview-select__content",
          class: { "kview-select__content--disabled": _vm.isDisabled },
          on: { click: _vm.onClick }
        },
        [
          _c("div", { staticClass: "kview-select__left" }, [
            _c("span", { staticClass: "kview-select__text" }, [
              _c("input", {
                staticClass: "kview-select__input",
                class: { "kview-select__input--disabled": _vm.isDisabled },
                attrs: {
                  disabled: _vm.isDisabled,
                  placeholder: _vm.placeholder,
                  readonly: ""
                },
                domProps: { value: _vm.selectedLabel }
              })
            ])
          ]),
          _c("div", { staticClass: "kview-select__right" }, [
            _c("span", {
              staticClass: "kview-select__arrow iconfont",
              class: _vm.visible
                ? "kview-icon-arrow_up"
                : "kview-icon-arrow_down"
            })
          ])
        ]
      ),
      _c(
        "transition",
        { attrs: { name: "kview-fade" } },
        [
          _c(
            "dropdown",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.visible,
                  expression: "visible"
                }
              ],
              ref: "popper",
              attrs: { appendToBody: _vm.appendToBody }
            },
            [
              _c(
                "ul",
                { staticClass: "kview-select__option" },
                [_vm._t("default")],
                2
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=template&id=0e4aade6&

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/selectDropdown.vue?vue&type=template&id=2e9cb0d2&
var selectDropdownvue_type_template_id_2e9cb0d2_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "kview-select-dropdown popper",
      style: { width: _vm.width }
    },
    [
      _c(
        "div",
        { staticClass: "kview-select-dropdown__container kview-scroll" },
        [_vm._t("default")],
        2
      )
    ]
  )
}
var selectDropdownvue_type_template_id_2e9cb0d2_staticRenderFns = []
selectDropdownvue_type_template_id_2e9cb0d2_render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/selectDropdown.vue?vue&type=template&id=2e9cb0d2&

// EXTERNAL MODULE: external "kview-c-ui/lib/utils/vue-popper"
var vue_popper_ = __webpack_require__(13);
var vue_popper_default = /*#__PURE__*/__webpack_require__.n(vue_popper_);

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/selectDropdown.vue?vue&type=script&lang=ts&
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


var selectDropdownvue_type_script_lang_ts_KSelectDropdown = /** @class */ (function (_super) {
    __extends(KSelectDropdown, _super);
    function KSelectDropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'KSelectDropdown';
        _this.width = '';
        _this.componentName = 'SelectDropdown';
        return _this;
    }
    Object.defineProperty(KSelectDropdown.prototype, "inputWidth", {
        get: function () {
            return this.$parent['inputWidth'];
        },
        enumerable: false,
        configurable: true
    });
    KSelectDropdown.prototype.getInputWidth = function () {
        this.width = this.$parent.$el.getBoundingClientRect().width + 'px';
    };
    KSelectDropdown.prototype.mounted = function () {
        var _this = this;
        this.referenceElm = this.$parent.$refs.reference;
        this.$parent['popperElm'] = this.popperElm = this.$el;
        this.$on('updatePopper', function () {
            if (_this.$parent['visible'])
                _this.updatePopper();
        });
        this.$on('destroyPopper', this.destroyPopper);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: false })
    ], KSelectDropdown.prototype, "appendToBody", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Watch"])('inputWidth')
    ], KSelectDropdown.prototype, "getInputWidth", null);
    KSelectDropdown = __decorate([
        external_vue_property_decorator_["Component"]
    ], KSelectDropdown);
    return KSelectDropdown;
}(vue_popper_default.a));
/* harmony default export */ var selectDropdownvue_type_script_lang_ts_ = (selectDropdownvue_type_script_lang_ts_KSelectDropdown);

// CONCATENATED MODULE: ./packages/select/src/selectDropdown.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_selectDropdownvue_type_script_lang_ts_ = (selectDropdownvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/select/src/selectDropdown.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_selectDropdownvue_type_script_lang_ts_,
  selectDropdownvue_type_template_id_2e9cb0d2_render,
  selectDropdownvue_type_template_id_2e9cb0d2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/select/src/selectDropdown.vue"
/* harmony default export */ var selectDropdown = (component.exports);
// EXTERNAL MODULE: external "kview-c-ui/lib/utils/emitter"
var emitter_ = __webpack_require__(2);
var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

// EXTERNAL MODULE: external "kview-c-ui/lib/utils/util"
var util_ = __webpack_require__(4);

// EXTERNAL MODULE: external "kview-c-ui/lib/utils/resize-event"
var resize_event_ = __webpack_require__(5);

// EXTERNAL MODULE: external "kview-c-ui/lib/utils/clickoutside"
var clickoutside_ = __webpack_require__(14);
var clickoutside_default = /*#__PURE__*/__webpack_require__.n(clickoutside_);

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=script&lang=ts&
var selectvue_type_script_lang_ts_extends = (undefined && undefined.__extends) || (function () {
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
var selectvue_type_script_lang_ts_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var selectvue_type_script_lang_ts_KSelect = /** @class */ (function (_super) {
    selectvue_type_script_lang_ts_extends(KSelect, _super);
    function KSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'KSelect';
        _this.select = { value: undefined, options: [] };
        _this.componentName = 'Kselect';
        _this.visible = false;
        _this.selectedLabel = '';
        _this.inputWidth = 0;
        return _this;
    }
    KSelect.prototype.getValue = function (val, oldVal) {
        if (!Object(util_["valueEquals"])(val, oldVal)) {
            this.dispatch('KFormItem', 'k.form.change', [val]);
        }
        this.setSelected();
    };
    KSelect.prototype.getVisible = function (v) {
        if (v) {
            this.broadcast('SelectDropdown', 'updatePopper');
        }
        else {
            this.broadcast('SelectDropdown', 'destroyPopper');
        }
    };
    Object.defineProperty(KSelect.prototype, "isDisabled", {
        get: function () {
            return this.disabled || typeof this.disabled === 'string';
        },
        enumerable: false,
        configurable: true
    });
    KSelect.prototype.created = function () {
        this.$on('handleOptionClick', this.handleOptionClick);
        this.$on('setSelected', this.setSelected);
    };
    KSelect.prototype.mounted = function () {
        var _this = this;
        Object(resize_event_["addResizeListener"])(this.$el, this.handleResize);
        var reference = this.$refs.reference;
        this.$nextTick(function () {
            if (reference) {
                _this.inputWidth = reference.getBoundingClientRect().width;
            }
        });
    };
    KSelect.prototype.resetInputWidth = function () {
        var reference = this.$refs.reference;
        this.inputWidth = reference.getBoundingClientRect().width;
    };
    KSelect.prototype.handleResize = function () {
        this.resetInputWidth();
    };
    KSelect.prototype.onClick = function (e) {
        if (this.isDisabled)
            return;
        this.visible = !this.visible;
        this.$emit('visibleChange', this.visible);
    };
    KSelect.prototype.handleClose = function () {
        this.visible = false;
    };
    KSelect.prototype.setSelected = function () {
        var _this = this;
        var select = this.select.options.find(function (option) {
            return option.value === _this.value;
        });
        if (!select) {
            this.selectedLabel = '';
            this.select.value = '';
            return;
        }
        if (this.selectedLabel !== select.label)
            this.selectedLabel = select.label;
        if (this.select.value !== select.value) {
            this.select.value = select.value;
        }
    };
    KSelect.prototype.handleOptionClick = function (option, byClick) {
        if (this.select.value !== option.value && byClick) {
            this.$emit('change', option.value);
        }
        this.visible = false;
        this.select.value = option.value;
        this.selectedLabel = option.label;
        this.$emit('input', option.value);
    };
    KSelect.prototype.beforeDestroy = function () {
        if (this.$el && this.handleResize)
            Object(resize_event_["removeResizeListener"])(this.$el, this.handleResize);
    };
    selectvue_type_script_lang_ts_decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: true })
    ], KSelect.prototype, "appendToBody", void 0);
    selectvue_type_script_lang_ts_decorate([
        Object(external_vue_property_decorator_["Prop"])({ required: true })
    ], KSelect.prototype, "value", void 0);
    selectvue_type_script_lang_ts_decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: '请选择' })
    ], KSelect.prototype, "placeholder", void 0);
    selectvue_type_script_lang_ts_decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KSelect.prototype, "styles", void 0);
    selectvue_type_script_lang_ts_decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KSelect.prototype, "disabled", void 0);
    selectvue_type_script_lang_ts_decorate([
        Object(external_vue_property_decorator_["Provide"])('select')
    ], KSelect.prototype, "select", void 0);
    selectvue_type_script_lang_ts_decorate([
        Object(external_vue_property_decorator_["Watch"])('value')
    ], KSelect.prototype, "getValue", null);
    selectvue_type_script_lang_ts_decorate([
        Object(external_vue_property_decorator_["Watch"])('visible')
    ], KSelect.prototype, "getVisible", null);
    KSelect = selectvue_type_script_lang_ts_decorate([
        Object(external_vue_property_decorator_["Component"])({
            components: { Dropdown: selectDropdown },
            directives: {
                Clickoutside: clickoutside_default.a
            }
        })
    ], KSelect);
    return KSelect;
}(emitter_default.a));
/* harmony default export */ var selectvue_type_script_lang_ts_ = (selectvue_type_script_lang_ts_KSelect);

// CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_selectvue_type_script_lang_ts_ = (selectvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/select/src/select.vue





/* normalize component */

var select_component = Object(componentNormalizer["a" /* default */])(
  src_selectvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var select_api; }
select_component.options.__file = "packages/select/src/select.vue"
/* harmony default export */ var src_select = (select_component.exports);
// CONCATENATED MODULE: ./packages/select/index.ts

src_select.install = function (Vue) {
    Vue.component(src_select.name, src_select);
};
/* harmony default export */ var packages_select = __webpack_exports__["default"] = (src_select);


/***/ })
/******/ ]);