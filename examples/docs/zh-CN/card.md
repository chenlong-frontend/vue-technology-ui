## 卡片

### 卡片-小

:::demo
```html
<k-row :gutter="4">
  <k-col :span="6">
    <k-card-item width="100px" :itemSelected="true" height="100px" bottomGap="15px">
      标题
    </k-card-item>
  </k-col>
    <k-col :span="6">
    <k-card-item width="100px" :itemSelected="true" height="100px" bottomGap="15px">
      标题
    </k-card-item>
  </k-col>
    <k-col :span="6">
    <k-card-item width="100px" :itemSelected="true" height="100px" bottomGap="15px">
      标题
    </k-card-item>
  </k-col>
    <k-col :span="6">
    <k-card-item width="100px" :itemSelected="true" height="100px" bottomGap="15px">
      标题
    </k-card-item>
  </k-col>
  <k-col :span="6">
    <k-card-item width="100px" height="100px" bottomGap="15px">
      标题
    </k-card-item>
  </k-col>
  <k-col :span="6">
    <k-card-item width="100px" height="100px" bottomGap="15px">
      标题
    </k-card-item>
  </k-col>
    <k-col :span="6">
    <k-card-item width="100px" height="100px" bottomGap="15px">
      标题
    </k-card-item>
  </k-col>
  <k-col :span="6">
    <k-card-item width="100px" height="100px" bottomGap="15px">
      标题
    </k-card-item>
  </k-col>
</k-row>
```
:::

### 卡片-大

:::demo
```html
<k-card-image title="标题" corner="1">
  <k-button-icon :styles="{marginTop: '4px'}" type="warn" slot="tool"></k-button-icon>
</k-card-image>
```
:::

### 卡片-阴影

:::demo
```html
<k-card-shadow>
  <div>
    内容
  </div>
</k-card-shadow>
```
:::

### card-item Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | 宽 | string | - | '0px' |
| height | 高 | string | — | '0px' |
| itemSelected | 选中样式 | boolean | — | fasle |
| bottomGap | 底部间距 | string | — | '0px' |
| img | 内容区填充图片地址 | string | — | - |
| selectedImg | 选中后填充图片地址 | string | — | - |

### card-item Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click | 点击触发 | event |

### card-image Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| corner | 左上角内容 | string | — | — |
| title | 标题 | string | — | — |
| img | 内容区图片地址 | string | — | — |

### card-image Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click | 点击触发 | event |

### card-image slot

| 名称      | 说明    |
|---------- |-------- |
| tool | 底部右侧工具栏插槽 |

### card-shadow Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | 宽 | string | — | — |
| height | 高 | string | — | — |
