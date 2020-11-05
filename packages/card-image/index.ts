import CardImage from './src/card-image.vue'

CardImage.install = function(Vue) {
  Vue.component(CardImage.name, CardImage);
};

export default CardImage