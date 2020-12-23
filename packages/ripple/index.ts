import Ripple from './src/ripple'

Ripple.install = function(Vue) {
  Vue.component(Ripple.componentName, Ripple);
};

export default Ripple