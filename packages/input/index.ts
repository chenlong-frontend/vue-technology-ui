import Input from './src/input.vue'

Input.install = function(Vue) {
  Vue.component(Input.componentName, Input);
};

export default Input