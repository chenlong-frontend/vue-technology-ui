## 搜索框

使用搜索框时需引入输入框

### 基础使用

:::demo
```html
<k-search v-model="value" placeholder="请输入搜索条件" :clearable="true"></k-search>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
</script>
```
:::

### Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| placeholder | 输入框占位文本 | string | — | — |
| value/v-model | 绑定值 | string / number | — | — |
| right | 是否显示右侧内容 | boolean | — | true |
| clearable | 是否显示清除按钮 | boolean | — | false |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| search | 点击搜索时触发 | — |
| clear | 点击清除按钮触发 | — |
| input | 在 Input 值改变时触发 | (value: string | number) |