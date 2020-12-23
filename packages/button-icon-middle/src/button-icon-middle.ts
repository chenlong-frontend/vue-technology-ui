import { Component, Prop,Vue } from 'vue-property-decorator'

enum Type {
    default = 'default',
}

@Component
export default class KButtonIconMiddle extends Vue {
  static componentName = "KButtonIconMiddle"
  componentName = "KButtonIconMiddle"
  @Prop() styles:object
  @Prop({default: 'default'}) type: Type
  @Prop({default: false}) active: boolean

  get typeClass () {
    return 'kview-button-icon-middle--default'
  }

  onClick (e) {
    this.$emit('click', e);
  }

  render(h) {
    return h('button', {
      class: ['kview-button-icon-middle', this.typeClass, this.active ? 'kview-button-icon-middle--active' : ''],
      style: this.styles,
      on: {
        click: this.onClick
      },
    }, this.$slots.default)
  }
}