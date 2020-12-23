import Select from './src/select.vue';

Select.install = function(Vue) {
  Vue.component(Select.componentName, Select);
};

export default Select