import { Component, Prop, Vue} from 'vue-property-decorator'
@Component
export default class KRow extends Vue {
  static componentName = 'KRow'
  componentName = 'KRow'
  @Prop({default: 'div'}) tag: string
  @Prop() gutter: number
  @Prop() type: string
  @Prop({default: 'start'}) justify:string
  @Prop({default: 'top'}) align:string

  get style() {
    const ret = {marginLeft: null, marginRight: null};

    if (this.gutter) {
      ret.marginLeft = `-${this.gutter / 2}px`;
      ret.marginRight = ret.marginLeft;
    }

    return ret;
  }

  render(h) {
    return h(this.tag, {
      class: [
        'kview-row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== 'top' ? `is-align-${this.align}` : '',
        { 'kview-row--flex': this.type === 'flex' }
      ],
      style: this.style
    }, this.$slots.default);
  }
};

