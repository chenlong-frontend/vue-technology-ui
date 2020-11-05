import { Component, Prop, Vue} from 'vue-property-decorator'
@Component
export default class KCol extends Vue {
  name = 'KCol'
  @Prop({default: 24}) span
  @Prop({default: 'div'}) tag
  @Prop() offset:number
  @Prop() pull:number
  @Prop() push:number
  @Prop() xs:number | Object
  @Prop() md:number | Object
  @Prop() lg:number | Object
  @Prop() xl:number | Object

  get gutter() {
    let parent = this.$parent as any;
    while (parent && parent.componentName !== 'KRow') {
      parent = parent.$parent;
    }
    return parent ? parent.gutter : 0;
  }

  render(h) {
    let classList = [];
    let style = {paddingLeft: null, paddingRight: null};

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px';
      style.paddingRight = style.paddingLeft;
    }

    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop] || this[prop] === 0) {
        classList.push(
          prop !== 'span'
            ? `kview-col-${prop}-${this[prop]}`
            : `kview-col-${this[prop]}`
        );
      }
    });

    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`kview-col-${size}-${this[size]}`);
      } else if (typeof this[size] === 'object') {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span'
              ? `kview-col-${size}-${prop}-${props[prop]}`
              : `kview-col-${size}-${props[prop]}`
          );
        });
      }
    });

    return h(this.tag, {
      class: ['kview-col', classList],
      style
    }, this.$slots.default);
  }
};