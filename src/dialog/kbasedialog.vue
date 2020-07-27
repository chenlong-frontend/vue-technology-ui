<template>
 <transition name="fade-in-left">
  <div  v-show="visible"  class="dialog_mask" :style="{left:posX+'px',top:posY+'px',width:width+'px',height:height+'px'}">
  <div  class="dialog-container" >
  <div class="dialog">
      <!--四边图片-->
       <img class="lefttopimg" :style="{top:'-3px',left:'-3px'}" :src="cornerimg"/>
       <img class="righttopimg" :style="{top:'-3px',left:width-14+'px',transform:'rotateY(180deg)'}" :src="cornerimg"/>
       <img class="leftbottomimg" :style="{top:height-14+'px',left:'-3px',transform:'rotateX(180deg)'}" :src="cornerimg"/>
       <img class="rightbottomimg" :style="{top:height-14+'px',left:width-14+'px',transform:'rotateZ(180deg)'}" :src="cornerimg"/>
     
      <div class="dialog_content">
          <slot></slot>
      </div>
  </div>
  </div>
  </div>
 </transition>
</template>

<script lang="ts">
  import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'

  @Component
	export default class Dialog extends Vue{
        //assets
        cornerimg:any=require('@/assets/svg/cornerbig.svg')
        @Prop({default: 0})
        posX: number

        @Prop({default: 0})
        posY: number

       
        @Prop({default: 180})
        width: number

        @Prop({default: 200})
        height: number

        @Prop({default: false})
        visible: boolean
        
	}
</script>

<style scoped lang="scss">
  @import '../styles/animate.scss';
  .dialog_mask{
    background-color: rgba(3,19,62,.6);
    padding:5px;
    position: absolute;
    border: 1px solid rgba(72,178,193,.4);
    z-index:1000;
   }
  .dialog-container{
    background-color: rgba(3,19,62,.5);
    height:100%;
    border: 1px solid #1463B1;
    box-shadow: inset 0 0 14px 0 rgba(86,198,216,0.48);
   
    .dialog{
      position:relative;
      height: 100%;
      .closebtn{
        color: #43A3EB;
        position:absolute;
        right:25px;
        top:15px;
        font-size:12px;
      }
      .dialog_content {
        height: 100%;
        overflow: hidden;
      }
      .leftimg,.rightimg,.topimg,.bottomimg,.lefttopimg,.righttopimg,.leftbottomimg,.rightbottomimg{
         position:absolute;
      }
    }
    
  }
</style>