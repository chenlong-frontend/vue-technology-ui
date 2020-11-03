<template>
    <li class="kview-option-card" :style="styles" :class="{'kview-option-card--selected': itemSelected}" @click.stop="onSelectOptionClick">
      <div class="kview-option-card__content">
        <div class="kview-option-card__slot">
          <slot></slot>
        </div>
        <div class="kview-option-card__title" :class="{'kview-option-card__title--selected': itemSelected}">
          <span>{{label}}</span>
        </div>
      </div>
      <div v-if="itemSelected" class="kview-option-card__corner">
        <div class="kview-option-card__triangle"></div>
        <span class="kview-option-card__icon font_family icon-icon-tick"></span>
      </div>
    </li>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch, Inject } from 'vue-property-decorator'
import Emitter  from '../utils/emitter'

@Component
export default class KOptionCard extends Emitter {
  name = 'KOptionCard'
  @Inject('select') select;
  @Prop() label:string
  @Prop() value?:string
  @Prop({default: 0}) width: string
  @Prop({default: 0}) height: string
  componentName:string = 'Koption'
  created() {
    this.select.options.push(this);
    this.dispatch('Kselect', 'setSelected', {});
  }

  get itemSelected () {
    return this.value === this.select.value
  }

  get styles () {
    return {
      width: this.width,
      height: this.height
    }
  }

  onSelectOptionClick () {
    this.dispatch('Kselect', 'handleOptionClick', [this, true]);
  }

}
</script>