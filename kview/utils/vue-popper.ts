import { Vue, Watch, Prop } from 'vue-property-decorator';
import {PopupManager} from './popup'
const PopperJS = require('./popper.js')

export default class Popper extends Vue {
  showPopper = false
  appendToBody: boolean
  popperElm: HTMLElement
  popper: HTMLElement
  referenceElm: HTMLElement
  reference: HTMLElement
  popperJS

  @Prop() value: boolean
  @Prop({default: true}) transformOrigin: boolean | string
  @Prop({default: () => ({gpuAcceleration: false})}) popperOptions: any

  @Watch('showPopper')
  getShowPopper(val) {
    val ? this.updatePopper() : this.destroyPopper();
  }

  createPopper () {
    const options = this.popperOptions;
    const popper = this.popperElm = this.popperElm || this.popper ||  this.$refs.popper as HTMLElement;
    let reference = this.referenceElm || this.reference || this.$refs.reference;
    if (!popper || !reference) return;

    if (this.appendToBody) document.body.appendChild(this.popperElm);

    if (this.popperJS && this.popperJS.destroy) {
      this.popperJS.destroy();
    }
    this.popperJS = new PopperJS(reference, popper, options);
    this.popperJS.onCreate(_ => {
      this.$emit('created', this);
      this.resetTransformOrigin();
      this.$nextTick(this.updatePopper);
    });
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