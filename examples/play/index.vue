<template>
  <div style="padding: 200px">
    <k-tooltip :append-to-body="true" :hide-after="0" effect="dark" content="Top Left 提示文字" placement="right-start">
      <div class="">上左</div>
    </k-tooltip>
  </div>
  

</template>

<script>
  export default {
    data() {
      return {
        value: 1
      }
    },
    mounted() {

    },
    methods: {

    }
  };
</script>
