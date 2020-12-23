import Search from './src/search.vue';

Search.install = function(Vue) {
  Vue.component(Search.componentName, Search);
};

export default Search