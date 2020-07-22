<template>
  <div class="kselect" :class="{active: 'visible'}" :style="styles" v-clickoutside="handleClose">
    <div class="kselect-border"></div>
    <div class="kselect-content" ref="reference" @click="onClick" >
      <div class="kselect-left">
        <span class="kselect-text">
          <input :value="selectedLabel" :placeholder="placeholder" readonly />
        </span>
      </div>
      <div class="kselect-right">
        <span class="kselect-arrow font_family" :class="visible ? 'icon-icon-arrowptz' : 'icon-icon-account-arrow'"></span>
      </div>
    </div>
    <transition name="fade">
      <dropdown v-show="visible" ref="popper">
        <ul class="koption">
          <slot></slot>
        </ul>
      </dropdown>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch, Provide } from 'vue-property-decorator';
import Dropdown from './selectDropdown.vue';
import Emitter from '../utils/emitter';
import { addResizeListener, removeResizeListener } from '../utils/resize-event';
import Clickoutside from '../utils/clickoutside';

@Component({
  components: {Dropdown},
  directives: {
    Clickoutside
  }
})
export default  class Kselect extends  Emitter {
  @Prop({required: true}) value: any
  @Prop({default: '请选择'}) placeholder: string
  @Prop() styles: object
  @Provide('select')
  select:{value?:any, options?:any[]} = {value: undefined, options: []}
  @Watch('value')
  getValue() {
    this.setSelected();
  }
  @Watch('visible')
  getVisible (v) {
    if (v) {
      this.broadcast('SelectDropdown', 'updatePopper');
    } else {
      this.broadcast('SelectDropdown', 'destroyPopper');
    }
  }
  componentName:string = 'Kselect'
  visible: boolean = false
  input:HTMLInputElement
  selectedLabel:string = ''
  inputWidth  = 0

  created () {
    this.$on('handleOptionClick', this.handleOptionClick);
    this.$on('setSelected', this.setSelected);
  }

  mounted () {
    addResizeListener(this.$el, this.handleResize);
    const reference = this.$refs.reference as HTMLElement;
    this.$nextTick(() => {
      if (reference) {
        this.inputWidth = reference.getBoundingClientRect().width;
      }
    });
  }

  resetInputWidth() {
    const reference = this.$refs.reference as HTMLElement;
    this.inputWidth = reference.getBoundingClientRect().width;
  }

  handleResize() {
    this.resetInputWidth();
  }

  onClick (e) {
    this.visible  = !this.visible;
  }

  handleClose() {
    this.visible  = false;
  }

  setSelected () {
    const select = this.select.options.find((option) => {
      return option.value === this.value
    })
    if (!select) {
      this.selectedLabel = ''
      this.select.value = ''
      return
    }
    if (this.selectedLabel !== select.label) this.selectedLabel = select.label
    if (this.select.value !== select.value ) {
      this.select.value = select.value
    }
  }
 
  handleOptionClick (option, byClick) {
    if (this.select.value !== option.value && byClick) {
      this.visible = false;
      this.$emit('change', option.value);
    }
    this.select.value = option.value;
    this.selectedLabel = option.label
    this.$emit('input', option.value);
  }

  beforeDestroy() {
    if (this.$el && this.handleResize) removeResizeListener(this.$el, this.handleResize);
  }
}

</script>

<style scoped lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .kselect {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 28px;
    line-height: 28px;
    background: #051643;
    box-sizing: border-box;
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
    .kselect-content {
      display: flex;
      align-items:center;
      padding-left: 12px;
      margin-top: -1px;
      cursor: pointer;

      .kselect-left {
        flex: 1;
        position: relative;
        .kselect-text {
          font-size: 12px;
          input {
            width: 100%;
            height: 26px;
            color: #ffffff;
            padding: 0;
            margin: 0;
            outline: none;
            background: none;
            border: none;
            cursor: pointer;
            &::placeholder {
              color: #ffffff;
              opacity: 0.3;
            }
          }
        }
      }
      .kselect-right {
        width: 20px;
        .kselect-arrow {
          font-size: 14px;
          font-weight: bold;
          background: linear-gradient(to bottom, #167EFB, #22F1FE);
          -webkit-background-clip: text;
          color: transparent;
        }
      }
    }
  }
</style>