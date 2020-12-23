import Dialog from './src/dialog.vue'

Dialog.install = function(Vue) {
  Vue.component(Dialog.componentName, Dialog);
};

export default Dialog