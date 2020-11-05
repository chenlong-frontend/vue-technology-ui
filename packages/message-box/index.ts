import Vue from 'vue';
import MessageBoxConstructor from './src/messagebox.vue';
import { isVNode } from 'kview-t-ui/src/utils/vdom';
import merge from 'kview-t-ui/src/utils/merge';

let currentMsg, instance;
let msgQueue = []

const defaults:any = {

};

const defaultCallback = (action) => {
  if (currentMsg) {
    if (currentMsg.resolve) {
      if (action === 'confirm') {
        currentMsg.resolve(action);
      } else if (currentMsg.reject && (action === 'cancel' || action === 'close')) {
        currentMsg.reject(action);
      }
    }
  }
};

const initInstance = () => {
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  });

  instance.callback = defaultCallback;
};

const showNextMsg = () => {
  if (!instance) {
    initInstance();
  }
  instance.action = '';

  if (!instance.visible || instance.closeTimer) {
    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift();

      let options = currentMsg.options;
      for (let prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop];
        }
      }
      if (options.callback === undefined) {
        instance.callback = defaultCallback;
      }

      let oldCb = instance.callback;
      instance.callback = (action, instance) => {
        oldCb(action, instance);
        showNextMsg();
      };
      if (isVNode(instance.message)) {
        instance.$slots.default = [instance.message];
        instance.message = null;
      } else {
        delete instance.$slots.default;
      }
      ['modal', 'showClose', 'closeOnClickModal', 'closeOnPressEscape', 'closeOnHashChange'].forEach(prop => {
        if (instance[prop] === undefined) {
          instance[prop] = true;
        }
      });
      if (instance.appendDom) {
        instance.appendDom.appendChild(instance.$el);
      } else {
        document.body.appendChild(instance.$el);
      }

      Vue.nextTick(() => {
        instance.visible = true;
      });
    }
  }
};

const MessageBox = function(options, callback?) {
  if (typeof options === 'string' || isVNode(options)) {
    options = {
      message: options
    };
    if (typeof arguments[1] === 'string') {
      options.title = arguments[1];
    }
  } else if (options.callback && !callback) {
    callback = options.callback;
  }

  return new Promise((resolve, reject) => { // eslint-disable-line
    msgQueue.push({
      options: merge({}, defaults, MessageBox.defaults, options),
      callback: callback,
      resolve: resolve,
      reject: reject
    });
    showNextMsg();
  });
};
MessageBox.defaults = {}
MessageBox.setDefaults = defaults => {
  MessageBox.defaults = defaults;
};

MessageBox.confirm = (title, message, options?) => {
  if (typeof title === 'object') {
    options = title;
    title = '';
  } else if (title === undefined) {
    title = '';
  }
  return MessageBox(merge({
    title: title,
    message: message,
    $type: 'confirm',
    showCancelButton: true
  }, options));
};

MessageBox.close = () => {
  instance.doClose();
  instance.visible = false;
  msgQueue = [];
  currentMsg = null;
};

export default MessageBox;