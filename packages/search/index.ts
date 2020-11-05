import Search from './src/search.vue';

Search.install = function(Vue) {
  Vue.component(Search.name, Search);
};

export default Search