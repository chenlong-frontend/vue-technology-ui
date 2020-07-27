<template>
  <transition name="msgbox-fade">
    <div class="messagebox" role="dialog" v-show="visible">
      <div class="messagebox-container">
        <img :src="cornerImage" class="messagebox-border-img messagebox-corner-topleft" alt="corner" />
        <img :src="cornerImage" class="messagebox-border-img messagebox-corner-topright" alt="corner" />
        <img :src="cornerImage" class="messagebox-border-img messagebox-corner-bottomleft" alt="corner" />
        <img :src="cornerImage" class="messagebox-border-img messagebox-corner-bottomright" alt="corner" />
        <div class="messagebox-content-container">
          <span @click="handleAction('close')" class="messagebox-close font_family icon-icon-close"></span>
          <div class="messagebox-content">
              <div class="messagebox-content-icon">

              </div>
              <div class="messagebox-content-text">
                <p class="messagebox-text-main">{{title}}</p>
                <p class="messagebox-text-tip">{{message}}</p>
              </div>
          </div>
          <div class="messagebox-footer">
            <kbutton type="warn" text="取消" :styles="{marginRight: '14px'}" @click="handleAction('cancel')"></kbutton>
            <kbutton text="确定" ref="confirm" @click="handleAction('confirm')"></kbutton>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'
import {Kbutton} from '../'
import Popup from '../utils/popup'
import Dialog from '../utils/aria-dialog'
const cornerImage = require('../assets/upleft.png');
let messageBox;
@Component({
  components: {Kbutton}
})
export default class Messagebox extends Popup {
  uid = 1
  $type
  focusAfterClosed:any = null
  cornerImage = cornerImage
  callback
  action = ''
  @Prop({default: ''}) title: string
  @Prop({default: ''}) message: string
  @Watch('visible')
  getVisible (val) {
    this.watchVisible(val)
    if (val) {
      this.uid++;
      if (this.$type === 'confirm') {
          this.$nextTick(() => {
            const confirm = this.$refs.confirm as any
            confirm.$el.querySelector('.kbutton').focus();
          });
        }
        this.focusAfterClosed = document.activeElement;
        messageBox = new Dialog(this.$el, this.focusAfterClosed, this.getFirstFocus());
      }
  }
  getFirstFocus() {
    const btn = this.$el.querySelector('.kbutton');
    return btn;
  }
  doClose() {
    if (!this.visible) return;
    this.visible = false;
    this._closing = true;
    messageBox.closeDialog(); // 解绑
    if (this.lockScroll) {
      setTimeout(this.restoreBodyStyle, 200);
    }
    this.opened = false;
    this.doAfterClose();
    setTimeout(() => {
      if (this.action) this.callback(this.action, this);
    });
  }
  handleAction (action) {
    this.action = action;
    this.doClose();
  }
}
</script>

<style scoped lang="scss">
.messagebox {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    &::after {
      content: "";
      display: inline-block;
      height: 100%;
      width: 0;
      vertical-align: middle;
    }
    .messagebox-container {
      display: inline-block;
      position: relative;
      min-width: 250px;
      padding: 3px;
      background: rgba($color: #48B2C1, $alpha: 0.43);
      border: 1px solid rgba($color: #48B2C1, $alpha: 0.43);
      box-sizing: border-box;
      vertical-align: middle;
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
      .messagebox-border-img {
        position: absolute;
      }
      .messagebox-corner-topleft {
        top: 0;
        left: 0;
      }
      .messagebox-corner-topright {
        top: 0;
        right: 0;
        transform: rotateY(180deg);
      }
      .messagebox-corner-bottomleft {
        bottom: 0;
        left: 0;
        transform: rotateX(180deg);
      }
      .messagebox-corner-bottomright {
        bottom: 0;
        right: 0;
        transform: rotateX(180deg) rotateY(180deg);
      }
      .messagebox-content-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background: rgba($color: #03133E, $alpha: 0.77);
        border: 1px solid rgba($color: #48B2C1, $alpha: 0.43);
        box-sizing: border-box;
        overflow: hidden;
        .messagebox-close {
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
        .messagebox-content {
          position: relative;
          height: 100%;
          overflow: hidden;
          padding: 30px 30px 0;
          box-sizing: border-box;
          .messagebox-content-icon {
            flex: 1;
          }
          .messagebox-content-text {
            flex: 1;
            text-align: left;
            p {
              margin: 0;
              line-height: 1.8;
            }
            .messagebox-text-main {
              font-size: 14px;
              font-weight: bold;
              background: linear-gradient(to bottom, #167EFB, #22F1FE);
              -webkit-background-clip: text;
              color: transparent;
              text-shadow: 0 2px 4px rgba(10,21,104,0.34);
            }
            .messagebox-text-tip {
              font-size: 12px;
              color: rgba($color: #ffffff, $alpha: 0.5);
            }
          }
        }
        .messagebox-footer {
          padding: 0 20px;
          margin: 20px 0;
          text-align: right;
        }
      }
  }
}

.msgbox-fade-enter-active {
  animation: msgbox-fade-in .3s;
}

.msgbox-fade-leave-active {
  animation: msgbox-fade-out .3s;
}

@keyframes msgbox-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes msgbox-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>