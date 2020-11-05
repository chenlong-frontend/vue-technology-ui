var __extends = (this && this.__extends) || (function () {
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Vue, Watch, Prop } from 'vue-property-decorator';
import { PopupManager } from './popup';
var PopperJS = require('./popper.js');
var Popper = /** @class */ (function (_super) {
    __extends(Popper, _super);
    function Popper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showPopper = false;
        return _this;
    }
    Popper.prototype.getShowPopper = function (val) {
        val ? this.updatePopper() : this.destroyPopper();
    };
    Popper.prototype.createPopper = function () {
        var _this = this;
        var options = this.popperOptions;
        var popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper;
        var reference = this.referenceElm || this.reference || this.$refs.reference;
        if (!popper || !reference)
            return;
        if (this.appendToBody)
            document.body.appendChild(this.popperElm);
        if (this.popperJS && this.popperJS.destroy) {
            this.popperJS.destroy();
        }
        this.popperJS = new PopperJS(reference, popper, options);
        this.popperJS.onCreate(function (_) {
            _this.$emit('created', _this);
            _this.resetTransformOrigin();
            _this.$nextTick(_this.updatePopper);
        });
    };
    Popper.prototype.resetTransformOrigin = function () {
        if (!this.transformOrigin)
            return;
        var placementMap = {
            top: 'bottom',
            bottom: 'top',
            left: 'right',
            right: 'left'
        };
        var placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0];
        var origin = placementMap[placement];
        this.popperJS._popper.style.transformOrigin = typeof this.transformOrigin === 'string'
            ? this.transformOrigin
            : ['top', 'bottom'].indexOf(placement) > -1 ? "center " + origin : origin + " center";
    };
    Popper.prototype.updatePopper = function () {
        var popperJS = this.popperJS;
        if (popperJS) {
            popperJS.update();
            if (popperJS._popper) {
                popperJS._popper.style.zIndex = PopupManager.nextZIndex();
            }
        }
        else {
            this.createPopper();
        }
    };
    Popper.prototype.destroyPopper = function () {
        if (this.popperJS) {
            this.resetTransformOrigin();
        }
    };
    __decorate([
        Prop()
    ], Popper.prototype, "value", void 0);
    __decorate([
        Prop({ default: true })
    ], Popper.prototype, "transformOrigin", void 0);
    __decorate([
        Prop({ default: function () { return ({ gpuAcceleration: false }); } })
    ], Popper.prototype, "popperOptions", void 0);
    __decorate([
        Watch('showPopper')
    ], Popper.prototype, "getShowPopper", null);
    return Popper;
}(Vue));
export default Popper;
