import CardItem from './src/card-item.vue'

CardItem.install = function(Vue) {
  Vue.component(CardItem.componentName, CardItem);
};

export default CardItem;