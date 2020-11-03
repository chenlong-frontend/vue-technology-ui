import Divider from './divider'
import DividerText from './divider-text.vue'

Divider.install = function(Vue) {
  Vue.component(Divider.name, Divider);
};

DividerText.install = function(Vue) {
  Vue.component(DividerText.name, DividerText);
};


export {Divider, DividerText}