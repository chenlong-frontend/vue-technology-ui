import NumberInput from './number-input.vue';
import Input from './input.vue'

Input.install = function(Vue) {
  Vue.component(Input.name, Input);
};
NumberInput.install = function(Vue) {
  Vue.component(NumberInput.name, NumberInput);
};

export {
  NumberInput,
  Input
}