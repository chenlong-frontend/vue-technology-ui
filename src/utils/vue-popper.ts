import { Vue, Watch, Prop } from 'vue-property-decorator';
import {PopupManager} from './popup'
const PopperJS = require('./popper.js')

export default class Popper extends Vue {
  showPopper = false
  currentPlacement=""
  appendToBody: boolean
  popperElm: HTMLElement
  popper: HTMLElement
  referenceElm: HTMLElement
  reference: HTMLElement
  popperJS
  appended
  arrowOffset

  @Prop() value: boolean
  @Prop({default: 'bottom'}) placement: string
  @Prop({default: true}) transformOrigin: boolean | string
  @Prop({default: () => ({gpuAcceleration: false})}) popperOptions: any
  @Prop({default: false}) visibleArrow:boolean
  @Prop({default: 0}) offset: number

  @Watch('showPopper')
  getShowPopper(val) {
    val ? this.updatePopper() : this.destroyPopper();
  }

  createPopper () {
    this.currentPlacement = this.currentPlacement || this.placement;
    if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
      return;
    }
    const options = this.popperOptions;
    const popper = this.popperElm = this.popperElm || this.popper ||  this.$refs.popper as HTMLElement;
    let reference = this.referenceElm || this.reference || this.$refs.reference;
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
    this.popperJS.onCreate(_ => {
      this.$emit('created', this);
      this.resetTransformOrigin();
      this.$nextTick(this.updatePopper);
    });
    if (typeof options.onUpdate === 'function') {
      this.popperJS.onUpdate(options.onUpdate);
    }
    this.popperJS._popper.style.zIndex = PopupManager.nextZIndex();
    this.popperElm.addEventListener('click', stop);
  }

  resetTransformOrigin() {
    if (!this.transformOrigin) return;
    let placementMap = {
      top: 'bottom',
      bottom: 'top',
      left: 'right',
      right: 'left'
    };
    let placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0];
    let origin = placementMap[placement];
    this.popperJS._popper.style.transformOrigin = typeof this.transformOrigin === 'string'
      ? this.transformOrigin
      : ['top', 'bottom'].indexOf(placement) > -1 ? `center ${ origin }` : `${ origin } center`;
  }

  doDestroy(forceDestroy?) {
    if (!this.popperJS || (this.showPopper && !forceDestroy)) return;
    this.popperJS.destroy();
    this.popperJS = null;
  }

  appendArrow(element) {
    let hash;
    if (this.appended) {
      return;
    }

    this.appended = true;

    for (let item in element.attributes) {
      if (/^_v-/.test(element.attributes[item].name)) {
        hash = element.attributes[item].name;
        break;
      }
    }

    const arrow = document.createElement('div');

    if (hash) {
      arrow.setAttribute(hash, '');
    }
    arrow.setAttribute('x-arrow', '');
    arrow.className = 'popper__arrow';
    element.appendChild(arrow);
  }

  updatePopper() {
    const popperJS = this.popperJS;
    if (popperJS) {
      popperJS.update();
      if (popperJS._popper) {
        popperJS._popper.style.zIndex = PopupManager.nextZIndex();
      }
    } else {
      this.createPopper();
    }
  }

  destroyPopper() {
    if (this.popperJS) {
      this.resetTransformOrigin();
    }
  }
}