import NumberInput from './src/number-input.vue';

NumberInput.install = function(Vue) {
  Vue.component(NumberInput.componentName, NumberInput);
};

export default NumberInput