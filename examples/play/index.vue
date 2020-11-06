<template>
  <div style="margin: 20px;">
<k-button-larger @click="dialogVisible = true">点击打开 dialog</k-button-larger>

<k-dialog title="提示" 
  :appendToDom="appendToDom" :visible="dialogVisible" :animation="true" wdith="740px" height="160px"
  @confirm="handleClose" @cancel="handleClose" @close="handleClose"
>
    <k-select v-model="value" placeholder="请选择">
    <k-option :value="1" label="选项一"></k-option>
    <k-option :value="2" label="选项二"></k-option>
  </k-select>
</k-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        appendToDom: document.body,
        value: 1
      };
    },
    methods: {
      handleClose() {
        this.dialogVisible = false
      }
    }
  };
</script>
