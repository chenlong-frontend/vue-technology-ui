<template>
<div class="klist-container">
  <div class="klist ksign-scroll">
    <ul class="klist-ul" :class="ulClass">
      <li v-for="(item, index) in data" :key="index" class="klist-item" @click="onItemClick(item, index)">
        <img class="klist-arrow klist-arrow-left-top" :src="greenArrowImg" alt="arrow" />
        <img class="klist-arrow klist-arrow-right-top" :src="greenArrowImg" alt="arrow" />
        <img class="klist-arrow klist-arrow-left-bottom" :src="greenArrowImg" alt="arrow" />
        <img class="klist-arrow klist-arrow-right-bottom" :src="greenArrowImg" alt="arrow" />
        <div class="klist-item-img" v-append-dom="item.img"></div>
      </li>
    </ul>
  </div>
</div>

</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'
const greenArrowImg = require('@/assets/svg/triangle-arrow-small-blue.svg')

enum Types {
  block = 'block',
  inline = 'inline'
}

@Component({
  directives: {
    appendDom: function (el, binding, vnode) {
      el.innerHTML = '';
      binding.value && (el.innerHTML= binding.value);
    }
  }
})
export default class Klist extends Vue {
  @Prop({default: Types.block}) type: Types
  @Prop({default: []}) data: any[]
  greenArrowImg = greenArrowImg
  get ulClass () {
    return this.type === Types.block ? "klist-ul klist-layout-block" : "klist-ul klist-layout-inline"
  }
  onItemClick (item, index) {
    this.$emit('itemClick', {item, index});
  }
}
</script>

<style scoped lang="scss">
.klist-container {
  height: 100%;
  padding-bottom: 3px;
  box-sizing: border-box;
    .klist {
    height: 100%;
    background-color: #051643;
    border: 1px solid transparent;
	  border-image: linear-gradient(to bottom, rgba($color: #22F1FE, $alpha: 0.3), rgba($color: #167EFB, $alpha: 0.3)) 1;
    overflow: auto;
    .klist-ul {
      color: #ffffff;
      .klist-item {
        position: relative;
        border-bottom: 1px dashed rgba($color: #22F1FE, $alpha: 0.3);
        cursor: pointer;
        .klist-arrow {
          position: absolute;
          display: none;
          width: 6px;
          height: auto;
        }
        .klist-arrow-left-top {
          left: 3px;
          top: 3px;
        }
        .klist-arrow-right-top {
          right: 3px;
          top: 3px;
          transform:rotateY(180deg);
        }
        .klist-arrow-left-bottom {
          left: 3px;
          bottom: 3px;
          transform:rotateX(180deg);
        }
        .klist-arrow-right-bottom {
          right: 3px;
          bottom: 3px;
          transform:rotate(180deg);
        }
        .klist-item-img {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          padding: 15px;
          box-sizing: border-box;
          opacity: 0.7;
        }
        &:hover {
          box-shadow: inset 0 0 33px 0 rgba($color: #2BAAB6, $alpha: 0.39);
          .klist-arrow {
            display: block;
          }
          .klist-item-img {
            opacity: 1;
          }
        }
      }
    }
    .klist-layout-block {
      .klist-item {
        height: 66px;
      }
    }
    .klist-layout-inline {
      .klist-item {
        float: left;
        width: 50%;
        height: 122px;
        box-sizing: border-box;
        &:nth-child(odd) {
          border-right: 1px dashed rgba($color: #22F1FE, $alpha: 0.3);
        }
      }
    }
  }
}

</style>