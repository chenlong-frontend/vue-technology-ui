<template>
  <div class="kinput-container">
    <div class="kselect-border"></div>
    <input placeholder="" class="kinput" />
    <div class="kinput-number-adjust">
      <span class="kinput-number-increase font_family icon-icon-arowfill"></span>
      <span class="kinput-number-reduce font_family icon-icon-arowfill"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'

@Component
export default class KNumberInput extends Vue {

}
</script>

<style scoped lang="scss">
.kinput-container {
  position: relative;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  .kselect-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  	margin: 0 auto;
 	  border: 1px solid transparent;
	  border-image: linear-gradient(45deg, rgba($color: #22F1FE, $alpha: 0.3), rgba($color: #167EFB, $alpha: 0.3)) 1;
    pointer-events: none;
  }
  .kinput-number-adjust {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    span {
      font-size: 12px;
      color: #0CF1FF;
      background: #175C92;
      cursor: pointer;
      &:hover {
        background: rgba($color: #165B92, $alpha: 0.4);
      }
    }
    .kinput-number-reduce {
      transform: rotateX(180deg);
    }
  }
  .kinput {
    width: 100%;
    height: 28px;
    box-sizing: border-box;
    line-height: 28px;
    font-size: 12px;
    padding: 0 12px;
    padding-right: 24px;
    color: #ffffff;
    caret-color:#0CF1FF;
    background: #051643;
    border: none;
    outline: none;

    &:focus {
     box-shadow: inset 0 0 10px 0 #2BAAB6;
    }
    &::placeholder {
      color: #ffffff;
      opacity: 0.3;
    }
  }
}
</style>
