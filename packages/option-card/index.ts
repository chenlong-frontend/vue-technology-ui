import OptionCard from '../select/src/option-card.vue';

OptionCard.install = function(Vue) {
  Vue.component(OptionCard.componentName, OptionCard);
};

export default OptionCard