import { Component, Prop, Vue, Watch, Provide } from 'vue-property-decorator'

@Component
export default class KCollapse extends Vue {
  name = 'KCollapse'
  componentName:string = 'KCollapse'

  @Provide('activeNames') 
  activeNames = {value: ''}
  @Prop() value: string
  @Watch('value')
  getValue (v) {
    this.activeNames.value = v
  }

  setActiveNames(value) {
    this.activeNames.value = value
    this.$emit('input', value);
    this.$emit('change', value);
  }

  handleItemClick(item) {
    this.setActiveNames(this.activeNames.value === item.itemName ? '' : item.itemName)
  }

  created() {
    this.$on('item-click', this.handleItemClick)
  }
  
  render (h) {
    return h('div', {
      class: 'kview-collapse'
    }, this.$slots.default)
  } 
}