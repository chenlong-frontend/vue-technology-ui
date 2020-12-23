import Button from './src/button'

Button.install = function(Vue) {
  Vue.component(Button.componentName, Button);
};

export default Button;


