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