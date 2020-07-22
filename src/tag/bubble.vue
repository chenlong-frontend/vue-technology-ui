<template>
  <div class="kbubble-container">
    <div class="kbubble-border">
      <div class="kbubble">
        <p v-for="(text,index) in textList" :key="index">{{text}}</p>
      </div>
    </div>
    <div class="kbubble-triangle"></div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator';

@Component
export default  class Kbubble extends Vue {
  @Prop({default: ''}) text: string | string[]

  get textList () {
    if (typeof this.text === 'string') return [this.text]
    if (Array.isArray(this.text)) return this.text
    return []
  }
}
</script>

<style scoped lang="scss">
.kbubble-container {
  position: relative;
  display: inline-block;
  opacity: 0.9;
  padding-left: 6px;
  pointer-events: none;
  .kbubble-border {
    width: 100%;
    border-radius: 2px;
    overflow: hidden;
    box-sizing: border-box;
    .kbubble {
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      background-image: linear-gradient(to right,rgba(42, 138, 202,0.70) ,rgba(44, 166, 157, 0.86) 100%);
      border: 1px solid transparent;
      border-left: none;
	    border-image: linear-gradient(to right, #28cae2, #25ced2) 1;
      p {
        margin: 0;
        font-size: 12px;
        line-height: 24px;
        color: #ffffff;
      }
      &::before {
        content: ' ';
        position: absolute;
        bottom: 0px;
        left: 6px;
        top: 18px;
        width: 1px;
        background: #28cae2;
      }
      &::after {
        content: ' ';
        position: absolute;
        top: 0px;
        left: 6px;
        height: 6px;
        width: 1px;
        background: #28cae2;
      }
    }
  }
  .kbubble-triangle {
    position: absolute;
    width: 0;
    height: 0;
    top: 6px;
    left: -6px;
    border: 6px solid transparent;
    border-right-color: rgba(42, 138, 202,0.70);
    pointer-events: none;
    &::before {
    content: ' ';
      position: absolute;
      top: -7px;
      left: 3px;
      height: 9px;
      width: 1px;
      background: #28cae2;
      transform: rotate(45deg);
    }
    &::after {
      content: ' ';
      position: absolute;
      top: -1px;
      left: 3px;
      height: 9px;
      width: 1px;
      background: #28cae2;
      transform: rotate(-45deg);
    } 
  }
}
</style>