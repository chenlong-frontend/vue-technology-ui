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
import { Prop, Vue } from 'vue-property-decorator';
import PopupManager from './popup-manager';
import { getStyle, addClass, removeClass, hasClass } from '../dom';
import getScrollBarWidth from '../scrollbar-width';
import Emmiter from '../emitter';
import merge from '../merge';
var idSeed = 1;
var scrollBarWidth;
var Popup = /** @class */ (function (_super) {
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
                Vue.nextTick(function () {
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
        PopupManager.register(this._popupId, this);
    };
    Popup.prototype.beforeDestroy = function () {
        PopupManager.deregister(this._popupId);
        PopupManager.closeModal(this._popupId);
        this.restoreBodyStyle();
    };
    Popup.prototype.restoreBodyStyle = function () {
        if (this.modal && this.withoutHiddenClass) {
            document.body.style.paddingRight = this.bodyPaddingRight;
            removeClass(document.body, 'kview-popup-parent--hidden');
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
            PopupManager.zIndex = zIndex;
        }
        if (modal) {
            if (this._closing) {
                PopupManager.closeModal(this._popupId);
                this._closing = false;
            }
            PopupManager.openModal(this._popupId, PopupManager.nextZIndex(), this.modalAppendToBody ? undefined : dom, props.modalClass, props.modalFade);
            if (props.lockScroll) {
                this.withoutHiddenClass = !hasClass(document.body, 'kview-popup-parent--hidden');
                if (this.withoutHiddenClass) {
                    this.bodyPaddingRight = document.body.style.paddingRight;
                    this.computedBodyPaddingRight = parseInt(getStyle(document.body, 'paddingRight'), 10);
                }
                scrollBarWidth = getScrollBarWidth();
                var bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
                var bodyOverflowY = getStyle(document.body, 'overflowY');
                if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && this.withoutHiddenClass) {
                    document.body.style.paddingRight = this.computedBodyPaddingRight + scrollBarWidth + 'px';
                }
                addClass(document.body, 'kview-popup-parent--hidden');
            }
        }
        if (getComputedStyle(dom).position === 'static') {
            dom.style.position = 'absolute';
        }
        dom.style.zIndex = PopupManager.nextZIndex() + '';
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
        PopupManager.closeModal(this._popupId);
        this._closing = false;
    };
    __decorate([
        Prop({ default: true })
    ], Popup.prototype, "modal", void 0);
    __decorate([
        Prop({ default: false })
    ], Popup.prototype, "visible", void 0);
    __decorate([
        Prop({ default: false })
    ], Popup.prototype, "modalAppendToBody", void 0);
    __decorate([
        Prop()
    ], Popup.prototype, "closeDelay", void 0);
    __decorate([
        Prop({ default: true })
    ], Popup.prototype, "lockScroll", void 0);
    return Popup;
}(Emmiter));
export default Popup;
export { PopupManager };
