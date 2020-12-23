import Row from './src/row';

Row.install = function(Vue) {
  Vue.component(Row.componentName, Row);
};

export default Row;