import Popper from 'kview-c-ui/src/utils/vue-popper';
import debounce from 'throttle-debounce/debounce';
import { addClass, removeClass, on, off } from 'kview-c-ui/src/utils/dom';
import { generateId } from 'kview-c-ui/src/utils/util';
import { Component, Prop, Vue, Watch} from 'vue-property-decorator'

@Component
export default class KTooltip extends Popper {
  static componentName = 'KTooltip'
  componentName = 'KTooltip'

  @Prop({default: 0}) openDelay:number
  @Prop({default: false}) disabled:boolean
  @Prop({default: false}) manual: boolean
  @Prop({default: 'dark'}) effect: boolean
  @Prop({default: 0}) arrowOffset: boolean
  @Prop() popperClass: string
  @Prop() content: string
  @Prop({default: true}) visibleArrow: boolean
  @Prop({default: 'kview-fade-in-linear'}) transition: string
  @Prop({default: () => ({
    boundariesPadding: 10,
    gpuAcceleration: false
  })}) popperOptions: object
  @Prop({default: true}) enterable: boolean
  @Prop({default: 0}) hideAfter: number
  @Prop({default: 0}) tabindex: number
  @Prop({default: true}) appendToBody: boolean

  @Watch('focusing')
  getFocusing (val) {
    if (val) {
      addClass(this.referenceElm, 'focusing');
    } else {
      removeClass(this.referenceElm, 'focusing');
    }
  }

  tooltipId= `kview-tooltip-${generateId()}`
  timeoutPending= null
  focusing = false
  popperVM
  debounceClose
  expectedState
  timeout
  referenceElm

  beforeCreate() {
    if (this.$isServer) return;

    this.popperVM = new Vue({
      data: { node: '' },
      render(h) {
        return this.node;
      }
    }).$mount();
    
    this.debounceClose = debounce(200, () => this.handleClosePopper());
  }

  render(h) {
    if (this.popperVM) {
      this.popperVM.node = (
        <transition
          name={ this.transition }
          onAfterLeave={ this.doDestroy.bind(this) }>
          <div
            onMouseleave={ () => { this.setExpectedState(false); this.debounceClose(); } }
            onMouseenter= { () => { this.setExpectedState(true); } }
            ref="popper"
            role="tooltip"
            id={this.tooltipId}
            aria-hidden={ (this.disabled || !this.showPopper) ? 'true' : 'false' }
            v-show={!this.disabled && this.showPopper}
            class={
              ['kview-tooltip__popper', 'is-' + this.effect, this.popperClass]
            }>
            { this.$slots.content || this.content }
          </div>
        </transition>);
    }

    const firstElement = this.getFirstElement();
    if (!firstElement) return null;

    const data = firstElement.data = firstElement.data || {};
    data.staticClass = this.addTooltipClass(data.staticClass);
    return firstElement;
  }

  mounted() {
    this.referenceElm = this.$el;
    if (this.$el.nodeType === 1) {
      this.$el.setAttribute('aria-describedby', this.tooltipId);
      this.$el.setAttribute('tabindex', this.tabindex + '');
      on(this.referenceElm, 'mouseenter', this.show);
      on(this.referenceElm, 'mouseleave', this.hide);
      on(this.referenceElm, 'focus', () => {
        if (!this.$slots.default || !this.$slots.default.length) {
          this.handleFocus();
          return;
        }
        const instance = this.$slots.default[0].componentInstance as any;
        if (instance && instance.focus) {
          instance.focus();
        } else {
          this.handleFocus();
        }
      });
      on(this.referenceElm, 'blur', this.handleBlur);
      on(this.referenceElm, 'click', this.removeFocusing);
    }

    if (this.value && this.popperVM) {
      this.popperVM.$nextTick(() => {
        if (this.value) {
          this.updatePopper();
        }
      });
    }
  }

  handleShowPopper() {
    if (!this.expectedState || this.manual) return;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.showPopper = true;
    }, this.openDelay);

    if (this.hideAfter > 0) {
      this.timeoutPending = setTimeout(() => {
        this.showPopper = false;
      }, this.hideAfter);
    }
  }

  handleClosePopper() {
    if (this.enterable && this.expectedState || this.manual) return;
    clearTimeout(this.timeout);

    if (this.timeoutPending) {
      clearTimeout(this.timeoutPending);
    }
    this.showPopper = false;

    if (this.disabled) {
      this.doDestroy();
    }
  }

  show() {
    this.setExpectedState(true);
    this.handleShowPopper();
  }

  hide() {
    this.setExpectedState(false);
    this.debounceClose();
  }

  handleFocus() {
    this.focusing = true;
    this.show();
  }
  handleBlur() {
    this.focusing = false;
    this.hide();
  }

  removeFocusing() {
    this.focusing = false;
  }

  addTooltipClass(prev) {
    if (!prev) {
      return 'kview-tooltip';
    } else {
      return 'kview-tooltip ' + prev.replace('kview-tooltip', '');
    }
  }

  setExpectedState(expectedState) {
    if (expectedState === false) {
      clearTimeout(this.timeoutPending);
    }
    this.expectedState = expectedState;
  }

  getFirstElement() {
    const slots = this.$slots.default;
    if (!Array.isArray(slots)) return null;
    let element = null;
    for (let index = 0; index < slots.length; index++) {
      if (slots[index] && slots[index].tag) {
        element = slots[index];
      };
    }
    return element;
  }

  beforeDestroy() {
    this.popperVM && this.popperVM.$destroy();
  }

  destroyed() {
    const reference = this.referenceElm;
    if (reference.nodeType === 1) {
      off(reference, 'mouseenter', this.show);
      off(reference, 'mouseleave', this.hide);
      off(reference, 'focus', this.handleFocus);
      off(reference, 'blur', this.handleBlur);
      off(reference, 'click', this.removeFocusing);
    }
  }

}