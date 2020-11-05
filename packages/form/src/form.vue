<template>
  <form class="kview-from">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch, Provide } from 'vue-property-decorator'

@Component
export default class KForm extends Vue {
  name = 'KForm'
  componentName = 'KForm'

  @Provide('kForm') 
  kForm = this

  @Prop() rules: object
  @Prop() inline: boolean
  @Prop() model: object

  @Watch('rules') 
  getRules () {
    this.fields.forEach(field => {
      field.removeValidateEvents();
      field.addValidateEvents();
    });
  } 

  fields = []

  potentialLabelWidthArr = []

  created() {
      this.$on('k.form.addField', (field) => {
        if (field) {
          this.fields.push(field);
        }
      });
      this.$on('k.form.removeField', (field) => {
        if (field.prop) {
          this.fields.splice(this.fields.indexOf(field), 1);
        }
      });
  }

  get autoLabelWidth () {
    if (!this.potentialLabelWidthArr.length) return 0;
      const max = Math.max(...this.potentialLabelWidthArr);
      return max ? `${max}px` : '';
  }

  resetFields() {
    if (!this.model) {
      console.warn('[kview Warn][Form]model is required for resetFields to work.');
      return;
    }
    this.fields.forEach(field => {
      field.resetField();
    });
  }

  clearValidate(props = []) {
    const fields = props.length
      ? (typeof props === 'string'
        ? this.fields.filter(field => props === field.prop)
        : this.fields.filter(field => props.indexOf(field.prop) > -1)
      ) : this.fields;
    fields.forEach(field => {
      field.clearValidate();
    });
  }

  validate(callback) {
    if (!this.model) {
      console.warn('[kview Warn][Form]model is required for validate to work!');
      return;
    }
    let promise;
    // if no callback, return promise
    if (typeof callback !== 'function' && window.Promise) {
      promise = new window.Promise((resolve, reject) => {
        callback = function(valid) {
          valid ? resolve(valid) : reject(valid);
        };
      });
    }
    let valid = true;
    let count = 0;
    // 如果需要验证的fields为空，调用验证时立刻返回callback
    if (this.fields.length === 0 && callback) {
      callback(true);
    }
    let invalidFields = {};
    this.fields.forEach(field => {
      field.validate('', (message, field) => {
        if (message) {
          valid = false;
        }
        invalidFields = Object.assign({}, invalidFields, field);
        if (typeof callback === 'function' && ++count === this.fields.length) {
          callback(valid, invalidFields);
        }
      });
    });
    if (promise) {
      return promise;
    }
  }

  validateField(props, cb) {
    props = [].concat(props);
    const fields = this.fields.filter(field => props.indexOf(field.prop) !== -1);
    if (!fields.length) {
      console.warn('[kview Warn]please pass correct props!');
      return;
    }
    fields.forEach(field => {
      field.validate('', cb);
    });
  }

  getLabelWidthIndex(width) {
    const index = this.potentialLabelWidthArr.indexOf(width);
    // it's impossible
    if (index === -1) {
      throw new Error('[KForm]unpected width ' + width);
    }
    return index;
  }

  registerLabelWidth(val, oldVal) {
    if (val && oldVal) {
      const index = this.getLabelWidthIndex(oldVal);
      this.potentialLabelWidthArr.splice(index, 1, val);
    } else if (val) {
      this.potentialLabelWidthArr.push(val);
    }
  }
  
  deregisterLabelWidth(val) {
    const index = this.getLabelWidthIndex(val);
    this.potentialLabelWidthArr.splice(index, 1);
  }
}
</script>