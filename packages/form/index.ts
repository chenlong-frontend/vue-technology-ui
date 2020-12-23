import Form from './src/form.vue'

Form.install = function(Vue) {
  Vue.component(Form.componentName, Form);
};

export default Form