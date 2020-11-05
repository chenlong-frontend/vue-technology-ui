## 单元格

### svg单元格

使用svg制作的单元格

:::demo
```html
<div style="height: 50px">
  <k-cell-hexagon>内容</k-cell-hexagon>
</div>
<div style="height: 50px;margin-top: 15px;">
  <k-cell-hexagon :svgWidth="168">内容</k-cell-hexagon>
</div>
```
:::

### cell-hexagon Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| svgWidth | 背景图片宽度 | number | — | — |
| svgHeight | 背景图片高度 | number | — | — |
| sideWidth | 右侧插槽宽度 | number | — | — |
| hoverActive | 是否启用hover样式 | boolean | — | — |

### cell-hexagon Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click | 点击触发 | event |

### cell-hexagon slot

| 名称      | 说明    |
|---------- |-------- |
| icon | 右侧插槽 |
