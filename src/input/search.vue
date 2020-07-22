<template>
  <div class="ksearch-container" :class="{noleft: !left, noborder: !border}">
    <div class="ksearch-border"></div>
    <input :placeholder="placeholder" :value="value" class="ksearch" @keyup.enter="onEnter" @input="onInput" />
    <span class="icon-search font_family icon-header-icon-search1"></span>
    <span v-if="left" class="cancel-text" @click="onClear">取消</span>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'

@Component
export default class Ksearch extends Vue {
  @Prop({default: '请输入关键词'}) placeholder: string
  @Prop({default: ''}) value: string
  @Prop({default: true}) left: boolean
  @Prop({default: true}) border: boolean

  onInput(v) {
    this.$emit('input', v.srcElement.value)
  }
  onEnter (e) {
    this.$emit('enter', e)
  }
  onClear (e) {
    this.$emit('input', '')
  }
}
</script>

<style scoped lang="scss">
.ksearch-container {
  position: relative;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  .icon-search {
    position: absolute;
    left: 12px;
    color: #07c1cf;
    line-height: 28px;
  }
  .cancel-text {
    position: absolute;
    right: 12px;
    opacity: 0.6;
    font-size: 12px;
    color: #0CF1FF;
    letter-spacing: 0;
    line-height: 28px;
    cursor: pointer;

    &:hover {
      opacity: 1;
      text-shadow: 0 0 4px #2BAAB6;
    }
  }
  .ksearch-border {
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
  .ksearch {
    width: 100%;
    height: 28px;
    box-sizing: border-box;
    line-height: 28px;
    font-size: 12px;
    padding-left: 32px;
    padding-right: 40px;
    color: #ffffff;
    caret-color:#0CF1FF;
    background: transparent;
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
.noleft {
  .ksearch {
    padding-right: 20px;
  }
}
.noborder {
  .ksearch-border {
    display: none;
  }
  .ksearch {
    &:focus {
     box-shadow: none;
    }
  }
}
</style>
