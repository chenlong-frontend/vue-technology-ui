import { Component, Prop, Vue } from 'vue-property-decorator'

enum Type {
    default = 'default',
    warn = 'warn'
}

@Component
export default class KButtonMini extends Vue {
  static componentName = "KButtonMini"
  componentName = "KButtonMini"
  @Prop() styles:object
  @Prop({default: 'default'}) type: Type

  get typeClass () {
    if (this.type === Type.warn) {
      return 'kview-button-mini--warn'
    }
    return 'kview-button-mini--default'
  }

  onClick (e) {
    this.$emit('click', e);
  }
  render(h) {
    return h('button', {
      class: ['kview-button-mini', this.typeClass],
      style: this.styles,
      on: {
        click: this.onClick
      },
    }, this.$slots.default)
  }
}