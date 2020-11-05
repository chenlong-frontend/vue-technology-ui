<template>
   <div v-show="visible" class="kview-dialog-container" :class="{'kview-dialog-container--center': center}">
      <div class="kview-dialog" :style="styles" :class="{'kview-dialog--center': center}">
        <transition :name="animationClass">
          <div v-show="contentAnimation || !animation" :style="{width: '100%', height}" >
            <div class="kview-dialog__close" v-if="closeBtn">
              <img :src="closeImg" />
              <span @click="handleClose" class="kview-dialog__icon iconfont kview-icon-baseline-close-px"></span>
            </div>
            <div class="kview-dialog__title">
              <img :src="leftImg" class="kview-dialog__leftimg"/>
              <div  class="kview-dialog__txt">
                <span>{{title}}</span>
              </div>
              <img :src="rightImg" class="kview-dialog__rightimg"/>
            </div>
            <div class="kview-dialog__outer">
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
            <img class="kview-dialog__bottom" :src="dialogBottomImg" />
          </div>
        </transition>
      </div>
   </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'
import Popup from 'kview-t-ui/src/utils/popup/index'

const closeImg = require('./assets/close.png')
const dialogBottomImg = require('./assets/dialog-bottom.png')
const leftImg = require('./assets/left.png')
const rightImg = require('./assets/right.png')

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

  closeImg = closeImg
  dialogBottomImg = dialogBottomImg
  leftImg = leftImg
  rightImg = rightImg

  closed = false
  key = 0


  mounted() {
    if (this.visible) {
      this.rendered = true;
      this.open();
      if (this.appendToDom) {
        this.appendToDom.appendChild(this.$el);
      }
    }
  }

  get animationClass () {
    return this.animation ? 'kview-scale-in-full' : ''
  }

  get classes () {
    if (this.center) return 'kview-dialog--center'
    return ''
  }

  get styles () {

    return {
      left: this.left,
      top: this.top,
      width: this.width,
      height: this.height
    }
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