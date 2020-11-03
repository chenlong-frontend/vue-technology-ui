import Collapse from './collapse'
import CollapseItem from './collapse-item.vue'

Collapse.install = function(Vue) {
  Vue.component(Collapse.name, Collapse);
};

CollapseItem.install = function(Vue) {
  Vue.component(CollapseItem.name, CollapseItem);
};

export {
  Collapse,
  CollapseItem
}