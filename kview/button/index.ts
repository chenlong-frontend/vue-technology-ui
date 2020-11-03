import Button from './button'
import ButtonIcon from './button-icon'
import ButtonMini from './button-mini'
import ButtonLarger from './button-larger'
import ButtonIconMiddle from './button-icon-middle'

Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};

ButtonIcon.install = function(Vue) {
  Vue.component(ButtonIcon.name, ButtonIcon);
};

ButtonMini.install = function(Vue) {
  Vue.component(ButtonMini.name, ButtonMini);
};

ButtonLarger.install = function(Vue) {
  Vue.component(ButtonLarger.name, ButtonLarger);
};

ButtonIconMiddle.install = function(Vue) {
  Vue.component(ButtonIconMiddle.name, ButtonIconMiddle);
};

export {Button, ButtonIcon, ButtonMini, ButtonLarger, ButtonIconMiddle}


