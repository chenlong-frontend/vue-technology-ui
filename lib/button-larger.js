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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/button-larger/src/button-larger.ts
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Type;
(function (Type) {
    Type["default"] = "default";
})(Type || (Type = {}));
var button_larger_button = function (x, style) { return "<svg width=\"" + (346 + x) + "px\" height=\"32px\" viewBox=\"0 0 " + (346 + x) + " 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"\u7EC4\u4EF6\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" fill-opacity=\"" + style.opacity + "\"><g id=\"button/346x28/\u9ED8\u8BA4\" fill=\"" + style.fill + "\" stroke=\"" + style.stroke + "\"><g id=\"button\"><path d=\"M4.20710488,0.5 L0.5,4.20705676 L0.5,31 C0.5,31.2761424 0.723857625,31.5 1,31.5 L" + (x + 341) + ".770273,31.5 L" + (x + 345) + ".5,27.7817009 L" + (x + 345) + ".5,1 C" + (x + 345) + ".5,0.723857625 " + (x + 345) + ".276142,0.5 " + (x + 345) + ",0.5 L4.20710488,0.5 Z\" id=\"\u77E9\u5F62\u5907\u4EFD-89\"></path></g></g></g></svg>"; };
var button_larger_KButtonLarger = /** @class */ (function (_super) {
    __extends(KButtonLarger, _super);
    function KButtonLarger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "KButtonLarger";
        _this.offset = 0;
        _this.isHover = false;
        _this.normal = { opacity: 0.3, fill: '#052B5B', stroke: '#23599A' };
        _this.hover = { opacity: 0.68, fill: '#00408D', stroke: '#2B7ADA' };
        return _this;
    }
    Object.defineProperty(KButtonLarger.prototype, "typeClass", {
        get: function () {
            return 'kview-button-larger--default';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KButtonLarger.prototype, "buttonStyle", {
        get: function () {
            return __assign(__assign({}, this.styles), { backgroundImage: "url('data:image/svg+xml;charset=utf-8," + button_larger_button(this.offset, this.isHover ? this.hover : this.normal).replace(/#/g, '%23').replace(/\n/g, '%0A') + "')" });
        },
        enumerable: false,
        configurable: true
    });
    KButtonLarger.prototype.mounted = function () {
        this.ob = new window['ResizeObserver'](this.getWidth);
        this.ob.observe(this.$el);
        this.getWidth();
    };
    KButtonLarger.prototype.getWidth = function () {
        var width = this.$el.getBoundingClientRect().width;
        this.offset = width - 346;
    };
    KButtonLarger.prototype.onClick = function (e) {
        this.$emit('click', e);
    };
    KButtonLarger.prototype.onMouseenter = function () {
        this.isHover = true;
    };
    KButtonLarger.prototype.onMouseleave = function () {
        this.isHover = false;
    };
    KButtonLarger.prototype.destroyed = function () {
        this.ob.disconnect();
    };
    KButtonLarger.prototype.render = function (h) {
        return h('button', {
            class: ['kview-button-larger', this.typeClass],
            style: this.buttonStyle,
            on: {
                click: this.onClick,
                mouseenter: this.onMouseenter,
                mouseleave: this.onMouseleave
            },
        }, this.$slots.default);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: function () { } })
    ], KButtonLarger.prototype, "styles", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: 'default' })
    ], KButtonLarger.prototype, "type", void 0);
    KButtonLarger = __decorate([
        external_vue_property_decorator_["Component"]
    ], KButtonLarger);
    return KButtonLarger;
}(external_vue_property_decorator_["Vue"]));
/* harmony default export */ var button_larger = (button_larger_KButtonLarger);

// CONCATENATED MODULE: ./packages/button-larger/index.ts

button_larger.install = function (Vue) {
    Vue.component(button_larger.name, button_larger);
};
/* harmony default export */ var packages_button_larger = __webpack_exports__["default"] = (button_larger);


/***/ })

/******/ });