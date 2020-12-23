import { Component, Prop, Vue } from 'vue-property-decorator'
620
const cell = ({x,y}, {fill, border}, isHover) => `
<svg width="${x}px" height="${y}px" viewBox="0 0 ${x} ${y}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <polygon id="path-1" points="5.80754 0 ${x-5.80754} 0 ${x} 5.10417887 ${x} ${y-7.0183711} ${x-5.872889} ${y} 5.80754 ${y} 0 ${y-7.0183711} 0 5.08767304"></polygon>
        <filter x="-0.6%" y="-6.7%" width="101.1%" height="113.5%" filterUnits="objectBoundingBox" id="filter-2">
            <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowSpreadInner1"></feMorphology>
            <feGaussianBlur stdDeviation="2.5" in="shadowSpreadInner1" result="shadowBlurInner1"></feGaussianBlur>
            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 0.0071923497   0 0 0 0 0.157116781   0 0 0 0 0.405429121  0 0 0 1 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
    </defs>
    <g id="画板" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="矩形">
            <use fill-opacity="0.9" fill="${fill}" fill-rule="evenodd" xlink:href="#path-1"></use>
            ${isHover?'<use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>': ''}
            <use stroke="${border}" stroke-width="1" xlink:href="#path-1"></use>
        </g>
    </g>
</svg>
`

@Component
export default class KCellHexagon extends Vue {
  static componentName = "KCellHexagon"
  componentName = "KCellHexagon"
  @Prop({default: () => {}}) styles:object
  @Prop() svgWidth: number
  @Prop() svgHeight: number
  @Prop({default: '50px'}) sideWidth: string
  @Prop({default: true}) hoverActive: boolean

  size = {
    width: 0,
    height: 0
  }
  isHover = false
  normal = {fill: '#162138', border: '#354C7F'}

  hover = {fill: '#0F336E', border: '#5998FF'}

  get buttonStyle () {
    return {
      ...this.styles,
      backgroundImage: `url('data:image/svg+xml;charset=utf-8,${cell(
        {x: this.size.width, y: this.size.height},  
        this.isHover?this.hover:this.normal,
        this.isHover
      ).replace(/#/g, '%23').replace(/\n/g, '%0A')}')`
    }
  }

  mounted () {
    const {width, height} = (this.$el as HTMLElement).getBoundingClientRect()
    this.size.width = this.svgWidth || width
    this.size.height = this.svgHeight || height
  }

  onClick (e) {
    this.$emit('click', e);
  }
  onMouseenter () {
    if (!this.hoverActive) return
    this.isHover = true
  }
  onMouseleave () {
    this.isHover = false
  }

  render (h) {
    return h('div', {
      class: ['kview-cell-hexagon'],
      style: this.buttonStyle,
      on: {
        click: this.onClick,
        mouseenter: this.onMouseenter,
        mouseleave: this.onMouseleave
      },
    }, [
      h('div', {
        class: 'kview-cell-hexagon__content'
    }, this.$slots.default),
    this.$slots.icon && h('div', {
        class: 'kview-cell-hexagon__side',
        style: {width: this.sideWidth}
      }, this.$slots.icon)
    ])
  }
}