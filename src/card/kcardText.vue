<template>
  <div class="kcard-text">
    <div class="icon-corner icon-corner-top-left"></div>
    <div class="icon-corner icon-corner-top-right"></div>
    <div class="icon-corner icon-corner-bottom-left"></div>
    <div class="icon-corner icon-corner-bottom-right"></div>
    <div class="kcard-text-title">
      <span>{{title}}</span>
    </div>
    <div class="kcard-mask">
      <div class="kcard-text-container ksign-scroll">
        <div v-for="(item, index) in data" :key="index" class="kcard-text-item">
          <div class="kcard-text-left">
            <span>{{item.label}}</span>
          </div>
          <div class="kcard-text-right">
            <span>{{item.value}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'

@Component
export default class KcardText extends Vue {
  @Prop({default: ''}) title:string
  @Prop() data: any[]
}

</script>

<style lang="scss" scoped>
  .kcard-text {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100%;
    background: #243662;
    .icon-corner {
      position: absolute;
      width: 9px;
      height: 9px;
      border: 1px solid #60FDFC;
      pointer-events: none;
      z-index: 9;
    }
    .icon-corner-top-left {
      top: 0;
      left: 0;
      border-right: none;
      border-bottom: none;
    }
    .icon-corner-top-right {
      top: 0;
      right: 0;
      border-bottom: none;
      border-left: none;
    }
    .icon-corner-bottom-left {
      bottom: 0;
      left: 0;
      border-right: none;
      border-top: none;
    }
    .icon-corner-bottom-right {
      bottom: 0;
      right: 0;
      border-top: none;
      border-left: none;
    }
    .kcard-text-title {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 0 15px;
      line-height: 48px;
      height: 48px;
      color: #ffffff;
      font-size: 12px;
      font-weight: bold;
      overflow: hidden;
    }
    .kcard-mask {
      position: absolute;
      top: 48px;
      width: 100%;
      bottom: 15px;
      z-index: 8;
      overflow: hidden;
      box-sizing: border-box;
      .kcard-text-container {
        width: 100%;
        height: 100%;
        padding: 0 15px;
        box-sizing: border-box;
        overflow: auto;
        .kcard-text-item {
          display: flex;
          font-size: 12px;
          line-height: 24px;
          .kcard-text-left {
            width: 40px;
            overflow: hidden;
            color: #ffffff;
            opacity: 0.5;
          }
          .kcard-text-right {
            flex: 1;
            color: #ffffff;
            opacity: 0.8;
            span {
              word-break: break-all;
            }
          }
        }
      }
    }
  }
</style>