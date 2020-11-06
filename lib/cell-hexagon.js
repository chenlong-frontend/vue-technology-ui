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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/cell-hexagon/src/cell-hexagon.ts
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

620;
var cell = function (_a, _b, isHover) {
    var x = _a.x, y = _a.y;
    var fill = _b.fill, border = _b.border;
    return "\n<svg width=\"" + x + "px\" height=\"" + y + "px\" viewBox=\"0 0 " + x + " " + y + "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <defs>\n        <polygon id=\"path-1\" points=\"5.80754 0 " + (x - 5.80754) + " 0 " + x + " 5.10417887 " + x + " " + (y - 7.0183711) + " " + (x - 5.872889) + " " + y + " 5.80754 " + y + " 0 " + (y - 7.0183711) + " 0 5.08767304\"></polygon>\n        <filter x=\"-0.6%\" y=\"-6.7%\" width=\"101.1%\" height=\"113.5%\" filterUnits=\"objectBoundingBox\" id=\"filter-2\">\n            <feMorphology radius=\"1\" operator=\"erode\" in=\"SourceAlpha\" result=\"shadowSpreadInner1\"></feMorphology>\n            <feGaussianBlur stdDeviation=\"2.5\" in=\"shadowSpreadInner1\" result=\"shadowBlurInner1\"></feGaussianBlur>\n            <feOffset dx=\"0\" dy=\"0\" in=\"shadowBlurInner1\" result=\"shadowOffsetInner1\"></feOffset>\n            <feComposite in=\"shadowOffsetInner1\" in2=\"SourceAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\" result=\"shadowInnerInner1\"></feComposite>\n            <feColorMatrix values=\"0 0 0 0 0.0071923497   0 0 0 0 0.157116781   0 0 0 0 0.405429121  0 0 0 1 0\" type=\"matrix\" in=\"shadowInnerInner1\"></feColorMatrix>\n        </filter>\n    </defs>\n    <g id=\"\u753B\u677F\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"\u77E9\u5F62\">\n            <use fill-opacity=\"0.9\" fill=\"" + fill + "\" fill-rule=\"evenodd\" xlink:href=\"#path-1\"></use>\n            " + (isHover ? '<use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>' : '') + "\n            <use stroke=\"" + border + "\" stroke-width=\"1\" xlink:href=\"#path-1\"></use>\n        </g>\n    </g>\n</svg>\n";
};
var cell_hexagon_KCellHexagon = /** @class */ (function (_super) {
    __extends(KCellHexagon, _super);
    function KCellHexagon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "KCellHexagon";
        _this.size = {
            width: 0,
            height: 0
        };
        _this.isHover = false;
        _this.normal = { fill: '#162138', border: '#354C7F' };
        _this.hover = { fill: '#0F336E', border: '#5998FF' };
        return _this;
    }
    Object.defineProperty(KCellHexagon.prototype, "buttonStyle", {
        get: function () {
            return __assign(__assign({}, this.styles), { backgroundImage: "url('data:image/svg+xml;charset=utf-8," + cell({ x: this.size.width, y: this.size.height }, this.isHover ? this.hover : this.normal, this.isHover).replace(/#/g, '%23').replace(/\n/g, '%0A') + "')" });
        },
        enumerable: false,
        configurable: true
    });
    KCellHexagon.prototype.mounted = function () {
        var _a = this.$el.getBoundingClientRect(), width = _a.width, height = _a.height;
        this.size.width = this.svgWidth || width;
        this.size.height = this.svgHeight || height;
    };
    KCellHexagon.prototype.onClick = function (e) {
        this.$emit('click', e);
    };
    KCellHexagon.prototype.onMouseenter = function () {
        if (!this.hoverActive)
            return;
        this.isHover = true;
    };
    KCellHexagon.prototype.onMouseleave = function () {
        this.isHover = false;
    };
    KCellHexagon.prototype.render = function (h) {
        return h('div', {
            class: ['kview-cell-hexagon'],
            style: this.buttonStyle,
            on: {
                click: this.onClick,
                mouseenter: this.onMouseenter,
                mouseleave: this.onMouseleave
            },
        }, [
            h('div', {
                class: 'kview-cell-hexagon__content'
            }, this.$slots.default),
            this.$slots.icon && h('div', {
                class: 'kview-cell-hexagon__side',
                style: { width: this.sideWidth }
            }, this.$slots.icon)
        ]);
    };
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: function () { } })
    ], KCellHexagon.prototype, "styles", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KCellHexagon.prototype, "svgWidth", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])()
    ], KCellHexagon.prototype, "svgHeight", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: '50px' })
    ], KCellHexagon.prototype, "sideWidth", void 0);
    __decorate([
        Object(external_vue_property_decorator_["Prop"])({ default: true })
    ], KCellHexagon.prototype, "hoverActive", void 0);
    KCellHexagon = __decorate([
        external_vue_property_decorator_["Component"]
    ], KCellHexagon);
    return KCellHexagon;
}(external_vue_property_decorator_["Vue"]));
/* harmony default export */ var cell_hexagon = (cell_hexagon_KCellHexagon);

// CONCATENATED MODULE: ./packages/cell-hexagon/index.ts

cell_hexagon.install = function (Vue) {
    Vue.component(cell_hexagon.name, cell_hexagon);
};
/* harmony default export */ var packages_cell_hexagon = __webpack_exports__["default"] = (cell_hexagon);


/***/ })

/******/ });