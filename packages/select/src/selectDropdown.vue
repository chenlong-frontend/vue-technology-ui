<template>
  <div :style="{ width: width }" class="kview-select-dropdown popper">
    <div class="kview-select-dropdown__container kview-scroll">
      <slot></slot> 
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator';
import Popper from 'kview-ui/src/utils/vue-popper'

@Component
export default class KSelectDropdown extends Popper {
  name = 'KSelectDropdown'
  referenceElm
  popperElm
  width = ''
  componentName:string = 'SelectDropdown'
  @Prop({default: false}) appendToBody: boolean

  get inputWidth () {
    return this.$parent['inputWidth']
  }

  @Watch('inputWidth')
  getInputWidth() {
    this.width = this.$parent.$el.getBoundingClientRect().width + 'px';
  }

  mounted () {
    this.referenceElm = this.$parent.$refs.reference;
    this.$parent['popperElm'] = this.popperElm = this.$el;

    this.$on('updatePopper', () => {
      if (this.$parent['visible']) this.updatePopper();
    });
    this.$on('destroyPopper', this.destroyPopper);
  }
}

</script>