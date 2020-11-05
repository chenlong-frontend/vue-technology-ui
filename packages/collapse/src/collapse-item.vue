<template>
  <div class="kview-collapse-item">
    <div v-show="isActive" class="kview-collapse-item__content">
      <slot></slot>
    </div>
    <div class="kview-collapse-item__title" :style="{marginTop: '20px'}" @click="handleHeaderClick">
      <span>{{title}}</span>
      <span class="kview-collapse-item__arrow iconfont" :class="isActive ? 'kview-icon-arrow_up' : 'kview-icon-arrow_down'"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch, Inject } from 'vue-property-decorator'
import Emitter from 'kview-c-ui/src/utils/emitter';

@Component
export default class KCollapseItem extends Emitter {
  name = 'KCollapseItem'
  componentName:string = 'KCollapseItem'
  @Prop({default: ''}) title:string
  @Prop({default: ''}) itemName:string
  @Inject('activeNames') activeNames

  get isActive() {
    return this.activeNames.value === this.itemName
  }

  handleHeaderClick() {
    this.dispatch('KCollapse', 'item-click', this);
  }
}
</script>