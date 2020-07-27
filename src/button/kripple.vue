<template>
  <button @click="onClick" class="kripple-container" :class="animation ? 'kripple-animation' : ''">
    <span class="kripple"></span>
    <div class="pulse"></div>
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'
@Component
export default class KTag extends Vue {
  @Prop({default: false}) animation: boolean
  onClick(e) {
    this.$emit('click', e)
  }
}
</script>

<style scoped lang="scss">
  @keyframes warn {
      0% {
          transform: scale(1);
          opacity: 0.0;
      }
    
      25% {
          transform: scale(1.2);
          opacity: 0.3;
      }
    
      50% {
          transform: scale(1.4);
          opacity: 0.5;
      }
    
      75% {
          transform: scale(1.6);
          opacity: 0.3;
      }
    
      100% {
          transform: scale(1.8);
          opacity: 0.0;
      }
  }
.kripple-container {
  position: relative;
  width: 20px;
  height: 20px;
  line-height: 16px;
  text-align: center;
  border-radius: 50%;
  background:transparent;
  border: none;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background: rgba($color: #0CF1FF, $alpha: 0.3);
    box-shadow: 0 0 5px 0 rgba(0,86,90,0.59);
    .pulse {
      display: block;
    }
  }

  .kripple {
    display: inline-block;
    width: 6px;
    height: 6px;
    vertical-align: 1px;
    border-radius: 50%;
    background-color: #0CF1FF;
    box-shadow: 0 0 5px 0 rgba(0,86,90,0.59);
  }
  .pulse {
    position: absolute;
    display: none;
    width: 20px;
    height: 20px;
    left: 0;
    top: 0;
    background: rgba($color: #0CF1FF, $alpha: 0.6) ;
    border-radius: 50%;
    z-index: -1;
    opacity: 1;
    box-sizing: border-box;
    animation: warn 1s ease-out;
    animation-iteration-count: infinite;
  }
}
.kripple-animation {
    background: rgba($color: #0CF1FF, $alpha: 0.3);
    box-shadow: 0 0 5px 0 rgba(0,86,90,0.59);
    .pulse {
      display: block;
    }
}
</style>