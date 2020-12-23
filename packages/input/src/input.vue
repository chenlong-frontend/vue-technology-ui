<template>
  <div class="kview-input">
    <input :class="['kview-input__input', disabled && 'kview-input__input--disabled']" :placeholder="placeholder" :disabled="disabled" @keyup.enter="handleEnter"
       @blur="handleBlur" @focus="handleFocus" :maxlength="max > -1 ? max : ''" :value="value" @change="handleChange" :style="inputStyle" @input="onInput" />
    <span class="kview-input__length" v-if="max > -1">{{len}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'
import Emitter from 'kview-c-ui/src/utils/emitter'

@Component
export default class KInput extends Emitter {
  static componentName = 'KInput'
  componentName = 'KInput'
  @Prop({default: ''}) placeholder: string
  @Prop({default: ''}) value: string
  @Prop({default: -1}) max: number  
  @Prop({default: () => ({})}) styles: object
  @Prop({default: true}) validateEvent: boolean
  @Prop() disabled:boolean

  focused = false

  @Watch('value')
  getValue (val) {
    if (this.validateEvent) {
      this.dispatch('KFormItem', 'k.form.change', [val]);
    }
  }

  get len () {
    const len = this.max - (this.value + '').length
    if (len < 0) {
      this.$emit('input', this.value.substring(0, this.max))
      return 0
    }
    return len
  }

  get inputStyle() {
    return this.max > -1 ? {...this.styles,paddingRight: '40px'} : this.styles
  }
  handleFocus(event) {
    this.focused = true;
    this.$emit('focus', event);
  }
  handleBlur(event) {
    this.focused = false;
    this.$emit('blur', event);
    if (this.validateEvent) {
      this.dispatch('KFormItem', 'k.form.blur', [this.value]);
    }
  }
  onInput(event) {
    this.$emit('input', event.target.value);
  }

  handleChange(event) {
    this.$emit('change', event.target.value);
  }
  handleEnter(event) {
    this.$emit('enter', event);
  }
}
</script>
