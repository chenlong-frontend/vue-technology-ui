<template>
   <div v-show="visible" class="kview-dialog-move-container">
        <div class="kview-dialog-move" :style="styles" ref="dialog" :class="dialogSizeClass">
          <transition name="kview-width-fade-slow">
            <div v-show="visible || !animation"  style="overflow: hidden;position:relative;">
              <div :style="{width: aWidth + 'px', height: this.height + 'px', overflow: 'hidden', position: 'relative'}">
                <div @mousedown="onMousedown" class="kview-dialog-move__top" :style="{cursor: movable?'move':'auto'}" :class="[dialogSizeClass, dialogTopTypeClass]"></div>
                <div class="kview-dialog-move__middle" :class="dialogSizeClass"></div>
                <div class="kview-dialog-move__bottom" :class="dialogSizeClass"></div>
                <div class="kview-dialog-move__close" v-if="closeBtn">
                  <span @click="handleClose" class="kview-dialog-move__icon iconfont kview-icon-baseline-close-px"></span>
                </div>
                <div class="kview-dialog-move__content" :style="{top: movable?'30px':'0'}">
                  <slot></slot>
                </div>
              </div>
            </div>
          </transition>
        </div>
   </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'
import Popup from 'kview-t-ui/src/utils/popup/index'

enum Size {
  small = 'small',
  middle = 'middle',
  large = 'large'
}

enum TopType {
  plain = 'plain',
  default = 'default'
}

@Component
export default class KDialogMove extends Popup {
  name = 'KDialogMove'

  @Prop({default: true}) movable: boolean
  @Prop({default: true}) closeBtn: boolean
  @Prop({default: 'auto'}) height: number
  @Prop() appendToDom?: HTMLElement
  @Prop({default: () => {}}) dialogStyle:any
  @Prop({default: false}) destroyOnClose: boolean
  @Prop() left: number
  @Prop() top: number
  @Prop({default: 'middle'}) size: Size  
  @Prop({default: 'default'}) topType: string
  @Prop({default: false}) animation: boolean
  
  contentAnimation = false
  closed = false
  key = 0
  startX:number
  startY:number
  leftMove:number = 0
  topMove:number = 0
  moved = false

  @Watch('visible')
  getVisible(val) {
    this.watchVisible(val)
    if (val) {
      this.$nextTick(() => {
        this.contentAnimation = true
      })
      
      this.closed = false;
      this.$el.addEventListener('scroll', this.updatePopper);
      this.$nextTick(() => {
        const dialogEl = this.$refs.dialog as HTMLElement;
        if (dialogEl) dialogEl.scrollTop = 0
      });
      if (this.appendToDom) {
        this.appendToDom.appendChild(this.$el);
      }
    } else {
      this.$el.removeEventListener('scroll', this.updatePopper);
      if (!this.closed) this.$emit('close');
      this.contentAnimation = false
      if (this.destroyOnClose) {
        this.$nextTick(() => {
          this.key++;
        });
      }
    }
  }

  get dialogSizeClass () {
    if (this.size === Size.large) return 'is-large'
    if (this.size === Size.small) return 'is-small'
    return 'is-middle'
  }

  get aWidth () {
    if (this.size === Size.large) return 576
    if (this.size === Size.small) return 113
    return 395
  }

  get dialogTopTypeClass () {
    if (this.topType === TopType.plain) return 'is-plain'
  }

  get styles () {
    const style = {
      ...this.dialogStyle,
      left: typeof this.left === 'string' ? this.left : this.left + 'px',
      top: typeof this.top === 'string' ? this.top : this.top + 'px',
      height: this.height + 'px'
    }

   if (!this.moved) {
      return style
    }
    return {
      ...style,
      left: this.leftMove + 'px',
      top: this.topMove + 'px',
    }
  }

  mounted () {
    if (this.visible) {
      this.rendered = true;
      this.open();
      if (this.appendToDom) {
        this.appendToDom.appendChild(this.$el);
      }
    }
  }

  handleClose() {
    this.$emit('close');
    this.closed = true;
  }

  onMousedown (e) {
    if (!this.movable) return
    const kdialog = this.$refs.dialog as HTMLElement
    const {offsetLeft, offsetTop} = kdialog
    this.moved = true
    window.addEventListener('mousemove', this.onMousemove, false);
    window.addEventListener('mouseup', this.onMouseup, false);
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.leftMove = offsetLeft
    this.topMove = offsetTop
  }

  onMousemove (e) {
    const moveX = e.clientX - this.startX;
    const moveY = e.clientY - this.startY;
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.leftMove += moveX
    this.topMove += moveY
  }

  onMouseup () {
    window.removeEventListener('mousemove', this.onMousemove);
    window.removeEventListener('mouseup', this.onMouseup);
  }


  updatePopper() {
    this.broadcast('SelectDropdown', 'updatePopper');
  }
}

</script>