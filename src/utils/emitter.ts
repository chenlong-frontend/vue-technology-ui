import { Vue, Component } from 'vue-property-decorator';
function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}

@Component
export default class Emmiter extends Vue{
  dispatch(componentName, eventName, params?) {
    var parent = this.$parent || this.$root as any;
    var name = parent.componentName;

    while (parent && (!name || name !== componentName)) {
      parent = parent.$parent;

      if (parent) {
        name = parent.componentName;
      }
    }
    if (parent) {
      parent.$emit.apply(parent, [eventName].concat(params));
    }
  }
  broadcast(componentName, eventName, params?) {
    broadcast.call(this, componentName, eventName, params);
  }
}