<template>
  <ul class="ktextlist">
    <li v-for="(item, index) in data" :style="itemStyles" :key="index" @click="onClick(item)">
      <slot name="left" v-bind:item="item"></slot>
      <span class="item-text">{{item[field]}}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'

@Component
export default class Ktextlist extends Vue {
  @Prop({default: () => []}) data: any[]
  @Prop({default: 'text'}) field: string
  @Prop({default: 36}) lineHeight: number
  
  get itemStyles () {
    return {
      lineHeight: this.lineHeight + 'px',
      height: this.lineHeight + 'px'
    }
  }

  onClick(item) {
    this.$emit('click', item)
  }
}

</script>

<style scoped lang="scss">
  .ktextlist{
    li {
      font-size: 12px;
      color: #ffffff;
      background: linear-gradient(to left,transparent 50%,rgba(34,241,254, 0.1) 25%, rgba(22,126,251, 0.3));
      transition: background-position .25s ease-in;
      background-position: 100% 100%;
      background-size: 200% 100%;
      height: 36px;
      line-height: 36px;
      padding: 0 10px;
      &:hover {
        background-position: 0% 100%;
        cursor: pointer;
      }
      .item-text {
        vertical-align: 1px;
      }
    }
  } 
</style>