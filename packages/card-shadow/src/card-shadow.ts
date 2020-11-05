import { Component, Prop,Vue } from 'vue-property-decorator'

@Component
export default class KCardShadow extends Vue {
  name = 'KCardShadow'
  @Prop({default: '240px'}) width: string
  @Prop({default: '200px'}) height: string
  get styles() {
    return {
      width: this.width,
      height: this.height
    }
  }
  render (h) {
    return h('div', {
      class: "kview-card-shadow",
      style: this.styles
    }, this.$slots.default)
  }
}