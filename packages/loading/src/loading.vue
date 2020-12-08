<template>
  <transition name="kview-loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="kview-loading-mask"
      :style="{ backgroundColor: background || '' }"
      :class="[customClass, { 'is-fullscreen': fullscreen }]">
      <div class="kview-loading-spinner">
        <svg v-if="!spinner" class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none"/>
        </svg>
        <i v-else :class="spinner"></i>
        <p v-if="text" class="kview-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'

@Component
export default class Loading extends Vue {
  text = null
  spinner = null
  background = null
  fullscreen = true
  visible = false

  handleAfterLeave () {
    this.$emit('after-leave');
  }
  setText(text) {
    this.text = text;
  }
}
</script>