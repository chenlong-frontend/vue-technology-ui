import { Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class KEmpty extends Vue {
  name = "KEmpty"
  @Prop({default: ''}) description: string
  @Prop({default: ''}) image: string

  render(h) {
    return h('div', {
      class: 'kview-empty'
    }, [
      h('img', {
        class: 'kview-empty__img',
        attrs:{
          src: this.image
        }
      }),
      h('p', {
        class: 'kview-empty__description'
      }, this.description)
    ])
  }
}