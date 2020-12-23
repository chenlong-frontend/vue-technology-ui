import CardImage from './src/card-image.vue'

CardImage.install = function(Vue) {
  Vue.component(CardImage.componentName, CardImage);
};

export default CardImage