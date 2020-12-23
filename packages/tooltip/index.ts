import Tooltip from './src/tooltip.tsx';

Tooltip.install = function(Vue) {
  Vue.component(Tooltip.componentName, Tooltip);
};

export default Tooltip