import Empty from './empty'

Empty.install = function(Vue) {
  Vue.component(Empty.name, Empty);
};

export default Empty;