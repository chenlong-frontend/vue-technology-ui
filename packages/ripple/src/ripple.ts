import { Component, Prop,Vue } from 'vue-property-decorator'
@Component
export default class KRipple extends Vue {
  static componentName = 'KRipple'
  componentName = 'KRipple'
  @Prop({default: false}) animation: boolean
  onClick(e) {
    this.$emit('click', e)
  }
  render(h) {
    return h('button', {
      class: ['kview-ripple', this.animation ? 'kview-ripple--animation' : ''],
      on: {
        click: this.onClick
      },
    }, [
      h('span', {class: 'kview-ripple__center'}),
      h('div', {class: 'kview-ripple__pulse'})
    ])
  }
}