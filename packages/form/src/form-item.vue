<template>
  <div class="kview-from-item" :style="styles">
    <span v-show="isRequired || required" class="kview-from-item__require">*</span>
    <div class="kview-from-item__title">
      <div class="kview-from-item__label">
        <span>{{label}}</span>
      </div>
    </div>
    <div class="kview-from-item__component">
      <slot></slot>
    </div>
    <div v-show="validateMessage" class="kview-from-item__tip">
      <span class="kview-from-item__icon iconfont kview-icon-error"></span>
      <span>{{validateMessage}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch, Inject, Provide } from 'vue-property-decorator'
import AsyncValidator from 'async-validator';
import {getPropByPath} from 'kview-t-ui/src/utils/util'
import Emitter from 'kview-t-ui/src/utils/emitter'
@Component
export default class KFormItem extends Emitter {
  name = 'KFormItem'
  componentName = 'KFormItem'
  @Inject('kForm') kForm

  @Provide('kFormItem') 
  kFormItem = this

  @Prop({default: ''}) label: string
  @Prop({default: undefined}) required: boolean
  @Prop() styles: Object
  
  @Prop() prop: string
  @Prop() rules: Object[]
  @Prop() validateStatus: string

  @Watch('validateStatus')
  getValidateStatus(value){
    this.validateState = value;
  }

  initialValue
  validateState = ''
  isNested = false
  validateDisabled = false
  validateMessage = ''
  get isRequired() {
    let rules = this.getRules();
    let isRequired = false;
    if (rules && rules.length) {
      rules.every(rule => {
        if (rule.required) {
          isRequired = true;
          return false;
        }
        return true;
      });
    }
    return isRequired;
  }
  get form() {
      let parent = this.$parent;
      let parentName = parent.componentName;
      while (parentName !== 'KForm') {
        if (parentName === 'KFormItem') {
          this.isNested = true;
        }
        parent = parent.$parent;
        parentName = parent.componentName;
      }
      return parent;
  }

  get fieldValue() {
    const model = (this.form as any).model;
    if (!model || !this.prop) { return; }
    let path = this.prop;
    if (path.indexOf(':') !== -1) {
      path = path.replace(/:/, '.');
    }
    return getPropByPath(model, path, true).v;
  }

  validate(trigger, callback = (a?, b?) => {}) {
    this.validateDisabled = false;
    const rules = this.getFilteredRule(trigger);
    if ((!rules || rules.length === 0) && this.required === undefined) {
      callback();
      return true;
    }
    this.validateState = 'validating';
    const descriptor = {};
    if (rules && rules.length > 0) {
      rules.forEach(rule => {
        delete rule.trigger;
      });
    }
    descriptor[this.prop] = rules;
    const validator = new AsyncValidator(descriptor);
    const model = {};
    model[this.prop] = this.fieldValue;
    validator.validate(model, { firstFields: true }, (errors, invalidFields) => {
      this.validateState = !errors ? 'success' : 'error';
      this.validateMessage = errors ? errors[0].message : '';
      callback(this.validateMessage, invalidFields);
      this.kForm && this.kForm.$emit('validate', this.prop, !errors, this.validateMessage || null);
    });
  }

  getFilteredRule(trigger) {
    const rules = this.getRules();
    return rules.filter(rule => {
      if (!rule.trigger || trigger === '') return true;
      if (Array.isArray(rule.trigger)) {
        return rule.trigger.indexOf(trigger) > -1;
      } else {
        return rule.trigger === trigger;
      }
    }).map(rule => Object.assign({}, rule));
  }

  getRules() {
    let formRules = (this.form as any).rules;
    const selfRules = this.rules;
    const requiredRule = this.required !== undefined ? { required: !!this.required } : [];
    const prop = getPropByPath(formRules, this.prop || '');
    formRules = formRules ? (prop.o[this.prop || ''] || prop.v) : [];
    return [].concat(selfRules || formRules || []).concat(requiredRule);
  }

  addValidateEvents() {
    const rules = this.getRules();
    if (rules.length || this.required !== undefined) {
      this.$on('k.form.blur', this.onFieldBlur);
      this.$on('k.form.change', this.onFieldChange);
    }
  }

  onFieldBlur() {
    this.validate('blur');
  }

  onFieldChange() {
    if (this.validateDisabled) {
      this.validateDisabled = false;
      return;
    }
    this.validate('change');
  }

  removeValidateEvents() {
    this.$off();
  }

  mounted() {
    if (this.prop) {
      this.dispatch('KForm', 'k.form.addField', [this]);
      let initialValue:any = this.fieldValue;
      if (Array.isArray(initialValue)) {
        initialValue = [].concat(initialValue);
      }
      Object.defineProperty(this, 'initialValue', {
        value: initialValue
      });
      this.addValidateEvents();
    }
  }
  resetField() {
    this.validateState = '';
    this.validateMessage = '';
    let model = (this.form as any).model;
    let value = this.fieldValue;
    let path = this.prop;
    if (path.indexOf(':') !== -1) {
      path = path.replace(/:/, '.');
    }
    let prop = getPropByPath(model, path, true);
    this.validateDisabled = true;
    if (Array.isArray(value)) {
      prop.o[prop.k] = [].concat(this.initialValue);
    } else {
      prop.o[prop.k] = this.initialValue;
    }
    this.$nextTick(() => {
      this.validateDisabled = false;
    });
  }
  beforeDestroy() {
    this.dispatch('KForm', 'k.form.removeField', [this]);
  }
  

}
</script>