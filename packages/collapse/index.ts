import Collapse from './src/collapse'

Collapse.install = function(Vue) {
  Vue.component(Collapse.componentName, Collapse);
};

export default Collapse