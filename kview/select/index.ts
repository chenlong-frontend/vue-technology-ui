import Select from './select.vue';
import Option from './option.vue';
import OptionCard from './option-card.vue'

Select.install = function(Vue) {
  Vue.component(Select.name, Select);
};
Option.install = function(Vue) {
  Vue.component(Option.name, Option);
};
OptionCard.install = function(Vue) {
  Vue.component(OptionCard.name, OptionCard);
};

export {
  Select,
  Option,
  OptionCard
}