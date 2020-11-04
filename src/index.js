/* Automatically generated by './build/bin/build-entry.js' */

import Scrollbar from '../packages/scrollbar/index.js';
import Row from '../packages/row/index.ts';
import Col from '../packages/col/index.ts';

const components = [
  Scrollbar,
  Row,
  Col
];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.2',
  install,
  Scrollbar,
  Row,
  Col
};
