import { Component, Vue } from 'vue-property-decorator'

@Component
export default class KDivider extends Vue {
  static componentName = 'KDivider'
  componentName = 'KDivider'
  render(h) {
    return h('div', {
      class: "kview-divider",
    })
  }
}