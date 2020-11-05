## 按钮

### button 主按钮

:::demo
```html
<k-button>默认按钮</k-button>
<k-button type="warn">警告按钮</k-button>
```
:::

### button-mini 小按钮

:::demo
```html
<k-button-mini>默认按钮</k-button-mini>
<k-button-mini type="warn">警告按钮</k-button-mini>
```
:::

### button-larger 大按钮

此按钮为背景使用的是svg，宽度会默认占满容器，容器宽度变化，按钮宽度也会跟随变化

:::demo
```html
<k-button-larger>默认按钮</k-button-larger>
```
:::

### button-icon 小图标按钮

一般配合图标使用

:::demo
```html
<k-button-icon>默</k-button-icon>
<k-button-icon type="warn">警告</k-button-icon>
<k-button-icon type="translucent">透</k-button-icon>
```
:::

### button-icon-middle 中图标按钮

一般配合图标使用

:::demo
```html
<k-button-icon-middle>默认</k-button-icon-middle>
<k-button-icon-middle active="warn">激活</k-button-icon-middle>
```
:::

### ripple 波纹按钮

一般跟随鼠标

:::demo
```html
<k-ripple :animation="true"></k-ripple>
```
:::

### button Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 按钮类型 | string | default/warn | default |

### button Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click | 点击触发 | event |

### button-mini Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 按钮类型 | string | default/warn | default |

### button-mini Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click | 点击触发 | event |


### button-larger Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click | 点击触发 | event |

### button-icon Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 按钮类型 | string | default/warn/translucent | default |

### button-icon Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click | 点击触发 | event |

### button-icon-middle Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| active | 是否激活 | boolean | false/true | false |

### button-icon-middle Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click | 点击触发 | event |

### ripple Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| animation | 是否启用动画 | boolean | — | false |

### ripple Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click | 点击触发 | event |