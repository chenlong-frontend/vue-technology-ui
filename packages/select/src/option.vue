<template>
    <li class="kview-option" :class="{'kview-option--selected': itemSelected}" @click.stop="onSelectOptionClick">
      <slot>
        <span>{{label}}</span>
      </slot>
    </li>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch, Inject } from 'vue-property-decorator'
import Emitter  from 'kview-c-ui/src/utils/emitter'

@Component
export default class KOption extends Emitter {
  @Inject('select') select;
  @Prop() label?:string
  @Prop() value?:string
  static componentName = 'KOption'
  componentName = 'KOption'
  created() {
    this.select.options.push(this);
    this.dispatch('KSelect', 'setSelected', {});
  }

  get itemSelected () {
    return this.value === this.select.value
  }
  onSelectOptionClick () {
    this.dispatch('KSelect', 'handleOptionClick', [this, true]);
  }

}
</script>