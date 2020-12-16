<template>
  <k-drop-down>
    <div style="width: 168px;height:28px;">
      <k-cell-hexagon :svgHeight="28" sideWidth="35px">
        <span>请选择</span>
      </k-cell-hexagon>
    </div>

    <div slot="content" style="width: 168px;height:148px;">
      <k-cell-hexagon :svgWidth="168" :svgHeight="148" :hoverActive="false">
        
      </k-cell-hexagon>
    </div>
  </k-drop-down>
</template>

<script>
  export default {
    data() {
   return {

      }
    },
    mounted() {

    },
    methods: {

    }
  };
</script>
