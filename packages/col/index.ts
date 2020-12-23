import Col from './src/col';

Col.install = function(Vue) {
  Vue.component(Col.componentName, Col);
};

export default Col;