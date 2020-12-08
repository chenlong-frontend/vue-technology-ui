<template>
  <div  style="margin: 20px;">
    <div
    style="width: 400px;height: 200px"
     v-loading="loading"
     kview-loading-text="数据加载中"
     kview-loading-spinner="kview-icon-loading"
    ></div>
  </div>
</template>

<script>
  export default {
    data() {
   return {
        value: '',
        loading:true
      }
    },
    mounted() {
      // setTimeout(() => {
      //   this.loading = false
      // }, 2000)
    },
    methods: {

    }
  };
</script>
