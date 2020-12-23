<template>
  <div class="kview-number-input" :style="styles">
    <k-input :value="displayValue" :disabled="disabled" @focus="handleFocus" @blur="handleBlur" @change="inputChange" @input="input"></k-input>
    <span v-if="unit" class="kview-number-input__unit">{{unit}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'
import Emitter from 'kview-c-ui/src/utils/emitter'

@Component
export default class KNumberInput extends Emitter {
  static componentName = 'KNumberInput'
  componentName = 'KNumberInput'
  @Prop({default: ''}) unit: string
  @Prop({default: ''}) placeholder: string
  @Prop() max: number
  @Prop() min: number
  @Prop() value: number
  @Prop({default: '100%'}) width: string
  @Prop({default: 'auto'}) height: string
  @Prop({validator: (val) => {return val >= 0 && val === parseInt(val, 10);}}) precision:number
  @Prop({default: true}) validateEvent: boolean
  @Prop() disabled:boolean

  @Watch('value', {immediate: true})
  getValue (value) {
    if (this.validateEvent) {
      this.dispatch('KFormItem', 'k.form.change', [value]);
    }
    let newVal = value === undefined ? value : Number(value);
    if (newVal !== undefined) {
      if (isNaN(newVal)) {
        return;
      }
      if (this.precision !== undefined) {
        newVal = this.toPrecision(newVal, this.precision);
      }
    }
    if (newVal >= this.max) newVal = this.max;
    if (newVal <= this.min) newVal = this.min;
    this.currentValue = newVal;
    this.userInput = null;
    this.$emit('input', newVal);
  }

  userInput = null

  currentValue = 0

  focused = false

  get styles () {
    return {
      width: this.width,
      height: this.height
    }
  }
  
  get numPrecision() {
    const { value, getPrecision, precision } = this;
    if (precision !== undefined) {
      return precision;
    } else {
      return getPrecision(value);
    }
  }

  get displayValue () {
    if (this.userInput !== null) {
     return this.userInput;
    }

    let currentValue:number | string = this.currentValue;

    if (typeof currentValue === 'number') {
      if (this.precision !== undefined) {
        currentValue = currentValue.toFixed(this.precision);
      }
    }
    return currentValue;
  }

  getPrecision(value?) {
    if (value === undefined) return 0;
    const valueString = value.toString();
    const dotPosition = valueString.indexOf('.');
    let precision = 0;
    if (dotPosition !== -1) {
      precision = valueString.length - dotPosition - 1;
    }
    return precision;
  }

  toPrecision(num, precision) {
    if (precision === undefined) precision = this.numPrecision;
    return parseFloat(Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision) + '');
  }

  setCurrentValue(newVal) {
    const oldVal = this.currentValue;
    if (typeof newVal === 'number' && this.precision !== undefined) {
      newVal = this.toPrecision(newVal, this.precision);
    }
    if (newVal >= this.max) newVal = this.max;
    if (newVal <= this.min) newVal = this.min;
    if (oldVal === newVal) return;
    this.userInput = null;
    this.$emit('input', newVal);
    this.$emit('change', newVal, oldVal);
    this.currentValue = newVal;
  }

  input(v) {
    this.userInput = v;
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

  inputChange(value) {
    const newVal = value === '' ? undefined : Number(value);
    if (!isNaN(newVal) || value === '') {
      this.setCurrentValue(newVal);
    }
    this.userInput = null;
  }
}
</script>