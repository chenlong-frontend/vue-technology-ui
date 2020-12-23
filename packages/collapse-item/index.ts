import CollapseItem from '../collapse/src/collapse-item.vue'

CollapseItem.install = function(Vue) {
  Vue.component(CollapseItem.componentName, CollapseItem);
};

export default CollapseItem