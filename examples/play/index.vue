<template>
  <div style="margin: 20px;">
<k-search v-model="value" placeholder="请输入搜索条件" :clearable="true"></k-search>
  </div>
</template>

<script>
  export default {
    data() {
   return {
        value: ''
      }
    },
    methods: {

    }
  };
</script>
