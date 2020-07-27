<template>
  <div :class="typeClass" :style="styles" @click="onClick">
    <button class="kbutton">{{text}}</button>
    <img class="kbutton-arrow kbutton-arrow-left-top" :src="typeImg" alt="arrow" />
    <img class="kbutton-arrow kbutton-arrow-right-top" :src="typeImg" alt="arrow" />
    <img class="kbutton-arrow kbutton-arrow-left-bottom" :src="typeImg" alt="arrow" />
    <img class="kbutton-arrow kbutton-arrow-right-bottom" :src="typeImg" alt="arrow" />
    <img class="kbutton-hover-img" :src="buttonImg" alt="button" />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'
const buttonImg = require('../assets/button.png')
const greenArrowImg = require('../assets/triangle-arrow-small-green.svg')
const buleArrowImg = require('../assets/triangle-arrow-small-blue.svg')

enum Type {
    default = 'default',
    warn = 'warn'
}

@Component
export default class KButton extends Vue {
  @Prop() styles:object
  @Prop() text:string
  @Prop({default: 'default'}) type: Type
  buttonImg = buttonImg
  greenArrowImg = greenArrowImg
  buleArrowImg = buleArrowImg

  get typeClass () {
    if (this.type === 'warn') {
      return 'kbutton-container kbutton-warn'
    }
    return 'kbutton-container kbutton-default'
  }
  get typeImg () {
    if (this.type === 'warn') {
      return buleArrowImg
    }
    return greenArrowImg
  }
  onClick (e) {
    this.$emit('click', e);
  }
}

</script>

<style scoped lang="scss">
.kbutton-container {
  position: relative;
  display: inline-block;
  border-radius: 1px;
  overflow: hidden;
  &:hover {
    .kbutton-arrow-left-top {
      left: 0px;
      top: 0px;
    }
    .kbutton-arrow-right-top {
      right: 0px;
      top: 0px;
    }
    .kbutton-arrow-left-bottom {
      left: 0px;
      bottom: 0px;
    }
    .kbutton-arrow-right-bottom {
      right: 0px;
      bottom: 0px;
    }
    .kbutton-hover-img { 
      display: block;
    }
  }
  .kbutton {
    width: 64px;
    height: 24px;
    font-size: 12px;
    line-height: 22px;
    box-sizing: border-box;
    color: #0CF1FF;
    outline: none;
    background: rgba(0,97,158,0.15);
    box-shadow: inset 0 0 9px 0 rgba($color: #0B7DC5, $alpha: 0.5);;
    border: 1px solid transparent;
    border-image: linear-gradient(45deg, rgba($color: #30ACEE, $alpha: 0.5), rgba($color: #8CFCFD, $alpha: 0.5)) 1;
    cursor: pointer;
  }
  .kbutton-hover-img {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    width: 64px;
    height: 24px;
  }
  .kbutton-arrow {
    position: absolute;
    transition: all 0.2s;
  }
  .kbutton-arrow-left-top {
    left: 2px;
    top: 2px;
  }
  .kbutton-arrow-right-top {
    right: 2px;
    top: 2px;
    transform:rotateY(180deg);
  }
  .kbutton-arrow-left-bottom {
    left: 2px;
    bottom: 2px;
    transform:rotateX(180deg);
  }
  .kbutton-arrow-right-bottom {
    right: 2px;
    bottom: 2px;
    transform:rotate(180deg);
  }
}
.kbutton-container.kbutton-warn {
  .kbutton { 
    color: #37E5C5;
    background: rgba(0,158,115,0.15);
    box-shadow: inset 0 0 9px 0 rgba($color: #0BC5A2, $alpha: 0.5);
    border: 1px solid transparent;
    border-image: linear-gradient(45deg, rgba($color: #30EEAC, $alpha: 0.5), rgba($color: #8CFDE3, $alpha: 0.5)) 1;
  }
}
</style>