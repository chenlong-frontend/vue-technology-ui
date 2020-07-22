<template>
  <div class="kcard">
    <div class="icon-corner icon-corner-top-left"></div>
    <div class="icon-corner icon-corner-top-right"></div>
    <div class="icon-corner icon-corner-bottom-left"></div>
    <div class="icon-corner icon-corner-bottom-right"></div>
    <div v-show="!open" class="kcard-title">
      <slot name="title"></slot>
    </div>
    <div class="kcard-footer" @click="onToggle" :class="open ? 'open' : ''">
      <span class="icon-expend font_family icon-icon-arrowexpend"></span>
    </div>
    <div class="kcard-content">
      <slot></slot>
    </div>
    <div class="kcard-mask" v-show="open">
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
export default class Kcard extends Vue {
  @Prop() data: any[]
  open = false
  onToggle () {
    this.open = !this.open
  }
}
</script>

<style lang="scss" scoped>
  .kcard {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100%;
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
    .kcard-title {
      position: absolute;
      top: 0;
      width: 100%;
      height: 48px;
      font-size: 12px;
      z-index: 7;
      background-image: linear-gradient(0deg, rgba(0,0,0,0.00) 0%, #051643 100%);
    }
    .kcard-content {
      width: 100%;
      height: 100%;
    }
    .kcard-footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      height: 48px;
      background-image: linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, #051643 100%);
      text-align: center;
      cursor: pointer;
      z-index: 7;
      .icon-expend {
        display: inline-block;
        vertical-align: -22px;
        background: linear-gradient(to bottom, #167EFB, #22F1FE);
        -webkit-background-clip: text;
        color: transparent;
        text-shadow: 0 2px 4px rgba(10,21,104,0.34);
      }
    }
    .open {
      background: rgba($color: #051643, $alpha: 0.5);
      background-image: none;
      .icon-expend {
        transform: rotate(180deg);
      }
    }
    .kcard-mask {
      position: absolute;
      top: 0;
      width: 100%;
      bottom: 48px;
      z-index: 8;
      background: rgba($color: #051643, $alpha: 0.5);
      overflow: hidden;
      padding-top: 20px;
      box-sizing: border-box;
      .kcard-text-container {
        width: 100%;
        height: 100%;
        padding: 0 30px;
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
          }
        }
      }
    }
  }
</style>