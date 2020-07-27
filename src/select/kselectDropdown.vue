<template>
  <div :style="{ minWidth: minWidth }" class="dropdown-position popper">
    <div class="dropdown-container">
      <div class="dropdown ksign-scroll">
          <slot></slot> 
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator';
import Popper from '../utils/vue-popper'

@Component
export default  class Dropdown extends Popper {
  referenceElm
  popperElm
  minWidth = ''
  componentName:string = 'SelectDropdown'
  @Prop({default: true}) appendToBody: boolean

  get inputWidth () {
    return this.$parent['inputWidth']
  }

  @Watch('inputWidth')
  getInputWidth() {
    this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
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

<style scoped lang="scss">
  .dropdown-position {
    margin: 0;
    padding: 0;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: absolute;
    box-sizing: border-box;
    padding: 2px 0;
    overflow: hidden;
    outline: none;
    .dropdown-container {
      border-radius: 2px;
      .dropdown {
        max-height: 190px;
        background: #061B51;
        border: 1px solid transparent;
        border-image: linear-gradient(45deg, rgba($color: #22F1FE, $alpha: 0.3), rgba($color: #167EFB, $alpha: 0.3)) 1;
        overflow: auto;
      }
    }
  }

</style>