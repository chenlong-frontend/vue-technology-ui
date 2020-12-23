import { Component, Prop, Vue } from 'vue-property-decorator'

enum Type {
    default = 'default',
    warn = 'warn'
}

@Component
export default class KButton extends Vue {
  static componentName = "KButton"
  componentName = "KButton"
  @Prop() styles:object
  @Prop({default: 'default'}) type: Type

  get typeClass () {
    if (this.type === Type.warn) {
      return 'kview-button--warn'
    }
    return 'kview-button--default'
  }

  onClick (e) {
    this.$emit('click', e);
  }
  render(h) {
    return h('button', {
      class: ['kview-button', this.typeClass],
      style: this.styles,
      on: {
        click: this.onClick
      },
    }, this.$slots.default)
  }
}