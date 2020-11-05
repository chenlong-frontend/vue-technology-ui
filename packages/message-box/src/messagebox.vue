<template>
  <transition name="kview-msgbox-fade">
    <div v-show="visible" role="dialog" class="kview-messagebox">
      <div class="kview-messagebox__container">
        <span @click="handleAction('close')" class="kview-messagebox__closeicon iconfont kview-icon-baseline-close-px"></span>
        <div class="kview-messagebox__title">
          <span class="kview-messagebox__warnicon iconfont kview-icon-warn"></span>
          <span class="kview-messagebox__titletext">{{title}}</span>
        </div>
        <div>
          <p class="kview-messagebox__contenttext">{{message}}</p>
        </div>
          <div class="kview-messagebox__footer">
            <div class="kview-messagebox__footerbtns">
              <k-button type="warn" :styles="{marginRight: '18px'}" @click="handleAction('cancel')">取消</k-button>
              <k-button ref="confirm" @click="handleAction('confirm')">确认</k-button>
            </div>
          </div>
        </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'
import Popup from 'kview-ui/src/utils/popup'
import Dialog from 'kview-ui/src/utils/aria-dialog'

let messageBox;
@Component
export default class Messagebox extends Popup {
  uid = 1
  $type
  focusAfterClosed:any = null
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
            confirm.$el.focus();
          });
        }
        this.focusAfterClosed = document.activeElement;
        messageBox = new Dialog(this.$el, this.focusAfterClosed, this.getFirstFocus());
      }
  }

  getFirstFocus() {
    const btn = this.$el;
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