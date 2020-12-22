<template>
  <transition name="kview-message-fade" @after-leave="handleAfterLeave">
    <div v-show="visible" :class="['kview-message', type ? `kview-message--${ type }` : '',]" :style="positionStyle">
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="kview-message__content">{{ message }}</p>
        <p v-else v-html="message" class="kview-message__content"></p>
      </slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'

@Component
export default class KMessage extends Vue {
  name = 'KMessage'
  dangerouslyUseHTMLString = false
  message = ''
  visible = false
  timer: any = null
  duration = 3000
  closed = false
  onClose:any = null
  verticalOffset = 20
  type = 'success'

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
    this.$el.parentNode && this.$el.parentNode.removeChild(this.$el);
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