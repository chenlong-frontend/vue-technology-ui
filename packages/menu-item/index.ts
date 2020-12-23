import MenuItem from './src/menu-item.vue';

MenuItem.install = function(Vue) {
  Vue.component(MenuItem.componentName, MenuItem);
};

export default MenuItem