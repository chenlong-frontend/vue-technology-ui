<template>
    <li class="koption" :class="{'selected': itemSelected}" @click.stop="onSelectOptionClick">
    <slot>
      <span>{{label}}</span>
    </slot>
    </li>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch, Inject } from 'vue-property-decorator'
import Emitter  from '../utils/emitter'

@Component
export default class Koption extends Emitter {
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

<style lang="scss" scoped>
  $acitveBg: linear-gradient(84deg, rgba($color: #209BF5, $alpha: 0.3) 0%, rgba($color: #0FE0D0, $alpha: 0.3) 99%);
  .koption {
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    color: rgba($color: #ffffff, $alpha: 0.9);
    padding: 0 10px;
    cursor: pointer;
    &:hover {
      background-image: $acitveBg;
    }
  }
  .selected {
    background-image: $acitveBg;
  }
</style>