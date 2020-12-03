<template>
  <ul class="kview-list" @contextmenu="onContextmenu">
    <li class="kview-list__item" v-for="(item, index) in data" :style="itemStyles" :key="index" @click.stop="onClick($event, item)">
      <slot name="left" v-bind:item="item"></slot>
      <span class="kview-list__text">{{item[field]}}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'

// TODO hover和点击的颜色 从左到右渐变  左：#003C80   透明度100%     右：081C42 透明度10%
@Component
export default class KList extends Vue {
  name = 'KList'
  @Prop({default: () => []}) data: any[]
  @Prop({default: 'text'}) field: string
  @Prop({default: 36}) height: number
  
  get itemStyles () {
    return {
      lineHeight: this.height + 'px',
      height: this.height + 'px'
    }
  }

  onClick(event, item) {
    this.$emit('click', {event, item})
  }
  onContextmenu () {
     window.event.returnValue=false
  }
}

</script>