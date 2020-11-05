import Ripple from './src/ripple'

Ripple.install = function(Vue) {
  Vue.component(Ripple.name, Ripple);
};

export default Ripple