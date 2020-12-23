import FormItem from '../form/src/form-item.vue';

FormItem.install = function(Vue) {
  Vue.component(FormItem.componentName, FormItem);
};

export default FormItem