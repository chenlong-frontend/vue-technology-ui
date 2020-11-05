import { Component, Prop, Vue } from 'vue-property-decorator'

enum Type {
    default = 'default'
}

const button = (x, style) => `<svg width="${346 + x}px" height="32px" viewBox="0 0 ${346 + x} 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="组件" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="${style.opacity}"><g id="button/346x28/默认" fill="${style.fill}" stroke="${style.stroke}"><g id="button"><path d="M4.20710488,0.5 L0.5,4.20705676 L0.5,31 C0.5,31.2761424 0.723857625,31.5 1,31.5 L${x + 341}.770273,31.5 L${x + 345}.5,27.7817009 L${x+345}.5,1 C${x+345}.5,0.723857625 ${x+345}.276142,0.5 ${x+345},0.5 L4.20710488,0.5 Z" id="矩形备份-89"></path></g></g></g></svg>`

@Component
export default class KButtonLarger extends Vue {
  name = "KButtonLarger"
  @Prop({default: () => {}}) styles:object
  @Prop({default: 'default'}) type: Type

  offset = 0

  ob
  
  isHover = false

  normal = {opacity: 0.3, fill: '#052B5B', stroke: '#23599A'}

  hover = {opacity: 0.68, fill: '#00408D', stroke: '#2B7ADA'}

  get typeClass () {
    return 'kview-button-larger--default'
  }

  get buttonStyle () {
    return {
      ...this.styles,
      backgroundImage: `url('data:image/svg+xml;charset=utf-8,${button(this.offset, this.isHover ? this.hover : this.normal).replace(/#/g, '%23').replace(/\n/g, '%0A')}')`
    }
  }

  mounted () {
    this.ob = new window['ResizeObserver'](this.getWidth);
    this.ob.observe(this.$el);
    this.getWidth()
  }

  getWidth () {
    const {width} = (this.$el as HTMLElement).getBoundingClientRect()
    this.offset = width - 346
  }

  onClick (e) {
    this.$emit('click', e);
  }
  onMouseenter () {
    this.isHover = true
  }
  onMouseleave () {
    this.isHover = false
  }

  destroyed () {
    this.ob.disconnect()
  }

  render(h) {
    return h('button', {
      class: ['kview-button-larger', this.typeClass],
      style: this.buttonStyle,
      on: {
        click: this.onClick,
        mouseenter: this.onMouseenter,
        mouseleave: this.onMouseleave
      },
    }, this.$slots.default)
  }
}