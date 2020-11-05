## 消息提示

常用于主动操作后的反馈提示。
### 基础用法

从顶部出现，3 秒后自动消失。

:::demo 

```html
<template>
  <k-button @click="open">消息提示</k-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$message('这是一条消息提示');
      }
    }
  }
</script>
```
:::

### 不同状态

用来显示「成功、警告、错误」类的操作反馈。

:::demo 当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置`type`字段可以定义不同的状态，默认为`success`。此时正文内容以`message`的值传入。同时，我们也为 Message 的各种 type 注册了方法
```html
<template>
  <k-button @click="open2">成功</k-button>
  <k-button @click="open3">警告</k-button>
  <k-button @click="open4">错误</k-button>
</template>

<script>
  export default {
    methods: {
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message({
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      }
    }
  }
</script>
```
:::

### 全局方法

kview 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 `Message`。

### 单独引用

单独引入 `Message`：

```javascript
import { Message } from 'kview-t-ui';
```

此时调用方法为 `Message(options)`。我们也为每个 type 定义了各自的方法，如 `Message.success(options)`。并且可以调用 `Message.closeAll()` 手动关闭所有实例。

### Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| message | 消息文字 | string | — | — |
| type | 主题 | string | success/warning/error | success |
| onClose | 关闭时的回调函数, 参数为被关闭的 message 实例 | function | — | — |
| offset | Message 距离窗口顶部的偏移量 | number | — | 20 |
| appendDom | 插入dom位置，默认body | HTMLElement | — | document.body |

### 方法
调用 `Message` 或 `this.$message` 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 `close` 方法。
| 方法名 | 说明 |
| ---- | ---- |
| close | 关闭当前的 Message |
