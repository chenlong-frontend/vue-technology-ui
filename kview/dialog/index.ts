import Dialog from './dialog.vue'
import DialogMove from './dialog-move.vue'

Dialog.install = function(Vue) {
  Vue.component(Dialog.name, Dialog);
};

DialogMove.install = function(Vue) {
  Vue.component(DialogMove.name, DialogMove);
};

export {
  Dialog,
  DialogMove
}