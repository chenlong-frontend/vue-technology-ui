<template>
  <div class="kruler">
    <div class="kruler-line" ref="line">
      <div class="kruler-dot">
        <span v-for="i in count" 
             :class="(i - 1) % interval === 0 ? 'kruler-dot-main' : ''" 
             :key="i" 
             :data-title="parseInt((i - 1) * (max / (count - 1))) + unit"
             :style="{left: (i -1) * (100 / (count -1)) + '%'}">
        </span>
      </div>
      <div class="kruler-range" :style="{left: startLeft + 'px', right: endRight + 'px'}"></div>
      <div class="kruler-start" :style="{left: startLeft + 'px'}" @mousedown="onStartMousedown">
        <div class="kruler-slider">
          <span class="kruler-text">{{startText}}</span>
          <img :src="startImg" alt="start" />
        </div>
      </div>
      <div class="kruler-end" :style="{right: endRight + 'px'}" @mousedown="onEndMousedown">
        <div class="kruler-slider">
          <span class="kruler-text">{{endText}}</span>
          <img :src="endImg" alt="end" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch, Inject } from 'vue-property-decorator'

const startImg = require('../assets/ruler-start.svg')
const endImg = require('../assets/ruler-end.svg')

@Component
export default class Kruler extends Vue {
  // 显示最大数值
  @Prop({default: 12}) max:number
  // 小段间隔数
  @Prop({default: 3}) interval: number
  // 显示总点数
  @Prop({default: 13}) count: number
  // 单位
  @Prop({default: 'Km'}) unit: string
  @Watch('max')
  getMax (v) {
    this.endText = v
    this.$emit('change', {start: this.startText, end: this.endText})
  }
  startImg = startImg
  endImg = endImg
  startLeft = 0
  startText:number = 0
  startX = 0
  endRight = 0
  endText:number = 0
  endX = 0
  totalLength = 0
  lineEl = null
  lineWidth = 0
  mounted () {
    this.lineEl = this.$refs.line as HTMLElement
    this.endText = this.max
  }
  onStartMousedown (e) {
    window.addEventListener('mousemove', this.onStartMousemove, false);
    window.addEventListener('mouseup', this.onStartMouseup, false);
    this.startX = e.clientX;
    this.lineWidth = this.lineEl.offsetWidth
  }
  onStartMousemove (e) {
    let startLeft = e.clientX - this.startX + this.startLeft;
    if (startLeft < 0) startLeft = 0
    if (this.endRight + startLeft > this.lineWidth) return
    this.startLeft = startLeft;
    this.startX = e.clientX
    this.startText = this.formatNumber(this.startLeft / this.lineWidth * this.max);
  }
  onStartMouseup () {
    window.removeEventListener('mousemove', this.onStartMousemove);
    window.removeEventListener('mouseup', this.onStartMouseup);
    this.$emit('change', {start: Number(this.startText), end: Number(this.endText)})
  }
  onEndMousedown (e) {
    window.addEventListener('mousemove', this.onEndMousemove, false);
    window.addEventListener('mouseup', this.onEndMouseup, false);
    this.endX = e.clientX
    this.lineWidth = this.lineEl.offsetWidth
  }
  onEndMousemove (e) {
    let endRight = this.endRight + this.endX - e.clientX
    if (endRight < 0) endRight = 0
    if (endRight + this.startLeft >  this.lineWidth) return
    this.endRight = endRight
    this.endX = e.clientX
    this.endText = this.formatNumber((1 - this.endRight / this.lineWidth) * this.max);
  }
  onEndMouseup () {
    window.removeEventListener('mousemove', this.onEndMousemove);
    window.removeEventListener('mouseup', this.onEndMouseup);
    this.$emit('change', {start: this.startText, end: this.endText})
  }
  formatNumber (n:number) {
    return Number(n.toFixed(1))
  }
  reset () {
    this.startLeft = 0
    this.startText = 0
    this.endRight = 0
    this.endText = this.max
    this.$emit('change', {start: this.startText, end: this.endText})
  }
}
</script>

<style lang="scss" scoped>
  .kruler {
    position: relative;
    width: 100%;
    padding: 20px 15px 30px 15px;
    box-sizing: border-box;

    .kruler-line {
      position: relative;
      width: 100%;
      height: 2px;
      background: rgba($color: #ffffff, $alpha: 0.25);
      border-radius: 5px;
      .kruler-range {
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        background: #00EBF9;
        border-radius: 1px;
      }
      .kruler-dot {
        position: absolute;
        top: 0;
        width: 100%;
        span {
          position: absolute;
          display: inline-block;
          top: -3px;
          width: 2px;
          height: 3px;
          background: rgba($color: #ffffff, $alpha: 0.25);
          &:first-child {
            margin-right: 2px;
          }
          &:last-child {
            margin-left: -2px;
          }
          
        }
        .kruler-dot-main {
          top: -6px;
          height: 6px;
          &::before {
            content: attr(data-title);
            position: absolute;
            top: -18px;
            left: -13px;
            font-size: 12px;
            color: rgba($color: #ffffff, $alpha: 0.9);
            transform: scale(0.8);
          }
        }
      }
      .kruler-start, .kruler-end {
        position: absolute;
        width: 20px;
        height: 24px;
        cursor: pointer;
        .kruler-slider {
          position: relative;
          display: flex;
          width: 38px;
          height: 42px;
          align-items: center;
          justify-content: center;
          .kruler-text {
            position: absolute;
            font-size: 12px;
            color: rgba($color: #ffffff, $alpha: 0.9);
            user-select: none;
          }
          img {
            user-select: none;
          }
        }
      }
      .kruler-start {
        left: 0;
        .kruler-slider {
          margin-left: -19px;
        }
      }
      .kruler-end {
        right: 0;
      }
    }
  }
</style>