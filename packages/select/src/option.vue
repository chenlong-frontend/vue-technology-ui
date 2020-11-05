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
  name = 'KOption'
  @Inject('select') select;
  @Prop() label?:string
  @Prop() value?:string
  componentName:string = 'Koption'
  created() {
    this.select.options.push(this);
    this.dispatch('Kselect', 'setSelected', {});
  }

  get itemSelected () {
    return this.value === this.select.value
  }
  onSelectOptionClick () {
    this.dispatch('Kselect', 'handleOptionClick', [this, true]);
  }

}
</script>