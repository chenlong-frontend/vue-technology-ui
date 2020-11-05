import Empty from './src/empty.ts'

Empty.install = function(Vue) {
  Vue.component(Empty.name, Empty);
};

export default Empty;