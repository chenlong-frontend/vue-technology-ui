<template>
  <transition name="fade-in-down">
   <div v-show="visible" class="container" :class="classes">
    <div class="kdialog" :style="styles" :key="key" ref="dialog">
      <template v-if="!hideSide">
        <img :src="topImage" class="kdialog-border-img kdialog-corner-top" alt="top" />
        <img :src="sideImage" class="kdialog-border-img kdialog-corner-left" alt="side" />
        <img :src="sideImage" class="kdialog-border-img kdialog-corner-right" alt="side" />
      </template>
      <img :src="cornerImage" class="kdialog-border-img kdialog-corner-topleft" alt="corner" />
      <img :src="cornerImage" class="kdialog-border-img kdialog-corner-topright" alt="corner" />
      <img :src="cornerImage" class="kdialog-border-img kdialog-corner-bottomleft" alt="corner" />
      <img :src="cornerImage" class="kdialog-border-img kdialog-corner-bottomright" alt="corner" />
      <div class="kdialog-container">
        <span v-if="closeBtn" @click="handleClose" class="kdialog-close font_family icon-icon-close"></span>
        <div @mousedown="onMousedown" class="kdialog-title">
          <span>{{title}}</span>
        </div>
        <div class="kdialog-content" v-if="rendered">
          <slot></slot>
        </div>
        <div v-if="footer" class="kdialog-footer">
          <kbutton type="warn" text="取消" :styles="{marginRight: '14px'}" @click="onCancel"></kbutton>
          <kbutton text="确定" @click="onConfirm"></kbutton>
        </div>
      </div>
    </div>
   </div>
 </transition>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'
import { Kbutton } from '../../ksign-ui'
import Popup from '../utils/popup/index'
const cornerImage = require('../assets/upleft.png');
const topImage = require('../assets/middle.png');
const sideImage = require('../assets/above.png');

@Component({
  components:{Kbutton}
})
export default class Dialog extends Popup {
  startX:number
  startY:number
  key = 0
  closed = false
  cornerImage = cornerImage
  topImage = topImage
  sideImage = sideImage
  moved = false
  leftMove:number = 0
  topMove:number = 0

  @Prop() hideSide?: boolean
  @Prop({default: false}) modal:boolean
  @Prop() appendToDom?: HTMLElement
  @Prop({default: true}) showClose: boolean
  @Prop({default: true}) footer: boolean
  @Prop({default: true}) closeBtn: boolean
  @Prop({default: 'auto'}) height: string
  @Prop({default: false}) destroyOnClose: boolean
  @Prop({default: ''}) title: string
  @Prop({default: '50%'}) width: string
  @Prop({default: true}) divider: boolean
  @Prop({default: '15vh' }) top: number
  @Prop() left?: string
  @Watch('visible')
  getVisible(val) {
    this.watchVisible(val)
    if (val) {
      this.closed = false;
      this.$el.addEventListener('scroll', this.updatePopper);
      this.$nextTick(() => {
        const dialogEl = this.$refs.dialog as HTMLElement
        dialogEl.scrollTop = 0;
      });
      if (this.appendToDom) {
        this.appendToDom.appendChild(this.$el);
      }
    } else {
      this.$el.removeEventListener('scroll', this.updatePopper);
      if (!this.closed) this.$emit('close');
      if (this.destroyOnClose) {
        this.$nextTick(() => {
          this.key++;
        });
      }
    }
  }

  get classes () {
    return {
      'kdialog-absolute': this.moved || this.left,
      'kdialog-divider': this.divider,
    }
  }

  mounted() {
    if (this.visible) {
      this.rendered = true;
      this.open();
      if (this.appendToDom) {
        this.appendToDom.appendChild(this.$el);
      }
    }
  }

  get styles () {
    const size = {
        height: this.height,
        width: this.width,
        left: this.left,
        top: this.top
      }
    if (!this.moved) {
      return size
    }
    return {
      ...size,
      left: this.leftMove + 'px',
      top: this.topMove + 'px',
    }
  }

  updatePopper() {
    this.broadcast('SelectDropdown', 'updatePopper');
  }

  handleClose() {
    this.$emit('update:visible', false);
    this.$emit('close');
    this.closed = true;
  }

  onCancel () {
    this.$emit('cancel')
  }

  onConfirm () {
    this.$emit('confirm')
  }

  onMousedown (e) {
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

  destroyed() {
    if (this.appendToDom && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../styles/animate.scss';
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    pointer-events: none;
    &::after {
    content: "";
      display: inline-block;
      height: 100%;
      width: 0;
      vertical-align: middle;
    }
  }
  .kdialog {
    position: relative;
    margin: 0 auto 50px;
    padding: 3px;
    background: rgba($color: #48B2C1, $alpha: 0.43);
    border: 1px solid rgba($color: #48B2C1, $alpha: 0.43);
    box-sizing: border-box;
    pointer-events: auto;
    .kdialog-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background: rgba($color: #03133E, $alpha: 0.77);
      border: 1px solid rgba($color: #48B2C1, $alpha: 0.43);
      box-sizing: border-box;
      overflow: hidden;
      .kdialog-close {
        position: absolute;
        top: 14px;
        right: 14px;
        font-size: 12px;
        color: #43A3EB;
        opacity: 0.5;
        z-index: 9;
        transition: transform 0.75s;
        transform:scale(0.8);
        
        cursor: pointer;
        &:hover {
          transform: rotate(-180deg);
        }
      }
      .kdialog-title {
        position: relative;
        text-align: center;
        height: 34px;
        line-height: 34px;
        user-select: none;
        cursor: move;
        span {
          font-size: 14px;
          font-weight: bold;
          background: linear-gradient(to bottom, #167EFB, #22F1FE);
          -webkit-background-clip: text;
          color: transparent;
          text-shadow: 0 2px 4px rgba(10,21,104,0.34);
        }
      }
      .kdialog-content {
        position: relative;
        height: 100%;
        flex: 1 auto;
        overflow: hidden;
        text-align: left;
      }
      .kdialog-footer {
        padding: 0 20px;
        margin: 20px 0;
        text-align: right;
      }
    }

    .kdialog-border-img {
      position: absolute;
    }
    .kdialog-corner-top {
      top: 0;
      left: 50%;
      margin-left: -60px;
    }
    .kdialog-corner-left {
      top: 50%;
      left: 0;
      margin-top: -60px;
    }
    .kdialog-corner-right {
      top: 50%;
      right: 0;
      margin-top: -60px;
      transform: rotateY(180deg);
    }
    .kdialog-corner-topleft {
      top: 0;
      left: 0;
    }
    .kdialog-corner-topright {
      top: 0;
      right: 0;
      transform: rotateY(180deg);
    }
    .kdialog-corner-bottomleft {
      bottom: 0;
      left: 0;
      transform: rotateX(180deg);
    }
    .kdialog-corner-bottomright {
      bottom: 0;
      right: 0;
      transform: rotateX(180deg) rotateY(180deg);
    }
  }
  .kdialog-absolute {
    .kdialog {
      position: absolute;
    }
  }
  .kdialog-divider {
    .kdialog-title::after {
          content: ' ';
          position: absolute;
          left: 20px;
          right: 20px;
          bottom: 0;
          height: 1px;
          opacity: 0.58;
          background-image: linear-gradient(to right , transparent, #22F1FE,transparent);
        }
  }
</style>