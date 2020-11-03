<template>
  <div :style="styles" class="kview-bubble">
    <div class="kview-bubble__border">
      <div class="kview-bubble__content">
        <p class="kview-bubble__text" v-for="(text,index) in textList" :key="index">{{text}}</p>
      </div>
    </div>
    <div class="kview-bubble__triangle"></div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator';

@Component
export default  class KBubble extends Vue {
  readonly name = 'KBubble'
  @Prop({default: ''}) text: string | string[]
  @Prop({default: () => ({})}) styles: any
  get textList () {
    if (typeof this.text === 'string') return [this.text]
    if (Array.isArray(this.text)) return this.text
    return []
  }
}
</script>