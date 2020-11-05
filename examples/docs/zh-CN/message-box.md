## 弹框
模拟系统的消息提示框而实现的一套模态对话框组件，目前只实现了警告确认框，实现模式参考了element ui，理论上element ui能够实现的，这里也都可以实现。

### 确认消息

提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。

:::demo 调用`$confirm`方法即可打开消息提示，它模拟了系统的 `confirm`。注意，第二个参数`title`必须定义为`String`类型，如果是`Object`，会被理解为`options`。在这里我们用了 Promise 来处理后续响应。

```html
<template>
  <k-button-larger @click="open">点击打开 Message Box</k-button-larger>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            message: '已取消删除'
          });          
        });
      }
    }
  }
</script>
```
:::

### 全局方法

如果你完整引入了 kview，它会为 Vue.prototype 添加如下全局方法：$confirm。因此在 Vue instance 中可以采用本页面中的方式调用 `MessageBox`。调用参数为：
- `$confirm(message, title, options)` 或 `$confirm(message, options)`

### 单独引用

如果单独引入 `MessageBox`：

```javascript
import { MessageBox } from 'kview-t-ui';
```

MessageBox.confirm，调用参数与全局方法相同。

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | MessageBox 标题 | string | — | — |
| message | MessageBox 消息正文内容 | string / VNode | — | — |
| appendDom | 插入dom位置，默认body | HTMLElement | — | document.body |


