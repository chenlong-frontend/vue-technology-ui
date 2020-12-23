import List from './src/list.vue';

List.install = function(Vue) {
  Vue.component(List.componentName, List);
};

export default List