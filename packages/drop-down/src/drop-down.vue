<template>
     <div ref="reference">     
       <div @click="onClick" v-clickoutside="hide">
        <slot></slot>
       </div>
       
       <transition name="kview-fade">
         <drop-down-content v-show="visible">
           <slot name="content"></slot>
         </drop-down-content>
       </transition>
     </div>
</template>

<script lang="ts">
  import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'
  import DropDownContent from './drop-down-content.vue'
  import Clickoutside from 'kview-c-ui/src/utils/clickoutside';

  @Component({
    components:{DropDownContent},
    directives: {
      Clickoutside
    }
  })
  export default class KDropDown extends Vue{
    static componentName = 'KDropDown'
    componentName = 'KDropDown'

    visible: boolean = false

    @Prop({default: false}) disabled: boolean

    onClick (e) {
      if (this.disabled) return
      this.visible = !this.visible
      this.$emit('change', this.visible)
    }

    hide () {
      this.visible = false
    }
  }
</script>