import DropDown from './src/drop-down.vue';

DropDown.install = function(Vue) {
  Vue.component(DropDown.componentName, DropDown);
};

export default DropDown