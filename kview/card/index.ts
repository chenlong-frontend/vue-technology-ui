import CardShadow from './card-shadow'
import CardImage from './card-image.vue'
import CardItem from './card-item.vue'

CardShadow.install = function(Vue) {
  Vue.component(CardShadow.name, CardShadow);
};

CardImage.install = function(Vue) {
  Vue.component(CardImage.name, CardImage);
};

CardItem.install = function(Vue) {
  Vue.component(CardItem.name, CardItem);
};

export {CardShadow, CardImage, CardItem}