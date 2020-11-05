<template>
<div class="kview-paination">
  <button :disabled="isPrevDisabled" @click="onPreClik" type="button" class="kview-paination__button">
    <img :src="arrowLeft" alt="left" />
  </button>
  <ul class="kview-paination__list">
    <li v-for="n in pageCount" :key="n" @click="onPageChange(n)" class="kview-paination__number" :class="currentPage === n ? 'active' : ''">{{n}}</li>
  </ul>
  <button :disabled="isNextDisabled" @click="onNextClick" type="button" class="kview-paination__button">
    <img :src="arrowRight" alt="right" />
  </button>
</div>

</template>
<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'

const arrowLeft = require('./assets/pagination/arrow-left.svg');
const arrowRight = require('./assets/pagination/arrow-right.svg');

@Component
export default class KPagination extends Vue {
  name = 'KPagination'
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