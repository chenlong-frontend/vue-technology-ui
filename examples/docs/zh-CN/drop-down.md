 ## DropDown 下拉控件

 下拉控件的基础封装


### 基础用法

:::demo
```html
 <k-drop-down>
    <div style="width: 168px;height:28px;">
      <k-cell-hexagon :svgHeight="28" sideWidth="35px">
        <span style="line-height: 28px;margin-left: 10px;">请选择</span>
      </k-cell-hexagon>
    </div>

    <div slot="content" style="width: 168px;height:148px;">
      <k-cell-hexagon :svgWidth="168" :svgHeight="148" :hoverActive="false">
        
      </k-cell-hexagon>
    </div>
  </k-drop-down>
```
:::

### Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  disabled        |  是否禁用下拉行为  | Boolen            | - | false  |

### slot

默认插槽为触发元素

| 名称      | 说明    |
|---------- |-------- |
| content | 下拉内容插槽 |