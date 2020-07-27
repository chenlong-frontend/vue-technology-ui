<template>
  <transition name="message-fade" @after-leave="handleAfterLeave">
    <div v-show="visible" :class="['message', type ? `message-${ type }` : '',]" :style="positionStyle">
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="message-content">{{ message }}</p>
        <p v-else v-html="message" class="message-content"></p>
      </slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'

@Component
export default class Message extends Vue {
  dangerouslyUseHTMLString = false
  message = ''
  visible = false
  timer: any = null
  duration = 3000
  closed = false
  onClose:any = null
  verticalOffset = 20

  @Watch('closed')
  getClosed (newVal) {
    if (newVal) {
      this.visible = false;
    }
  }

  get positionStyle() {
    return {
      'top': `${ this.verticalOffset }px`
    };
  }

  handleAfterLeave() {
    this.$destroy();
    this.$el.parentNode.removeChild(this.$el);
  }

  clearTimer() {
    clearTimeout(this.timer);
  }

  close() {
    this.closed = true;
    if (typeof this.onClose === 'function') {
      this.onClose(this);
    }
  }
  
  startTimer() {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.close();
        }
      }, this.duration);
    }
  }

  mounted() {
    this.startTimer();
  }
}
</script>

<style scoped lang="scss">
  .message {
    min-width: 110px;
    box-sizing: border-box;
    border: 1px solid #1463B1;
    border-radius: 4px;
    position: fixed;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    transition: opacity 0.3s, transform .4s, top 0.4s;
    overflow: hidden;
    background:  rgba($color: #03133E, $alpha: 0.85);
    box-shadow: inset 0 0 14px 0 rgba(86,198,216,0.48);
    padding: 11px 24px;
    display: flex;
    align-items: center;
    color: #fff;
    &.message-success {
      color: #0CF1FF;
    }
    &.message-warning {
      color: #FFBA00;
    }
    &.message-error {
      color: #EB2932;
    }
    .message-content {
      margin: 0;
      padding: 0;
      font-size: 14px;
      line-height: 1;
    }
  }
  .message-fade-enter,
  .message-fade-leave-active {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
</style>