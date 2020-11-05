## 列表

### 基础使用

:::demo 
```html
<div style="background-color: #1e2e4c;">
  <k-list :data="data" field="value" :height="32">
    <span slot="left">left</span>
  </k-list>
</div>

<script>
  export default {
    data() {
      return {
        data: [
          {value: '1'},
          {value: '2'}
        ]
      };
    }
  };
</script>
```
:::

### list Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data | 列表数据 | object[] | — | — |
| field | 对应内容字段名 | string | — | text |
| height | 列表元素高度 | number | — | 36 |

### list Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click | 点击触发 | {event, item} |

### list slot

| 名称      | 说明    |
|---------- |-------- |
| left | 左部插槽 |