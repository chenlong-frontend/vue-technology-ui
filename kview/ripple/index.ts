import Ripple from './ripple'

Ripple.install = function(Vue) {
  Vue.component(Ripple.name, Ripple);
};

export default Ripple