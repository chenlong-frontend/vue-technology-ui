<template>
  <div :style="{ width: width }" class="popper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator';
import Popper from 'kview-c-ui/src/utils/vue-popper'

@Component
export default class DropDownContent extends Popper {
  static componentName = 'ListDropDown'
  componentName = 'ListDropDown'
  referenceElm
  popperElm
  width = '168px'
  @Prop({default: false}) appendToBody: boolean

  mounted () {
    this.referenceElm = this.$parent.$refs.reference;
    this.$parent['popperElm'] = this.popperElm = this.$el;
  }
}

</script>