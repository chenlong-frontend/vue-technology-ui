<template>
  <span :class="typeClass" @click="onClick" >
  {{text}}
  </span>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'

enum Direction {
    left = 'left',
    right = 'right'
}

@Component
export default class KTag extends Vue {
  @Prop() direction: Direction
  @Prop() text: string
  get typeClass () {
    if (this.direction === 'left') {
      return 'ktag ktag-left'
    }
    return 'ktag ktag-right'
  }

  onClick (e) {
    this.$emit('click', e)
  }
}

</script>

<style scoped lang="scss">
  .ktag {
    position: relative;
    display: inline-block;
    font-size: 12px;
    min-width: 45px;
    height: 24px;
    line-height: 24px;
    padding: 0 10px;
    color: #ffffff;
    background: #cccccc;
    text-align: center;
    border: 1px solid transparent;
    cursor: pointer;
    
    &::before {
      display: inline-block;
      width: 17px;
      height: 17px;
      position: absolute;
      top: 3px;
      z-index: -1;
      content: "";
      cursor: pointer;
      border: 1px solid transparent;
      background: #cccccc;
      transform: rotateY(1deg) rotateZ(-45deg) scaleX(1) scaleY(1) scaleZ(1);
    }
  }
  .ktag-right {
    border-right: none;
    background-image: linear-gradient(-119deg, rgba(5,85,154,0.86) 10%, rgba(0,18,89,0.70) 100%);
    border-image: linear-gradient(45deg, rgba($color: #30ACEE, $alpha: 0.5), rgba($color: #8CFCFD, $alpha: 0.5)) 1;
    &::before {
      right: -9px;
      border-top: none;
      border-left: none;
      border-image: linear-gradient(135deg, rgba($color: #30ACEE, $alpha: 0.5), rgba($color: #8CFCFD, $alpha: 0.5)) 1;
      background-image: linear-gradient(-74deg, rgba(5,85,154, 0.9), rgba(5,85,154,0.86));
    }
    &:hover {
      background-image: linear-gradient(-119deg, rgba(146,68,0,0.70) 10%, rgba(72,17,6,0.86) 100%);
      border-image: linear-gradient(45deg, rgba(149, 145, 139, 0.5), rgba(218, 153, 57, 0.5)) 1;
      &::before {
        background-image: linear-gradient(-45deg, rgba(146,68,0,0.70), rgba(146,68,0,0.70));
        border-image: linear-gradient(135deg, rgba(149, 145, 139, 0.5), rgba(218, 153, 57, 0.5)) 1;
      }
    }
  }
  .ktag-left {
    border-left: none;
    background-image: linear-gradient(61deg, rgba(5,85,154,0.86) 10%, rgba(0,18,89,0.70) 100%);
    border-image: linear-gradient(45deg, rgba($color: #30ACEE, $alpha: 0.5), rgba($color: #8CFCFD, $alpha: 0.5)) 1;
    &::before {
      left: -9px;
      border-bottom: none;
      border-right: none;
      border-image: linear-gradient(45deg, rgba($color: #30ACEE, $alpha: 0.5), rgba($color: #8CFCFD, $alpha: 0.5)) 1;
      background-image: linear-gradient(-74deg, rgba(5,85,154, 0.9), rgba(5,85,154,0.86));
    }
    &:hover {
      background-image: linear-gradient(61deg, rgba(146,68,0,0.70) 10%, rgba(72,17,6,0.86) 100%);
      border-image: linear-gradient(45deg, rgba(149, 145, 139, 0.5), rgba(218, 153, 57, 0.5)) 1;
      &::before {
        background-image: linear-gradient(-74deg, rgba(146,68,0,0.70), rgba(146,68,0,0.70));
        border-image: linear-gradient(135deg, rgba(149, 145, 139, 0.5), rgba(218, 153, 57, 0.5)) 1;
      }
    }
  }
</style>