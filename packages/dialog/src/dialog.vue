<template>
   <div v-show="visible" class="kview-dialog-container" :class="[center ? 'kview-dialog-container--center': '']">
      <div class="kview-dialog" :style="styles" :class="[center ? 'kview-dialog--center': '', typeClass]">
        <transition :name="animationClass">
          <div v-show="contentAnimation || !animation" :style="{width: '100%', height}" >
            <div class="kview-dialog__close" v-if="closeBtn">
              <div class="kview-dialog__closeimg"></div>
              <span @click="handleClose" class="kview-dialog__icon iconfont kview-icon-baseline-close-px"></span>
            </div>
            <div class="kview-dialog__title">
              <div class="kview-dialog__leftimg"></div>
              <div  class="kview-dialog__txt">
                <span>{{title}}</span>
              </div>
              <div class="kview-dialog__rightimg"></div>
            </div>
            <div class="kview-dialog__outer">
              <div class="kview-dialog__outerwarn" :style="outerStyle">
                <div class="kview-dialog__content" :style="{bottom: footer?'47px': '0'}">
                  <slot></slot>
                </div>
                <div v-if="footer" class="kview-dialog__footer">
                  <k-divider></k-divider>
                  <div class="kview-dialog__footer-btns">
                    <k-button v-if="cancel" type="warn" :styles="{marginRight: '18px'}" @click="onCancel">取消</k-button>
                    <k-button v-if="confirm" @click="onConfirm">确认</k-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="kview-dialog__bottom"></div>
          </div>
        </transition>
      </div>
   </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'
import Popup from 'kview-c-ui/src/utils/popup/index'
import repeatImg from 'kview-c-ui/src/utils/repeatImg'
import { triggerAsyncId } from 'async_hooks'

const gridWarnImg = require('./assets/grid-warn.png')

enum Type {
  DEFAULT = 'default',
  WARN = 'warn'
}

@Component
export default class KDialog extends Popup {
  name = 'KDialog'

  @Prop({default: true}) closeBtn: boolean
  @Prop({default: false}) destroyOnClose: boolean
  @Prop() appendToDom?: HTMLElement
  @Prop({default: ''}) title: string
  @Prop({default: true}) center: boolean
  @Prop({default: '50%'}) width: string
  @Prop({default: 'auto'}) height: string
  @Prop({default: true}) cancel: boolean
  @Prop({default: true}) confirm: boolean
  @Prop({default: true}) footer: boolean
  @Prop({default: false}) animation: boolean
  @Prop({default: 'default'}) type: Type
  @Prop() left: string
  @Prop() top: string
  contentAnimation = false
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
      this.updatePopper()
      if (!this.closed) this.$emit('close');
      this.contentAnimation = false
      if (this.destroyOnClose) {
        this.$nextTick(() => {
          this.key++;
        });
      }
    }
  }

  closed = false
  key = 0
  gridImag = null


  mounted() {
    repeatImg(gridWarnImg, 1920, 52, 30, -2).then(data => {
      this.gridImag = data
    })
    if (this.visible) {
      this.rendered = true;
      this.open();
      if (this.appendToDom) {
        this.appendToDom.appendChild(this.$el);
      }
    }
  }

  get typeClass () {
    if (this.type === Type.WARN) return 'kview-dialog--warn'
    return ''
  }

  get animationClass () {
    return this.animation ? 'kview-scale-in-full' : ''
  }

  get styles () {
    return {
      left: this.left,
      top: this.top,
      width: this.width,
      height: this.height
    }
  }

  get outerStyle () {
    if (this.gridImag && this.type === Type.WARN) {
      return {background: 'url(' + this.gridImag + ') bottom no-repeat'}
    }
    return {}
  }

  onCancel () {
    this.$emit('cancel')
  }

  onConfirm () {
    this.$emit('confirm')
  }

  handleClose() {
    this.$emit('close');
    this.closed = true;
  }

  updatePopper() {
    this.broadcast('SelectDropdown', 'updatePopper');
  }

  destroyed() {
    if (this.appendToDom && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
}

</script>