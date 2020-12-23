import { Component, Prop,Vue } from 'vue-property-decorator'

enum Type {
  PRIMARY = 'primary',
  WARN = 'warn'
}

// TODO 从中间到周边渐变。中间：#220000    #190000
@Component
export default class KCardShadow extends Vue {
  static componentName = 'KCardShadow'
  componentName = 'KCardShadow'
  @Prop({default: '240px'}) width: string
  @Prop({default: '200px'}) height: string
  @Prop({default: 'primary'}) type: Type 
  get styles() {
    return {
      width: this.width,
      height: this.height
    }
  }

  get classes () {
    return ["kview-card-shadow", 'is-' + this.type]
  }
  
  render (h) {
    return h('div', {
      class: this.classes,
      style: this.styles
    }, this.$slots.default)
  }
}