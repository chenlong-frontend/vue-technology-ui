<template>
  <div class="kview-card-image" @click="onClick">
    <div class="kview-card-image__label">
      <div class="kview-card-image__corner"></div>
      <span class="kview-card-image__text" :style="cornerStyle">{{corner}}</span>
    </div>

    <div class="kview-card-image__content">
      <img v-if="img" class="kview-card-image__pictrue" :src="img" alt="picture" />
    </div>
    <div class="kview-card-image__footer">
      <div class="kview-card-image__title">
        <span>{{title}}</span>
      </div>
      <div class="kview-card-image__tool">
        <slot name="tool"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'

@Component
export default class KCardImage extends Vue {
  static componentName = 'KCardImage'
  componentName = 'KCardImage'

  @Prop({default: ''})corner: string
  @Prop({default: ''})title: string
  @Prop({default: ''})img: string

  get cornerStyle() {
    return {
      left: this.corner.length > 1 ? '1px' : '5px'
    }
  }

  onClick (){
    this.$emit('click')
  }
}
</script>
