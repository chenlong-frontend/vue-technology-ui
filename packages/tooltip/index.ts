import Tooltip from './src/tooltip.tsx';

Tooltip.install = function(Vue) {
  Vue.component(Tooltip.name, Tooltip);
};

export default Tooltip