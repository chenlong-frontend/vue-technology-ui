import { Component, Prop,Vue } from 'vue-property-decorator'

enum Type {
    default = 'default',
    warn = 'warn',
    translucent = 'translucent'
}

@Component
export default class KButtonIcon extends Vue {
  static componentName = "KButtonIcon"
  componentName = "KButtonIcon"
  @Prop() styles:object
  @Prop({default: 'default'}) type: Type

  get typeClass () {
    if (this.type === Type.warn) {
      return 'kview-button-icon--warn'
    }
    if (this.type === Type.translucent) {
      return 'kview-button-icon--translucent'
    }
    return 'kview-button-icon--default'
  }

  onClick (e) {
    this.$emit('click', e);
  }

  render(h) {
    return h('button', {
      class: ['kview-button-icon', this.typeClass],
      style: this.styles,
      on: {
        click: this.onClick
      },
    }, this.$slots.default)
  }
}