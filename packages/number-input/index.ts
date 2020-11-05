import NumberInput from './src/number-input.vue';

NumberInput.install = function(Vue) {
  Vue.component(NumberInput.name, NumberInput);
};

export default NumberInput