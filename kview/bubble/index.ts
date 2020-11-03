import Bubble from './bubble.vue'

Bubble.install = function(Vue) {
  Vue.component(Bubble.name, Bubble);
};

export default Bubble;