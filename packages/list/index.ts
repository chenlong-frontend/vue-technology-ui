import List from './src/list.vue';

List.install = function(Vue) {
  Vue.component(List.name, List);
};

export default List