<template>
<div class="kview-menu-item" :style="styles" @click="onClick">
  <div class="kview-menu-item__content" :class="activeClass">
    <span class="kview-menu-item__icon" :class="activeClass">
      <slot></slot>
    </span>
     <p class="kview-menu-item__description" :class="activeClass"><span>{{description}}</span></p>
  </div>
  <transition name="kview-fade" v-on:before-enter="beforeWidthEnter" v-on:after-enter="afterWidthEnter">
    <div v-if="active" class="kview-menu-item__mask"></div>
  </transition>
  <img v-if="active && maskEnd" :src="arrowImg" class="kview-menu-item__arrow" alt="img" />
</div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'

const arrowImg = require('./assets/menu/arrow.svg');

@Component
export default class KMenuItem extends Vue {
  name = 'KMenuItem'

  arrowImg = arrowImg
  maskEnd = false

  @Prop({default: ''}) description:string
  @Prop({default: false}) active: boolean
  @Prop({default: () => ({})}) styles: object

  get activeClass() {
    if (this.active) return 'is-active'
    return ''
  }

  onClick (evnet) {
    this.$emit('click', this.$el)
  }

  beforeWidthEnter () {
    this.maskEnd = false
    this.$emit('before')
  }

  afterWidthEnter () {
    this.maskEnd = true
    this.$emit('after')
  }
}
</script>