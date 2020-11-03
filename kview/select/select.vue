<template>
  <div class="kview-select" :class="{active: visible}" :style="styles" v-clickoutside="handleClose">
    <div class="kview-select__content" :class="{'kview-select__content--disabled': isDisabled}" ref="reference" @click="onClick" >
      <div class="kview-select__left">
        <span class="kview-select__text">
          <input class="kview-select__input" :class="{'kview-select__input--disabled': isDisabled}" :disabled="isDisabled" :value="selectedLabel" :placeholder="placeholder" readonly />
        </span>
      </div>
      <div class="kview-select__right">
        <span class="kview-select__arrow font_family" :class="visible ? 'icon-icon-arrowptz' : 'icon-icon-account-arrow'"></span>
      </div>
    </div>
    <transition name="kview-fade">
      <dropdown v-show="visible" :appendToBody="appendToBody" ref="popper">
        <ul class="kview-select__option">
          <slot></slot>
        </ul>
      </dropdown>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch, Provide } from 'vue-property-decorator';
import Dropdown from './selectDropdown.vue';
import Emitter from '../utils/emitter';
import {valueEquals} from '../utils/util'
import { addResizeListener, removeResizeListener } from '../utils/resize-event';
import Clickoutside from '../utils/clickoutside';

@Component({
  components: {Dropdown},
  directives: {
    Clickoutside
  }
})
export default  class KSelect extends Emitter {
  name = 'KSelect'
  @Prop({default: true})appendToBody: boolean
  @Prop({required: true}) value: any
  @Prop({default: '请选择'}) placeholder: string
  @Prop() styles: object
  @Prop() disabled: boolean
  @Provide('select')
  select:{value?:any, options?:any[]} = {value: undefined, options: []}
  @Watch('value')
  getValue(val, oldVal) {
    if (!valueEquals(val, oldVal)) {
      this.dispatch('KFormItem', 'k.form.change', [val]);
    }
    this.setSelected();
  }
  @Watch('visible')
  getVisible (v) {
    if (v) {
      this.broadcast('SelectDropdown', 'updatePopper');
    } else {
      this.broadcast('SelectDropdown', 'destroyPopper');
    }
  }
  componentName:string = 'Kselect'
  visible: boolean = false
  input:HTMLInputElement
  selectedLabel:string = ''
  inputWidth  = 0

  get isDisabled() {
    return this.disabled || typeof this.disabled === 'string'
  }

  created () {
    this.$on('handleOptionClick', this.handleOptionClick);
    this.$on('setSelected', this.setSelected);
  }

  mounted () {
    addResizeListener(this.$el, this.handleResize);
    const reference = this.$refs.reference as HTMLElement;
    this.$nextTick(() => {
      if (reference) {
        this.inputWidth = reference.getBoundingClientRect().width;
      }
    });
  }

  resetInputWidth() {
    const reference = this.$refs.reference as HTMLElement;
    this.inputWidth = reference.getBoundingClientRect().width;
    // TODO 给弹窗加上emitter，销毁时触发下拉框销毁
    if (this.inputWidth == 0) this.visible  = false;
  }

  handleResize() {
    this.resetInputWidth();
  }

  onClick (e) {
    if (this.isDisabled) return
    this.visible  = !this.visible;
    this.$emit('visibleChange', this.visible)
  }

  handleClose() {
    this.visible  = false;
  }

  setSelected () {
    const select = this.select.options.find((option) => {
      return option.value === this.value
    })
    if (!select) {
      this.selectedLabel = ''
      this.select.value = ''
      return
    }
    if (this.selectedLabel !== select.label) this.selectedLabel = select.label
    if (this.select.value !== select.value ) {
      this.select.value = select.value
    }
  }
 
  handleOptionClick (option, byClick) {
    if (this.select.value !== option.value && byClick) {
      this.$emit('change', option.value);
    }
    this.visible = false;
    this.select.value = option.value;
    this.selectedLabel = option.label
    this.$emit('input', option.value);
  }

  beforeDestroy() {
    if (this.$el && this.handleResize) removeResizeListener(this.$el, this.handleResize);
  }
}

</script>