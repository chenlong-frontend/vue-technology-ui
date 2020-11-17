## 对话框

此对话框和传统对话框不一样的地方在于可以插入到指定dom内，主要针对非全屏业务场景。

另外对话框可以定位到插入容器的指定位置，不局限于居中布局。

使用此组件是需要引入 `Divider`和`Button`

### 基础用法

:::demo
```html
<k-button-larger @click="dialogVisible = true">点击打开 dialog</k-button-larger>

<k-dialog title="提示" 
  :appendToDom="appendToDom" :visible="dialogVisible" :animation="true" wdith="740px" height="160px"
  @confirm="handleClose" @cancel="handleClose" @close="handleClose"
>
  <span>这是一段信息</span>
</k-dialog>

<script>
  export default {
    data() {
      return {
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

### 非居中显示

:::demo
```html
<k-button-larger @click="dialogVisible = true">点击打开 dialog</k-button-larger>

<k-dialog title="提示" 
  :appendToDom="appendToDom" :visible="dialogVisible" :center="false" left="100px" top="50px" wdith="300px" height="160px"
  @confirm="handleClose" @cancel="handleClose" @close="handleClose"
>
  <span>这是一段信息</span>
</k-dialog>

<script>
  export default {
    data() {
      return {
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

### 警告样式

:::demo
```html
<k-button-larger @click="dialogVisible = true">点击打开 dialog</k-button-larger>

<k-dialog title="提示" 
  :appendToDom="appendToDom" :visible="dialogVisible" type="warn" :animation="true" wdith="740px" height="160px"
  @confirm="handleClose" @cancel="handleClose" @close="handleClose"
>
  <span>这是一段信息</span>
</k-dialog>

<script>
  export default {
    data() {
      return {
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

### dialog Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| closeBtn | 关闭按钮显示隐藏 | boolean | — | true |
| destroyOnClose | 关闭时销毁 | boolean | — | false |
| appendToDom | 插入容器 | HTMLElement | — | — |
| title | 标题 | string | — | — |
| type | 是否启用警告 | string | warn/default | — |
| center | 是否居中 | boolean | — | true |
| width | 宽度 | string | — | 50% |
| height | 高度 | string | — | auto |
| cancel | 取消按钮显示隐藏 | boolean | — | true |
| confirm | 确认按钮显示隐藏 | boolean | — | true |
| footer | 底部显示隐藏 | boolean | — | true |
| animation | 是否启用显示动画 | boolean | — | false |
| left | 左偏移(center为false时生效) | string | — | — |
| top | 右偏移(center为false时生效) | string | — | — |

### dialog Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| confirm | 点击确认触发 | - |
| cancel | 点击取消触发 | - |
| close | 点击关闭触发 | - |