import FormItem from './form-item.vue';
import Form from './form.vue'

FormItem.install = function(Vue) {
  Vue.component(FormItem.name, FormItem);
};

Form.install = function(Vue) {
  Vue.component(Form.name, Form);
};

export {
  Form,
  FormItem
}