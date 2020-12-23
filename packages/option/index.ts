import Option from '../select/src/option.vue';

Option.install = function(Vue) {
  Vue.component(Option.componentName, Option);
};

export default Option