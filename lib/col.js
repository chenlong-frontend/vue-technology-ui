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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/col/src/col.ts
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

var col_KCol = /** @class */ (function (_super) {
    __extends(KCol, _super);
    function KCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'KCol';
        return _this;
    }
    Object.defineProperty(KCol.prototype, "gutter", {
        get: function () {
            var parent = this.$parent;
            while (parent && parent.componentName !== 'KRow') {
                parent = parent.$parent;
            }
            return parent ? parent.gutter : 0;
        },
        enumerable: false,
        configurable: true
    });
    KCol.prototype.render = function (h) {
        var _this = this;
        var classList = [];
        var style = { paddingLeft: null, paddingRight: null };
        if (this.gutter) {
            style.paddingLeft = this.gutter / 2 + 'px';
            style.paddingRight = style.paddingLeft;
        }
        ['span', 'offset', 'pull', 'push'].forEach(function (prop) {
            if (_this[prop] || _this[prop] === 0) {
                classList.push(prop !== 'span'
                    ? "kview-col-" + prop + "-" + _this[prop]
                    : "kview-col-" + _this[prop]);
            }
        });
        ['xs', 'sm', 'md', 'lg', 'xl'].forEach(function (size) {
            if (typeof _this[size] === 'number') {
                classList.push("kview-col-" + size + "-" + _this[size]);
            }
            else if (typeof _this[size] === 'object') {
                var props_1 = _this[size];
                Object.keys(props_1).forEach(function (prop) {
                    classList.push(prop !== 'span'
                        ? "kview-col-" + size + "-" + prop + "-" + props_1[prop]
                        : "kview-col-" + size + "-" + props_1[prop]);
                });
            }
        });
        return h(this.tag, {
            class: ['kview-col', classList],
            style: style
        }, this.$slots.default);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: 24 })
    ], KCol.prototype, "span", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: 'div' })
    ], KCol.prototype, "tag", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KCol.prototype, "offset", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KCol.prototype, "pull", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KCol.prototype, "push", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KCol.prototype, "xs", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KCol.prototype, "md", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KCol.prototype, "lg", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KCol.prototype, "xl", void 0);
    KCol = __decorate([
        external_vue_property_decorator_["Component"]
    ], KCol);
    return KCol;
}(external_vue_property_decorator_["Vue"]));
/* harmony default export */ var col = (col_KCol);
;

// CONCATENATED MODULE: ./packages/col/index.ts

col.install = function (Vue) {
    Vue.component(col.name, col);
};
/* harmony default export */ var packages_col = __webpack_exports__["default"] = (col);


/***/ })

/******/ });