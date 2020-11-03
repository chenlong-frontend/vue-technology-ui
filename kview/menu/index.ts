import MenuItem from './menu-item.vue';

MenuItem.install = function(Vue) {
  Vue.component(MenuItem.name, MenuItem);
};

export {
  MenuItem,
}