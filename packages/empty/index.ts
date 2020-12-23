import Empty from './src/empty'

Empty.install = function(Vue) {
  Vue.component(Empty.componentName, Empty);
};

export default Empty;