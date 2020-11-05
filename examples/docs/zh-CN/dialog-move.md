## 可拖动对话框

此对话框的主要特征是可以拖动，由于样式实现原因，此对话框不可设置宽度，不过会内置三种大小可供选择

拖动顶部可进行移动

### 小对话框

:::demo
```html
<k-button-larger @click="dialogVisible = true">点击打开 dialog</k-button-larger>
<k-dialog-move :appendToDom="appendToDom" :visible="dialogVisible" :movable="false" left="50%" top="50%"
:size="size" :height="160" :animation="true" @close="handleClose">
  <span></span>
</k-dialog-move>

<script>
  export default {
    data() {
      return {
        size: "small",
        dialogVisible: false,
        appendToDom: document.body
      };
    },
    methods: {
      handleClose() {
        this.dialogVisible = false
      }
    }
  };
</script>
```
:::

### 中对话框

:::demo
```html
<k-button-larger @click="dialogVisible = true">点击打开 dialog</k-button-larger>
<k-dialog-move :appendToDom="appendToDom" :visible="dialogVisible" left="40%" top="40%"
:size="size" :height="260" @close="handleClose">
  <span></span>
</k-dialog-move>

<script>
  export default {
    data() {
      return {
        size: "middle",
        dialogVisible: false,
        appendToDom: document.body
      };
    },
    methods: {
      handleClose() {
        this.dialogVisible = false
      }
    }
  };
</script>
```
:::

### 大对话框

:::demo
```html
<k-button-larger @click="dialogVisible = true">点击打开 dialog</k-button-larger>
<k-dialog-move :appendToDom="appendToDom" :visible="dialogVisible" left="30%" top="30%"
:size="size" :height="360" @close="handleClose">
  <span></span>
</k-dialog-move>

<script>
  export default {
    data() {
      return {
        size: "large",
        dialogVisible: false,
        appendToDom: document.body
      };
    },
    methods: {
      handleClose() {
        this.dialogVisible = false
      }
    }
  };
</script>
```
:::

### dialog-move Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| closeBtn | 关闭按钮显示隐藏 | boolean | — | true |
| movable | 移动开启关闭 | boolean | — | true |
| height | 高度 | string | — | auto |
| appendToDom | 插入容器 | HTMLElement | — | — |
| destroyOnClose | 关闭时销毁 | boolean | — | false |
| left | 左偏移 | string | — | — |
| top | 右偏移 | string | — | — |
| size | 尺寸 | string | small/middle/large | middle |
| topType | 顶部可移动部分是否隐藏(关闭移动时使用) | default/plain | — | default, 不隐藏 |
| animation | 是否启用显示动画 | boolean | — | false |
