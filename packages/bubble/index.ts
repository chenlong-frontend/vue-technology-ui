import Bubble from './src/bubble.vue'

Bubble.install = function(Vue) {
  Vue.component(Bubble.componentName, Bubble);
};

export default Bubble;