<template>
<div class="kpaination">
  <button :disabled="isPrevDisabled" @click="onPreClik" type="button" class="btn-prev">
    <img :src="arrowLeft" alt="left" />
  </button>
  <ul>
    <li v-for="n in pageCount" :key="n" @click="onPageChange(n)" class="number" :class="currentPage === n ? 'active' : ''">{{n}}</li>
  </ul>
  <button :disabled="isNextDisabled" @click="onNextClick" type="button" class="btn-next">
    <img :src="arrowRight" alt="right" />
  </button>
</div>

</template>
<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'

const arrowLeft = require('../assets/arrow-left.svg');
const arrowRight = require('../assets/arrow-right.svg');

@Component
export default class Kpaination extends Vue {
  @Prop({default: 0}) total:number
  @Prop({default: 10}) pageSize: number
  @Prop({default: 1}) currentPage: number
  arrowLeft = arrowLeft
  arrowRight = arrowRight
  get pageCount () {
    const count = this.total / this.pageSize
    if (count === 0) return 1
    return Math.ceil(count)
  }
  get isPrevDisabled () {
    if (this.currentPage === 1) return true
    return false
  }
  get isNextDisabled () {
    if (this.currentPage === this.pageCount) return true
    return false
  }
  onPageChange (v) {
    this.$emit('update:currentPage', v)
  }

  onPreClik () {
    if (this.isPrevDisabled) return
    this.$emit('update:currentPage', this.currentPage - 1);
  }
  onNextClick () {
    if (this.isNextDisabled) return
    this.$emit('update:currentPage', this.currentPage + 1);
  }
}
</script>

<style scoped lang="scss">
  .kpaination {
    height: 24px;
    white-space: nowrap;
    button {
      width: 26px;
      height: 24px;
      font-size: 12px;
      line-height: 24px;
      outline: none;
      box-sizing: border-box;
      color: #0CF1FF;
      vertical-align: top;
      background: rgba(0,97,158,0.3);
      box-shadow: inset 0 0 9px 0 rgba($color: #0B7DC5, $alpha: 0.8);
      border: 1px solid transparent;
      border-image: linear-gradient(45deg, rgba($color: #30ACEE, $alpha: 0.5), rgba($color: #8CFCFD, $alpha: 0.5)) 1;
      cursor: pointer;
      img {
        opacity: 0.8;
      }
      &:disabled {
        background: rgba(0,97,158,0.15);
        box-shadow: inset 0 0 9px 0 rgba($color: #0B7DC5, $alpha: 0.5);
        cursor: not-allowed;
        img {
          opacity: 0.6;
        }
      }
    }
    ul {
      margin: 0 14px;
      height: 24px;
      display: inline-block;
      white-space: nowrap;
      font-size: 0;
      .number {
        display: inline-block;
        opacity: 0.4;
        width: 20px;
        font-size: 12px;
        line-height: 24px;
        text-align: center;  
        vertical-align: top;
        color: #FFFFFF;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
          color: #00F1FF;
          opacity: 1;
        }
      }
      .number.active {
        color: #00F1FF;
        opacity: 1;
      }
    }
    &::before {
      display: table;
      content: "";
    }
    &::after {
      display: table;
      content: "";
      clear: both;
    } 
  }
</style>