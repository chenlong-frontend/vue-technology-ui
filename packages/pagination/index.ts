import Pagination from './src/pagination.vue';

Pagination.install = function(Vue) {
  Vue.component(Pagination.componentName, Pagination);
};

export default Pagination