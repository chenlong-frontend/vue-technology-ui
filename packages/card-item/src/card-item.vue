  <template>
    <li class="kview-card-item" :style="styles" @click="onClick" @mouseenter="onMouseenter" @mouseleave="onMouseleave" :class="{'kview-card-item--selected': itemSelected}">
      <div class="kview-card-item__content">
        <div class="kview-card-item__slot" :class="{'kview-card-item__slot--selected': itemSelected}">
          <img v-if="img && selectedImg" :src="(itemSelected || isHover) ? svgStringToImg(selectedImg):svgStringToImg(img)" alt="picture" />
          <slot name="img"></slot>
        </div>
        <div class="kview-card-item__title" :class="{'kview-card-item__title--selected': itemSelected}">
          <slot></slot>
        </div>
      </div>
    </li>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch, Inject } from 'vue-property-decorator'

@Component
export default class KCardItem extends Vue {
  static componentName = 'KCardItem'
  componentName = 'KCardItem'
  @Prop({default: 0}) width: string
  @Prop({default: 0}) height: string
  @Prop({default: false}) itemSelected: boolean
  @Prop({default: '0px'}) bottomGap: string
  @Prop() img: string
  @Prop() selectedImg: string
  get styles () {
    return {
      marginBottom: this.bottomGap,
      width: this.width,
      height: this.height
    }
  }
  isHover = false
  svgStringToImg (svg) {
    if (svg.indexOf('<svg') === -1) return svg
    return `data:image/svg+xml;charset=utf-8,${svg.replace(/#/g, '%23').replace(/\n/g, '%0A')}`
  }
  onMouseenter () {
    this.isHover = true
  }
  onMouseleave () {
    this.isHover = false
  }
  onClick () {
    this.$emit('click')
  }
}
</script>