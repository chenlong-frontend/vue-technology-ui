import { Component, Vue } from 'vue-property-decorator'

@Component
export default class KDivider extends Vue {
  name = 'KDivider'
  render(h) {
    return h('div', {
      class: "kview-divider",
    })
  }
}