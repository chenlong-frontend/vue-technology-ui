<template>
  <div class="kview-divider-text">
    <div class="kview-divider-text__left">
      <div class="kview-divider-text__leftline"></div>
      <div class="kview-divider-text__leftpoint"></div>
      <div class="kview-divider-text__leftsquare"></div>
    </div>
    <div class="kview-divider-text__middle">
      <span>{{title}}</span>
    </div>
    <div class="kview-divider-text__right">
      <div class="kview-divider-text__rightline"></div>
      <div class="kview-divider-text__rightpoint"></div>
      <div class="kview-divider-text__rightsquare"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'

@Component
export default class KDividerText extends Vue {
  name = 'KDividerText'
  @Prop({default: ''}) title: string
}
</script>