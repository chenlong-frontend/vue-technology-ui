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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("kview-c-ui/lib/utils/dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("kview-c-ui/lib/utils/popup");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("kview-c-ui/lib/utils/scrollbar-width");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("throttle-debounce/debounce");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("async-validator");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA+CAYAAACcA8N6AAAAAXNSR0IArs4c6QAADRFJREFUaAXVm8uPXEcVh6uf9vgZm9iJTRLkhwxyhESIZCEiwKyQgK1Z8lqw4J+Y8Z/Bkq2dJWsgGxZgg0REQCay5VjYTmwHxsaPme6+zfedvve6u6enHzPTM0NpylW3nud3zqlf1a3brqT/g9BNqTJOTCppMnsYO+jsw21tj37Ql9dRwGIf8FmVUN9acbduNIEXgM+TJ64baBehMP+0StiV4Avggv6IeAxoN0hF+G7ATOk66ZGUMpIu7aoW9ythGgXsOvACB4eWFnTlh8SbxDeJnxI/FCVhBdA/SqnVe0qdKynV7HOJcpRQ0QsmKSA0lg+w40kB/Cpy/xtrPiACtoZgtYcp1ffnkYLa5y+Bh9woomPm9/RRCbkCVOS6wYF3TUBSAQdwLFs9AEj8uvacCPAaZq77/EZKz36Wg+0X/ipWP0UB4Ku0T+8Tf0e8TBwVmG93hKXcYlocF6/+l4hkYfXHpPt4bhMx72OAvxgntR4EYJdBF87oLhIBSvFg2BVur7C6qmtcixfAn2JprF4HeIO0SVyZBFx4AgVwLAPHRRFyAMWDYU3BYPX8nxQKd60K/AEpM4a1Bb6HCIKG7g4zr/w4pc9mlegK413qWZ2pQgORmt9Ryw8DB3CA7wdOm0YT4WF8OG/2UBCh1re3cxaj7Bj4XIjYxw8ikMBlcQSrFRYXuM/UfbrU29MLuadO6VfHs0rA/R1HFvY3mFceoWJLkuCwbE3gru+9RBi9wXPTlPV+F+tRNXv4Ff05CMkl2cX8QOQogEavPTcz3daw1AdcZl8l4oK1AjhpIwf+cKPArzEGoBr317G6gLfd7XV3GRhrlMz+OsDZu+pIG1HgxMcAX1bIWYMW/0dKCyfpeDbvPMr1t/V4K/B+Zgd0EBxbWx3Xr8vqsHsTl1/5eUqQ/+xhiTHwnEOMx7HgZbiUu/rLkm20/DBwSCyAk9bZ28PirMUmZNe5ldK9fiGnzS8xJl51BA+qsJS6d+n48ZjO2+L2AkeGdZmd+ljjWLyCF9wFBF4/ezid0qsos4Y7Z+wgXciui3d1P2CoyyOGY775BoEzsQeYCkJVHyEckwazM7PLrokFGh5mcNd7P4kXttll+nVKX2DcvRXcHU9qM2aGIiK+hQJcQxeJ1CNSL9BmvkHgElxxZh9mdq2OQE3SR5cmnNnXkxSCO4wWDzBGx4jbZ8yXPQHouT6ww/3nCh5BBpj9DhbHDUtmp979XOs/vcCb2nXyV6gfFnLcM8D3QW5HYLc2hNlmvXTYIjLKsm8SP6DzRyhgkdhvdcecG3iBDzM7a9CXlpLZmd+9uPNGSk884GCp2ttE+taJE2VzLwfkcQZp41FtyDLAH2PM/bnl8TqGGh1QxtaHYeCsPd+v66SCaiwQsdIeyiqH2csxdYeyDAVksj3CZ3/pCd25RH7YYkqsh8ATJ80z5iru01IBzNHm4NTByzKUna1ndftN1K6NZgkCp/1YZn/BGqdRDZDPsVx1H3kjDF07ioKeEfGG2jukLgXG1BtKQ5nHS15DgRXGaunurPGOLq+7TwNcTDOtr0lKKIBfRSgssS6zsz4bMHALK3cRuIIQFZBVYPvEblClzJdxj7yCE2j6G+kPiIzd/VJKx2hr85Yur7vTv02fzleJf6bNL4kXiZQj1uiwpeCZqLyGwvWqWCPe0Jgk9nHqtXjzBLJg5S5SVV30KKOCtStaEuBV2nhIIUmVQ0SWQzyfIn2P0xttDtKv5ZYG4DbW7pCPdY7Suz/F+vQdC5z6rbO8Vn+A4Lhy5S7jsvaC2bmCcv9uABAZU/MV3Jh1LjAlrGhd+xZ5lUG+ijUjtV6loARPa3vxhCN0btGmrdUZm6F77s7cGTJ0vbv7LinJ2LAllld43LG8jTkAcCTy1bSO8HGAoU0Tawd4hA9ACB6gsV4FIBVTwQI8yk0FbnS8f/X28zjEUNdCEbp85z6gT+XAJbil0NtY3FHJXJsLw8CxuGPW+KeGK5ZndizXxOKQeuzrsd1ZbwSAe71lsc0BVOV5c+tLimM1buPu5DvkW4zTYt4ObToo2h0iLF4w+7SIFHTDQeB0nobZmwh5iPaCi+to1nRcQ4M6rqYBGsCLFKCx7+MN9c84yGD9bDPMPgrkht2+AI67j2V22jVf771pad1gdd3eiYkqr5qP5eINY/CPFxyOm9z2Pu+t300xO0OtCRsGj9QTmR0rNo7zwgEI3V0GCvCAjO2Nepm9JD6e3e5ivZtXAbfpBh9smtnXIKdgQ+AFMQ2zc2A5iuBuTcHoAA3wKCPITSUUCsHakffZcg492S3WNH3GMvvbKIc2dJs9zLzmFa6f2XHpKmBqxZkdoOCNi8NDZI75TJ8aAhYnNT87xdrvL6OdhggeYJ1X/56TG9ZvUxHMTn0we7GlSXAbBa6qZgI/DHwUswsWZj+AUG8JxvVbgDSVwCzHuqEMgAVon+nrWq9BcC9g8FX6bhmzC3Y4TA1e4HSeyOwMuIDLnqaxBxtfPgKsqc96AeNENE95eEZeLsM/pWylYHYtj1JmOrMPg1zvWSEmhgL4JGYH8B4OMl9hwAUELkgt1rKTUO+5PcodU236nOcluGW8ib+XZ3aWSAdlzHRmd65pwlTgFRqCK29jRp3ZAdEA+JeZ9KhgNDepLi/GyOtm1jFpQW7hebbBK57g7v+ZF7Mrw3CY6PZLADiPcJBM3LPfwVUhuYHbmBz4KQY/QVSh4e5YzDTIjon8vFwuAfMoIupov8L7wCPaxOsp6729n0h5vKwwd5zgeN4UwdF/IIwFr5UK4Fi+uh6zcyw9gQLOMXJxShOkSgiAuK6pu0AcWV371vmMEjr3UrrPQSAuI6iYC7Mz15qwLniBs8bLlxUWom0HzuxaHKGPUvEOrivAAGs76gJcXl6e1a3Ly6ooxWutTzjYvGCMuTL7GuQUjAQvcOomMjsvJQdp+A1iE2uGcnIFxH6NAsLtBWwsXL14pv4mJPd0O5idOdcEhRoIBXCsPvbMTse9WP1bdD4M+Di5kS/fywEWr6fWOabRvG3Mo7hbRFbT9jA786wJa8Aj3QCzA7CGdeo0LG9jAOZd+3vELwIkGNx+eb5keNqZN5joGbG94SV3WUa3t5PZFWI4DLj9EgIWBIdVqncADoA1zI4ivkbHM9YB2LWtYmKdUx59LKddlOVt4oDDOl9GmR/TbluZfRi4zyV4BJyK2Vm3Z2h7AbCxrgVGdJyC6QOw9bSNMtO8/XPu4/5K+1UUMLcz+yigo8oCPMKMZXbqC5c/zh580fYqjjQYHWBeVRVbV7B+oQyB09gzfgfA19kWn5PfdmYfCT4HMsDsXiAoPEAFEsBx10MI/T1BAsabVwktDi7kQxGkxaHFY2xYPXd9r7T+SNnyTjH7KPAKGwQH2vKeXRelsTG+oAJqgXbfJ74CYM0uY0t0RbA4r+oxOs/B9iiL5ulPxE+I5W0MypzbmZ15pgoDBLcfQT14aC2YOH4pQd7fwH2byCkzXkQEHbhztKUOQBlkV1g9T29g9X/SNgiOfJv9LYAzX3xJXcyHpX851lTSb7JRlQuBCi8kEXHJKnk/H1UhJr1C1/06IM4SS3aknL9SEZFXEbRVeLc3vQa9pXtsa9cK4MWZHS3O9czOvFOF6ndodhMwhdX9nStFARzrn8FtLwjMqAIA5iemSElKhQic2K+UZdr9Fi2s7AZmV9bhUL+BwG8SH4LDI6oXiADW+gu46FkA3QaE69dQnODigbr4gat1grcQ9Jl5xvgD6TPGa1E29p59yY47ECrXYPMPsbTrHEG9bYkf+ZJvYDF/MdHAA2IrA0R4BWDjApIHXzF1BLcxb1tc1wEWF1+V2Wnbop2XkLHObTfp0/F26aF+M4zFTUIOCKH9qKblCmBa0p97gDPc3O/lcVkBIIp74HFv27RUAB7ja2kA53jcJl8y+2/o84tevy19N1e2WYPEVAbWfReic017V06SMpTAX5zJuznAOMPbCatmeEooh8cOFm6rAJTjD4JaOfD4dLzTzK68w6F+GqC4fXwyxiW7uG0X62VYL2Pdg40MfwCS+eNO3TIUEd4B4BI8Cmvzfq77twX+gDxj7ApmV+bhUHsXUCcBpZkB4hdS/9eO92zh0wDOsGJYnXKt68dC3Tisi3b8Uhp7OPWCDsvbVk/R4mxtcQ11iRQlMuTuCNVzCIO1uk+JCO6hI9NqeEG8eCBsCxArKMffvawAaoWyF+aLCJpVlLHKx0hJrs1X1NLVC+B+YNgdkF9KUTvF0gVE8uP/MhFw8WFNC7nukVge0Prh3lqdsg67QQDE8h3qwyMsx9LW6UjdfuCLPDsm5bsm1M8jEFaJ4Bb0Gs+5J2QgiA+HWNO1nl7N23EmcHcInsDiAupyMgzvIe8Pgrr3iPnYI38DR7sdD/7uzff4dIuosKa4vVbrAlACdJ1muLQEJ/vHjwG0uHXHifBAWJqlk71FOx7iB0HvM9Yi+d1mccSK8D+AF/JCiCAc0QAAAABJRU5ErkJggg=="

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version {{version}}
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

//
// Cross module loader
// Supported: Node, AMD, Browser globals
//
;(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(this, function () {

    'use strict';

    var root = window;

    // default options
    var DEFAULTS = {
        // placement of the popper
        placement: 'bottom',

        gpuAcceleration: true,

        // shift popper from its origin by the given amount of pixels (can be negative)
        offset: 0,

        // the element which will act as boundary of the popper
        boundariesElement: 'viewport',

        // amount of pixel used to define a minimum distance between the boundaries and the popper
        boundariesPadding: 5,

        // popper will try to prevent overflow following this order,
        // by default, then, it could overflow on the left and on top of the boundariesElement
        preventOverflowOrder: ['left', 'right', 'top', 'bottom'],

        // the behavior used by flip to change the placement of the popper
        flipBehavior: 'flip',

        arrowElement: '[x-arrow]',

        arrowOffset: 0,

        // list of functions used to modify the offsets before they are applied to the popper
        modifiers: ['shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],

        modifiersIgnored: [],

        forceAbsolute: false
    };

    /**
     * Create a new Popper.js instance
     * @constructor Popper
     * @param {HTMLElement} reference - The reference element used to position the popper
     * @param {HTMLElement|Object} popper
     *      The HTML element used as popper, or a configuration used to generate the popper.
     * @param {String} [popper.tagName='div'] The tag name of the generated popper.
     * @param {Array} [popper.classNames=['popper']] Array of classes to apply to the generated popper.
     * @param {Array} [popper.attributes] Array of attributes to apply, specify `attr:value` to assign a value to it.
     * @param {HTMLElement|String} [popper.parent=window.document.body] The parent element, given as HTMLElement or as query string.
     * @param {String} [popper.content=''] The content of the popper, it can be text, html, or node; if it is not text, set `contentType` to `html` or `node`.
     * @param {String} [popper.contentType='text'] If `html`, the `content` will be parsed as HTML. If `node`, it will be appended as-is.
     * @param {String} [popper.arrowTagName='div'] Same as `popper.tagName` but for the arrow element.
     * @param {Array} [popper.arrowClassNames='popper__arrow'] Same as `popper.classNames` but for the arrow element.
     * @param {String} [popper.arrowAttributes=['x-arrow']] Same as `popper.attributes` but for the arrow element.
     * @param {Object} options
     * @param {String} [options.placement=bottom]
     *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -right),
     *      left(-start, -end)`
     *
     * @param {HTMLElement|String} [options.arrowElement='[x-arrow]']
     *      The DOM Node used as arrow for the popper, or a CSS selector used to get the DOM node. It must be child of
     *      its parent Popper. Popper.js will apply to the given element the style required to align the arrow with its
     *      reference element.
     *      By default, it will look for a child node of the popper with the `x-arrow` attribute.
     *
     * @param {Boolean} [options.gpuAcceleration=true]
     *      When this property is set to true, the popper position will be applied using CSS3 translate3d, allowing the
     *      browser to use the GPU to accelerate the rendering.
     *      If set to false, the popper will be placed using `top` and `left` properties, not using the GPU.
     *
     * @param {Number} [options.offset=0]
     *      Amount of pixels the popper will be shifted (can be negative).
     *
     * @param {String|Element} [options.boundariesElement='viewport']
     *      The element which will define the boundaries of the popper position, the popper will never be placed outside
     *      of the defined boundaries (except if `keepTogether` is enabled)
     *
     * @param {Number} [options.boundariesPadding=5]
     *      Additional padding for the boundaries
     *
     * @param {Array} [options.preventOverflowOrder=['left', 'right', 'top', 'bottom']]
     *      Order used when Popper.js tries to avoid overflows from the boundaries, they will be checked in order,
     *      this means that the last ones will never overflow
     *
     * @param {String|Array} [options.flipBehavior='flip']
     *      The behavior used by the `flip` modifier to change the placement of the popper when the latter is trying to
     *      overlap its reference element. Defining `flip` as value, the placement will be flipped on
     *      its axis (`right - left`, `top - bottom`).
     *      You can even pass an array of placements (eg: `['right', 'left', 'top']` ) to manually specify
     *      how alter the placement when a flip is needed. (eg. in the above example, it would first flip from right to left,
     *      then, if even in its new placement, the popper is overlapping its reference element, it will be moved to top)
     *
     * @param {Array} [options.modifiers=[ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle']]
     *      List of functions used to modify the data before they are applied to the popper, add your custom functions
     *      to this array to edit the offsets and placement.
     *      The function should reflect the @params and @returns of preventOverflow
     *
     * @param {Array} [options.modifiersIgnored=[]]
     *      Put here any built-in modifier name you want to exclude from the modifiers list
     *      The function should reflect the @params and @returns of preventOverflow
     *
     * @param {Boolean} [options.removeOnDestroy=false]
     *      Set to true if you want to automatically remove the popper when you call the `destroy` method.
     */
    function Popper(reference, popper, options) {
        this._reference = reference.jquery ? reference[0] : reference;
        this.state = {};

        // if the popper variable is a configuration object, parse it to generate an HTMLElement
        // generate a default popper if is not defined
        var isNotDefined = typeof popper === 'undefined' || popper === null;
        var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]';
        if (isNotDefined || isConfig) {
            this._popper = this.parse(isConfig ? popper : {});
        }
        // otherwise, use the given HTMLElement as popper
        else {
                this._popper = popper.jquery ? popper[0] : popper;
            }

        // with {} we create a new object with the options inside it
        this._options = Object.assign({}, DEFAULTS, options);

        // refactoring modifiers' list
        this._options.modifiers = this._options.modifiers.map(function (modifier) {
            // remove ignored modifiers
            if (this._options.modifiersIgnored.indexOf(modifier) !== -1) return;

            // set the x-placement attribute before everything else because it could be used to add margins to the popper
            // margins needs to be calculated to get the correct popper offsets
            if (modifier === 'applyStyle') {
                this._popper.setAttribute('x-placement', this._options.placement);
            }

            // return predefined modifier identified by string or keep the custom one
            return this.modifiers[modifier] || modifier;
        }.bind(this));

        // make sure to apply the popper position before any computation
        this.state.position = this._getPosition(this._popper, this._reference);
        setStyle(this._popper, { position: this.state.position, top: 0 });

        // fire the first update to position the popper in the right place
        this.update();

        // setup event listeners, they will take care of update the position in specific situations
        this._setupEventListeners();
        return this;
    }

    //
    // Methods
    //
    /**
     * Destroy the popper
     * @method
     * @memberof Popper
     */
    Popper.prototype.destroy = function () {
        this._popper.removeAttribute('x-placement');
        this._popper.style.left = '';
        this._popper.style.position = '';
        this._popper.style.top = '';
        this._popper.style[getSupportedPropertyName('transform')] = '';
        this._removeEventListeners();

        // remove the popper if user explicity asked for the deletion on destroy
        if (this._options.removeOnDestroy) {
            this._popper.remove();
        }
        return this;
    };

    /**
     * Updates the position of the popper, computing the new offsets and applying the new style
     * @method
     * @memberof Popper
     */
    Popper.prototype.update = function () {
        var data = { instance: this, styles: {} };

        // store placement inside the data object, modifiers will be able to edit `placement` if needed
        // and refer to _originalPlacement to know the original value
        data.placement = this._options.placement;
        data._originalPlacement = this._options.placement;

        // compute the popper and reference offsets and put them inside data.offsets
        data.offsets = this._getOffsets(this._popper, this._reference, data.placement);

        // get boundaries
        data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);

        data = this.runModifiers(data, this._options.modifiers);

        if (typeof this.state.updateCallback === 'function') {
            this.state.updateCallback(data);
        }
    };

    /**
     * If a function is passed, it will be executed after the initialization of popper with as first argument the Popper instance.
     * @method
     * @memberof Popper
     * @param {Function} callback
     */
    Popper.prototype.onCreate = function (callback) {
        // the createCallbacks return as first argument the popper instance
        callback(this);
        return this;
    };

    /**
     * If a function is passed, it will be executed after each update of popper with as first argument the set of coordinates and informations
     * used to style popper and its arrow.
     * NOTE: it doesn't get fired on the first call of the `Popper.update()` method inside the `Popper` constructor!
     * @method
     * @memberof Popper
     * @param {Function} callback
     */
    Popper.prototype.onUpdate = function (callback) {
        this.state.updateCallback = callback;
        return this;
    };

    /**
     * Helper used to generate poppers from a configuration file
     * @method
     * @memberof Popper
     * @param config {Object} configuration
     * @returns {HTMLElement} popper
     */
    Popper.prototype.parse = function (config) {
        var defaultConfig = {
            tagName: 'div',
            classNames: ['popper'],
            attributes: [],
            parent: root.document.body,
            content: '',
            contentType: 'text',
            arrowTagName: 'div',
            arrowClassNames: ['popper__arrow'],
            arrowAttributes: ['x-arrow']
        };
        config = Object.assign({}, defaultConfig, config);

        var d = root.document;

        var popper = d.createElement(config.tagName);
        addClassNames(popper, config.classNames);
        addAttributes(popper, config.attributes);
        if (config.contentType === 'node') {
            popper.appendChild(config.content.jquery ? config.content[0] : config.content);
        } else if (config.contentType === 'html') {
            popper.innerHTML = config.content;
        } else {
            popper.textContent = config.content;
        }

        if (config.arrowTagName) {
            var arrow = d.createElement(config.arrowTagName);
            addClassNames(arrow, config.arrowClassNames);
            addAttributes(arrow, config.arrowAttributes);
            popper.appendChild(arrow);
        }

        var parent = config.parent.jquery ? config.parent[0] : config.parent;

        // if the given parent is a string, use it to match an element
        // if more than one element is matched, the first one will be used as parent
        // if no elements are matched, the script will throw an error
        if (typeof parent === 'string') {
            parent = d.querySelectorAll(config.parent);
            if (parent.length > 1) {
                console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used');
            }
            if (parent.length === 0) {
                throw 'ERROR: the given `parent` doesn\'t exists!';
            }
            parent = parent[0];
        }
        // if the given parent is a DOM nodes list or an array of nodes with more than one element,
        // the first one will be used as parent
        if (parent.length > 1 && parent instanceof Element === false) {
            console.warn('WARNING: you have passed as parent a list of elements, the first one will be used');
            parent = parent[0];
        }

        // append the generated popper to its parent
        parent.appendChild(popper);

        return popper;

        /**
         * Adds class names to the given element
         * @function
         * @ignore
         * @param {HTMLElement} target
         * @param {Array} classes
         */
        function addClassNames(element, classNames) {
            classNames.forEach(function (className) {
                element.classList.add(className);
            });
        }

        /**
         * Adds attributes to the given element
         * @function
         * @ignore
         * @param {HTMLElement} target
         * @param {Array} attributes
         * @example
         * addAttributes(element, [ 'data-info:foobar' ]);
         */
        function addAttributes(element, attributes) {
            attributes.forEach(function (attribute) {
                element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '');
            });
        }
    };

    /**
     * Helper used to get the position which will be applied to the popper
     * @method
     * @memberof Popper
     * @param config {HTMLElement} popper element
     * @param reference {HTMLElement} reference element
     * @returns {String} position
     */
    Popper.prototype._getPosition = function (popper, reference) {
        var container = getOffsetParent(reference);

        if (this._options.forceAbsolute) {
            return 'absolute';
        }

        // Decide if the popper will be fixed
        // If the reference element is inside a fixed context, the popper will be fixed as well to allow them to scroll together
        var isParentFixed = isFixed(reference, container);
        return isParentFixed ? 'fixed' : 'absolute';
    };

    /**
     * Get offsets to the popper
     * @method
     * @memberof Popper
     * @access private
     * @param {Element} popper - the popper element
     * @param {Element} reference - the reference element (the popper will be relative to this)
     * @returns {Object} An object containing the offsets which will be applied to the popper
     */
    Popper.prototype._getOffsets = function (popper, reference, placement) {
        placement = placement.split('-')[0];
        var popperOffsets = {};

        popperOffsets.position = this.state.position;
        var isParentFixed = popperOffsets.position === 'fixed';

        //
        // Get reference element position
        //
        var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed);

        //
        // Get popper sizes
        //
        var popperRect = getOuterSizes(popper);

        //
        // Compute offsets of popper
        //

        // depending by the popper placement we have to compute its offsets slightly differently
        if (['right', 'left'].indexOf(placement) !== -1) {
            popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;
            if (placement === 'left') {
                popperOffsets.left = referenceOffsets.left - popperRect.width;
            } else {
                popperOffsets.left = referenceOffsets.right;
            }
        } else {
            popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;
            if (placement === 'top') {
                popperOffsets.top = referenceOffsets.top - popperRect.height;
            } else {
                popperOffsets.top = referenceOffsets.bottom;
            }
        }

        // Add width and height to our offsets object
        popperOffsets.width = popperRect.width;
        popperOffsets.height = popperRect.height;

        return {
            popper: popperOffsets,
            reference: referenceOffsets
        };
    };

    /**
     * Setup needed event listeners used to update the popper position
     * @method
     * @memberof Popper
     * @access private
     */
    Popper.prototype._setupEventListeners = function () {
        // NOTE: 1 DOM access here
        this.state.updateBound = this.update.bind(this);
        root.addEventListener('resize', this.state.updateBound);
        // if the boundariesElement is window we don't need to listen for the scroll event
        if (this._options.boundariesElement !== 'window') {
            var target = getScrollParent(this._reference);
            // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
            if (target === root.document.body || target === root.document.documentElement) {
                target = root;
            }
            target.addEventListener('scroll', this.state.updateBound);
            this.state.scrollTarget = target;
        }
    };

    /**
     * Remove event listeners used to update the popper position
     * @method
     * @memberof Popper
     * @access private
     */
    Popper.prototype._removeEventListeners = function () {
        // NOTE: 1 DOM access here
        root.removeEventListener('resize', this.state.updateBound);
        if (this._options.boundariesElement !== 'window' && this.state.scrollTarget) {
            this.state.scrollTarget.removeEventListener('scroll', this.state.updateBound);
            this.state.scrollTarget = null;
        }
        this.state.updateBound = null;
    };

    /**
     * Computed the boundaries limits and return them
     * @method
     * @memberof Popper
     * @access private
     * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
     * @param {Number} padding - Boundaries padding
     * @param {Element} boundariesElement - Element used to define the boundaries
     * @returns {Object} Coordinates of the boundaries
     */
    Popper.prototype._getBoundaries = function (data, padding, boundariesElement) {
        // NOTE: 1 DOM access here
        var boundaries = {};
        var width, height;
        if (boundariesElement === 'window') {
            var body = root.document.body,
                html = root.document.documentElement;

            height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

            boundaries = {
                top: 0,
                right: width,
                bottom: height,
                left: 0
            };
        } else if (boundariesElement === 'viewport') {
            var offsetParent = getOffsetParent(this._popper);
            var scrollParent = getScrollParent(this._popper);
            var offsetParentRect = getOffsetRect(offsetParent);

            // Thanks the fucking native API, `document.body.scrollTop` & `document.documentElement.scrollTop`
            var getScrollTopValue = function getScrollTopValue(element) {
                return element == document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : element.scrollTop;
            };
            var getScrollLeftValue = function getScrollLeftValue(element) {
                return element == document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : element.scrollLeft;
            };

            // if the popper is fixed we don't have to substract scrolling from the boundaries
            var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : getScrollTopValue(scrollParent);
            var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : getScrollLeftValue(scrollParent);

            boundaries = {
                top: 0 - (offsetParentRect.top - scrollTop),
                right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
                bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
                left: 0 - (offsetParentRect.left - scrollLeft)
            };
        } else {
            if (getOffsetParent(this._popper) === boundariesElement) {
                boundaries = {
                    top: 0,
                    left: 0,
                    right: boundariesElement.clientWidth,
                    bottom: boundariesElement.clientHeight
                };
            } else {
                boundaries = getOffsetRect(boundariesElement);
            }
        }
        boundaries.left += padding;
        boundaries.right -= padding;
        boundaries.top = boundaries.top + padding;
        boundaries.bottom = boundaries.bottom - padding;
        return boundaries;
    };

    /**
     * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
     * @method
     * @memberof Popper
     * @access public
     * @param {Object} data
     * @param {Array} modifiers
     * @param {Function} ends
     */
    Popper.prototype.runModifiers = function (data, modifiers, ends) {
        var modifiersToRun = modifiers.slice();
        if (ends !== undefined) {
            modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
        }

        modifiersToRun.forEach(function (modifier) {
            if (isFunction(modifier)) {
                data = modifier.call(this, data);
            }
        }.bind(this));

        return data;
    };

    /**
     * Helper used to know if the given modifier depends from another one.
     * @method
     * @memberof Popper
     * @param {String} requesting - name of requesting modifier
     * @param {String} requested - name of requested modifier
     * @returns {Boolean}
     */
    Popper.prototype.isModifierRequired = function (requesting, requested) {
        var index = getArrayKeyIndex(this._options.modifiers, requesting);
        return !!this._options.modifiers.slice(0, index).filter(function (modifier) {
            return modifier === requested;
        }).length;
    };

    //
    // Modifiers
    //

    /**
     * Modifiers list
     * @namespace Popper.modifiers
     * @memberof Popper
     * @type {Object}
     */
    Popper.prototype.modifiers = {};

    /**
     * Apply the computed styles to the popper element
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @returns {Object} The same data object
     */
    Popper.prototype.modifiers.applyStyle = function (data) {
        // apply the final offsets to the popper
        // NOTE: 1 DOM access here
        var styles = {
            position: data.offsets.popper.position
        };

        // round top and left to avoid blurry text
        var left = Math.round(data.offsets.popper.left);
        var top = Math.round(data.offsets.popper.top);

        // if gpuAcceleration is set to true and transform is supported, we use `translate3d` to apply the position to the popper
        // we automatically use the supported prefixed version if needed
        var prefixedProperty;
        if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
            styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
            styles.top = 0;
            styles.left = 0;
        }
        // othwerise, we use the standard `left` and `top` properties
        else {
                styles.left = left;
                styles.top = top;
            }

        // any property present in `data.styles` will be applied to the popper,
        // in this way we can make the 3rd party modifiers add custom styles to it
        // Be aware, modifiers could override the properties defined in the previous
        // lines of this modifier!
        Object.assign(styles, data.styles);

        setStyle(this._popper, styles);

        // set an attribute which will be useful to style the tooltip (use it to properly position its arrow)
        // NOTE: 1 DOM access here
        this._popper.setAttribute('x-placement', data.placement);

        // if the arrow modifier is required and the arrow style has been computed, apply the arrow style
        if (this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && data.offsets.arrow) {
            setStyle(data.arrowElement, data.offsets.arrow);
        }

        return data;
    };

    /**
     * Modifier used to shift the popper on the start or end of its reference element side
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.shift = function (data) {
        var placement = data.placement;
        var basePlacement = placement.split('-')[0];
        var shiftVariation = placement.split('-')[1];

        // if shift shiftVariation is specified, run the modifier
        if (shiftVariation) {
            var reference = data.offsets.reference;
            var popper = getPopperClientRect(data.offsets.popper);

            var shiftOffsets = {
                y: {
                    start: { top: reference.top },
                    end: { top: reference.top + reference.height - popper.height }
                },
                x: {
                    start: { left: reference.left },
                    end: { left: reference.left + reference.width - popper.width }
                }
            };

            var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';

            data.offsets.popper = Object.assign(popper, shiftOffsets[axis][shiftVariation]);
        }

        return data;
    };

    /**
     * Modifier used to make sure the popper does not overflows from it's boundaries
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by `update` method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.preventOverflow = function (data) {
        var order = this._options.preventOverflowOrder;
        var popper = getPopperClientRect(data.offsets.popper);

        var check = {
            left: function left() {
                var left = popper.left;
                if (popper.left < data.boundaries.left) {
                    left = Math.max(popper.left, data.boundaries.left);
                }
                return { left: left };
            },
            right: function right() {
                var left = popper.left;
                if (popper.right > data.boundaries.right) {
                    left = Math.min(popper.left, data.boundaries.right - popper.width);
                }
                return { left: left };
            },
            top: function top() {
                var top = popper.top;
                if (popper.top < data.boundaries.top) {
                    top = Math.max(popper.top, data.boundaries.top);
                }
                return { top: top };
            },
            bottom: function bottom() {
                var top = popper.top;
                if (popper.bottom > data.boundaries.bottom) {
                    top = Math.min(popper.top, data.boundaries.bottom - popper.height);
                }
                return { top: top };
            }
        };

        order.forEach(function (direction) {
            data.offsets.popper = Object.assign(popper, check[direction]());
        });

        return data;
    };

    /**
     * Modifier used to make sure the popper is always near its reference
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.keepTogether = function (data) {
        var popper = getPopperClientRect(data.offsets.popper);
        var reference = data.offsets.reference;
        var f = Math.floor;

        if (popper.right < f(reference.left)) {
            data.offsets.popper.left = f(reference.left) - popper.width;
        }
        if (popper.left > f(reference.right)) {
            data.offsets.popper.left = f(reference.right);
        }
        if (popper.bottom < f(reference.top)) {
            data.offsets.popper.top = f(reference.top) - popper.height;
        }
        if (popper.top > f(reference.bottom)) {
            data.offsets.popper.top = f(reference.bottom);
        }

        return data;
    };

    /**
     * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
     * Requires the `preventOverflow` modifier before it in order to work.
     * **NOTE:** This modifier will run all its previous modifiers everytime it tries to flip the popper!
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.flip = function (data) {
        // check if preventOverflow is in the list of modifiers before the flip modifier.
        // otherwise flip would not work as expected.
        if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
            console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
            return data;
        }

        if (data.flipped && data.placement === data._originalPlacement) {
            // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
            return data;
        }

        var placement = data.placement.split('-')[0];
        var placementOpposite = getOppositePlacement(placement);
        var variation = data.placement.split('-')[1] || '';

        var flipOrder = [];
        if (this._options.flipBehavior === 'flip') {
            flipOrder = [placement, placementOpposite];
        } else {
            flipOrder = this._options.flipBehavior;
        }

        flipOrder.forEach(function (step, index) {
            if (placement !== step || flipOrder.length === index + 1) {
                return;
            }

            placement = data.placement.split('-')[0];
            placementOpposite = getOppositePlacement(placement);

            var popperOffsets = getPopperClientRect(data.offsets.popper);

            // this boolean is used to distinguish right and bottom from top and left
            // they need different computations to get flipped
            var a = ['right', 'bottom'].indexOf(placement) !== -1;

            // using Math.floor because the reference offsets may contain decimals we are not going to consider here
            if (a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) || !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])) {
                // we'll use this boolean to detect any flip loop
                data.flipped = true;
                data.placement = flipOrder[index + 1];
                if (variation) {
                    data.placement += '-' + variation;
                }
                data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper;

                data = this.runModifiers(data, this._options.modifiers, this._flip);
            }
        }.bind(this));
        return data;
    };

    /**
     * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
     * The offsets will shift the popper on the side of its reference element.
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.offset = function (data) {
        var offset = this._options.offset;
        var popper = data.offsets.popper;

        if (data.placement.indexOf('left') !== -1) {
            popper.top -= offset;
        } else if (data.placement.indexOf('right') !== -1) {
            popper.top += offset;
        } else if (data.placement.indexOf('top') !== -1) {
            popper.left -= offset;
        } else if (data.placement.indexOf('bottom') !== -1) {
            popper.left += offset;
        }
        return data;
    };

    /**
     * Modifier used to move the arrows on the edge of the popper to make sure them are always between the popper and the reference element
     * It will use the CSS outer size of the arrow element to know how many pixels of conjuction are needed
     * @method
     * @memberof Popper.modifiers
     * @argument {Object} data - The data object generated by _update method
     * @returns {Object} The data object, properly modified
     */
    Popper.prototype.modifiers.arrow = function (data) {
        var arrow = this._options.arrowElement;
        var arrowOffset = this._options.arrowOffset;

        // if the arrowElement is a string, suppose it's a CSS selector
        if (typeof arrow === 'string') {
            arrow = this._popper.querySelector(arrow);
        }

        // if arrow element is not found, don't run the modifier
        if (!arrow) {
            return data;
        }

        // the arrow element must be child of its popper
        if (!this._popper.contains(arrow)) {
            console.warn('WARNING: `arrowElement` must be child of its popper element!');
            return data;
        }

        // arrow depends on keepTogether in order to work
        if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
            console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
            return data;
        }

        var arrowStyle = {};
        var placement = data.placement.split('-')[0];
        var popper = getPopperClientRect(data.offsets.popper);
        var reference = data.offsets.reference;
        var isVertical = ['left', 'right'].indexOf(placement) !== -1;

        var len = isVertical ? 'height' : 'width';
        var side = isVertical ? 'top' : 'left';
        var translate = isVertical ? 'translateY' : 'translateX';
        var altSide = isVertical ? 'left' : 'top';
        var opSide = isVertical ? 'bottom' : 'right';
        var arrowSize = getOuterSizes(arrow)[len];

        //
        // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
        //

        // top/left side
        if (reference[opSide] - arrowSize < popper[side]) {
            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
        }
        // bottom/right side
        if (reference[side] + arrowSize > popper[opSide]) {
            data.offsets.popper[side] += reference[side] + arrowSize - popper[opSide];
        }

        // compute center of the popper
        var center = reference[side] + (arrowOffset || reference[len] / 2 - arrowSize / 2);

        var sideValue = center - popper[side];

        // prevent arrow from being placed not contiguously to its popper
        sideValue = Math.max(Math.min(popper[len] - arrowSize - 8, sideValue), 8);
        arrowStyle[side] = sideValue;
        arrowStyle[altSide] = ''; // make sure to remove any old style from the arrow

        data.offsets.arrow = arrowStyle;
        data.arrowElement = arrow;

        return data;
    };

    //
    // Helpers
    //

    /**
     * Get the outer sizes of the given element (offset size + margins)
     * @function
     * @ignore
     * @argument {Element} element
     * @returns {Object} object containing width and height properties
     */
    function getOuterSizes(element) {
        // NOTE: 1 DOM access here
        var _display = element.style.display,
            _visibility = element.style.visibility;
        element.style.display = 'block';element.style.visibility = 'hidden';
        var calcWidthToForceRepaint = element.offsetWidth;

        // original method
        var styles = root.getComputedStyle(element);
        var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
        var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
        var result = { width: element.offsetWidth + y, height: element.offsetHeight + x };

        // reset element styles
        element.style.display = _display;element.style.visibility = _visibility;
        return result;
    }

    /**
     * Get the opposite placement of the given one/
     * @function
     * @ignore
     * @argument {String} placement
     * @returns {String} flipped placement
     */
    function getOppositePlacement(placement) {
        var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
        return placement.replace(/left|right|bottom|top/g, function (matched) {
            return hash[matched];
        });
    }

    /**
     * Given the popper offsets, generate an output similar to getBoundingClientRect
     * @function
     * @ignore
     * @argument {Object} popperOffsets
     * @returns {Object} ClientRect like output
     */
    function getPopperClientRect(popperOffsets) {
        var offsets = Object.assign({}, popperOffsets);
        offsets.right = offsets.left + offsets.width;
        offsets.bottom = offsets.top + offsets.height;
        return offsets;
    }

    /**
     * Given an array and the key to find, returns its index
     * @function
     * @ignore
     * @argument {Array} arr
     * @argument keyToFind
     * @returns index or null
     */
    function getArrayKeyIndex(arr, keyToFind) {
        var i = 0,
            key;
        for (key in arr) {
            if (arr[key] === keyToFind) {
                return i;
            }
            i++;
        }
        return null;
    }

    /**
     * Get CSS computed property of the given element
     * @function
     * @ignore
     * @argument {Eement} element
     * @argument {String} property
     */
    function getStyleComputedProperty(element, property) {
        // NOTE: 1 DOM access here
        var css = root.getComputedStyle(element, null);
        return css[property];
    }

    /**
     * Returns the offset parent of the given element
     * @function
     * @ignore
     * @argument {Element} element
     * @returns {Element} offset parent
     */
    function getOffsetParent(element) {
        // NOTE: 1 DOM access here
        var offsetParent = element.offsetParent;
        return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent;
    }

    /**
     * Returns the scrolling parent of the given element
     * @function
     * @ignore
     * @argument {Element} element
     * @returns {Element} offset parent
     */
    function getScrollParent(element) {
        var parent = element.parentNode;

        if (!parent) {
            return element;
        }

        if (parent === root.document) {
            // Firefox puts the scrollTOp value on `documentElement` instead of `body`, we then check which of them is
            // greater than 0 and return the proper element
            if (root.document.body.scrollTop || root.document.body.scrollLeft) {
                return root.document.body;
            } else {
                return root.document.documentElement;
            }
        }

        // Firefox want us to check `-x` and `-y` variations as well
        if (['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-x')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-y')) !== -1) {
            // If the detected scrollParent is body, we perform an additional check on its parentNode
            // in this way we'll get body if the browser is Chrome-ish, or documentElement otherwise
            // fixes issue #65
            return parent;
        }
        return getScrollParent(element.parentNode);
    }

    /**
     * Check if the given element is fixed or is inside a fixed parent
     * @function
     * @ignore
     * @argument {Element} element
     * @argument {Element} customContainer
     * @returns {Boolean} answer to "isFixed?"
     */
    function isFixed(element) {
        if (element === root.document.body) {
            return false;
        }
        if (getStyleComputedProperty(element, 'position') === 'fixed') {
            return true;
        }
        return element.parentNode ? isFixed(element.parentNode) : element;
    }

    /**
     * Set the style to the given popper
     * @function
     * @ignore
     * @argument {Element} element - Element to apply the style to
     * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
     */
    function setStyle(element, styles) {
        function is_numeric(n) {
            return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
        }
        Object.keys(styles).forEach(function (prop) {
            var unit = '';
            // add unit if the value is numeric and is one of the following
            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
                unit = 'px';
            }
            element.style[prop] = styles[prop] + unit;
        });
    }

    /**
     * Check if the given variable is a function
     * @function
     * @ignore
     * @argument {*} functionToCheck - variable to check
     * @returns {Boolean} answer to: is a function?
     */
    function isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }

    /**
     * Get the position of the given element, relative to its offset parent
     * @function
     * @ignore
     * @param {Element} element
     * @return {Object} position - Coordinates of the element and its `scrollTop`
     */
    function getOffsetRect(element) {
        var elementRect = {
            width: element.offsetWidth,
            height: element.offsetHeight,
            left: element.offsetLeft,
            top: element.offsetTop
        };

        elementRect.right = elementRect.left + elementRect.width;
        elementRect.bottom = elementRect.top + elementRect.height;

        // position
        return elementRect;
    }

    /**
     * Get bounding client rect of given element
     * @function
     * @ignore
     * @param {HTMLElement} element
     * @return {Object} client rect
     */
    function getBoundingClientRect(element) {
        var rect = element.getBoundingClientRect();

        // whether the IE version is lower than 11
        var isIE = navigator.userAgent.indexOf("MSIE") != -1;

        // fix ie document bounding top always 0 bug
        var rectTop = isIE && element.tagName === 'HTML' ? -element.scrollTop : rect.top;

        return {
            left: rect.left,
            top: rectTop,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.right - rect.left,
            height: rect.bottom - rectTop
        };
    }

    /**
     * Given an element and one of its parents, return the offset
     * @function
     * @ignore
     * @param {HTMLElement} element
     * @param {HTMLElement} parent
     * @return {Object} rect
     */
    function getOffsetRectRelativeToCustomParent(element, parent, fixed) {
        var elementRect = getBoundingClientRect(element);
        var parentRect = getBoundingClientRect(parent);

        if (fixed) {
            var scrollParent = getScrollParent(parent);
            parentRect.top += scrollParent.scrollTop;
            parentRect.bottom += scrollParent.scrollTop;
            parentRect.left += scrollParent.scrollLeft;
            parentRect.right += scrollParent.scrollLeft;
        }

        var rect = {
            top: elementRect.top - parentRect.top,
            left: elementRect.left - parentRect.left,
            bottom: elementRect.top - parentRect.top + elementRect.height,
            right: elementRect.left - parentRect.left + elementRect.width,
            width: elementRect.width,
            height: elementRect.height
        };
        return rect;
    }

    /**
     * Get the prefixed supported property name
     * @function
     * @ignore
     * @argument {String} property (camelCase)
     * @returns {String} prefixed property (camelCase)
     */
    function getSupportedPropertyName(property) {
        var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];

        for (var i = 0; i < prefixes.length; i++) {
            var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;
            if (typeof root.document.body.style[toCheck] !== 'undefined') {
                return toCheck;
            }
        }
        return null;
    }

    /**
     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
     * objects to a target object. It will return the target object.
     * This polyfill doesn't support symbol properties, since ES5 doesn't have symbols anyway
     * Source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
     * @function
     * @ignore
     */
    if (!Object.assign) {
        Object.defineProperty(Object, 'assign', {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function value(target) {
                if (target === undefined || target === null) {
                    throw new TypeError('Cannot convert first argument to object');
                }

                var to = Object(target);
                for (var i = 1; i < arguments.length; i++) {
                    var nextSource = arguments[i];
                    if (nextSource === undefined || nextSource === null) {
                        continue;
                    }
                    nextSource = Object(nextSource);

                    var keysArray = Object.keys(nextSource);
                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                        var nextKey = keysArray[nextIndex];
                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== undefined && desc.enumerable) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
                return to;
            }
        });
    }

    return Popper;
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjIycHgiIGhlaWdodD0iMjJweCIgdmlld0JveD0iMCAwIDIyIDIyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjAgKDg4MTAzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8dGl0bGU+aWNvbl9yaWdodCBhcnJvdzwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9Iue7hOS7tiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJpY29uLzIyeDIyL+WQkeWPs+eureWktCI+DQogICAgICAgICAgICA8ZyBpZD0i57yW57uELTE1Ij4NCiAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiBmaWxsPSIjNTk1OTU5IiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS4xNzkzNjgxOCw2LjExMTYzMTgyIEwxMS42NjM5NjIsMTEuODc1NDEzNiBDMTEuODE1NTE2NCwxMi4wMTAxMjg2IDEyLjA0Mzg5ODYsMTIuMDEwMTI4NiAxMi4xOTU0NTMsMTEuODc1NDEzNiBMMTguNjc5MzY4Miw2LjExMTYzMTgyIEwyMi42NzEwNDY4LDYuMTExNjMxODIgQzIyLjY5OTIyMTMsNi4xMTE2MzE4MiAyMi43MjYwODg2LDYuMTIzNTE3MTEgMjIuNzQ1MDQwOCw2LjE0NDM2NDU0IEMyMi43NzI5MDM4LDYuMTc1MDEzODcgMjIuNzc4MTc1NSw2LjIxODI1MTQxIDIyLjc2MTgyOTcsNi4yNTM2Mjc1NSBMMjIuNzM4MzE0MSw2LjI4NTYyNTgzIEwxMi4xOTg3NzY2LDE1Ljg2NzAyMzUgQzEyLjA2ODAwMzYsMTUuOTg1OTA4MSAxMS44NzgxMzcyLDE2LjAwMjg5MTYgMTEuNzMwNDgwMywxNS45MTc5NzQxIEwxMS42NjA2Mzg0LDE1Ljg2NzAyMzUgTDEuMTIxMTAwOSw2LjI4NTYyNTgzIEMxLjEwMDI1MzQ2LDYuMjY2NjczNjEgMS4wODgzNjgxOCw2LjIzOTgwNjMyIDEuMDg4MzY4MTgsNi4yMTE2MzE4MiBDMS4wODgzNjgxOCw2LjE3MDIxMDQ3IDEuMTEzNTUyMTYsNi4xMzQ2NzExNSAxLjE0OTQ0MzY2LDYuMTE5NDkwMzIgTDEuMTg4MzY4MTgsNi4xMTE2MzE4MiBMNS4xNzkzNjgxOCw2LjExMTYzMTgyIFogTTE1LjY4ODI4NjEsNi4xMTE2MzE4MiBDMTUuNzE0ODA3OCw2LjExMTYzMTgyIDE1Ljc0MDI0MzIsNi4xMjIxNjc1MSAxNS43NTg5OTY4LDYuMTQwOTIxMTUgQzE1Ljc4ODI4NjEsNi4xNzAyMTA0NyAxNS43OTU2MDg1LDYuMjEzMTQ4MzMgMTUuNzgwOTYzOCw2LjI0OTI2MTkyIEwxNS43NTg5OTY4LDYuMjgyMzQyNSBMMTIuMjEyNTUwMiw5LjgyODc4OTExIEMxMi4wNzU4NjY3LDkuOTY1NDcyNjEgMTEuODY0ODc0NSw5Ljk4MjU1ODA1IDExLjcwOTYxMzgsOS44ODAwNDU0MyBMMTEuNjQ2ODY0OCw5LjgyODc4OTExIEw4LjEwMDQxODE3LDYuMjgyMzQyNSBDOC4wODE2NjQ1Myw2LjI2MzU4ODg2IDguMDcxMTI4ODQsNi4yMzgxNTM0NyA4LjA3MTEyODg0LDYuMjExNjMxODIgQzguMDcxMTI4ODQsNi4xNzAyMTA0NyA4LjA5NjMxMjgzLDYuMTM0NjcxMTUgOC4xMzIyMDQzMyw2LjExOTQ5MDMyIEw4LjE3MTEyODg0LDYuMTExNjMxODIgTDE1LjY4ODI4NjEsNi4xMTE2MzE4MiBaIiBpZD0iaWNvbl9yaWdodC1hcnJvdyIgZmlsbD0iI0ZGRURCQiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuOTI5NzA4LCAxMS4wNDEzNDApIHNjYWxlKC0xLCAxKSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTExLjkyOTcwOCwgLTExLjA0MTM0MCkgIj48L3BhdGg+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjEycHgiIGhlaWdodD0iMTJweCIgdmlld0JveD0iMCAwIDEyIDEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuNSAoNjc0NjkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT5pY29uLWFycm93bGluZTItbGVmdDwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9IjAwLeWbvuagh+iuvuiuoSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSLlm77moIflkIjpm4YtY29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc1OC4wMDAwMDAsIC01NDUuMDAwMDAwKSIgZmlsbD0iIzBDRjFGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIGlkPSJpY29uLWFycm93bGluZTItY29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzU4LjAwMDAwMCwgNTQ1LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05LjM5Njk3NzczLDYuNDk5ODU5NjIgTDAuNyw2LjQ5OTg1OTYyIEwwLjcsNS40OTk4NTk2MiBMOS4zOTIyOTg5OCw1LjQ5OTg1OTYyIEw2Ljc2Njc2MzIyLDIuODU0NDMzNDQgTDcuNDc2NTMzMjcsMi4xNSBMMTEuMjk5Nzg2LDYuMDAyMjE2NzIgTDcuNDc2NTMzMjcsOS44NTQ0MzM0NCBMNi43NjY3NjMyMiw5LjE1IEw5LjM5Njk3NzczLDYuNDk5ODU5NjIgWiIgaWQ9IuWQiOW5tuW9oueKtiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS45OTk4OTMsIDYuMDAyMjE3KSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC01Ljk5OTg5MywgLTYuMDAyMjE3KSAiPjwvcGF0aD4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjEycHgiIGhlaWdodD0iMTJweCIgdmlld0JveD0iMCAwIDEyIDEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuNSAoNjc0NjkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT5pY29uLWFycm93bGluZTI8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSIwMS3npLrkvovkuK3lv4Porr7orqEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iMS0wLTEtMC1LU2lnbi1BUi3ogZrlkIjmoLflvI8t5YiX6KGoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA3Mi4wMDAwMDAsIC03MjMuMDAwMDAwKSIgZmlsbD0iIzBDRjFGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4NCiAgICAgICAgICAgIDxnIGlkPSLliIbnu4QtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA2NS4wMDAwMDAsIDcxNy4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbi1hcnJvd2xpbmUyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3LjAwMDAwMCwgNi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTkuMzk2OTc3NzMsNi40OTk4NTk2MiBMMC43LDYuNDk5ODU5NjIgTDAuNyw1LjQ5OTg1OTYyIEw5LjM5MjI5ODk4LDUuNDk5ODU5NjIgTDYuNzY2NzYzMjIsMi44NTQ0MzM0NCBMNy40NzY1MzMyNywyLjE1IEwxMS4yOTk3ODYsNi4wMDIyMTY3MiBMNy40NzY1MzMyNyw5Ljg1NDQzMzQ0IEw2Ljc2Njc2MzIyLDkuMTUgTDkuMzk2OTc3NzMsNi40OTk4NTk2MiBaIiBpZD0i5ZCI5bm25b2i54q2Ij48L3BhdGg+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+"

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils/resize-event.ts
var resizeHandler = function resizeHandler(entries) {
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var entry = entries_1[_i];
        var listeners = entry.target.__resizeListeners__ || [];
        if (listeners.length) {
            listeners.forEach(function (fn) {
                fn();
            });
        }
    }
};
/* istanbul ignore next */
var addResizeListener = function addResizeListener(element, fn) {
    if (!element.__resizeListeners__) {
        element.__resizeListeners__ = [];
        element.__ro__ = new window['ResizeObserver'](resizeHandler);
        element.__ro__.observe(element);
    }
    element.__resizeListeners__.push(fn);
};
/* istanbul ignore next */
var removeResizeListener = function removeResizeListener(element, fn) {
    if (!element || !element.__resizeListeners__) return;
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
    if (!element.__resizeListeners__.length) {
        element.__ro__.disconnect();
    }
};
// EXTERNAL MODULE: external "kview-c-ui/lib/utils/scrollbar-width"
var scrollbar_width_ = __webpack_require__(4);
var scrollbar_width_default = /*#__PURE__*/__webpack_require__.n(scrollbar_width_);

// CONCATENATED MODULE: ./src/utils/util.ts
var util_hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return util_hasOwnProperty.call(obj, key);
}
;
function getPropByPath(obj, path, strict) {
    var tempObj = obj;
    path = path.replace(/\[(\w+)\]/g, '.$1');
    path = path.replace(/^\./, '');
    var keyArr = path.split('.');
    var i = 0;
    for (var len = keyArr.length; i < len - 1; ++i) {
        if (!tempObj && !strict) break;
        var key = keyArr[i];
        if (key in tempObj) {
            tempObj = tempObj[key];
        } else {
            if (strict) {
                throw new Error('please transfer a valid prop path to form item!');
            }
            break;
        }
    }
    return {
        o: tempObj,
        k: keyArr[i],
        v: tempObj ? tempObj[keyArr[i]] : null
    };
}
;
var valueEquals = function valueEquals(a, b) {
    // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
    if (a === b) return true;
    if (!(a instanceof Array)) return false;
    if (!(b instanceof Array)) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i !== a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
};
function extend(to, _from) {
    for (var key in _from) {
        to[key] = _from[key];
    }
    return to;
}
;
function toObject(arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            extend(res, arr[i]);
        }
    }
    return res;
}
;
var generateId = function generateId() {
    return Math.floor(Math.random() * 10000);
};
// EXTERNAL MODULE: external "kview-c-ui/lib/utils/dom"
var dom_ = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/scrollbar/src/util.js
var BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top'
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left'
  }
};

function renderThumbStyle(_ref) {
  var move = _ref.move,
      size = _ref.size,
      bar = _ref.bar;

  var style = {};
  var translate = 'translate' + bar.axis + '(' + move + '%)';

  style[bar.size] = size;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;

  return style;
};
// CONCATENATED MODULE: ./packages/scrollbar/src/bar.js



/* istanbul ignore next */
/* harmony default export */ var src_bar = ({
  componentName: 'Bar',

  props: {
    vertical: Boolean,
    size: String,
    move: Number
  },

  computed: {
    bar: function bar() {
      return BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
    },
    wrap: function wrap() {
      return this.$parent.wrap;
    }
  },

  render: function render(h) {
    var size = this.size,
        move = this.move,
        bar = this.bar;


    return h(
      'div',
      {
        'class': ['kview-scrollbar__bar', 'is-' + bar.key],
        on: {
          'mousedown': this.clickTrackHandler
        }
      },
      [h('div', {
        ref: 'thumb',
        'class': 'kview-scrollbar__thumb',
        on: {
          'mousedown': this.clickThumbHandler
        },

        style: renderThumbStyle({ size: size, move: move, bar: bar }) })]
    );
  },


  methods: {
    clickThumbHandler: function clickThumbHandler(e) {
      // prevent click event of right button
      if (e.ctrlKey || e.button === 2) {
        return;
      }
      this.startDrag(e);
      this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
    },
    clickTrackHandler: function clickTrackHandler(e) {
      var offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
      var thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
      var thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset];

      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    startDrag: function startDrag(e) {
      e.stopImmediatePropagation();
      this.cursorDown = true;

      Object(dom_["on"])(document, 'mousemove', this.mouseMoveDocumentHandler);
      Object(dom_["on"])(document, 'mouseup', this.mouseUpDocumentHandler);
      document.onselectstart = function () {
        return false;
      };
    },
    mouseMoveDocumentHandler: function mouseMoveDocumentHandler(e) {
      if (this.cursorDown === false) return;
      var prevPage = this[this.bar.axis];

      if (!prevPage) return;

      var offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
      var thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
      var thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset];

      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    mouseUpDocumentHandler: function mouseUpDocumentHandler(e) {
      this.cursorDown = false;
      this[this.bar.axis] = 0;
      Object(dom_["off"])(document, 'mousemove', this.mouseMoveDocumentHandler);
      document.onselectstart = null;
    }
  },

  destroyed: function destroyed() {
    Object(dom_["off"])(document, 'mouseup', this.mouseUpDocumentHandler);
  }
});
// CONCATENATED MODULE: ./packages/scrollbar/src/main.js
// reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js






// TODO 修改
/* istanbul ignore next */
/* harmony default export */ var main = ({
  componentName: 'ElScrollbar',

  components: { Bar: src_bar },

  props: {
    native: Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div'
    }
  },

  data: function data() {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0
    };
  },


  computed: {
    wrap: function wrap() {
      return this.$refs.wrap;
    }
  },

  render: function render(h) {
    var gutter = scrollbar_width_default()();
    var style = this.wrapStyle;

    if (gutter) {
      var gutterWith = '-' + gutter + 'px';
      var gutterStyle = 'margin-bottom: ' + gutterWith + '; margin-right: ' + gutterWith + ';';

      if (Array.isArray(this.wrapStyle)) {
        style = toObject(this.wrapStyle);
        style.marginRight = style.marginBottom = gutterWith;
      } else if (typeof this.wrapStyle === 'string') {
        style += gutterStyle;
      } else {
        style = gutterStyle;
      }
    }
    var view = h(this.tag, {
      class: ['kview-scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize'
    }, this.$slots.default);
    var wrap = h(
      'div',
      {
        ref: 'wrap',
        style: style,
        on: {
          'scroll': this.handleScroll
        },

        'class': [this.wrapClass, 'kview-scrollbar__wrap', gutter ? '' : 'kview-scrollbar__wrap--hidden-default'] },
      [[view]]
    );
    var nodes = void 0;

    if (!this.native) {
      nodes = [wrap, h(src_bar, {
        attrs: {
          move: this.moveX,
          size: this.sizeWidth }
      }), h(src_bar, {
        attrs: {
          vertical: true,
          move: this.moveY,
          size: this.sizeHeight }
      })];
    } else {
      nodes = [h(
        'div',
        {
          ref: 'wrap',
          'class': [this.wrapClass, 'kview-scrollbar__wrap'],
          style: style },
        [[view]]
      )];
    }
    return h('div', { class: 'kview-scrollbar' }, nodes);
  },


  methods: {
    handleScroll: function handleScroll() {
      var wrap = this.wrap;

      this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
      this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
    },
    update: function update() {
      var heightPercentage = void 0,
          widthPercentage = void 0;
      var wrap = this.wrap;
      if (!wrap) return;

      heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
      widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;

      this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
      this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
    }
  },

  mounted: function mounted() {
    if (this.native) return;
    this.$nextTick(this.update);
    !this.noresize && addResizeListener(this.$refs.resize, this.update);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.native) return;
    !this.noresize && removeResizeListener(this.$refs.resize, this.update);
  }
});
// CONCATENATED MODULE: ./packages/scrollbar/index.ts

/* istanbul ignore next */
main.install = function (Vue) {
    Vue.component(main.componentName, main);
};
/* harmony default export */ var scrollbar = (main);
// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/row/src/row.ts
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var row_KRow = /** @class */function (_super) {
    __extends(KRow, _super);
    function KRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KRow';
        return _this;
    }
    Object.defineProperty(KRow.prototype, "style", {
        get: function get() {
            var ret = { marginLeft: null, marginRight: null };
            if (this.gutter) {
                ret.marginLeft = "-" + this.gutter / 2 + "px";
                ret.marginRight = ret.marginLeft;
            }
            return ret;
        },
        enumerable: false,
        configurable: true
    });
    KRow.prototype.render = function (h) {
        return h(this.tag, {
            class: ['kview-row', this.justify !== 'start' ? "is-justify-" + this.justify : '', this.align !== 'top' ? "is-align-" + this.align : '', { 'kview-row--flex': this.type === 'flex' }],
            style: this.style
        }, this.$slots.default);
    };
    KRow.componentName = 'KRow';
    __decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'div' })], KRow.prototype, "tag", void 0);
    __decorate([Object(external_vue_property_decorator_["Prop"])()], KRow.prototype, "gutter", void 0);
    __decorate([Object(external_vue_property_decorator_["Prop"])()], KRow.prototype, "type", void 0);
    __decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'start' })], KRow.prototype, "justify", void 0);
    __decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'top' })], KRow.prototype, "align", void 0);
    KRow = __decorate([external_vue_property_decorator_["Component"]], KRow);
    return KRow;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var row = (row_KRow);
;
// CONCATENATED MODULE: ./packages/row/index.ts

row.install = function (Vue) {
    Vue.component(row.componentName, row);
};
/* harmony default export */ var packages_row = (row);
// CONCATENATED MODULE: ./packages/col/src/col.ts
var col_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var col_extends = undefined && undefined.__extends || function () {
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
var col_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : col_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var col_KCol = /** @class */function (_super) {
    col_extends(KCol, _super);
    function KCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KCol';
        return _this;
    }
    Object.defineProperty(KCol.prototype, "gutter", {
        get: function get() {
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
                classList.push(prop !== 'span' ? "kview-col-" + prop + "-" + _this[prop] : "kview-col-" + _this[prop]);
            }
        });
        ['xs', 'sm', 'md', 'lg', 'xl'].forEach(function (size) {
            if (typeof _this[size] === 'number') {
                classList.push("kview-col-" + size + "-" + _this[size]);
            } else if (col_typeof(_this[size]) === 'object') {
                var props_1 = _this[size];
                Object.keys(props_1).forEach(function (prop) {
                    classList.push(prop !== 'span' ? "kview-col-" + size + "-" + prop + "-" + props_1[prop] : "kview-col-" + size + "-" + props_1[prop]);
                });
            }
        });
        return h(this.tag, {
            class: ['kview-col', classList],
            style: style
        }, this.$slots.default);
    };
    KCol.componentName = 'KCol';
    col_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 24 })], KCol.prototype, "span", void 0);
    col_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'div' })], KCol.prototype, "tag", void 0);
    col_decorate([Object(external_vue_property_decorator_["Prop"])()], KCol.prototype, "offset", void 0);
    col_decorate([Object(external_vue_property_decorator_["Prop"])()], KCol.prototype, "pull", void 0);
    col_decorate([Object(external_vue_property_decorator_["Prop"])()], KCol.prototype, "push", void 0);
    col_decorate([Object(external_vue_property_decorator_["Prop"])()], KCol.prototype, "xs", void 0);
    col_decorate([Object(external_vue_property_decorator_["Prop"])()], KCol.prototype, "md", void 0);
    col_decorate([Object(external_vue_property_decorator_["Prop"])()], KCol.prototype, "lg", void 0);
    col_decorate([Object(external_vue_property_decorator_["Prop"])()], KCol.prototype, "xl", void 0);
    KCol = col_decorate([external_vue_property_decorator_["Component"]], KCol);
    return KCol;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var col = (col_KCol);
;
// CONCATENATED MODULE: ./packages/col/index.ts

col.install = function (Vue) {
    Vue.component(col.componentName, col);
};
/* harmony default export */ var packages_col = (col);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/bubble/src/bubble.vue?vue&type=template&id=66bf53e6&
var bubblevue_type_template_id_66bf53e6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "kview-bubble", style: _vm.styles }, [
    _c("div", { staticClass: "kview-bubble__border" }, [
      _c(
        "div",
        { staticClass: "kview-bubble__content" },
        _vm._l(_vm.textList, function(text, index) {
          return _c("p", { key: index, staticClass: "kview-bubble__text" }, [
            _vm._v(_vm._s(text))
          ])
        }),
        0
      )
    ]),
    _c("div", { staticClass: "kview-bubble__triangle" })
  ])
}
var staticRenderFns = []
bubblevue_type_template_id_66bf53e6_render._withStripped = true


// CONCATENATED MODULE: ./packages/bubble/src/bubble.vue?vue&type=template&id=66bf53e6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/bubble/src/bubble.vue?vue&type=script&lang=ts&
var bubblevue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bubblevue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var bubblevue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : bubblevue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var bubblevue_type_script_lang_ts_KBubble = /** @class */function (_super) {
    bubblevue_type_script_lang_ts_extends(KBubble, _super);
    function KBubble() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KBubble';
        return _this;
    }
    Object.defineProperty(KBubble.prototype, "textList", {
        get: function get() {
            if (typeof this.text === 'string') return [this.text];
            if (Array.isArray(this.text)) return this.text;
            return [];
        },
        enumerable: false,
        configurable: true
    });
    KBubble.componentName = 'KBubble';
    bubblevue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '' })], KBubble.prototype, "text", void 0);
    bubblevue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: function _default() {
            return {};
        } })], KBubble.prototype, "styles", void 0);
    KBubble = bubblevue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KBubble);
    return KBubble;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var bubblevue_type_script_lang_ts_ = (bubblevue_type_script_lang_ts_KBubble);
// CONCATENATED MODULE: ./packages/bubble/src/bubble.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_bubblevue_type_script_lang_ts_ = (bubblevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./packages/bubble/src/bubble.vue





/* normalize component */

var component = normalizeComponent(
  src_bubblevue_type_script_lang_ts_,
  bubblevue_type_template_id_66bf53e6_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/bubble/src/bubble.vue"
/* harmony default export */ var bubble = (component.exports);
// CONCATENATED MODULE: ./packages/bubble/index.ts

bubble.install = function (Vue) {
    Vue.component(bubble.componentName, bubble);
};
/* harmony default export */ var packages_bubble = (bubble);
// CONCATENATED MODULE: ./packages/button/src/button.ts
var button_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var button_extends = undefined && undefined.__extends || function () {
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
var button_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : button_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Type;
(function (Type) {
    Type["default"] = "default";
    Type["warn"] = "warn";
})(Type || (Type = {}));
var button_KButton = /** @class */function (_super) {
    button_extends(KButton, _super);
    function KButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = "KButton";
        return _this;
    }
    Object.defineProperty(KButton.prototype, "typeClass", {
        get: function get() {
            if (this.type === Type.warn) {
                return 'kview-button--warn';
            }
            return 'kview-button--default';
        },
        enumerable: false,
        configurable: true
    });
    KButton.prototype.onClick = function (e) {
        this.$emit('click', e);
    };
    KButton.prototype.render = function (h) {
        return h('button', {
            class: ['kview-button', this.typeClass],
            style: this.styles,
            on: {
                click: this.onClick
            }
        }, this.$slots.default);
    };
    KButton.componentName = "KButton";
    button_decorate([Object(external_vue_property_decorator_["Prop"])()], KButton.prototype, "styles", void 0);
    button_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'default' })], KButton.prototype, "type", void 0);
    KButton = button_decorate([external_vue_property_decorator_["Component"]], KButton);
    return KButton;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var src_button = (button_KButton);
// CONCATENATED MODULE: ./packages/button/index.ts

src_button.install = function (Vue) {
    Vue.component(src_button.componentName, src_button);
};
/* harmony default export */ var packages_button = (src_button);
// CONCATENATED MODULE: ./packages/button-icon/src/button-icon.ts
var button_icon_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var button_icon_extends = undefined && undefined.__extends || function () {
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
var button_icon_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : button_icon_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var button_icon_Type;
(function (Type) {
    Type["default"] = "default";
    Type["warn"] = "warn";
    Type["translucent"] = "translucent";
})(button_icon_Type || (button_icon_Type = {}));
var button_icon_KButtonIcon = /** @class */function (_super) {
    button_icon_extends(KButtonIcon, _super);
    function KButtonIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = "KButtonIcon";
        return _this;
    }
    Object.defineProperty(KButtonIcon.prototype, "typeClass", {
        get: function get() {
            if (this.type === button_icon_Type.warn) {
                return 'kview-button-icon--warn';
            }
            if (this.type === button_icon_Type.translucent) {
                return 'kview-button-icon--translucent';
            }
            return 'kview-button-icon--default';
        },
        enumerable: false,
        configurable: true
    });
    KButtonIcon.prototype.onClick = function (e) {
        this.$emit('click', e);
    };
    KButtonIcon.prototype.render = function (h) {
        return h('button', {
            class: ['kview-button-icon', this.typeClass],
            style: this.styles,
            on: {
                click: this.onClick
            }
        }, this.$slots.default);
    };
    KButtonIcon.componentName = "KButtonIcon";
    button_icon_decorate([Object(external_vue_property_decorator_["Prop"])()], KButtonIcon.prototype, "styles", void 0);
    button_icon_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'default' })], KButtonIcon.prototype, "type", void 0);
    KButtonIcon = button_icon_decorate([external_vue_property_decorator_["Component"]], KButtonIcon);
    return KButtonIcon;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var button_icon = (button_icon_KButtonIcon);
// CONCATENATED MODULE: ./packages/button-icon/index.ts

button_icon.install = function (Vue) {
    Vue.component(button_icon.componentName, button_icon);
};
/* harmony default export */ var packages_button_icon = (button_icon);
// CONCATENATED MODULE: ./packages/button-icon-middle/src/button-icon-middle.ts
var button_icon_middle_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var button_icon_middle_extends = undefined && undefined.__extends || function () {
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
var button_icon_middle_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : button_icon_middle_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var button_icon_middle_Type;
(function (Type) {
    Type["default"] = "default";
})(button_icon_middle_Type || (button_icon_middle_Type = {}));
var button_icon_middle_KButtonIconMiddle = /** @class */function (_super) {
    button_icon_middle_extends(KButtonIconMiddle, _super);
    function KButtonIconMiddle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = "KButtonIconMiddle";
        return _this;
    }
    Object.defineProperty(KButtonIconMiddle.prototype, "typeClass", {
        get: function get() {
            return 'kview-button-icon-middle--default';
        },
        enumerable: false,
        configurable: true
    });
    KButtonIconMiddle.prototype.onClick = function (e) {
        this.$emit('click', e);
    };
    KButtonIconMiddle.prototype.render = function (h) {
        return h('button', {
            class: ['kview-button-icon-middle', this.typeClass, this.active ? 'kview-button-icon-middle--active' : ''],
            style: this.styles,
            on: {
                click: this.onClick
            }
        }, this.$slots.default);
    };
    KButtonIconMiddle.componentName = "KButtonIconMiddle";
    button_icon_middle_decorate([Object(external_vue_property_decorator_["Prop"])()], KButtonIconMiddle.prototype, "styles", void 0);
    button_icon_middle_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'default' })], KButtonIconMiddle.prototype, "type", void 0);
    button_icon_middle_decorate([Object(external_vue_property_decorator_["Prop"])({ default: false })], KButtonIconMiddle.prototype, "active", void 0);
    KButtonIconMiddle = button_icon_middle_decorate([external_vue_property_decorator_["Component"]], KButtonIconMiddle);
    return KButtonIconMiddle;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var button_icon_middle = (button_icon_middle_KButtonIconMiddle);
// CONCATENATED MODULE: ./packages/button-icon-middle/index.ts

button_icon_middle.install = function (Vue) {
    Vue.component(button_icon_middle.componentName, button_icon_middle);
};
/* harmony default export */ var packages_button_icon_middle = (button_icon_middle);
// CONCATENATED MODULE: ./packages/button-mini/src/button-mini.ts
var button_mini_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var button_mini_extends = undefined && undefined.__extends || function () {
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
var button_mini_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : button_mini_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var button_mini_Type;
(function (Type) {
    Type["default"] = "default";
    Type["warn"] = "warn";
})(button_mini_Type || (button_mini_Type = {}));
var button_mini_KButtonMini = /** @class */function (_super) {
    button_mini_extends(KButtonMini, _super);
    function KButtonMini() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = "KButtonMini";
        return _this;
    }
    Object.defineProperty(KButtonMini.prototype, "typeClass", {
        get: function get() {
            if (this.type === button_mini_Type.warn) {
                return 'kview-button-mini--warn';
            }
            return 'kview-button-mini--default';
        },
        enumerable: false,
        configurable: true
    });
    KButtonMini.prototype.onClick = function (e) {
        this.$emit('click', e);
    };
    KButtonMini.prototype.render = function (h) {
        return h('button', {
            class: ['kview-button-mini', this.typeClass],
            style: this.styles,
            on: {
                click: this.onClick
            }
        }, this.$slots.default);
    };
    KButtonMini.componentName = "KButtonMini";
    button_mini_decorate([Object(external_vue_property_decorator_["Prop"])()], KButtonMini.prototype, "styles", void 0);
    button_mini_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'default' })], KButtonMini.prototype, "type", void 0);
    KButtonMini = button_mini_decorate([external_vue_property_decorator_["Component"]], KButtonMini);
    return KButtonMini;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var button_mini = (button_mini_KButtonMini);
// CONCATENATED MODULE: ./packages/button-mini/index.ts

button_mini.install = function (Vue) {
    Vue.component(button_mini.componentName, button_mini);
};
/* harmony default export */ var packages_button_mini = (button_mini);
// CONCATENATED MODULE: ./packages/button-larger/src/button-larger.ts
var button_larger_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var button_larger_extends = undefined && undefined.__extends || function () {
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
var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var button_larger_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : button_larger_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var button_larger_Type;
(function (Type) {
    Type["default"] = "default";
})(button_larger_Type || (button_larger_Type = {}));
var button_larger_button = function button(x, style) {
    return "<svg width=\"" + (346 + x) + "px\" height=\"32px\" viewBox=\"0 0 " + (346 + x) + " 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"\u7EC4\u4EF6\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" fill-opacity=\"" + style.opacity + "\"><g id=\"button/346x28/\u9ED8\u8BA4\" fill=\"" + style.fill + "\" stroke=\"" + style.stroke + "\"><g id=\"button\"><path d=\"M4.20710488,0.5 L0.5,4.20705676 L0.5,31 C0.5,31.2761424 0.723857625,31.5 1,31.5 L" + (x + 341) + ".770273,31.5 L" + (x + 345) + ".5,27.7817009 L" + (x + 345) + ".5,1 C" + (x + 345) + ".5,0.723857625 " + (x + 345) + ".276142,0.5 " + (x + 345) + ",0.5 L4.20710488,0.5 Z\" id=\"\u77E9\u5F62\u5907\u4EFD-89\"></path></g></g></g></svg>";
};
var button_larger_KButtonLarger = /** @class */function (_super) {
    button_larger_extends(KButtonLarger, _super);
    function KButtonLarger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = "KButtonLarger";
        _this.offset = 0;
        _this.isHover = false;
        _this.normal = { opacity: 0.3, fill: '#052B5B', stroke: '#23599A' };
        _this.hover = { opacity: 0.68, fill: '#00408D', stroke: '#2B7ADA' };
        return _this;
    }
    Object.defineProperty(KButtonLarger.prototype, "typeClass", {
        get: function get() {
            return 'kview-button-larger--default';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KButtonLarger.prototype, "buttonStyle", {
        get: function get() {
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
            }
        }, this.$slots.default);
    };
    KButtonLarger.componentName = "KButtonLarger";
    button_larger_decorate([Object(external_vue_property_decorator_["Prop"])({ default: function _default() {} })], KButtonLarger.prototype, "styles", void 0);
    button_larger_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'default' })], KButtonLarger.prototype, "type", void 0);
    KButtonLarger = button_larger_decorate([external_vue_property_decorator_["Component"]], KButtonLarger);
    return KButtonLarger;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var button_larger = (button_larger_KButtonLarger);
// CONCATENATED MODULE: ./packages/button-larger/index.ts

button_larger.install = function (Vue) {
    Vue.component(button_larger.componentName, button_larger);
};
/* harmony default export */ var packages_button_larger = (button_larger);
// CONCATENATED MODULE: ./packages/card-shadow/src/card-shadow.ts
var card_shadow_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var card_shadow_extends = undefined && undefined.__extends || function () {
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
var card_shadow_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : card_shadow_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var card_shadow_Type;
(function (Type) {
    Type["PRIMARY"] = "primary";
    Type["WARN"] = "warn";
})(card_shadow_Type || (card_shadow_Type = {}));
// TODO 从中间到周边渐变。中间：#220000    #190000
var card_shadow_KCardShadow = /** @class */function (_super) {
    card_shadow_extends(KCardShadow, _super);
    function KCardShadow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KCardShadow';
        return _this;
    }
    Object.defineProperty(KCardShadow.prototype, "styles", {
        get: function get() {
            return {
                width: this.width,
                height: this.height
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KCardShadow.prototype, "classes", {
        get: function get() {
            return ["kview-card-shadow", 'is-' + this.type];
        },
        enumerable: false,
        configurable: true
    });
    KCardShadow.prototype.render = function (h) {
        return h('div', {
            class: this.classes,
            style: this.styles
        }, this.$slots.default);
    };
    KCardShadow.componentName = 'KCardShadow';
    card_shadow_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '240px' })], KCardShadow.prototype, "width", void 0);
    card_shadow_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '200px' })], KCardShadow.prototype, "height", void 0);
    card_shadow_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'primary' })], KCardShadow.prototype, "type", void 0);
    KCardShadow = card_shadow_decorate([external_vue_property_decorator_["Component"]], KCardShadow);
    return KCardShadow;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var card_shadow = (card_shadow_KCardShadow);
// CONCATENATED MODULE: ./packages/card-shadow/index.ts

card_shadow.install = function (Vue) {
    Vue.component(card_shadow.componentName, card_shadow);
};
/* harmony default export */ var packages_card_shadow = (card_shadow);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/card-item/src/card-item.vue?vue&type=template&id=789ce0dc&
var card_itemvue_type_template_id_789ce0dc_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      staticClass: "kview-card-item",
      class: { "kview-card-item--selected": _vm.itemSelected },
      style: _vm.styles,
      on: {
        click: _vm.onClick,
        mouseenter: _vm.onMouseenter,
        mouseleave: _vm.onMouseleave
      }
    },
    [
      _c("div", { staticClass: "kview-card-item__content" }, [
        _c(
          "div",
          {
            staticClass: "kview-card-item__slot",
            class: { "kview-card-item__slot--selected": _vm.itemSelected }
          },
          [
            _vm.img && _vm.selectedImg
              ? _c("img", {
                  attrs: {
                    src:
                      _vm.itemSelected || _vm.isHover
                        ? _vm.svgStringToImg(_vm.selectedImg)
                        : _vm.svgStringToImg(_vm.img),
                    alt: "picture"
                  }
                })
              : _vm._e(),
            _vm._t("img")
          ],
          2
        ),
        _c(
          "div",
          {
            staticClass: "kview-card-item__title",
            class: { "kview-card-item__title--selected": _vm.itemSelected }
          },
          [_vm._t("default")],
          2
        )
      ])
    ]
  )
}
var card_itemvue_type_template_id_789ce0dc_staticRenderFns = []
card_itemvue_type_template_id_789ce0dc_render._withStripped = true


// CONCATENATED MODULE: ./packages/card-item/src/card-item.vue?vue&type=template&id=789ce0dc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/card-item/src/card-item.vue?vue&type=script&lang=ts&
var card_itemvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var card_itemvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var card_itemvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : card_itemvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var card_itemvue_type_script_lang_ts_KCardItem = /** @class */function (_super) {
    card_itemvue_type_script_lang_ts_extends(KCardItem, _super);
    function KCardItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KCardItem';
        _this.isHover = false;
        return _this;
    }
    Object.defineProperty(KCardItem.prototype, "styles", {
        get: function get() {
            return {
                marginBottom: this.bottomGap,
                width: this.width,
                height: this.height
            };
        },
        enumerable: false,
        configurable: true
    });
    KCardItem.prototype.svgStringToImg = function (svg) {
        if (svg.indexOf('<svg') === -1) return svg;
        return "data:image/svg+xml;charset=utf-8," + svg.replace(/#/g, '%23').replace(/\n/g, '%0A');
    };
    KCardItem.prototype.onMouseenter = function () {
        this.isHover = true;
    };
    KCardItem.prototype.onMouseleave = function () {
        this.isHover = false;
    };
    KCardItem.prototype.onClick = function () {
        this.$emit('click');
    };
    KCardItem.componentName = 'KCardItem';
    card_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 0 })], KCardItem.prototype, "width", void 0);
    card_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 0 })], KCardItem.prototype, "height", void 0);
    card_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: false })], KCardItem.prototype, "itemSelected", void 0);
    card_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '0px' })], KCardItem.prototype, "bottomGap", void 0);
    card_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KCardItem.prototype, "img", void 0);
    card_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KCardItem.prototype, "selectedImg", void 0);
    KCardItem = card_itemvue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KCardItem);
    return KCardItem;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var card_itemvue_type_script_lang_ts_ = (card_itemvue_type_script_lang_ts_KCardItem);
// CONCATENATED MODULE: ./packages/card-item/src/card-item.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_card_itemvue_type_script_lang_ts_ = (card_itemvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/card-item/src/card-item.vue





/* normalize component */

var card_item_component = normalizeComponent(
  src_card_itemvue_type_script_lang_ts_,
  card_itemvue_type_template_id_789ce0dc_render,
  card_itemvue_type_template_id_789ce0dc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var card_item_api; }
card_item_component.options.__file = "packages/card-item/src/card-item.vue"
/* harmony default export */ var card_item = (card_item_component.exports);
// CONCATENATED MODULE: ./packages/card-item/index.ts

card_item.install = function (Vue) {
    Vue.component(card_item.componentName, card_item);
};
/* harmony default export */ var packages_card_item = (card_item);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/card-image/src/card-image.vue?vue&type=template&id=55285aa6&
var card_imagevue_type_template_id_55285aa6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "kview-card-image", on: { click: _vm.onClick } },
    [
      _c("div", { staticClass: "kview-card-image__label" }, [
        _c("div", { staticClass: "kview-card-image__corner" }),
        _c(
          "span",
          { staticClass: "kview-card-image__text", style: _vm.cornerStyle },
          [_vm._v(_vm._s(_vm.corner))]
        )
      ]),
      _c("div", { staticClass: "kview-card-image__content" }, [
        _vm.img
          ? _c("img", {
              staticClass: "kview-card-image__pictrue",
              attrs: { src: _vm.img, alt: "picture" }
            })
          : _vm._e()
      ]),
      _c("div", { staticClass: "kview-card-image__footer" }, [
        _c("div", { staticClass: "kview-card-image__title" }, [
          _c("span", [_vm._v(_vm._s(_vm.title))])
        ]),
        _c(
          "div",
          { staticClass: "kview-card-image__tool" },
          [_vm._t("tool")],
          2
        )
      ])
    ]
  )
}
var card_imagevue_type_template_id_55285aa6_staticRenderFns = []
card_imagevue_type_template_id_55285aa6_render._withStripped = true


// CONCATENATED MODULE: ./packages/card-image/src/card-image.vue?vue&type=template&id=55285aa6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/card-image/src/card-image.vue?vue&type=script&lang=ts&
var card_imagevue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var card_imagevue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var card_imagevue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : card_imagevue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var card_imagevue_type_script_lang_ts_KCardImage = /** @class */function (_super) {
    card_imagevue_type_script_lang_ts_extends(KCardImage, _super);
    function KCardImage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KCardImage';
        return _this;
    }
    Object.defineProperty(KCardImage.prototype, "cornerStyle", {
        get: function get() {
            return {
                left: this.corner.length > 1 ? '1px' : '5px'
            };
        },
        enumerable: false,
        configurable: true
    });
    KCardImage.prototype.onClick = function () {
        this.$emit('click');
    };
    KCardImage.componentName = 'KCardImage';
    card_imagevue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '' })], KCardImage.prototype, "corner", void 0);
    card_imagevue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '' })], KCardImage.prototype, "title", void 0);
    card_imagevue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '' })], KCardImage.prototype, "img", void 0);
    KCardImage = card_imagevue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KCardImage);
    return KCardImage;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var card_imagevue_type_script_lang_ts_ = (card_imagevue_type_script_lang_ts_KCardImage);
// CONCATENATED MODULE: ./packages/card-image/src/card-image.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_card_imagevue_type_script_lang_ts_ = (card_imagevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/card-image/src/card-image.vue





/* normalize component */

var card_image_component = normalizeComponent(
  src_card_imagevue_type_script_lang_ts_,
  card_imagevue_type_template_id_55285aa6_render,
  card_imagevue_type_template_id_55285aa6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var card_image_api; }
card_image_component.options.__file = "packages/card-image/src/card-image.vue"
/* harmony default export */ var card_image = (card_image_component.exports);
// CONCATENATED MODULE: ./packages/card-image/index.ts

card_image.install = function (Vue) {
    Vue.component(card_image.componentName, card_image);
};
/* harmony default export */ var packages_card_image = (card_image);
// CONCATENATED MODULE: ./packages/cell-hexagon/src/cell-hexagon.ts
var cell_hexagon_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var cell_hexagon_extends = undefined && undefined.__extends || function () {
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
var cell_hexagon_assign = undefined && undefined.__assign || function () {
    cell_hexagon_assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return cell_hexagon_assign.apply(this, arguments);
};
var cell_hexagon_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : cell_hexagon_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

620;
var cell = function cell(_a, _b, isHover) {
    var x = _a.x,
        y = _a.y;
    var fill = _b.fill,
        border = _b.border;
    return "\n<svg width=\"" + x + "px\" height=\"" + y + "px\" viewBox=\"0 0 " + x + " " + y + "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <defs>\n        <polygon id=\"path-1\" points=\"5.80754 0 " + (x - 5.80754) + " 0 " + x + " 5.10417887 " + x + " " + (y - 7.0183711) + " " + (x - 5.872889) + " " + y + " 5.80754 " + y + " 0 " + (y - 7.0183711) + " 0 5.08767304\"></polygon>\n        <filter x=\"-0.6%\" y=\"-6.7%\" width=\"101.1%\" height=\"113.5%\" filterUnits=\"objectBoundingBox\" id=\"filter-2\">\n            <feMorphology radius=\"1\" operator=\"erode\" in=\"SourceAlpha\" result=\"shadowSpreadInner1\"></feMorphology>\n            <feGaussianBlur stdDeviation=\"2.5\" in=\"shadowSpreadInner1\" result=\"shadowBlurInner1\"></feGaussianBlur>\n            <feOffset dx=\"0\" dy=\"0\" in=\"shadowBlurInner1\" result=\"shadowOffsetInner1\"></feOffset>\n            <feComposite in=\"shadowOffsetInner1\" in2=\"SourceAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\" result=\"shadowInnerInner1\"></feComposite>\n            <feColorMatrix values=\"0 0 0 0 0.0071923497   0 0 0 0 0.157116781   0 0 0 0 0.405429121  0 0 0 1 0\" type=\"matrix\" in=\"shadowInnerInner1\"></feColorMatrix>\n        </filter>\n    </defs>\n    <g id=\"\u753B\u677F\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g id=\"\u77E9\u5F62\">\n            <use fill-opacity=\"0.9\" fill=\"" + fill + "\" fill-rule=\"evenodd\" xlink:href=\"#path-1\"></use>\n            " + (isHover ? '<use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>' : '') + "\n            <use stroke=\"" + border + "\" stroke-width=\"1\" xlink:href=\"#path-1\"></use>\n        </g>\n    </g>\n</svg>\n";
};
var cell_hexagon_KCellHexagon = /** @class */function (_super) {
    cell_hexagon_extends(KCellHexagon, _super);
    function KCellHexagon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = "KCellHexagon";
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
        get: function get() {
            return cell_hexagon_assign(cell_hexagon_assign({}, this.styles), { backgroundImage: "url('data:image/svg+xml;charset=utf-8," + cell({ x: this.size.width, y: this.size.height }, this.isHover ? this.hover : this.normal, this.isHover).replace(/#/g, '%23').replace(/\n/g, '%0A') + "')" });
        },
        enumerable: false,
        configurable: true
    });
    KCellHexagon.prototype.mounted = function () {
        var _a = this.$el.getBoundingClientRect(),
            width = _a.width,
            height = _a.height;
        this.size.width = this.svgWidth || width;
        this.size.height = this.svgHeight || height;
    };
    KCellHexagon.prototype.onClick = function (e) {
        this.$emit('click', e);
    };
    KCellHexagon.prototype.onMouseenter = function () {
        if (!this.hoverActive) return;
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
            }
        }, [h('div', {
            class: 'kview-cell-hexagon__content'
        }, this.$slots.default), this.$slots.icon && h('div', {
            class: 'kview-cell-hexagon__side',
            style: { width: this.sideWidth }
        }, this.$slots.icon)]);
    };
    KCellHexagon.componentName = "KCellHexagon";
    cell_hexagon_decorate([Object(external_vue_property_decorator_["Prop"])({ default: function _default() {} })], KCellHexagon.prototype, "styles", void 0);
    cell_hexagon_decorate([Object(external_vue_property_decorator_["Prop"])()], KCellHexagon.prototype, "svgWidth", void 0);
    cell_hexagon_decorate([Object(external_vue_property_decorator_["Prop"])()], KCellHexagon.prototype, "svgHeight", void 0);
    cell_hexagon_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '50px' })], KCellHexagon.prototype, "sideWidth", void 0);
    cell_hexagon_decorate([Object(external_vue_property_decorator_["Prop"])({ default: true })], KCellHexagon.prototype, "hoverActive", void 0);
    KCellHexagon = cell_hexagon_decorate([external_vue_property_decorator_["Component"]], KCellHexagon);
    return KCellHexagon;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var cell_hexagon = (cell_hexagon_KCellHexagon);
// CONCATENATED MODULE: ./packages/cell-hexagon/index.ts

cell_hexagon.install = function (Vue) {
    Vue.component(cell_hexagon.componentName, cell_hexagon);
};
/* harmony default export */ var packages_cell_hexagon = (cell_hexagon);
// CONCATENATED MODULE: ./packages/collapse/src/collapse.ts
var collapse_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var collapse_extends = undefined && undefined.__extends || function () {
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
var collapse_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : collapse_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var collapse_KCollapse = /** @class */function (_super) {
    collapse_extends(KCollapse, _super);
    function KCollapse() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KCollapse';
        _this.activeNames = { value: '' };
        return _this;
    }
    KCollapse.prototype.getValue = function (v) {
        this.activeNames.value = v;
    };
    KCollapse.prototype.setActiveNames = function (value) {
        this.activeNames.value = value;
        this.$emit('input', value);
        this.$emit('change', value);
    };
    KCollapse.prototype.handleItemClick = function (item) {
        this.setActiveNames(this.activeNames.value === item.itemName ? '' : item.itemName);
    };
    KCollapse.prototype.created = function () {
        this.$on('item-click', this.handleItemClick);
    };
    KCollapse.prototype.render = function (h) {
        return h('div', {
            class: 'kview-collapse'
        }, this.$slots.default);
    };
    KCollapse.componentName = 'KCollapse';
    collapse_decorate([Object(external_vue_property_decorator_["Provide"])('activeNames')], KCollapse.prototype, "activeNames", void 0);
    collapse_decorate([Object(external_vue_property_decorator_["Prop"])()], KCollapse.prototype, "value", void 0);
    collapse_decorate([Object(external_vue_property_decorator_["Watch"])('value')], KCollapse.prototype, "getValue", null);
    KCollapse = collapse_decorate([external_vue_property_decorator_["Component"]], KCollapse);
    return KCollapse;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var collapse = (collapse_KCollapse);
// CONCATENATED MODULE: ./packages/collapse/index.ts

collapse.install = function (Vue) {
    Vue.component(collapse.componentName, collapse);
};
/* harmony default export */ var packages_collapse = (collapse);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/collapse/src/collapse-item.vue?vue&type=template&id=2d05faac&
var collapse_itemvue_type_template_id_2d05faac_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "kview-collapse-item" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isActive,
            expression: "isActive"
          }
        ],
        staticClass: "kview-collapse-item__content"
      },
      [_vm._t("default")],
      2
    ),
    _c(
      "div",
      {
        staticClass: "kview-collapse-item__title",
        style: { marginTop: "20px" },
        on: { click: _vm.handleHeaderClick }
      },
      [
        _c("span", [_vm._v(_vm._s(_vm.title))]),
        _c("span", {
          staticClass: "kview-collapse-item__arrow iconfont",
          class: _vm.isActive ? "kview-icon-arrow_up" : "kview-icon-arrow_down"
        })
      ]
    )
  ])
}
var collapse_itemvue_type_template_id_2d05faac_staticRenderFns = []
collapse_itemvue_type_template_id_2d05faac_render._withStripped = true


// CONCATENATED MODULE: ./packages/collapse/src/collapse-item.vue?vue&type=template&id=2d05faac&

// CONCATENATED MODULE: ./src/utils/emitter.ts
var emitter_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var emitter_extends = undefined && undefined.__extends || function () {
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
var emitter_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
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
    emitter_extends(Emmiter, _super);
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
    Emmiter = emitter_decorate([external_vue_property_decorator_["Component"]], Emmiter);
    return Emmiter;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var emitter = (emitter_Emmiter);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/collapse/src/collapse-item.vue?vue&type=script&lang=ts&
var collapse_itemvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var collapse_itemvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var collapse_itemvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : collapse_itemvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var collapse_itemvue_type_script_lang_ts_KCollapseItem = /** @class */function (_super) {
    collapse_itemvue_type_script_lang_ts_extends(KCollapseItem, _super);
    function KCollapseItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KCollapseItem';
        return _this;
    }
    Object.defineProperty(KCollapseItem.prototype, "isActive", {
        get: function get() {
            return this.activeNames.value === this.itemName;
        },
        enumerable: false,
        configurable: true
    });
    KCollapseItem.prototype.handleHeaderClick = function () {
        this.dispatch('KCollapse', 'item-click', this);
    };
    KCollapseItem.componentName = 'KCollapseItem';
    collapse_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '' })], KCollapseItem.prototype, "title", void 0);
    collapse_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '' })], KCollapseItem.prototype, "itemName", void 0);
    collapse_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Inject"])('activeNames')], KCollapseItem.prototype, "activeNames", void 0);
    KCollapseItem = collapse_itemvue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KCollapseItem);
    return KCollapseItem;
}(emitter);
/* harmony default export */ var collapse_itemvue_type_script_lang_ts_ = (collapse_itemvue_type_script_lang_ts_KCollapseItem);
// CONCATENATED MODULE: ./packages/collapse/src/collapse-item.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_collapse_itemvue_type_script_lang_ts_ = (collapse_itemvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/collapse/src/collapse-item.vue





/* normalize component */

var collapse_item_component = normalizeComponent(
  src_collapse_itemvue_type_script_lang_ts_,
  collapse_itemvue_type_template_id_2d05faac_render,
  collapse_itemvue_type_template_id_2d05faac_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var collapse_item_api; }
collapse_item_component.options.__file = "packages/collapse/src/collapse-item.vue"
/* harmony default export */ var collapse_item = (collapse_item_component.exports);
// CONCATENATED MODULE: ./packages/collapse-item/index.ts

collapse_item.install = function (Vue) {
    Vue.component(collapse_item.componentName, collapse_item);
};
/* harmony default export */ var packages_collapse_item = (collapse_item);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialog/src/dialog.vue?vue&type=template&id=458af334&
var dialogvue_type_template_id_458af334_render = function() {
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
var dialogvue_type_template_id_458af334_staticRenderFns = []
dialogvue_type_template_id_458af334_render._withStripped = true


// CONCATENATED MODULE: ./packages/dialog/src/dialog.vue?vue&type=template&id=458af334&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(2);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./src/utils/dom.js
var dom_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

  if ((typeof styleName === 'undefined' ? 'undefined' : dom_typeof(styleName)) === 'object') {
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
// CONCATENATED MODULE: ./src/utils/merge.ts
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
// CONCATENATED MODULE: ./src/utils/popup/index.ts
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
            removeClass(document.body, 'kviewpopup-parent--hidden');
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
/* harmony default export */ var popup = (popup_Popup);

// CONCATENATED MODULE: ./src/utils/repeatImg.ts
function repeatImg(imgSrc, width, height, offsetX, offsetY) {
    if (width === void 0) {
        width = 90;
    }
    if (height === void 0) {
        height = 30;
    }
    if (offsetX === void 0) {
        offsetX = 30;
    }
    if (offsetY === void 0) {
        offsetY = 0;
    }
    return new Promise(function (resolve, reject) {
        if (!imgSrc) return reject();
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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialog/src/dialog.vue?vue&type=script&lang=ts&
var dialogvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var dialogvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var dialogvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : dialogvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var gridWarnImg = __webpack_require__(8);
var dialogvue_type_script_lang_ts_Type;
(function (Type) {
    Type["DEFAULT"] = "default";
    Type["WARN"] = "warn";
})(dialogvue_type_script_lang_ts_Type || (dialogvue_type_script_lang_ts_Type = {}));
var dialogvue_type_script_lang_ts_KDialog = /** @class */function (_super) {
    dialogvue_type_script_lang_ts_extends(KDialog, _super);
    function KDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KDialog';
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
                if (dialogEl) dialogEl.scrollTop = 0;
            });
            if (this.appendToDom) {
                this.appendToDom.appendChild(this.$el);
            }
        } else {
            this.$el.removeEventListener('scroll', this.updatePopper);
            this.updatePopper();
            if (!this.closed) this.$emit('close');
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
        get: function get() {
            if (this.type === dialogvue_type_script_lang_ts_Type.WARN) return 'kview-dialog--warn';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KDialog.prototype, "animationClass", {
        get: function get() {
            return this.animation ? 'kview-scale-in-full' : '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KDialog.prototype, "styles", {
        get: function get() {
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
        get: function get() {
            if (this.gridImag && this.type === dialogvue_type_script_lang_ts_Type.WARN) {
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
    KDialog.componentName = 'KDialog';
    dialogvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: true })], KDialog.prototype, "closeBtn", void 0);
    dialogvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: false })], KDialog.prototype, "destroyOnClose", void 0);
    dialogvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KDialog.prototype, "appendToDom", void 0);
    dialogvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '' })], KDialog.prototype, "title", void 0);
    dialogvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: true })], KDialog.prototype, "center", void 0);
    dialogvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '50%' })], KDialog.prototype, "width", void 0);
    dialogvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'auto' })], KDialog.prototype, "height", void 0);
    dialogvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: true })], KDialog.prototype, "cancel", void 0);
    dialogvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: true })], KDialog.prototype, "confirm", void 0);
    dialogvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: true })], KDialog.prototype, "footer", void 0);
    dialogvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: false })], KDialog.prototype, "animation", void 0);
    dialogvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'default' })], KDialog.prototype, "type", void 0);
    dialogvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KDialog.prototype, "left", void 0);
    dialogvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KDialog.prototype, "top", void 0);
    dialogvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Watch"])('visible')], KDialog.prototype, "getVisible", null);
    KDialog = dialogvue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KDialog);
    return KDialog;
}(popup);
/* harmony default export */ var dialogvue_type_script_lang_ts_ = (dialogvue_type_script_lang_ts_KDialog);
// CONCATENATED MODULE: ./packages/dialog/src/dialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_dialogvue_type_script_lang_ts_ = (dialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/dialog/src/dialog.vue





/* normalize component */

var dialog_component = normalizeComponent(
  src_dialogvue_type_script_lang_ts_,
  dialogvue_type_template_id_458af334_render,
  dialogvue_type_template_id_458af334_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var dialog_api; }
dialog_component.options.__file = "packages/dialog/src/dialog.vue"
/* harmony default export */ var src_dialog = (dialog_component.exports);
// CONCATENATED MODULE: ./packages/dialog/index.ts

src_dialog.install = function (Vue) {
    Vue.component(src_dialog.componentName, src_dialog);
};
/* harmony default export */ var packages_dialog = (src_dialog);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialog-move/src/dialog-move.vue?vue&type=template&id=30c7d11e&
var dialog_movevue_type_template_id_30c7d11e_render = function() {
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
      staticClass: "kview-dialog-move-container"
    },
    [
      _c(
        "div",
        {
          ref: "dialog",
          staticClass: "kview-dialog-move",
          class: _vm.dialogSizeClass,
          style: _vm.styles
        },
        [
          _c("transition", { attrs: { name: "kview-width-fade-slow" } }, [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.visible || !_vm.animation,
                    expression: "visible || !animation"
                  }
                ],
                staticStyle: { overflow: "hidden", position: "relative" }
              },
              [
                _c(
                  "div",
                  {
                    style: {
                      width: _vm.aWidth + "px",
                      height: this.height + "px",
                      overflow: "hidden",
                      position: "relative"
                    }
                  },
                  [
                    _c("div", {
                      staticClass: "kview-dialog-move__top",
                      class: [_vm.dialogSizeClass, _vm.dialogTopTypeClass],
                      style: { cursor: _vm.movable ? "move" : "auto" },
                      on: { mousedown: _vm.onMousedown }
                    }),
                    _c("div", {
                      staticClass: "kview-dialog-move__middle",
                      class: _vm.dialogSizeClass
                    }),
                    _c("div", {
                      staticClass: "kview-dialog-move__bottom",
                      class: _vm.dialogSizeClass
                    }),
                    _vm.closeBtn
                      ? _c("div", { staticClass: "kview-dialog-move__close" }, [
                          _c("span", {
                            staticClass:
                              "kview-dialog-move__icon iconfont kview-icon-baseline-close-px",
                            on: { click: _vm.handleClose }
                          })
                        ])
                      : _vm._e(),
                    _c(
                      "div",
                      {
                        staticClass: "kview-dialog-move__content",
                        style: { top: _vm.movable ? "30px" : "0" }
                      },
                      [_vm._t("default")],
                      2
                    )
                  ]
                )
              ]
            )
          ])
        ],
        1
      )
    ]
  )
}
var dialog_movevue_type_template_id_30c7d11e_staticRenderFns = []
dialog_movevue_type_template_id_30c7d11e_render._withStripped = true


// CONCATENATED MODULE: ./packages/dialog-move/src/dialog-move.vue?vue&type=template&id=30c7d11e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialog-move/src/dialog-move.vue?vue&type=script&lang=ts&
var dialog_movevue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var dialog_movevue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var dialog_movevue_type_script_lang_ts_assign = undefined && undefined.__assign || function () {
    dialog_movevue_type_script_lang_ts_assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return dialog_movevue_type_script_lang_ts_assign.apply(this, arguments);
};
var dialog_movevue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : dialog_movevue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Size;
(function (Size) {
    Size["small"] = "small";
    Size["middle"] = "middle";
    Size["large"] = "large";
})(Size || (Size = {}));
var TopType;
(function (TopType) {
    TopType["plain"] = "plain";
    TopType["default"] = "default";
})(TopType || (TopType = {}));
var dialog_movevue_type_script_lang_ts_KDialogMove = /** @class */function (_super) {
    dialog_movevue_type_script_lang_ts_extends(KDialogMove, _super);
    function KDialogMove() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KDialogMove';
        _this.contentAnimation = false;
        _this.closed = false;
        _this.key = 0;
        _this.leftMove = 0;
        _this.topMove = 0;
        _this.moved = false;
        return _this;
    }
    KDialogMove.prototype.getVisible = function (val) {
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
                if (dialogEl) dialogEl.scrollTop = 0;
            });
            if (this.appendToDom) {
                this.appendToDom.appendChild(this.$el);
            }
        } else {
            this.$el.removeEventListener('scroll', this.updatePopper);
            if (!this.closed) this.$emit('close');
            this.contentAnimation = false;
            if (this.destroyOnClose) {
                this.$nextTick(function () {
                    _this.key++;
                });
            }
        }
    };
    Object.defineProperty(KDialogMove.prototype, "dialogSizeClass", {
        get: function get() {
            if (this.size === Size.large) return 'is-large';
            if (this.size === Size.small) return 'is-small';
            return 'is-middle';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KDialogMove.prototype, "aWidth", {
        get: function get() {
            if (this.size === Size.large) return 576;
            if (this.size === Size.small) return 113;
            return 395;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KDialogMove.prototype, "dialogTopTypeClass", {
        get: function get() {
            if (this.topType === TopType.plain) return 'is-plain';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KDialogMove.prototype, "styles", {
        get: function get() {
            var style = dialog_movevue_type_script_lang_ts_assign(dialog_movevue_type_script_lang_ts_assign({}, this.dialogStyle), { left: typeof this.left === 'string' ? this.left : this.left + 'px', top: typeof this.top === 'string' ? this.top : this.top + 'px', height: this.height + 'px' });
            if (!this.moved) {
                return style;
            }
            return dialog_movevue_type_script_lang_ts_assign(dialog_movevue_type_script_lang_ts_assign({}, style), { left: this.leftMove + 'px', top: this.topMove + 'px' });
        },
        enumerable: false,
        configurable: true
    });
    KDialogMove.prototype.mounted = function () {
        if (this.visible) {
            this.rendered = true;
            this.open();
            if (this.appendToDom) {
                this.appendToDom.appendChild(this.$el);
            }
        }
    };
    KDialogMove.prototype.handleClose = function () {
        this.$emit('close');
        this.closed = true;
    };
    KDialogMove.prototype.onMousedown = function (e) {
        if (!this.movable) return;
        var kdialog = this.$refs.dialog;
        var offsetLeft = kdialog.offsetLeft,
            offsetTop = kdialog.offsetTop;
        this.moved = true;
        window.addEventListener('mousemove', this.onMousemove, false);
        window.addEventListener('mouseup', this.onMouseup, false);
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.leftMove = offsetLeft;
        this.topMove = offsetTop;
    };
    KDialogMove.prototype.onMousemove = function (e) {
        var moveX = e.clientX - this.startX;
        var moveY = e.clientY - this.startY;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.leftMove += moveX;
        this.topMove += moveY;
    };
    KDialogMove.prototype.onMouseup = function () {
        window.removeEventListener('mousemove', this.onMousemove);
        window.removeEventListener('mouseup', this.onMouseup);
    };
    KDialogMove.prototype.updatePopper = function () {
        this.broadcast('SelectDropdown', 'updatePopper');
    };
    KDialogMove.componentName = 'KDialogMove';
    dialog_movevue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: true })], KDialogMove.prototype, "movable", void 0);
    dialog_movevue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: true })], KDialogMove.prototype, "closeBtn", void 0);
    dialog_movevue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'auto' })], KDialogMove.prototype, "height", void 0);
    dialog_movevue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KDialogMove.prototype, "appendToDom", void 0);
    dialog_movevue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: function _default() {} })], KDialogMove.prototype, "dialogStyle", void 0);
    dialog_movevue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: false })], KDialogMove.prototype, "destroyOnClose", void 0);
    dialog_movevue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KDialogMove.prototype, "left", void 0);
    dialog_movevue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KDialogMove.prototype, "top", void 0);
    dialog_movevue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'middle' })], KDialogMove.prototype, "size", void 0);
    dialog_movevue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'default' })], KDialogMove.prototype, "topType", void 0);
    dialog_movevue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: false })], KDialogMove.prototype, "animation", void 0);
    dialog_movevue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Watch"])('visible')], KDialogMove.prototype, "getVisible", null);
    KDialogMove = dialog_movevue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KDialogMove);
    return KDialogMove;
}(popup);
/* harmony default export */ var dialog_movevue_type_script_lang_ts_ = (dialog_movevue_type_script_lang_ts_KDialogMove);
// CONCATENATED MODULE: ./packages/dialog-move/src/dialog-move.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_dialog_movevue_type_script_lang_ts_ = (dialog_movevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/dialog-move/src/dialog-move.vue





/* normalize component */

var dialog_move_component = normalizeComponent(
  src_dialog_movevue_type_script_lang_ts_,
  dialog_movevue_type_template_id_30c7d11e_render,
  dialog_movevue_type_template_id_30c7d11e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var dialog_move_api; }
dialog_move_component.options.__file = "packages/dialog-move/src/dialog-move.vue"
/* harmony default export */ var dialog_move = (dialog_move_component.exports);
// CONCATENATED MODULE: ./packages/dialog-move/index.ts

dialog_move.install = function (Vue) {
    Vue.component(dialog_move.componentName, dialog_move);
};
/* harmony default export */ var packages_dialog_move = (dialog_move);
// CONCATENATED MODULE: ./packages/divider/src/divider.ts
var divider_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var divider_extends = undefined && undefined.__extends || function () {
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
var divider_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : divider_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var divider_KDivider = /** @class */function (_super) {
    divider_extends(KDivider, _super);
    function KDivider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KDivider';
        return _this;
    }
    KDivider.prototype.render = function (h) {
        return h('div', {
            class: "kview-divider"
        });
    };
    KDivider.componentName = 'KDivider';
    KDivider = divider_decorate([external_vue_property_decorator_["Component"]], KDivider);
    return KDivider;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var divider = (divider_KDivider);
// CONCATENATED MODULE: ./packages/divider/index.ts

divider.install = function (Vue) {
    Vue.component(divider.componentName, divider);
};
/* harmony default export */ var packages_divider = (divider);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/divider-text/src/divider-text.vue?vue&type=template&id=1b7e3ff4&
var divider_textvue_type_template_id_1b7e3ff4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "kview-divider-text" }, [
    _vm._m(0),
    _c(
      "div",
      { staticClass: "kview-divider-text__middle" },
      [_vm._t("default")],
      2
    ),
    _vm._m(1)
  ])
}
var divider_textvue_type_template_id_1b7e3ff4_staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "kview-divider-text__left" }, [
      _c("div", { staticClass: "kview-divider-text__leftline" }),
      _c("div", { staticClass: "kview-divider-text__leftpoint" }),
      _c("div", { staticClass: "kview-divider-text__leftsquare" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "kview-divider-text__right" }, [
      _c("div", { staticClass: "kview-divider-text__rightline" }),
      _c("div", { staticClass: "kview-divider-text__rightpoint" }),
      _c("div", { staticClass: "kview-divider-text__rightsquare" })
    ])
  }
]
divider_textvue_type_template_id_1b7e3ff4_render._withStripped = true


// CONCATENATED MODULE: ./packages/divider-text/src/divider-text.vue?vue&type=template&id=1b7e3ff4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/divider-text/src/divider-text.vue?vue&type=script&lang=ts&
var divider_textvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var divider_textvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var divider_textvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : divider_textvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var divider_textvue_type_script_lang_ts_KDividerText = /** @class */function (_super) {
    divider_textvue_type_script_lang_ts_extends(KDividerText, _super);
    function KDividerText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KDividerText';
        return _this;
    }
    KDividerText.componentName = 'KDividerText';
    KDividerText = divider_textvue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KDividerText);
    return KDividerText;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var divider_textvue_type_script_lang_ts_ = (divider_textvue_type_script_lang_ts_KDividerText);
// CONCATENATED MODULE: ./packages/divider-text/src/divider-text.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_divider_textvue_type_script_lang_ts_ = (divider_textvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/divider-text/src/divider-text.vue





/* normalize component */

var divider_text_component = normalizeComponent(
  src_divider_textvue_type_script_lang_ts_,
  divider_textvue_type_template_id_1b7e3ff4_render,
  divider_textvue_type_template_id_1b7e3ff4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var divider_text_api; }
divider_text_component.options.__file = "packages/divider-text/src/divider-text.vue"
/* harmony default export */ var divider_text = (divider_text_component.exports);
// CONCATENATED MODULE: ./packages/divider-text/index.ts

divider_text.install = function (Vue) {
    Vue.component(divider_text.componentName, divider_text);
};
/* harmony default export */ var packages_divider_text = (divider_text);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/drop-down/src/drop-down.vue?vue&type=template&id=6751149c&
var drop_downvue_type_template_id_6751149c_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "reference" },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "clickoutside",
              rawName: "v-clickoutside",
              value: _vm.hide,
              expression: "hide"
            }
          ],
          on: { click: _vm.onClick }
        },
        [_vm._t("default")],
        2
      ),
      _c(
        "transition",
        { attrs: { name: "kview-fade" } },
        [
          _c(
            "drop-down-content",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.visible,
                  expression: "visible"
                }
              ]
            },
            [_vm._t("content")],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var drop_downvue_type_template_id_6751149c_staticRenderFns = []
drop_downvue_type_template_id_6751149c_render._withStripped = true


// CONCATENATED MODULE: ./packages/drop-down/src/drop-down.vue?vue&type=template&id=6751149c&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/drop-down/src/drop-down-content.vue?vue&type=template&id=028fc544&
var drop_down_contentvue_type_template_id_028fc544_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "popper", style: { width: _vm.width } },
    [_vm._t("default")],
    2
  )
}
var drop_down_contentvue_type_template_id_028fc544_staticRenderFns = []
drop_down_contentvue_type_template_id_028fc544_render._withStripped = true


// CONCATENATED MODULE: ./packages/drop-down/src/drop-down-content.vue?vue&type=template&id=028fc544&

// CONCATENATED MODULE: ./src/utils/vue-popper.ts
var vue_popper_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var vue_popper_extends = undefined && undefined.__extends || function () {
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
var vue_popper_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : vue_popper_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PopperJS = __webpack_require__(9);
var vue_popper_Popper = /** @class */function (_super) {
    vue_popper_extends(Popper, _super);
    function Popper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showPopper = false;
        _this.currentPlacement = "";
        return _this;
    }
    Popper.prototype.getShowPopper = function (val) {
        val ? this.updatePopper() : this.destroyPopper();
    };
    Popper.prototype.createPopper = function () {
        var _this = this;
        this.currentPlacement = this.currentPlacement || this.placement;
        if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
            return;
        }
        var options = this.popperOptions;
        var popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper;
        var reference = this.referenceElm || this.reference || this.$refs.reference;
        if (!popper || !reference) return;
        if (this.visibleArrow) this.appendArrow(popper);
        if (this.appendToBody) document.body.appendChild(this.popperElm);
        if (this.popperJS && this.popperJS.destroy) {
            this.popperJS.destroy();
        }
        options.placement = this.currentPlacement;
        options.offset = this.offset;
        options.arrowOffset = this.arrowOffset;
        this.popperJS = new PopperJS(reference, popper, options);
        this.popperJS.onCreate(function (_) {
            _this.$emit('created', _this);
            _this.resetTransformOrigin();
            _this.$nextTick(_this.updatePopper);
        });
        if (typeof options.onUpdate === 'function') {
            this.popperJS.onUpdate(options.onUpdate);
        }
        this.popperJS._popper.style.zIndex = popup_manager.nextZIndex();
        this.popperElm.addEventListener('click', stop);
    };
    Popper.prototype.resetTransformOrigin = function () {
        if (!this.transformOrigin) return;
        var placementMap = {
            top: 'bottom',
            bottom: 'top',
            left: 'right',
            right: 'left'
        };
        var placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0];
        var origin = placementMap[placement];
        this.popperJS._popper.style.transformOrigin = typeof this.transformOrigin === 'string' ? this.transformOrigin : ['top', 'bottom'].indexOf(placement) > -1 ? "center " + origin : origin + " center";
    };
    Popper.prototype.doDestroy = function (forceDestroy) {
        if (!this.popperJS || this.showPopper && !forceDestroy) return;
        this.popperJS.destroy();
        this.popperJS = null;
    };
    Popper.prototype.appendArrow = function (element) {
        var hash;
        if (this.appended) {
            return;
        }
        this.appended = true;
        for (var item in element.attributes) {
            if (/^_v-/.test(element.attributes[item].name)) {
                hash = element.attributes[item].name;
                break;
            }
        }
        var arrow = document.createElement('div');
        if (hash) {
            arrow.setAttribute(hash, '');
        }
        arrow.setAttribute('x-arrow', '');
        arrow.className = 'popper__arrow';
        element.appendChild(arrow);
    };
    Popper.prototype.updatePopper = function () {
        var popperJS = this.popperJS;
        if (popperJS) {
            popperJS.update();
            if (popperJS._popper) {
                popperJS._popper.style.zIndex = popup_manager.nextZIndex();
            }
        } else {
            this.createPopper();
        }
    };
    Popper.prototype.destroyPopper = function () {
        if (this.popperJS) {
            this.resetTransformOrigin();
        }
    };
    vue_popper_decorate([Object(external_vue_property_decorator_["Prop"])()], Popper.prototype, "value", void 0);
    vue_popper_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'bottom' })], Popper.prototype, "placement", void 0);
    vue_popper_decorate([Object(external_vue_property_decorator_["Prop"])({ default: true })], Popper.prototype, "transformOrigin", void 0);
    vue_popper_decorate([Object(external_vue_property_decorator_["Prop"])({ default: function _default() {
            return { gpuAcceleration: false };
        } })], Popper.prototype, "popperOptions", void 0);
    vue_popper_decorate([Object(external_vue_property_decorator_["Prop"])({ default: false })], Popper.prototype, "visibleArrow", void 0);
    vue_popper_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 0 })], Popper.prototype, "offset", void 0);
    vue_popper_decorate([Object(external_vue_property_decorator_["Watch"])('showPopper')], Popper.prototype, "getShowPopper", null);
    return Popper;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var vue_popper = (vue_popper_Popper);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/drop-down/src/drop-down-content.vue?vue&type=script&lang=ts&
var drop_down_contentvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var drop_down_contentvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var drop_down_contentvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : drop_down_contentvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var drop_down_contentvue_type_script_lang_ts_DropDownContent = /** @class */function (_super) {
    drop_down_contentvue_type_script_lang_ts_extends(DropDownContent, _super);
    function DropDownContent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'ListDropDown';
        _this.width = '168px';
        return _this;
    }
    DropDownContent.prototype.mounted = function () {
        this.referenceElm = this.$parent.$refs.reference;
        this.$parent['popperElm'] = this.popperElm = this.$el;
    };
    DropDownContent.componentName = 'ListDropDown';
    drop_down_contentvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: false })], DropDownContent.prototype, "appendToBody", void 0);
    DropDownContent = drop_down_contentvue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], DropDownContent);
    return DropDownContent;
}(vue_popper);
/* harmony default export */ var drop_down_contentvue_type_script_lang_ts_ = (drop_down_contentvue_type_script_lang_ts_DropDownContent);
// CONCATENATED MODULE: ./packages/drop-down/src/drop-down-content.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_drop_down_contentvue_type_script_lang_ts_ = (drop_down_contentvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/drop-down/src/drop-down-content.vue





/* normalize component */

var drop_down_content_component = normalizeComponent(
  src_drop_down_contentvue_type_script_lang_ts_,
  drop_down_contentvue_type_template_id_028fc544_render,
  drop_down_contentvue_type_template_id_028fc544_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var drop_down_content_api; }
drop_down_content_component.options.__file = "packages/drop-down/src/drop-down-content.vue"
/* harmony default export */ var drop_down_content = (drop_down_content_component.exports);
// CONCATENATED MODULE: ./src/utils/clickoutside.ts

var nodeList = [];
var clickoutside_isServer = external_vue_default.a.prototype.$isServer;
var ctx = '@@clickoutsideContext';
var startClick;
var seed = 0;
var clickoutside_on = function () {
    if (!clickoutside_isServer && document.addEventListener) {
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
!external_vue_default.a.prototype.$isServer && clickoutside_on(document, 'mousedown', function (e) {
    return startClick = e;
});
!external_vue_default.a.prototype.$isServer && clickoutside_on(document, 'mouseup', function (e) {
    nodeList.forEach(function (node) {
        return node[ctx].documentHandler(e, startClick);
    });
});
function createDocumentHandler(el, binding, vnode) {
    return function (mouseup, mousedown) {
        if (mouseup === void 0) {
            mouseup = {};
        }
        if (mousedown === void 0) {
            mousedown = {};
        }
        if (!vnode || !vnode.context || !mouseup.target || !mousedown.target || el.contains(mouseup.target) || el.contains(mousedown.target) || el === mouseup.target || vnode.context.popperElm && (vnode.context.popperElm.contains(mouseup.target) || vnode.context.popperElm.contains(mousedown.target))) return;
        if (binding.expression && el[ctx].methodName && vnode.context[el[ctx].methodName]) {
            vnode.context[el[ctx].methodName]();
        } else {
            el[ctx].bindingFn && el[ctx].bindingFn();
        }
    };
}
/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-clickoutside="handleClose">
 * ```
 */
/* harmony default export */ var clickoutside = ({
    bind: function bind(el, binding, vnode) {
        nodeList.push(el);
        var id = seed++;
        el[ctx] = {
            id: id,
            documentHandler: createDocumentHandler(el, binding, vnode),
            methodName: binding.expression,
            bindingFn: binding.value
        };
    },
    update: function update(el, binding, vnode) {
        el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
        el[ctx].methodName = binding.expression;
        el[ctx].bindingFn = binding.value;
    },
    unbind: function unbind(el) {
        var len = nodeList.length;
        for (var i = 0; i < len; i++) {
            if (nodeList[i][ctx].id === el[ctx].id) {
                nodeList.splice(i, 1);
                break;
            }
        }
        delete el[ctx];
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/drop-down/src/drop-down.vue?vue&type=script&lang=ts&
var drop_downvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var drop_downvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var drop_downvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : drop_downvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var drop_downvue_type_script_lang_ts_KDropDown = /** @class */function (_super) {
    drop_downvue_type_script_lang_ts_extends(KDropDown, _super);
    function KDropDown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KDropDown';
        _this.visible = false;
        return _this;
    }
    KDropDown.prototype.onClick = function (e) {
        if (this.disabled) return;
        this.visible = !this.visible;
        this.$emit('change', this.visible);
    };
    KDropDown.prototype.hide = function () {
        this.visible = false;
    };
    KDropDown.componentName = 'KDropDown';
    drop_downvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: false })], KDropDown.prototype, "disabled", void 0);
    KDropDown = drop_downvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Component"])({
        components: { DropDownContent: drop_down_content },
        directives: {
            Clickoutside: clickoutside
        }
    })], KDropDown);
    return KDropDown;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var drop_downvue_type_script_lang_ts_ = (drop_downvue_type_script_lang_ts_KDropDown);
// CONCATENATED MODULE: ./packages/drop-down/src/drop-down.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_drop_downvue_type_script_lang_ts_ = (drop_downvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/drop-down/src/drop-down.vue





/* normalize component */

var drop_down_component = normalizeComponent(
  src_drop_downvue_type_script_lang_ts_,
  drop_downvue_type_template_id_6751149c_render,
  drop_downvue_type_template_id_6751149c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var drop_down_api; }
drop_down_component.options.__file = "packages/drop-down/src/drop-down.vue"
/* harmony default export */ var drop_down = (drop_down_component.exports);
// CONCATENATED MODULE: ./packages/drop-down/index.ts

drop_down.install = function (Vue) {
    Vue.component(drop_down.componentName, drop_down);
};
/* harmony default export */ var packages_drop_down = (drop_down);
// CONCATENATED MODULE: ./packages/empty/src/empty.ts
var empty_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var empty_extends = undefined && undefined.__extends || function () {
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
var empty_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : empty_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var empty_KEmpty = /** @class */function (_super) {
    empty_extends(KEmpty, _super);
    function KEmpty() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = "KEmpty";
        return _this;
    }
    KEmpty.prototype.render = function (h) {
        return h('div', {
            class: 'kview-empty'
        }, [h('img', {
            class: 'kview-empty__img',
            attrs: {
                src: this.image
            }
        }), h('p', {
            class: 'kview-empty__description'
        }, this.description)]);
    };
    KEmpty.componentName = "KEmpty";
    empty_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '' })], KEmpty.prototype, "description", void 0);
    empty_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '' })], KEmpty.prototype, "image", void 0);
    KEmpty = empty_decorate([external_vue_property_decorator_["Component"]], KEmpty);
    return KEmpty;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var empty = (empty_KEmpty);
// CONCATENATED MODULE: ./packages/empty/index.ts

empty.install = function (Vue) {
    Vue.component(empty.componentName, empty);
};
/* harmony default export */ var packages_empty = (empty);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/input.vue?vue&type=template&id=343dd774&
var inputvue_type_template_id_343dd774_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "kview-input" }, [
    _c("input", {
      class: [
        "kview-input__input",
        _vm.disabled && "kview-input__input--disabled"
      ],
      style: _vm.inputStyle,
      attrs: {
        placeholder: _vm.placeholder,
        disabled: _vm.disabled,
        maxlength: _vm.max > -1 ? _vm.max : ""
      },
      domProps: { value: _vm.value },
      on: {
        keyup: function($event) {
          if (
            !("button" in $event) &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          return _vm.handleEnter($event)
        },
        blur: _vm.handleBlur,
        focus: _vm.handleFocus,
        change: _vm.handleChange,
        input: _vm.onInput
      }
    }),
    _vm.max > -1
      ? _c("span", { staticClass: "kview-input__length" }, [
          _vm._v(_vm._s(_vm.len))
        ])
      : _vm._e()
  ])
}
var inputvue_type_template_id_343dd774_staticRenderFns = []
inputvue_type_template_id_343dd774_render._withStripped = true


// CONCATENATED MODULE: ./packages/input/src/input.vue?vue&type=template&id=343dd774&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/src/input.vue?vue&type=script&lang=ts&
var inputvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var inputvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var inputvue_type_script_lang_ts_assign = undefined && undefined.__assign || function () {
    inputvue_type_script_lang_ts_assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return inputvue_type_script_lang_ts_assign.apply(this, arguments);
};
var inputvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : inputvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var inputvue_type_script_lang_ts_KInput = /** @class */function (_super) {
    inputvue_type_script_lang_ts_extends(KInput, _super);
    function KInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KInput';
        _this.focused = false;
        return _this;
    }
    KInput.prototype.getValue = function (val) {
        if (this.validateEvent) {
            this.dispatch('KFormItem', 'k.form.change', [val]);
        }
    };
    Object.defineProperty(KInput.prototype, "len", {
        get: function get() {
            var len = this.max - (this.value + '').length;
            if (len < 0) {
                this.$emit('input', this.value.substring(0, this.max));
                return 0;
            }
            return len;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KInput.prototype, "inputStyle", {
        get: function get() {
            return this.max > -1 ? inputvue_type_script_lang_ts_assign(inputvue_type_script_lang_ts_assign({}, this.styles), { paddingRight: '40px' }) : this.styles;
        },
        enumerable: false,
        configurable: true
    });
    KInput.prototype.handleFocus = function (event) {
        this.focused = true;
        this.$emit('focus', event);
    };
    KInput.prototype.handleBlur = function (event) {
        this.focused = false;
        this.$emit('blur', event);
        if (this.validateEvent) {
            this.dispatch('KFormItem', 'k.form.blur', [this.value]);
        }
    };
    KInput.prototype.onInput = function (event) {
        this.$emit('input', event.target.value);
    };
    KInput.prototype.handleChange = function (event) {
        this.$emit('change', event.target.value);
    };
    KInput.prototype.handleEnter = function (event) {
        this.$emit('enter', event);
    };
    KInput.componentName = 'KInput';
    inputvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '' })], KInput.prototype, "placeholder", void 0);
    inputvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '' })], KInput.prototype, "value", void 0);
    inputvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: -1 })], KInput.prototype, "max", void 0);
    inputvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: function _default() {
            return {};
        } })], KInput.prototype, "styles", void 0);
    inputvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: true })], KInput.prototype, "validateEvent", void 0);
    inputvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KInput.prototype, "disabled", void 0);
    inputvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Watch"])('value')], KInput.prototype, "getValue", null);
    KInput = inputvue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KInput);
    return KInput;
}(emitter);
/* harmony default export */ var inputvue_type_script_lang_ts_ = (inputvue_type_script_lang_ts_KInput);
// CONCATENATED MODULE: ./packages/input/src/input.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_inputvue_type_script_lang_ts_ = (inputvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/input/src/input.vue





/* normalize component */

var input_component = normalizeComponent(
  src_inputvue_type_script_lang_ts_,
  inputvue_type_template_id_343dd774_render,
  inputvue_type_template_id_343dd774_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var input_api; }
input_component.options.__file = "packages/input/src/input.vue"
/* harmony default export */ var input = (input_component.exports);
// CONCATENATED MODULE: ./packages/input/index.ts

input.install = function (Vue) {
    Vue.component(input.componentName, input);
};
/* harmony default export */ var packages_input = (input);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/number-input/src/number-input.vue?vue&type=template&id=c9e452b4&
var number_inputvue_type_template_id_c9e452b4_render = function() {
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
var number_inputvue_type_template_id_c9e452b4_staticRenderFns = []
number_inputvue_type_template_id_c9e452b4_render._withStripped = true


// CONCATENATED MODULE: ./packages/number-input/src/number-input.vue?vue&type=template&id=c9e452b4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/number-input/src/number-input.vue?vue&type=script&lang=ts&
var number_inputvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var number_inputvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var number_inputvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : number_inputvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var number_inputvue_type_script_lang_ts_KNumberInput = /** @class */function (_super) {
    number_inputvue_type_script_lang_ts_extends(KNumberInput, _super);
    function KNumberInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KNumberInput';
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
        if (newVal >= this.max) newVal = this.max;
        if (newVal <= this.min) newVal = this.min;
        this.currentValue = newVal;
        this.userInput = null;
        this.$emit('input', newVal);
    };
    Object.defineProperty(KNumberInput.prototype, "styles", {
        get: function get() {
            return {
                width: this.width,
                height: this.height
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KNumberInput.prototype, "numPrecision", {
        get: function get() {
            var _a = this,
                value = _a.value,
                getPrecision = _a.getPrecision,
                precision = _a.precision;
            if (precision !== undefined) {
                return precision;
            } else {
                return getPrecision(value);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KNumberInput.prototype, "displayValue", {
        get: function get() {
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
        if (value === undefined) return 0;
        var valueString = value.toString();
        var dotPosition = valueString.indexOf('.');
        var precision = 0;
        if (dotPosition !== -1) {
            precision = valueString.length - dotPosition - 1;
        }
        return precision;
    };
    KNumberInput.prototype.toPrecision = function (num, precision) {
        if (precision === undefined) precision = this.numPrecision;
        return parseFloat(Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision) + '');
    };
    KNumberInput.prototype.setCurrentValue = function (newVal) {
        var oldVal = this.currentValue;
        if (typeof newVal === 'number' && this.precision !== undefined) {
            newVal = this.toPrecision(newVal, this.precision);
        }
        if (newVal >= this.max) newVal = this.max;
        if (newVal <= this.min) newVal = this.min;
        if (oldVal === newVal) return;
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
    KNumberInput.componentName = 'KNumberInput';
    number_inputvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '' })], KNumberInput.prototype, "unit", void 0);
    number_inputvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '' })], KNumberInput.prototype, "placeholder", void 0);
    number_inputvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KNumberInput.prototype, "max", void 0);
    number_inputvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KNumberInput.prototype, "min", void 0);
    number_inputvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KNumberInput.prototype, "value", void 0);
    number_inputvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '100%' })], KNumberInput.prototype, "width", void 0);
    number_inputvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'auto' })], KNumberInput.prototype, "height", void 0);
    number_inputvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ validator: function validator(val) {
            return val >= 0 && val === parseInt(val, 10);
        } })], KNumberInput.prototype, "precision", void 0);
    number_inputvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: true })], KNumberInput.prototype, "validateEvent", void 0);
    number_inputvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KNumberInput.prototype, "disabled", void 0);
    number_inputvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Watch"])('value', { immediate: true })], KNumberInput.prototype, "getValue", null);
    KNumberInput = number_inputvue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KNumberInput);
    return KNumberInput;
}(emitter);
/* harmony default export */ var number_inputvue_type_script_lang_ts_ = (number_inputvue_type_script_lang_ts_KNumberInput);
// CONCATENATED MODULE: ./packages/number-input/src/number-input.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_number_inputvue_type_script_lang_ts_ = (number_inputvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/number-input/src/number-input.vue





/* normalize component */

var number_input_component = normalizeComponent(
  src_number_inputvue_type_script_lang_ts_,
  number_inputvue_type_template_id_c9e452b4_render,
  number_inputvue_type_template_id_c9e452b4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var number_input_api; }
number_input_component.options.__file = "packages/number-input/src/number-input.vue"
/* harmony default export */ var number_input = (number_input_component.exports);
// CONCATENATED MODULE: ./packages/number-input/index.ts

number_input.install = function (Vue) {
    Vue.component(number_input.componentName, number_input);
};
/* harmony default export */ var packages_number_input = (number_input);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/list/src/list.vue?vue&type=template&id=049a15a6&
var listvue_type_template_id_049a15a6_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "kview-list", on: { contextmenu: _vm.onContextmenu } },
    _vm._l(_vm.data, function(item, index) {
      return _c(
        "li",
        {
          key: index,
          staticClass: "kview-list__item",
          style: _vm.itemStyles,
          on: {
            click: function($event) {
              $event.stopPropagation()
              _vm.onClick($event, item)
            }
          }
        },
        [
          _vm._t("left", null, { item: item }),
          _c("span", { staticClass: "kview-list__text" }, [
            _vm._v(_vm._s(item[_vm.field]))
          ])
        ],
        2
      )
    }),
    0
  )
}
var listvue_type_template_id_049a15a6_staticRenderFns = []
listvue_type_template_id_049a15a6_render._withStripped = true


// CONCATENATED MODULE: ./packages/list/src/list.vue?vue&type=template&id=049a15a6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/list/src/list.vue?vue&type=script&lang=ts&
var listvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var listvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var listvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : listvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// TODO hover和点击的颜色 从左到右渐变  左：#003C80   透明度100%     右：081C42 透明度10%
var listvue_type_script_lang_ts_KList = /** @class */function (_super) {
    listvue_type_script_lang_ts_extends(KList, _super);
    function KList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KList';
        return _this;
    }
    Object.defineProperty(KList.prototype, "itemStyles", {
        get: function get() {
            return {
                lineHeight: this.height + 'px',
                height: this.height + 'px'
            };
        },
        enumerable: false,
        configurable: true
    });
    KList.prototype.onClick = function (event, item) {
        this.$emit('click', { event: event, item: item });
    };
    KList.prototype.onContextmenu = function () {
        window.event.returnValue = false;
    };
    KList.componentName = 'KList';
    listvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: function _default() {
            return [];
        } })], KList.prototype, "data", void 0);
    listvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'text' })], KList.prototype, "field", void 0);
    listvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 36 })], KList.prototype, "height", void 0);
    KList = listvue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KList);
    return KList;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var listvue_type_script_lang_ts_ = (listvue_type_script_lang_ts_KList);
// CONCATENATED MODULE: ./packages/list/src/list.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_listvue_type_script_lang_ts_ = (listvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/list/src/list.vue





/* normalize component */

var list_component = normalizeComponent(
  src_listvue_type_script_lang_ts_,
  listvue_type_template_id_049a15a6_render,
  listvue_type_template_id_049a15a6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var list_api; }
list_component.options.__file = "packages/list/src/list.vue"
/* harmony default export */ var list = (list_component.exports);
// CONCATENATED MODULE: ./packages/list/index.ts

list.install = function (Vue) {
    Vue.component(list.componentName, list);
};
/* harmony default export */ var packages_list = (list);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/loading/src/loading.vue?vue&type=template&id=eee0a7ac&
var loadingvue_type_template_id_eee0a7ac_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "kview-loading-fade" },
      on: { "after-leave": _vm.handleAfterLeave }
    },
    [
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
          staticClass: "kview-loading-mask",
          class: [_vm.customClass, { "is-fullscreen": _vm.fullscreen }],
          style: { backgroundColor: _vm.background || "" }
        },
        [
          _c("div", { staticClass: "kview-loading-spinner" }, [
            !_vm.spinner
              ? _c(
                  "svg",
                  {
                    staticClass: "circular",
                    attrs: { viewBox: "25 25 50 50" }
                  },
                  [
                    _c("circle", {
                      staticClass: "path",
                      attrs: { cx: "50", cy: "50", r: "20", fill: "none" }
                    })
                  ]
                )
              : _c("i", { class: _vm.spinner }),
            _vm.text
              ? _c("p", { staticClass: "kview-loading-text" }, [
                  _vm._v(_vm._s(_vm.text))
                ])
              : _vm._e()
          ])
        ]
      )
    ]
  )
}
var loadingvue_type_template_id_eee0a7ac_staticRenderFns = []
loadingvue_type_template_id_eee0a7ac_render._withStripped = true


// CONCATENATED MODULE: ./packages/loading/src/loading.vue?vue&type=template&id=eee0a7ac&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/loading/src/loading.vue?vue&type=script&lang=ts&
var loadingvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var loadingvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var loadingvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : loadingvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var loadingvue_type_script_lang_ts_Loading = /** @class */function (_super) {
    loadingvue_type_script_lang_ts_extends(Loading, _super);
    function Loading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = null;
        _this.spinner = null;
        _this.background = null;
        _this.fullscreen = true;
        _this.visible = false;
        return _this;
    }
    Loading.prototype.handleAfterLeave = function () {
        this.$emit('after-leave');
    };
    Loading.prototype.setText = function (text) {
        this.text = text;
    };
    Loading = loadingvue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], Loading);
    return Loading;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var loadingvue_type_script_lang_ts_ = (loadingvue_type_script_lang_ts_Loading);
// CONCATENATED MODULE: ./packages/loading/src/loading.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_loadingvue_type_script_lang_ts_ = (loadingvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/loading/src/loading.vue





/* normalize component */

var loading_component = normalizeComponent(
  src_loadingvue_type_script_lang_ts_,
  loadingvue_type_template_id_eee0a7ac_render,
  loadingvue_type_template_id_eee0a7ac_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var loading_api; }
loading_component.options.__file = "packages/loading/src/loading.vue"
/* harmony default export */ var loading = (loading_component.exports);
// EXTERNAL MODULE: external "kview-c-ui/lib/utils/popup"
var popup_ = __webpack_require__(3);
var popup_default = /*#__PURE__*/__webpack_require__.n(popup_);

// CONCATENATED MODULE: ./src/utils/after-leave.ts
/* harmony default export */ var after_leave = (function (instance, callback, speed, once) {
    if (speed === void 0) {
        speed = 300;
    }
    if (once === void 0) {
        once = false;
    }
    if (!instance || !callback) throw new Error('instance & callback is required');
    var called = false;
    var afterLeaveCallback = function afterLeaveCallback() {
        if (called) return;
        called = true;
        if (callback) {
            callback.apply(null, arguments);
        }
    };
    if (once) {
        instance.$once('after-leave', afterLeaveCallback);
    } else {
        instance.$on('after-leave', afterLeaveCallback);
    }
    setTimeout(function () {
        afterLeaveCallback();
    }, speed + 100);
});
;
// CONCATENATED MODULE: ./packages/loading/src/directive.ts





var Mask = external_vue_property_decorator_["Vue"].extend(loading);
var loadingDirective = { install: null };
loadingDirective.install = function (Vue) {
    var toggleLoading = function toggleLoading(el, binding) {
        if (binding.value) {
            Vue.nextTick(function () {
                if (binding.modifiers.fullscreen) {
                    el.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
                    el.originalOverflow = Object(dom_["getStyle"])(document.body, 'overflow');
                    el.maskStyle.zIndex = popup_["PopupManager"].nextZIndex();
                    Object(dom_["addClass"])(el.mask, 'is-fullscreen');
                    insertDom(document.body, el, binding);
                } else {
                    Object(dom_["removeClass"])(el.mask, 'is-fullscreen');
                    if (binding.modifiers.body) {
                        el.originalPosition = Object(dom_["getStyle"])(document.body, 'position');
                        ['top', 'left'].forEach(function (property) {
                            var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
                            el.maskStyle[property] = el.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] - parseInt(Object(dom_["getStyle"])(document.body, "margin-" + property), 10) + 'px';
                        });
                        ['height', 'width'].forEach(function (property) {
                            el.maskStyle[property] = el.getBoundingClientRect()[property] + 'px';
                        });
                        insertDom(document.body, el, binding);
                    } else {
                        el.originalPosition = Object(dom_["getStyle"])(el, 'position');
                        insertDom(el, el, binding);
                    }
                }
            });
        } else {
            after_leave(el.instance, function (_) {
                if (!el.instance.hiding) return;
                el.domVisible = false;
                var target = binding.modifiers.fullscreen || binding.modifiers.body ? document.body : el;
                Object(dom_["removeClass"])(target, 'kview-loading-parent--relative');
                Object(dom_["removeClass"])(target, 'kview-loading-parent--hidden');
                el.instance.hiding = false;
            }, 300, true);
            el.instance.visible = false;
            el.instance.hiding = true;
        }
    };
    var insertDom = function insertDom(parent, el, binding) {
        if (!el.domVisible && Object(dom_["getStyle"])(el, 'display') !== 'none' && Object(dom_["getStyle"])(el, 'visibility') !== 'hidden') {
            Object.keys(el.maskStyle).forEach(function (property) {
                el.mask.style[property] = el.maskStyle[property];
            });
            if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
                Object(dom_["addClass"])(parent, 'kview-loading-parent--relative');
            }
            if (binding.modifiers.fullscreen && binding.modifiers.lock) {
                Object(dom_["addClass"])(parent, 'kview-loading-parent--hidden');
            }
            el.domVisible = true;
            parent.appendChild(el.mask);
            Vue.nextTick(function () {
                if (el.instance.hiding) {
                    el.instance.$emit('after-leave');
                } else {
                    el.instance.visible = true;
                }
            });
            el.domInserted = true;
        } else if (el.domVisible && el.instance.hiding === true) {
            el.instance.visible = true;
            el.instance.hiding = false;
        }
    };
    Vue.directive('loading', {
        bind: function bind(el, binding, vnode) {
            var textExr = el.getAttribute('kview-loading-text');
            var spinnerExr = el.getAttribute('kview-loading-spinner');
            var backgroundExr = el.getAttribute('kview-loading-background');
            var customClassExr = el.getAttribute('kview-loading-custom-class');
            var vm = vnode.context;
            var mask = new Mask({
                el: document.createElement('div'),
                data: {
                    text: vm && vm[textExr] || textExr,
                    spinner: vm && vm[spinnerExr] || spinnerExr,
                    background: vm && vm[backgroundExr] || backgroundExr,
                    customClass: vm && vm[customClassExr] || customClassExr,
                    fullscreen: !!binding.modifiers.fullscreen
                }
            });
            el.instance = mask;
            el.mask = mask.$el;
            el.maskStyle = {};
            binding.value && toggleLoading(el, binding);
        },
        update: function update(el, binding) {
            el.instance.setText(el.getAttribute('kview-loading-text'));
            if (binding.oldValue !== binding.value) {
                toggleLoading(el, binding);
            }
        },
        unbind: function unbind(el, binding) {
            if (el.domInserted) {
                el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
                toggleLoading(el, { value: false, modifiers: binding.modifiers });
            }
            el.instance && el.instance.$destroy();
        }
    });
};
/* harmony default export */ var directive = (loadingDirective);
// CONCATENATED MODULE: ./packages/loading/index.ts

/* harmony default export */ var packages_loading = ({
    install: function install(Vue) {
        Vue.use(directive);
    },
    directive: directive
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/menu-item/src/menu-item.vue?vue&type=template&id=08cd5af4&
var menu_itemvue_type_template_id_08cd5af4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "kview-menu-item",
      style: _vm.styles,
      on: { click: _vm.onClick }
    },
    [
      _c(
        "div",
        { staticClass: "kview-menu-item__content", class: _vm.activeClass },
        [
          _c(
            "span",
            { staticClass: "kview-menu-item__icon", class: _vm.activeClass },
            [_vm._t("default")],
            2
          ),
          _c(
            "p",
            {
              staticClass: "kview-menu-item__description",
              class: _vm.activeClass
            },
            [_c("span", [_vm._v(_vm._s(_vm.description))])]
          )
        ]
      ),
      _c(
        "transition",
        {
          attrs: { name: "kview-fade" },
          on: {
            "before-enter": _vm.beforeWidthEnter,
            "after-enter": _vm.afterWidthEnter
          }
        },
        [
          _vm.active
            ? _c("div", { staticClass: "kview-menu-item__mask" })
            : _vm._e()
        ]
      ),
      _vm.active && _vm.maskEnd
        ? _c("img", {
            staticClass: "kview-menu-item__arrow",
            attrs: { src: _vm.arrowImg, alt: "img" }
          })
        : _vm._e()
    ],
    1
  )
}
var menu_itemvue_type_template_id_08cd5af4_staticRenderFns = []
menu_itemvue_type_template_id_08cd5af4_render._withStripped = true


// CONCATENATED MODULE: ./packages/menu-item/src/menu-item.vue?vue&type=template&id=08cd5af4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/menu-item/src/menu-item.vue?vue&type=script&lang=ts&
var menu_itemvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var menu_itemvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var menu_itemvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : menu_itemvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var arrowImg = __webpack_require__(10);
var menu_itemvue_type_script_lang_ts_KMenuItem = /** @class */function (_super) {
    menu_itemvue_type_script_lang_ts_extends(KMenuItem, _super);
    function KMenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KMenuItem';
        _this.arrowImg = arrowImg;
        _this.maskEnd = false;
        return _this;
    }
    Object.defineProperty(KMenuItem.prototype, "activeClass", {
        get: function get() {
            if (this.active) return 'is-active';
            return '';
        },
        enumerable: false,
        configurable: true
    });
    KMenuItem.prototype.onClick = function (evnet) {
        this.$emit('click', this.$el);
    };
    KMenuItem.prototype.beforeWidthEnter = function () {
        this.maskEnd = false;
        this.$emit('before');
    };
    KMenuItem.prototype.afterWidthEnter = function () {
        this.maskEnd = true;
        this.$emit('after');
    };
    KMenuItem.componentName = 'KMenuItem';
    menu_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '' })], KMenuItem.prototype, "description", void 0);
    menu_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: false })], KMenuItem.prototype, "active", void 0);
    menu_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: function _default() {
            return {};
        } })], KMenuItem.prototype, "styles", void 0);
    KMenuItem = menu_itemvue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KMenuItem);
    return KMenuItem;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var menu_itemvue_type_script_lang_ts_ = (menu_itemvue_type_script_lang_ts_KMenuItem);
// CONCATENATED MODULE: ./packages/menu-item/src/menu-item.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_menu_itemvue_type_script_lang_ts_ = (menu_itemvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/menu-item/src/menu-item.vue





/* normalize component */

var menu_item_component = normalizeComponent(
  src_menu_itemvue_type_script_lang_ts_,
  menu_itemvue_type_template_id_08cd5af4_render,
  menu_itemvue_type_template_id_08cd5af4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var menu_item_api; }
menu_item_component.options.__file = "packages/menu-item/src/menu-item.vue"
/* harmony default export */ var menu_item = (menu_item_component.exports);
// CONCATENATED MODULE: ./packages/menu-item/index.ts

menu_item.install = function (Vue) {
    Vue.component(menu_item.componentName, menu_item);
};
/* harmony default export */ var packages_menu_item = (menu_item);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/message/src/message.vue?vue&type=template&id=71e89640&
var messagevue_type_template_id_71e89640_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: { name: "kview-message-fade" },
      on: { "after-leave": _vm.handleAfterLeave }
    },
    [
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
          class: [
            "kview-message",
            _vm.type ? "kview-message--" + _vm.type : ""
          ],
          style: _vm.positionStyle
        },
        [
          _vm._t("default", [
            !_vm.dangerouslyUseHTMLString
              ? _c("p", { staticClass: "kview-message__content" }, [
                  _vm._v(_vm._s(_vm.message))
                ])
              : _c("p", {
                  staticClass: "kview-message__content",
                  domProps: { innerHTML: _vm._s(_vm.message) }
                })
          ])
        ],
        2
      )
    ]
  )
}
var messagevue_type_template_id_71e89640_staticRenderFns = []
messagevue_type_template_id_71e89640_render._withStripped = true


// CONCATENATED MODULE: ./packages/message/src/message.vue?vue&type=template&id=71e89640&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/message/src/message.vue?vue&type=script&lang=ts&
var messagevue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var messagevue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var messagevue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : messagevue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var messagevue_type_script_lang_ts_KMessage = /** @class */function (_super) {
    messagevue_type_script_lang_ts_extends(KMessage, _super);
    function KMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dangerouslyUseHTMLString = false;
        _this.message = '';
        _this.visible = false;
        _this.timer = null;
        _this.duration = 3000;
        _this.closed = false;
        _this.onClose = null;
        _this.verticalOffset = 20;
        _this.type = 'success';
        return _this;
    }
    KMessage.prototype.getClosed = function (newVal) {
        if (newVal) {
            this.visible = false;
        }
    };
    Object.defineProperty(KMessage.prototype, "positionStyle", {
        get: function get() {
            return {
                'top': this.verticalOffset + "px"
            };
        },
        enumerable: false,
        configurable: true
    });
    KMessage.prototype.handleAfterLeave = function () {
        this.$destroy();
        this.$el.parentNode && this.$el.parentNode.removeChild(this.$el);
    };
    KMessage.prototype.clearTimer = function () {
        clearTimeout(this.timer);
    };
    KMessage.prototype.close = function () {
        this.closed = true;
        if (typeof this.onClose === 'function') {
            this.onClose(this);
        }
    };
    KMessage.prototype.startTimer = function () {
        var _this = this;
        if (this.duration > 0) {
            this.timer = setTimeout(function () {
                if (!_this.closed) {
                    _this.close();
                }
            }, this.duration);
        }
    };
    KMessage.prototype.mounted = function () {
        this.startTimer();
    };
    KMessage.componentName = 'KMessage';
    messagevue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Watch"])('closed')], KMessage.prototype, "getClosed", null);
    KMessage = messagevue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KMessage);
    return KMessage;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var messagevue_type_script_lang_ts_ = (messagevue_type_script_lang_ts_KMessage);
// CONCATENATED MODULE: ./packages/message/src/message.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_messagevue_type_script_lang_ts_ = (messagevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/message/src/message.vue





/* normalize component */

var message_component = normalizeComponent(
  src_messagevue_type_script_lang_ts_,
  messagevue_type_template_id_71e89640_render,
  messagevue_type_template_id_71e89640_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var message_api; }
message_component.options.__file = "packages/message/src/message.vue"
/* harmony default export */ var src_message = (message_component.exports);
// CONCATENATED MODULE: ./src/utils/vdom.ts
var vdom_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };


function isVNode(node) {
    return node !== null && (typeof node === 'undefined' ? 'undefined' : vdom_typeof(node)) === 'object' && hasOwn(node, 'componentOptions');
}
;
// CONCATENATED MODULE: ./packages/message/index.ts



var instance;
var message_instances = [];
var message_seed = 1;
var message_Message = function Message(options) {
    options = options || {};
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }
    var userOnClose = options.onClose;
    var id = 'message_' + message_seed++;
    options.onClose = function () {
        Message.close(id, userOnClose);
    };
    instance = new src_message({
        data: options
    });
    instance.id = id;
    if (isVNode(instance.message)) {
        instance.$slots.default = [instance.message];
        instance.message = null;
    }
    instance.$mount();
    options.appendDom ? options.appendDom.appendChild(instance.$el) : document.body.appendChild(instance.$el);
    var verticalOffset = options.offset || 20;
    message_instances.forEach(function (item) {
        verticalOffset += item.$el.offsetHeight + 16;
    });
    instance.verticalOffset = verticalOffset;
    instance.visible = true;
    instance.$el.style.zIndex = popup_["PopupManager"].nextZIndex();
    message_instances.push(instance);
    return instance;
};
message_Message.close = function (id, userOnClose) {
    var len = message_instances.length;
    var index = -1;
    var removedHeight;
    for (var i = 0; i < len; i++) {
        if (id === message_instances[i].id) {
            removedHeight = message_instances[i].$el.offsetHeight;
            index = i;
            if (typeof userOnClose === 'function') {
                userOnClose(message_instances[i]);
            }
            message_instances.splice(i, 1);
            break;
        }
    }
    if (len <= 1 || index === -1 || index > message_instances.length - 1) return;
    for (var i = index; i < len - 1; i++) {
        var dom = message_instances[i].$el;
        dom.style['top'] = parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px';
    }
};
message_Message.closeAll = function () {
    for (var i = message_instances.length - 1; i >= 0; i--) {
        message_instances[i].close();
    }
};
/* harmony default export */ var packages_message = (message_Message);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/message-box/src/messagebox.vue?vue&type=template&id=3abf147d&
var messageboxvue_type_template_id_3abf147d_render = function() {
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
var messageboxvue_type_template_id_3abf147d_staticRenderFns = []
messageboxvue_type_template_id_3abf147d_render._withStripped = true


// CONCATENATED MODULE: ./packages/message-box/src/messagebox.vue?vue&type=template&id=3abf147d&

// CONCATENATED MODULE: ./src/utils/aria-utils.ts
var __spreadArrays = undefined && undefined.__spreadArrays || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
    }for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
        }
    }return r;
};
var aria = aria || {};
aria.Utils = aria.Utils || {};
/**
 * @desc Set focus on descendant nodes until the first focusable element is
 *       found.
 * @param element
 *          DOM node for which to find the first focusable descendant.
 * @returns
 *  true if a focusable element is found and focus is set.
 */
aria.Utils.focusFirstDescendant = function (element) {
    for (var i = 0; i < element.childNodes.length; i++) {
        var child = element.childNodes[i];
        if (aria.Utils.attemptFocus(child) || aria.Utils.focusFirstDescendant(child)) {
            return true;
        }
    }
    return false;
};
/**
 * @desc Find the last descendant node that is focusable.
 * @param element
 *          DOM node for which to find the last focusable descendant.
 * @returns
 *  true if a focusable element is found and focus is set.
 */
aria.Utils.focusLastDescendant = function (element) {
    for (var i = element.childNodes.length - 1; i >= 0; i--) {
        var child = element.childNodes[i];
        if (aria.Utils.attemptFocus(child) || aria.Utils.focusLastDescendant(child)) {
            return true;
        }
    }
    return false;
};
/**
 * @desc Set Attempt to set focus on the current node.
 * @param element
 *          The node to attempt to focus on.
 * @returns
 *  true if element is focused.
 */
aria.Utils.attemptFocus = function (element) {
    if (!aria.Utils.isFocusable(element)) {
        return false;
    }
    aria.Utils.IgnoreUtilFocusChanges = true;
    try {
        element.focus();
    } catch (e) {}
    aria.Utils.IgnoreUtilFocusChanges = false;
    return document.activeElement === element;
};
aria.Utils.isFocusable = function (element) {
    if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute('tabIndex') !== null) {
        return true;
    }
    if (element.disabled) {
        return false;
    }
    switch (element.nodeName) {
        case 'A':
            return !!element.href && element.rel !== 'ignore';
        case 'INPUT':
            return element.type !== 'hidden' && element.type !== 'file';
        case 'BUTTON':
        case 'SELECT':
        case 'TEXTAREA':
            return true;
        default:
            return false;
    }
};
/**
 * 触发一个事件
 * mouseenter, mouseleave, mouseover, keyup, change, click 等
 * @param  {Element} elm
 * @param  {String} name
 * @param  {*} opts
 */
aria.Utils.triggerEvent = function (elm, name) {
    var opts = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        opts[_i - 2] = arguments[_i];
    }
    var eventName;
    if (/^mouse|click/.test(name)) {
        eventName = 'MouseEvents';
    } else if (/^key/.test(name)) {
        eventName = 'KeyboardEvent';
    } else {
        eventName = 'HTMLEvents';
    }
    var evt = document.createEvent(eventName);
    evt.initEvent.apply(evt, __spreadArrays([name], opts));
    elm.dispatchEvent ? elm.dispatchEvent(evt) : elm.fireEvent('on' + name, evt);
    return elm;
};
aria.Utils.keys = {
    tab: 9,
    enter: 13,
    space: 32,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    esc: 27
};
/* harmony default export */ var aria_utils = (aria.Utils);
// CONCATENATED MODULE: ./src/utils/aria-dialog.ts
var aria_dialog_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };


/**
 * @constructor
 * @desc Dialog object providing modal focus management.
 *
 * Assumptions: The element serving as the dialog container is present in the
 * DOM and hidden. The dialog container has role='dialog'.
 *
 * @param dialogId
 *          The ID of the element serving as the dialog container.
 * @param focusAfterClosed
 *          Either the DOM node or the ID of the DOM node to focus when the
 *          dialog closes.
 * @param focusFirst
 *          Optional parameter containing either the DOM node or the ID of the
 *          DOM node to focus when the dialog opens. If not specified, the
 *          first focusable element in the dialog will receive focus.
 */
var aria_dialog_aria = aria_dialog_aria || {};
var tabEvent;
aria_dialog_aria.Dialog = function (dialog, focusAfterClosed, focusFirst) {
    var _this = this;
    this.dialogNode = dialog;
    if (this.dialogNode === null || this.dialogNode.getAttribute('role') !== 'dialog') {
        throw new Error('Dialog() requires a DOM element with ARIA role of dialog.');
    }
    if (typeof focusAfterClosed === 'string') {
        this.focusAfterClosed = document.getElementById(focusAfterClosed);
    } else if ((typeof focusAfterClosed === 'undefined' ? 'undefined' : aria_dialog_typeof(focusAfterClosed)) === 'object') {
        this.focusAfterClosed = focusAfterClosed;
    } else {
        this.focusAfterClosed = null;
    }
    if (typeof focusFirst === 'string') {
        this.focusFirst = document.getElementById(focusFirst);
    } else if ((typeof focusFirst === 'undefined' ? 'undefined' : aria_dialog_typeof(focusFirst)) === 'object') {
        this.focusFirst = focusFirst;
    } else {
        this.focusFirst = null;
    }
    if (this.focusFirst) {
        this.focusFirst.focus();
    } else {
        aria_utils.focusFirstDescendant(this.dialogNode);
    }
    this.lastFocus = document.activeElement;
    tabEvent = function tabEvent(e) {
        _this.trapFocus(e);
    };
    this.addListeners();
};
aria_dialog_aria.Dialog.prototype.addListeners = function () {
    document.addEventListener('focus', tabEvent, true);
};
aria_dialog_aria.Dialog.prototype.removeListeners = function () {
    document.removeEventListener('focus', tabEvent, true);
};
aria_dialog_aria.Dialog.prototype.closeDialog = function () {
    var _this = this;
    this.removeListeners();
    if (this.focusAfterClosed) {
        setTimeout(function () {
            _this.focusAfterClosed.focus();
        });
    }
};
aria_dialog_aria.Dialog.prototype.trapFocus = function (event) {
    if (aria_utils.IgnoreUtilFocusChanges) {
        return;
    }
    if (this.dialogNode.contains(event.target)) {
        this.lastFocus = event.target;
    } else {
        aria_utils.focusFirstDescendant(this.dialogNode);
        if (this.lastFocus === document.activeElement) {
            aria_utils.focusLastDescendant(this.dialogNode);
        }
        this.lastFocus = document.activeElement;
    }
};
/* harmony default export */ var aria_dialog = (aria_dialog_aria.Dialog);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/message-box/src/messagebox.vue?vue&type=script&lang=ts&
var messageboxvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var messageboxvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var messageboxvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : messageboxvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var messageBox;
var messageboxvue_type_script_lang_ts_Messagebox = /** @class */function (_super) {
    messageboxvue_type_script_lang_ts_extends(Messagebox, _super);
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
            messageBox = new aria_dialog(this.$el, this.focusAfterClosed, this.getFirstFocus());
        }
    };
    Messagebox.prototype.getFirstFocus = function () {
        var btn = this.$el;
        return btn;
    };
    Messagebox.prototype.doClose = function () {
        var _this = this;
        if (!this.visible) return;
        this.visible = false;
        this._closing = true;
        messageBox.closeDialog(); // 解绑
        if (this.lockScroll) {
            setTimeout(this.restoreBodyStyle, 200);
        }
        this.opened = false;
        this.doAfterClose();
        setTimeout(function () {
            if (_this.action) _this.callback(_this.action, _this);
        });
    };
    Messagebox.prototype.handleAction = function (action) {
        this.action = action;
        this.doClose();
    };
    messageboxvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '' })], Messagebox.prototype, "title", void 0);
    messageboxvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '' })], Messagebox.prototype, "message", void 0);
    messageboxvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Watch"])('visible')], Messagebox.prototype, "getVisible", null);
    Messagebox = messageboxvue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], Messagebox);
    return Messagebox;
}(popup_default.a);
/* harmony default export */ var messageboxvue_type_script_lang_ts_ = (messageboxvue_type_script_lang_ts_Messagebox);
// CONCATENATED MODULE: ./packages/message-box/src/messagebox.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_messageboxvue_type_script_lang_ts_ = (messageboxvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/message-box/src/messagebox.vue





/* normalize component */

var messagebox_component = normalizeComponent(
  src_messageboxvue_type_script_lang_ts_,
  messageboxvue_type_template_id_3abf147d_render,
  messageboxvue_type_template_id_3abf147d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var messagebox_api; }
messagebox_component.options.__file = "packages/message-box/src/messagebox.vue"
/* harmony default export */ var messagebox = (messagebox_component.exports);
// CONCATENATED MODULE: ./packages/message-box/index.ts
var message_box_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





var currentMsg, message_box_instance;
var msgQueue = [];
var defaults = {};
var defaultCallback = function defaultCallback(action) {
    if (currentMsg) {
        if (currentMsg.resolve) {
            if (action === 'confirm') {
                currentMsg.resolve(action);
            } else if (currentMsg.reject && (action === 'cancel' || action === 'close')) {
                currentMsg.reject(action);
            }
        }
    }
};
var message_box_initInstance = function initInstance() {
    message_box_instance = new messagebox({
        el: document.createElement('div')
    });
    message_box_instance.callback = defaultCallback;
};
var message_box_showNextMsg = function showNextMsg() {
    if (!message_box_instance) {
        message_box_initInstance();
    }
    message_box_instance.action = '';
    if (!message_box_instance.visible || message_box_instance.closeTimer) {
        if (msgQueue.length > 0) {
            currentMsg = msgQueue.shift();
            var options = currentMsg.options;
            for (var prop in options) {
                if (options.hasOwnProperty(prop)) {
                    message_box_instance[prop] = options[prop];
                }
            }
            if (options.callback === undefined) {
                message_box_instance.callback = defaultCallback;
            }
            var oldCb_1 = message_box_instance.callback;
            message_box_instance.callback = function (action, instance) {
                oldCb_1(action, instance);
                showNextMsg();
            };
            if (isVNode(message_box_instance.message)) {
                message_box_instance.$slots.default = [message_box_instance.message];
                message_box_instance.message = null;
            } else {
                delete message_box_instance.$slots.default;
            }
            ['modal', 'showClose', 'closeOnClickModal', 'closeOnPressEscape', 'closeOnHashChange'].forEach(function (prop) {
                if (message_box_instance[prop] === undefined) {
                    message_box_instance[prop] = true;
                }
            });
            if (message_box_instance.appendDom) {
                message_box_instance.appendDom.appendChild(message_box_instance.$el);
            } else {
                document.body.appendChild(message_box_instance.$el);
            }
            external_vue_default.a.nextTick(function () {
                message_box_instance.visible = true;
            });
        }
    }
};
var message_box_MessageBox = function MessageBox(options, callback) {
    if (typeof options === 'string' || isVNode(options)) {
        options = {
            message: options
        };
        if (typeof arguments[1] === 'string') {
            options.title = arguments[1];
        }
    } else if (options.callback && !callback) {
        callback = options.callback;
    }
    return new Promise(function (resolve, reject) {
        msgQueue.push({
            options: merge({}, defaults, MessageBox.defaults, options),
            callback: callback,
            resolve: resolve,
            reject: reject
        });
        message_box_showNextMsg();
    });
};
message_box_MessageBox.defaults = {};
message_box_MessageBox.setDefaults = function (defaults) {
    message_box_MessageBox.defaults = defaults;
};
message_box_MessageBox.confirm = function (title, message, options) {
    if ((typeof title === 'undefined' ? 'undefined' : message_box_typeof(title)) === 'object') {
        options = title;
        title = '';
    } else if (title === undefined) {
        title = '';
    }
    return message_box_MessageBox(merge({
        title: title,
        message: message,
        $type: 'confirm',
        showCancelButton: true
    }, options));
};
message_box_MessageBox.close = function () {
    message_box_instance.doClose();
    message_box_instance.visible = false;
    msgQueue = [];
    currentMsg = null;
};
/* harmony default export */ var message_box = (message_box_MessageBox);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/pagination/src/pagination.vue?vue&type=template&id=734cbb26&
var paginationvue_type_template_id_734cbb26_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "kview-paination" }, [
    _c(
      "button",
      {
        staticClass: "kview-paination__button",
        attrs: { disabled: _vm.isPrevDisabled, type: "button" },
        on: { click: _vm.onPreClik }
      },
      [_c("img", { attrs: { src: _vm.arrowLeft, alt: "left" } })]
    ),
    _c(
      "ul",
      { staticClass: "kview-paination__list" },
      _vm._l(_vm.pageCount, function(n) {
        return _c(
          "li",
          {
            key: n,
            staticClass: "kview-paination__number",
            class: _vm.currentPage === n ? "active" : "",
            on: {
              click: function($event) {
                _vm.onPageChange(n)
              }
            }
          },
          [_vm._v(_vm._s(n))]
        )
      }),
      0
    ),
    _c(
      "button",
      {
        staticClass: "kview-paination__button",
        attrs: { disabled: _vm.isNextDisabled, type: "button" },
        on: { click: _vm.onNextClick }
      },
      [_c("img", { attrs: { src: _vm.arrowRight, alt: "right" } })]
    )
  ])
}
var paginationvue_type_template_id_734cbb26_staticRenderFns = []
paginationvue_type_template_id_734cbb26_render._withStripped = true


// CONCATENATED MODULE: ./packages/pagination/src/pagination.vue?vue&type=template&id=734cbb26&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/pagination/src/pagination.vue?vue&type=script&lang=ts&
var paginationvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var paginationvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var paginationvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : paginationvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var arrowLeft = __webpack_require__(11);
var arrowRight = __webpack_require__(12);
var paginationvue_type_script_lang_ts_KPagination = /** @class */function (_super) {
    paginationvue_type_script_lang_ts_extends(KPagination, _super);
    function KPagination() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KPagination';
        _this.arrowLeft = arrowLeft;
        _this.arrowRight = arrowRight;
        return _this;
    }
    Object.defineProperty(KPagination.prototype, "pageCount", {
        get: function get() {
            var count = this.total / this.pageSize;
            if (count === 0) return 1;
            return Math.ceil(count);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KPagination.prototype, "isPrevDisabled", {
        get: function get() {
            if (this.currentPage === 1) return true;
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KPagination.prototype, "isNextDisabled", {
        get: function get() {
            if (this.currentPage === this.pageCount) return true;
            return false;
        },
        enumerable: false,
        configurable: true
    });
    KPagination.prototype.onPageChange = function (v) {
        this.$emit('update:currentPage', v);
    };
    KPagination.prototype.onPreClik = function () {
        if (this.isPrevDisabled) return;
        this.$emit('update:currentPage', this.currentPage - 1);
    };
    KPagination.prototype.onNextClick = function () {
        if (this.isNextDisabled) return;
        this.$emit('update:currentPage', this.currentPage + 1);
    };
    KPagination.componentName = 'KPagination';
    paginationvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 0 })], KPagination.prototype, "total", void 0);
    paginationvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 10 })], KPagination.prototype, "pageSize", void 0);
    paginationvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 1 })], KPagination.prototype, "currentPage", void 0);
    KPagination = paginationvue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KPagination);
    return KPagination;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var paginationvue_type_script_lang_ts_ = (paginationvue_type_script_lang_ts_KPagination);
// CONCATENATED MODULE: ./packages/pagination/src/pagination.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_paginationvue_type_script_lang_ts_ = (paginationvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/pagination/src/pagination.vue





/* normalize component */

var pagination_component = normalizeComponent(
  src_paginationvue_type_script_lang_ts_,
  paginationvue_type_template_id_734cbb26_render,
  paginationvue_type_template_id_734cbb26_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var pagination_api; }
pagination_component.options.__file = "packages/pagination/src/pagination.vue"
/* harmony default export */ var pagination = (pagination_component.exports);
// CONCATENATED MODULE: ./packages/pagination/index.ts

pagination.install = function (Vue) {
    Vue.component(pagination.componentName, pagination);
};
/* harmony default export */ var packages_pagination = (pagination);
// CONCATENATED MODULE: ./packages/ripple/src/ripple.ts
var ripple_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ripple_extends = undefined && undefined.__extends || function () {
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
var ripple_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : ripple_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ripple_KRipple = /** @class */function (_super) {
    ripple_extends(KRipple, _super);
    function KRipple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KRipple';
        return _this;
    }
    KRipple.prototype.onClick = function (e) {
        this.$emit('click', e);
    };
    KRipple.prototype.render = function (h) {
        return h('button', {
            class: ['kview-ripple', this.animation ? 'kview-ripple--animation' : ''],
            on: {
                click: this.onClick
            }
        }, [h('span', { class: 'kview-ripple__center' }), h('div', { class: 'kview-ripple__pulse' })]);
    };
    KRipple.componentName = 'KRipple';
    ripple_decorate([Object(external_vue_property_decorator_["Prop"])({ default: false })], KRipple.prototype, "animation", void 0);
    KRipple = ripple_decorate([external_vue_property_decorator_["Component"]], KRipple);
    return KRipple;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var ripple = (ripple_KRipple);
// CONCATENATED MODULE: ./packages/ripple/index.ts

ripple.install = function (Vue) {
    Vue.component(ripple.componentName, ripple);
};
/* harmony default export */ var packages_ripple = (ripple);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/search/src/search.vue?vue&type=template&id=4e34eb34&
var searchvue_type_template_id_4e34eb34_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "kview-search" }, [
    _c("span", {
      staticClass: "kview-search__icon font_family kview-icon-search"
    }),
    _c("div", { staticClass: "kview-search__flex" }, [
      _c(
        "div",
        { staticClass: "kview-search__input" },
        [
          _vm.isClearable
            ? _c("span", {
                staticClass:
                  "kview-search__clear font_family kview-icon-baseline-close-px",
                on: { click: _vm.onClear }
              })
            : _vm._e(),
          _c("k-input", {
            attrs: {
              styles: _vm.inputStyle,
              placeholder: _vm.placeholder,
              value: _vm.value
            },
            on: { enter: _vm.onSearch, input: _vm.onInput }
          })
        ],
        1
      ),
      _vm.right
        ? _c(
            "div",
            { staticClass: "kview-search__text", on: { click: _vm.onSearch } },
            [_c("span", [_vm._v("搜索")])]
          )
        : _vm._e()
    ])
  ])
}
var searchvue_type_template_id_4e34eb34_staticRenderFns = []
searchvue_type_template_id_4e34eb34_render._withStripped = true


// CONCATENATED MODULE: ./packages/search/src/search.vue?vue&type=template&id=4e34eb34&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/search/src/search.vue?vue&type=script&lang=ts&
var searchvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var searchvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var searchvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : searchvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var searchvue_type_script_lang_ts_KSearch = /** @class */function (_super) {
    searchvue_type_script_lang_ts_extends(KSearch, _super);
    function KSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KSearch';
        _this.inputStyle = {
            paddingLeft: '30px'
        };
        return _this;
    }
    KSearch.prototype.onInput = function (event) {
        this.$emit('input', event);
    };
    KSearch.prototype.onSearch = function () {
        this.$emit('search');
    };
    KSearch.prototype.onClear = function () {
        this.onInput('');
        this.$emit('clear');
    };
    Object.defineProperty(KSearch.prototype, "isClearable", {
        get: function get() {
            return this.clearable;
        },
        enumerable: false,
        configurable: true
    });
    KSearch.componentName = 'KSearch';
    searchvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '请输入关键词' })], KSearch.prototype, "placeholder", void 0);
    searchvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '' })], KSearch.prototype, "value", void 0);
    searchvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: true })], KSearch.prototype, "right", void 0);
    searchvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: false })], KSearch.prototype, "clearable", void 0);
    KSearch = searchvue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KSearch);
    return KSearch;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var searchvue_type_script_lang_ts_ = (searchvue_type_script_lang_ts_KSearch);
// CONCATENATED MODULE: ./packages/search/src/search.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_searchvue_type_script_lang_ts_ = (searchvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/search/src/search.vue





/* normalize component */

var search_component = normalizeComponent(
  src_searchvue_type_script_lang_ts_,
  searchvue_type_template_id_4e34eb34_render,
  searchvue_type_template_id_4e34eb34_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var search_api; }
search_component.options.__file = "packages/search/src/search.vue"
/* harmony default export */ var search = (search_component.exports);
// CONCATENATED MODULE: ./packages/search/index.ts

search.install = function (Vue) {
    Vue.component(search.componentName, search);
};
/* harmony default export */ var packages_search = (search);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=template&id=0e4aade6&
var selectvue_type_template_id_0e4aade6_render = function() {
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
var selectvue_type_template_id_0e4aade6_staticRenderFns = []
selectvue_type_template_id_0e4aade6_render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=template&id=0e4aade6&

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
        {
          staticClass:
            "kview-select-dropdown__container kview-scroll kview-scroll-hideX"
        },
        [_vm._t("default")],
        2
      )
    ]
  )
}
var selectDropdownvue_type_template_id_2e9cb0d2_staticRenderFns = []
selectDropdownvue_type_template_id_2e9cb0d2_render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/selectDropdown.vue?vue&type=template&id=2e9cb0d2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/selectDropdown.vue?vue&type=script&lang=ts&
var selectDropdownvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var selectDropdownvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var selectDropdownvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : selectDropdownvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var selectDropdownvue_type_script_lang_ts_KSelectDropdown = /** @class */function (_super) {
    selectDropdownvue_type_script_lang_ts_extends(KSelectDropdown, _super);
    function KSelectDropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = '';
        _this.componentName = 'SelectDropdown';
        return _this;
    }
    Object.defineProperty(KSelectDropdown.prototype, "inputWidth", {
        get: function get() {
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
            if (_this.$parent['visible']) _this.updatePopper();
        });
        this.$on('destroyPopper', this.destroyPopper);
    };
    KSelectDropdown.componentName = 'SelectDropdown';
    selectDropdownvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: false })], KSelectDropdown.prototype, "appendToBody", void 0);
    selectDropdownvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Watch"])('inputWidth')], KSelectDropdown.prototype, "getInputWidth", null);
    KSelectDropdown = selectDropdownvue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KSelectDropdown);
    return KSelectDropdown;
}(vue_popper);
/* harmony default export */ var selectDropdownvue_type_script_lang_ts_ = (selectDropdownvue_type_script_lang_ts_KSelectDropdown);
// CONCATENATED MODULE: ./packages/select/src/selectDropdown.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_selectDropdownvue_type_script_lang_ts_ = (selectDropdownvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/select/src/selectDropdown.vue





/* normalize component */

var selectDropdown_component = normalizeComponent(
  src_selectDropdownvue_type_script_lang_ts_,
  selectDropdownvue_type_template_id_2e9cb0d2_render,
  selectDropdownvue_type_template_id_2e9cb0d2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var selectDropdown_api; }
selectDropdown_component.options.__file = "packages/select/src/selectDropdown.vue"
/* harmony default export */ var selectDropdown = (selectDropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=script&lang=ts&
var selectvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var selectvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var selectvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : selectvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var selectvue_type_script_lang_ts_KSelect = /** @class */function (_super) {
    selectvue_type_script_lang_ts_extends(KSelect, _super);
    function KSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.select = { value: undefined, options: [] };
        _this.componentName = 'KSelect';
        _this.visible = false;
        _this.selectedLabel = '';
        _this.inputWidth = 0;
        return _this;
    }
    KSelect.prototype.getValue = function (val, oldVal) {
        if (!valueEquals(val, oldVal)) {
            this.dispatch('KFormItem', 'k.form.change', [val]);
        }
        this.setSelected();
    };
    KSelect.prototype.getVisible = function (v) {
        if (v) {
            this.broadcast('SelectDropdown', 'updatePopper');
        } else {
            this.broadcast('SelectDropdown', 'destroyPopper');
        }
    };
    Object.defineProperty(KSelect.prototype, "isDisabled", {
        get: function get() {
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
        addResizeListener(this.$el, this.handleResize);
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
        if (this.isDisabled) return;
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
        if (this.selectedLabel !== select.label) this.selectedLabel = select.label;
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
        if (this.$el && this.handleResize) removeResizeListener(this.$el, this.handleResize);
    };
    KSelect.componentName = 'KSelect';
    selectvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: true })], KSelect.prototype, "appendToBody", void 0);
    selectvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ required: true })], KSelect.prototype, "value", void 0);
    selectvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '请选择' })], KSelect.prototype, "placeholder", void 0);
    selectvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KSelect.prototype, "styles", void 0);
    selectvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KSelect.prototype, "disabled", void 0);
    selectvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Provide"])('select')], KSelect.prototype, "select", void 0);
    selectvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Watch"])('value')], KSelect.prototype, "getValue", null);
    selectvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Watch"])('visible')], KSelect.prototype, "getVisible", null);
    KSelect = selectvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Component"])({
        components: { Dropdown: selectDropdown },
        directives: {
            Clickoutside: clickoutside
        }
    })], KSelect);
    return KSelect;
}(emitter);
/* harmony default export */ var selectvue_type_script_lang_ts_ = (selectvue_type_script_lang_ts_KSelect);
// CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_selectvue_type_script_lang_ts_ = (selectvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/select/src/select.vue





/* normalize component */

var select_component = normalizeComponent(
  src_selectvue_type_script_lang_ts_,
  selectvue_type_template_id_0e4aade6_render,
  selectvue_type_template_id_0e4aade6_staticRenderFns,
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
    Vue.component(src_select.componentName, src_select);
};
/* harmony default export */ var packages_select = (src_select);
// EXTERNAL MODULE: external "throttle-debounce/debounce"
var debounce_ = __webpack_require__(5);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// CONCATENATED MODULE: ./packages/tooltip/src/tooltip.tsx
var tooltip_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var tooltip_extends = undefined && undefined.__extends || function () {
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
var tooltip_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : tooltip_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var tooltip_KTooltip = /** @class */function (_super) {
    tooltip_extends(KTooltip, _super);
    function KTooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KTooltip';
        _this.tooltipId = "kview-tooltip-" + generateId();
        _this.timeoutPending = null;
        _this.focusing = false;
        return _this;
    }
    KTooltip.prototype.getFocusing = function (val) {
        if (val) {
            Object(dom_["addClass"])(this.referenceElm, 'focusing');
        } else {
            Object(dom_["removeClass"])(this.referenceElm, 'focusing');
        }
    };
    KTooltip.prototype.beforeCreate = function () {
        var _this = this;
        if (this.$isServer) return;
        this.popperVM = new external_vue_property_decorator_["Vue"]({
            data: { node: '' },
            render: function render(h) {
                return this.node;
            }
        }).$mount();
        this.debounceClose = debounce_default()(200, function () {
            return _this.handleClosePopper();
        });
    };
    KTooltip.prototype.render = function (h) {
        var _this = this;
        if (this.popperVM) {
            this.popperVM.node = h(
                "transition",
                {
                    attrs: { name: this.transition },
                    on: {
                        "afterLeave": this.doDestroy.bind(this)
                    }
                },
                [h(
                    "div",
                    {
                        on: {
                            "mouseleave": function mouseleave() {
                                _this.setExpectedState(false);_this.debounceClose();
                            },
                            "mouseenter": function mouseenter() {
                                _this.setExpectedState(true);
                            }
                        },
                        ref: "popper", attrs: { role: "tooltip", id: this.tooltipId, "aria-hidden": this.disabled || !this.showPopper ? 'true' : 'false' },
                        directives: [{
                            name: "show",
                            value: !this.disabled && this.showPopper
                        }],
                        "class": ['kview-tooltip__popper', 'is-' + this.effect, this.popperClass] },
                    [this.$slots.content || this.content]
                )]
            );
        }
        var firstElement = this.getFirstElement();
        if (!firstElement) return null;
        var data = firstElement.data = firstElement.data || {};
        data.staticClass = this.addTooltipClass(data.staticClass);
        return firstElement;
    };
    KTooltip.prototype.mounted = function () {
        var _this = this;
        this.referenceElm = this.$el;
        if (this.$el.nodeType === 1) {
            this.$el.setAttribute('aria-describedby', this.tooltipId);
            this.$el.setAttribute('tabindex', this.tabindex + '');
            Object(dom_["on"])(this.referenceElm, 'mouseenter', this.show);
            Object(dom_["on"])(this.referenceElm, 'mouseleave', this.hide);
            Object(dom_["on"])(this.referenceElm, 'focus', function () {
                if (!_this.$slots.default || !_this.$slots.default.length) {
                    _this.handleFocus();
                    return;
                }
                var instance = _this.$slots.default[0].componentInstance;
                if (instance && instance.focus) {
                    instance.focus();
                } else {
                    _this.handleFocus();
                }
            });
            Object(dom_["on"])(this.referenceElm, 'blur', this.handleBlur);
            Object(dom_["on"])(this.referenceElm, 'click', this.removeFocusing);
        }
        if (this.value && this.popperVM) {
            this.popperVM.$nextTick(function () {
                if (_this.value) {
                    _this.updatePopper();
                }
            });
        }
    };
    KTooltip.prototype.handleShowPopper = function () {
        var _this = this;
        if (!this.expectedState || this.manual) return;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            _this.showPopper = true;
        }, this.openDelay);
        if (this.hideAfter > 0) {
            this.timeoutPending = setTimeout(function () {
                _this.showPopper = false;
            }, this.hideAfter);
        }
    };
    KTooltip.prototype.handleClosePopper = function () {
        if (this.enterable && this.expectedState || this.manual) return;
        clearTimeout(this.timeout);
        if (this.timeoutPending) {
            clearTimeout(this.timeoutPending);
        }
        this.showPopper = false;
        if (this.disabled) {
            this.doDestroy();
        }
    };
    KTooltip.prototype.show = function () {
        this.setExpectedState(true);
        this.handleShowPopper();
    };
    KTooltip.prototype.hide = function () {
        this.setExpectedState(false);
        this.debounceClose();
    };
    KTooltip.prototype.handleFocus = function () {
        this.focusing = true;
        this.show();
    };
    KTooltip.prototype.handleBlur = function () {
        this.focusing = false;
        this.hide();
    };
    KTooltip.prototype.removeFocusing = function () {
        this.focusing = false;
    };
    KTooltip.prototype.addTooltipClass = function (prev) {
        if (!prev) {
            return 'kview-tooltip';
        } else {
            return 'kview-tooltip ' + prev.replace('kview-tooltip', '');
        }
    };
    KTooltip.prototype.setExpectedState = function (expectedState) {
        if (expectedState === false) {
            clearTimeout(this.timeoutPending);
        }
        this.expectedState = expectedState;
    };
    KTooltip.prototype.getFirstElement = function () {
        var slots = this.$slots.default;
        if (!Array.isArray(slots)) return null;
        var element = null;
        for (var index = 0; index < slots.length; index++) {
            if (slots[index] && slots[index].tag) {
                element = slots[index];
            }
            ;
        }
        return element;
    };
    KTooltip.prototype.beforeDestroy = function () {
        this.popperVM && this.popperVM.$destroy();
    };
    KTooltip.prototype.destroyed = function () {
        var reference = this.referenceElm;
        if (reference.nodeType === 1) {
            Object(dom_["off"])(reference, 'mouseenter', this.show);
            Object(dom_["off"])(reference, 'mouseleave', this.hide);
            Object(dom_["off"])(reference, 'focus', this.handleFocus);
            Object(dom_["off"])(reference, 'blur', this.handleBlur);
            Object(dom_["off"])(reference, 'click', this.removeFocusing);
        }
    };
    KTooltip.componentName = 'KTooltip';
    tooltip_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 0 })], KTooltip.prototype, "openDelay", void 0);
    tooltip_decorate([Object(external_vue_property_decorator_["Prop"])({ default: false })], KTooltip.prototype, "disabled", void 0);
    tooltip_decorate([Object(external_vue_property_decorator_["Prop"])({ default: false })], KTooltip.prototype, "manual", void 0);
    tooltip_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'dark' })], KTooltip.prototype, "effect", void 0);
    tooltip_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 0 })], KTooltip.prototype, "arrowOffset", void 0);
    tooltip_decorate([Object(external_vue_property_decorator_["Prop"])()], KTooltip.prototype, "popperClass", void 0);
    tooltip_decorate([Object(external_vue_property_decorator_["Prop"])()], KTooltip.prototype, "content", void 0);
    tooltip_decorate([Object(external_vue_property_decorator_["Prop"])({ default: true })], KTooltip.prototype, "visibleArrow", void 0);
    tooltip_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 'kview-fade-in-linear' })], KTooltip.prototype, "transition", void 0);
    tooltip_decorate([Object(external_vue_property_decorator_["Prop"])({ default: function _default() {
            return {
                boundariesPadding: 10,
                gpuAcceleration: false
            };
        } })], KTooltip.prototype, "popperOptions", void 0);
    tooltip_decorate([Object(external_vue_property_decorator_["Prop"])({ default: true })], KTooltip.prototype, "enterable", void 0);
    tooltip_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 0 })], KTooltip.prototype, "hideAfter", void 0);
    tooltip_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 0 })], KTooltip.prototype, "tabindex", void 0);
    tooltip_decorate([Object(external_vue_property_decorator_["Prop"])({ default: true })], KTooltip.prototype, "appendToBody", void 0);
    tooltip_decorate([Object(external_vue_property_decorator_["Watch"])('focusing')], KTooltip.prototype, "getFocusing", null);
    KTooltip = tooltip_decorate([external_vue_property_decorator_["Component"]], KTooltip);
    return KTooltip;
}(vue_popper);
/* harmony default export */ var tooltip = (tooltip_KTooltip);
// CONCATENATED MODULE: ./packages/tooltip/index.ts

tooltip.install = function (Vue) {
    Vue.component(tooltip.componentName, tooltip);
};
/* harmony default export */ var packages_tooltip = (tooltip);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/option.vue?vue&type=template&id=7a44c642&
var optionvue_type_template_id_7a44c642_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      staticClass: "kview-option",
      class: { "kview-option--selected": _vm.itemSelected },
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.onSelectOptionClick($event)
        }
      }
    },
    [_vm._t("default", [_c("span", [_vm._v(_vm._s(_vm.label))])])],
    2
  )
}
var optionvue_type_template_id_7a44c642_staticRenderFns = []
optionvue_type_template_id_7a44c642_render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/option.vue?vue&type=template&id=7a44c642&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/option.vue?vue&type=script&lang=ts&
var optionvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var optionvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var optionvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : optionvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var optionvue_type_script_lang_ts_KOption = /** @class */function (_super) {
    optionvue_type_script_lang_ts_extends(KOption, _super);
    function KOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KOption';
        return _this;
    }
    KOption.prototype.created = function () {
        this.select.options.push(this);
        this.dispatch('KSelect', 'setSelected', {});
    };
    Object.defineProperty(KOption.prototype, "itemSelected", {
        get: function get() {
            return this.value === this.select.value;
        },
        enumerable: false,
        configurable: true
    });
    KOption.prototype.onSelectOptionClick = function () {
        this.dispatch('KSelect', 'handleOptionClick', [this, true]);
    };
    KOption.componentName = 'KOption';
    optionvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Inject"])('select')], KOption.prototype, "select", void 0);
    optionvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KOption.prototype, "label", void 0);
    optionvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KOption.prototype, "value", void 0);
    KOption = optionvue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KOption);
    return KOption;
}(emitter);
/* harmony default export */ var optionvue_type_script_lang_ts_ = (optionvue_type_script_lang_ts_KOption);
// CONCATENATED MODULE: ./packages/select/src/option.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_optionvue_type_script_lang_ts_ = (optionvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/select/src/option.vue





/* normalize component */

var option_component = normalizeComponent(
  src_optionvue_type_script_lang_ts_,
  optionvue_type_template_id_7a44c642_render,
  optionvue_type_template_id_7a44c642_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var option_api; }
option_component.options.__file = "packages/select/src/option.vue"
/* harmony default export */ var src_option = (option_component.exports);
// CONCATENATED MODULE: ./packages/option/index.ts

src_option.install = function (Vue) {
    Vue.component(src_option.componentName, src_option);
};
/* harmony default export */ var packages_option = (src_option);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/option-card.vue?vue&type=template&id=40c7da24&
var option_cardvue_type_template_id_40c7da24_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      staticClass: "kview-option-card",
      class: { "kview-option-card--selected": _vm.itemSelected },
      style: _vm.styles,
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.onSelectOptionClick($event)
        }
      }
    },
    [
      _c("div", { staticClass: "kview-option-card__content" }, [
        _c(
          "div",
          { staticClass: "kview-option-card__slot" },
          [_vm._t("default")],
          2
        ),
        _c(
          "div",
          {
            staticClass: "kview-option-card__title",
            class: { "kview-option-card__title--selected": _vm.itemSelected }
          },
          [_c("span", [_vm._v(_vm._s(_vm.label))])]
        )
      ]),
      _vm.itemSelected
        ? _c("div", { staticClass: "kview-option-card__corner" }, [
            _c("div", { staticClass: "kview-option-card__triangle" }),
            _c("span", {
              staticClass: "kview-option-card__icon iconfont kview-icon-tick"
            })
          ])
        : _vm._e()
    ]
  )
}
var option_cardvue_type_template_id_40c7da24_staticRenderFns = []
option_cardvue_type_template_id_40c7da24_render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/option-card.vue?vue&type=template&id=40c7da24&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/option-card.vue?vue&type=script&lang=ts&
var option_cardvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var option_cardvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var option_cardvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : option_cardvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var option_cardvue_type_script_lang_ts_KOptionCard = /** @class */function (_super) {
    option_cardvue_type_script_lang_ts_extends(KOptionCard, _super);
    function KOptionCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'KOptionCard';
        return _this;
    }
    KOptionCard.prototype.created = function () {
        this.select.options.push(this);
        this.dispatch('KSelect', 'setSelected', {});
    };
    Object.defineProperty(KOptionCard.prototype, "itemSelected", {
        get: function get() {
            return this.value === this.select.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KOptionCard.prototype, "styles", {
        get: function get() {
            return {
                width: this.width,
                height: this.height
            };
        },
        enumerable: false,
        configurable: true
    });
    KOptionCard.prototype.onSelectOptionClick = function () {
        this.dispatch('KSelect', 'handleOptionClick', [this, true]);
    };
    KOptionCard.componentName = 'KOptionCard';
    option_cardvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Inject"])('select')], KOptionCard.prototype, "select", void 0);
    option_cardvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KOptionCard.prototype, "label", void 0);
    option_cardvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KOptionCard.prototype, "value", void 0);
    option_cardvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 0 })], KOptionCard.prototype, "width", void 0);
    option_cardvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: 0 })], KOptionCard.prototype, "height", void 0);
    KOptionCard = option_cardvue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KOptionCard);
    return KOptionCard;
}(emitter);
/* harmony default export */ var option_cardvue_type_script_lang_ts_ = (option_cardvue_type_script_lang_ts_KOptionCard);
// CONCATENATED MODULE: ./packages/select/src/option-card.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_option_cardvue_type_script_lang_ts_ = (option_cardvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/select/src/option-card.vue





/* normalize component */

var option_card_component = normalizeComponent(
  src_option_cardvue_type_script_lang_ts_,
  option_cardvue_type_template_id_40c7da24_render,
  option_cardvue_type_template_id_40c7da24_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var option_card_api; }
option_card_component.options.__file = "packages/select/src/option-card.vue"
/* harmony default export */ var option_card = (option_card_component.exports);
// CONCATENATED MODULE: ./packages/option-card/index.ts

option_card.install = function (Vue) {
    Vue.component(option_card.componentName, option_card);
};
/* harmony default export */ var packages_option_card = (option_card);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/src/form.vue?vue&type=template&id=a1b5ff34&
var formvue_type_template_id_a1b5ff34_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("form", { staticClass: "kview-from" }, [_vm._t("default")], 2)
}
var formvue_type_template_id_a1b5ff34_staticRenderFns = []
formvue_type_template_id_a1b5ff34_render._withStripped = true


// CONCATENATED MODULE: ./packages/form/src/form.vue?vue&type=template&id=a1b5ff34&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/src/form.vue?vue&type=script&lang=ts&
var formvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var formvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var formvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : formvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var formvue_type_script_lang_ts_KForm = /** @class */function (_super) {
    formvue_type_script_lang_ts_extends(KForm, _super);
    function KForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
        get: function get() {
            if (!this.potentialLabelWidthArr.length) return 0;
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
        if (props === void 0) {
            props = [];
        }
        var fields = props.length ? typeof props === 'string' ? this.fields.filter(function (field) {
            return props === field.prop;
        }) : this.fields.filter(function (field) {
            return props.indexOf(field.prop) > -1;
        }) : this.fields;
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
                callback = function callback(valid) {
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
        var fields = this.fields.filter(function (field) {
            return props.indexOf(field.prop) !== -1;
        });
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
        } else if (val) {
            this.potentialLabelWidthArr.push(val);
        }
    };
    KForm.prototype.deregisterLabelWidth = function (val) {
        var index = this.getLabelWidthIndex(val);
        this.potentialLabelWidthArr.splice(index, 1);
    };
    KForm.componentName = 'KForm';
    formvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Provide"])('kForm')], KForm.prototype, "kForm", void 0);
    formvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KForm.prototype, "rules", void 0);
    formvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KForm.prototype, "inline", void 0);
    formvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KForm.prototype, "model", void 0);
    formvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Watch"])('rules')], KForm.prototype, "getRules", null);
    KForm = formvue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KForm);
    return KForm;
}(external_vue_property_decorator_["Vue"]);
/* harmony default export */ var formvue_type_script_lang_ts_ = (formvue_type_script_lang_ts_KForm);
// CONCATENATED MODULE: ./packages/form/src/form.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_formvue_type_script_lang_ts_ = (formvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/form/src/form.vue





/* normalize component */

var form_component = normalizeComponent(
  src_formvue_type_script_lang_ts_,
  formvue_type_template_id_a1b5ff34_render,
  formvue_type_template_id_a1b5ff34_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var form_api; }
form_component.options.__file = "packages/form/src/form.vue"
/* harmony default export */ var src_form = (form_component.exports);
// CONCATENATED MODULE: ./packages/form/index.ts

src_form.install = function (Vue) {
    Vue.component(src_form.componentName, src_form);
};
/* harmony default export */ var packages_form = (src_form);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/src/form-item.vue?vue&type=template&id=b6f3db6c&
var form_itemvue_type_template_id_b6f3db6c_render = function() {
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
var form_itemvue_type_template_id_b6f3db6c_staticRenderFns = []
form_itemvue_type_template_id_b6f3db6c_render._withStripped = true


// CONCATENATED MODULE: ./packages/form/src/form-item.vue?vue&type=template&id=b6f3db6c&

// EXTERNAL MODULE: external "async-validator"
var external_async_validator_ = __webpack_require__(6);
var external_async_validator_default = /*#__PURE__*/__webpack_require__.n(external_async_validator_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--0-1!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/src/form-item.vue?vue&type=script&lang=ts&
var form_itemvue_type_script_lang_ts_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var form_itemvue_type_script_lang_ts_extends = undefined && undefined.__extends || function () {
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
var form_itemvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : form_itemvue_type_script_lang_ts_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var form_itemvue_type_script_lang_ts_KFormItem = /** @class */function (_super) {
    form_itemvue_type_script_lang_ts_extends(KFormItem, _super);
    function KFormItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
        get: function get() {
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
        get: function get() {
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
        get: function get() {
            var model = this.form.model;
            if (!model || !this.prop) {
                return;
            }
            var path = this.prop;
            if (path.indexOf(':') !== -1) {
                path = path.replace(/:/, '.');
            }
            return getPropByPath(model, path, true).v;
        },
        enumerable: false,
        configurable: true
    });
    KFormItem.prototype.validate = function (trigger, callback) {
        var _this = this;
        if (callback === void 0) {
            callback = function callback(a, b) {};
        }
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
            if (!rule.trigger || trigger === '') return true;
            if (Array.isArray(rule.trigger)) {
                return rule.trigger.indexOf(trigger) > -1;
            } else {
                return rule.trigger === trigger;
            }
        }).map(function (rule) {
            return Object.assign({}, rule);
        });
    };
    KFormItem.prototype.getRules = function () {
        var formRules = this.form.rules;
        var selfRules = this.rules;
        var requiredRule = this.required !== undefined ? { required: !!this.required } : [];
        var prop = getPropByPath(formRules, this.prop || '');
        formRules = formRules ? prop.o[this.prop || ''] || prop.v : [];
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
        var prop = getPropByPath(model, path, true);
        this.validateDisabled = true;
        if (Array.isArray(value)) {
            prop.o[prop.k] = [].concat(this.initialValue);
        } else {
            prop.o[prop.k] = this.initialValue;
        }
        this.$nextTick(function () {
            _this.validateDisabled = false;
        });
    };
    KFormItem.prototype.beforeDestroy = function () {
        this.dispatch('KForm', 'k.form.removeField', [this]);
    };
    KFormItem.componentName = 'KFormItem';
    form_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Inject"])('kForm')], KFormItem.prototype, "kForm", void 0);
    form_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Provide"])('kFormItem')], KFormItem.prototype, "kFormItem", void 0);
    form_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: '' })], KFormItem.prototype, "label", void 0);
    form_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])({ default: undefined })], KFormItem.prototype, "required", void 0);
    form_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KFormItem.prototype, "styles", void 0);
    form_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KFormItem.prototype, "prop", void 0);
    form_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KFormItem.prototype, "rules", void 0);
    form_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Prop"])()], KFormItem.prototype, "validateStatus", void 0);
    form_itemvue_type_script_lang_ts_decorate([Object(external_vue_property_decorator_["Watch"])('validateStatus')], KFormItem.prototype, "getValidateStatus", null);
    KFormItem = form_itemvue_type_script_lang_ts_decorate([external_vue_property_decorator_["Component"]], KFormItem);
    return KFormItem;
}(emitter);
/* harmony default export */ var form_itemvue_type_script_lang_ts_ = (form_itemvue_type_script_lang_ts_KFormItem);
// CONCATENATED MODULE: ./packages/form/src/form-item.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_form_itemvue_type_script_lang_ts_ = (form_itemvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/form/src/form-item.vue





/* normalize component */

var form_item_component = normalizeComponent(
  src_form_itemvue_type_script_lang_ts_,
  form_itemvue_type_template_id_b6f3db6c_render,
  form_itemvue_type_template_id_b6f3db6c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var form_item_api; }
form_item_component.options.__file = "packages/form/src/form-item.vue"
/* harmony default export */ var form_item = (form_item_component.exports);
// CONCATENATED MODULE: ./packages/form-item/index.ts

form_item.install = function (Vue) {
    Vue.component(form_item.componentName, form_item);
};
/* harmony default export */ var packages_form_item = (form_item);
// CONCATENATED MODULE: ./src/index.js
/* Automatically generated by './build/bin/build-entry.js' */







































var components = [scrollbar, packages_row, packages_col, packages_bubble, packages_button, packages_button_icon, packages_button_icon_middle, packages_button_mini, packages_button_larger, packages_card_shadow, packages_card_item, packages_card_image, packages_cell_hexagon, packages_collapse, packages_collapse_item, packages_dialog, packages_dialog_move, packages_divider, packages_divider_text, packages_drop_down, packages_empty, packages_input, packages_number_input, packages_list, packages_menu_item, packages_pagination, packages_ripple, packages_search, packages_select, packages_tooltip, packages_option, packages_option_card, packages_form, packages_form_item];

var src_install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  components.forEach(function (component) {
    Vue.component(component.componentName, component);
  });

  Vue.use(packages_loading.directive);

  Vue.prototype.$message = packages_message;
  Vue.prototype.$confirm = message_box.confirm;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  src_install(window.Vue);
}

/* harmony default export */ var src = __webpack_exports__["default"] = ({
  version: '0.0.11',
  install: src_install,
  Scrollbar: scrollbar,
  Row: packages_row,
  Col: packages_col,
  Bubble: packages_bubble,
  Button: packages_button,
  ButtonIcon: packages_button_icon,
  ButtonIconMiddle: packages_button_icon_middle,
  ButtonMini: packages_button_mini,
  ButtonLarger: packages_button_larger,
  CardShadow: packages_card_shadow,
  CardItem: packages_card_item,
  CardImage: packages_card_image,
  CellHexagon: packages_cell_hexagon,
  Collapse: packages_collapse,
  CollapseItem: packages_collapse_item,
  Dialog: packages_dialog,
  DialogMove: packages_dialog_move,
  Divider: packages_divider,
  DividerText: packages_divider_text,
  DropDown: packages_drop_down,
  Empty: packages_empty,
  Input: packages_input,
  NumberInput: packages_number_input,
  List: packages_list,
  Loading: packages_loading,
  MenuItem: packages_menu_item,
  Message: packages_message,
  MessageBox: message_box,
  Pagination: packages_pagination,
  Ripple: packages_ripple,
  Search: packages_search,
  Select: packages_select,
  Tooltip: packages_tooltip,
  Option: packages_option,
  OptionCard: packages_option_card,
  Form: packages_form,
  FormItem: packages_form_item
});

/***/ })
/******/ ])["default"];