import CardShadow from './src/card-shadow'

CardShadow.install = function(Vue) {
  Vue.component(CardShadow.componentName, CardShadow);
};

export default CardShadow