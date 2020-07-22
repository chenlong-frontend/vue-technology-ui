<template>
  <div class="kfrom-item">
    <div class="kfrom-item-title">
      <div class="kfrom-item-label">
        <span>{{label}}</span>
      </div>
      <div v-show="false" class="kfrom-item-tip">
        <span class="kform-item-error font_family icon-icon-error"></span>
        <span>请输入高度</span>
      </div>
    </div>
    <div class="kfrom-item-component">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'

@Component
export default class KFormItem extends Vue {
  @Prop({default: ''}) label: string
}
</script>

<style scoped lang="scss">
  .kfrom-item {
    position: relative;
    width: 100%;
    height: 100%;
    .kfrom-item-title {
      display: flex;
      font-size: 12px;
      padding: 6px 0;
      .kfrom-item-label {
        flex: 1 auto;
        span {
          color: #ffffff;
          opacity: 0.85;
        }
      }
      .kfrom-item-tip {
        color: #BF222A;
        span {
          transform: scale(0.8);
        }
        .kform-item-error {
          font-size: 8px;
        }
      }
    }
  }
</style>