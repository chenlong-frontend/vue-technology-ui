import { Prop, Watch, Vue } from 'vue-property-decorator';
import PopupManager from './popup-manager'
import { getStyle, addClass, removeClass, hasClass } from '../dom';
import getScrollBarWidth from '../scrollbar-width';
import Emmiter from '../emitter'
import merge from '../merge'

let idSeed = 1;
let scrollBarWidth;

export default class Popup extends Emmiter {
  @Prop({default: true}) modal: Boolean
  @Prop({default: false}) visible: Boolean
  @Prop({default: false}) modalAppendToBody: boolean
  @Prop() closeDelay?:any
  @Prop({default: true}) lockScroll:boolean
  watchVisible (val) {
    if (val) {
      if (this._opening) return;
      if (!this.rendered) {
        this.rendered = true;
        Vue.nextTick(() => {
          this.open();
        });
      } else {
        this.open();
      }
    } else {
      this.close();
    }
  }
  rendered = false
  withoutHiddenClass = true
  bodyPaddingRight = null
  _popupId
  _closeTimer = null
  _openTimer = null
  opened = false
  _opening = false
  _closing = false
  computedBodyPaddingRight = 0
  beforeMount() {
    this._popupId = 'popup-' + idSeed++;
    PopupManager.register(this._popupId, this);
  }

  beforeDestroy() {
    PopupManager.deregister(this._popupId);
    PopupManager.closeModal(this._popupId);

    this.restoreBodyStyle();
  }
  restoreBodyStyle() {
    if (this.modal && this.withoutHiddenClass) {
      document.body.style.paddingRight = this.bodyPaddingRight;
      removeClass(document.body, 'el-popup-parent--hidden');
    }
    this.withoutHiddenClass = true;
  }

  open(options?) {
    if (!this.rendered) {
      this.rendered = true;
    }

    const props = merge({}, this.$props || this, options);

    if (this._closeTimer) {
      clearTimeout(this._closeTimer);
      this._closeTimer = null;
    }
    clearTimeout(this._openTimer);

    const openDelay = Number(props.openDelay);
    if (openDelay > 0) {
      this._openTimer = setTimeout(() => {
        this._openTimer = null;
        this.doOpen(props);
      }, openDelay);
    } else {
      this.doOpen(props);
    }
  }

  doOpen(props) {
    if (this.$isServer) return;
    if (this.opened) return;

    this._opening = true;

    const dom = this.$el as HTMLElement;

    const modal = props.modal;

    const zIndex = props.zIndex;
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
        this.withoutHiddenClass = !hasClass(document.body, 'el-popup-parent--hidden');
        if (this.withoutHiddenClass) {
          this.bodyPaddingRight = document.body.style.paddingRight;
          this.computedBodyPaddingRight = parseInt(getStyle(document.body, 'paddingRight'), 10);
        }
        scrollBarWidth = getScrollBarWidth();
        let bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
        let bodyOverflowY = getStyle(document.body, 'overflowY');
        if (scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && this.withoutHiddenClass) {
          document.body.style.paddingRight = this.computedBodyPaddingRight + scrollBarWidth + 'px';
        }
        addClass(document.body, 'el-popup-parent--hidden');
      }
    }

    if (getComputedStyle(dom).position === 'static') {
      dom.style.position = 'absolute';
    }

    dom.style.zIndex = PopupManager.nextZIndex() + '';
    this.opened = true;

    this.doAfterOpen();
  }

  doAfterOpen() {
    this._opening = false;
  }

  close() {
    if (this._openTimer !== null) {
      clearTimeout(this._openTimer);
      this._openTimer = null;
    }
    clearTimeout(this._closeTimer);

    const closeDelay = Number(this.closeDelay);

    if (closeDelay > 0) {
      this._closeTimer = setTimeout(() => {
        this._closeTimer = null;
        this.doClose();
      }, closeDelay);
    } else {
      this.doClose();
    }
  }
  doClose() {
    this._closing = true;

    if (this.lockScroll) {
      setTimeout(this.restoreBodyStyle, 200);
    }

    this.opened = false;

    this.doAfterClose();
  }

  doAfterClose() {
    PopupManager.closeModal(this._popupId);
    this._closing = false;
  }
}

export {
  PopupManager
};