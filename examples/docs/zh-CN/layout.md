## Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

### 基础布局

使用单一分栏创建基础的栅格布局。

:::demo 通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。
```html
<k-row>
  <k-col :span="24"><div class="grid-content bg-purple-dark"></div></k-col>
</k-row>
<k-row>
  <k-col :span="12"><div class="grid-content bg-purple"></div></k-col>
  <k-col :span="12"><div class="grid-content bg-purple-light"></div></k-col>
</k-row>
<k-row>
  <k-col :span="8"><div class="grid-content bg-purple"></div></k-col>
  <k-col :span="8"><div class="grid-content bg-purple-light"></div></k-col>
  <k-col :span="8"><div class="grid-content bg-purple"></div></k-col>
</k-row>
<k-row>
  <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
  <k-col :span="6"><div class="grid-content bg-purple-light"></div></k-col>
  <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
  <k-col :span="6"><div class="grid-content bg-purple-light"></div></k-col>
</k-row>
<k-row>
  <k-col :span="4"><div class="grid-content bg-purple"></div></k-col>
  <k-col :span="4"><div class="grid-content bg-purple-light"></div></k-col>
  <k-col :span="4"><div class="grid-content bg-purple"></div></k-col>
  <k-col :span="4"><div class="grid-content bg-purple-light"></div></k-col>
  <k-col :span="4"><div class="grid-content bg-purple"></div></k-col>
  <k-col :span="4"><div class="grid-content bg-purple-light"></div></k-col>
</k-row>

<style>
  .kview-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .kview-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```
:::

### 分栏间隔

分栏之间存在间隔。

:::demo Row 组件 提供 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 0。
```html
<k-row :gutter="20">
  <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
  <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
  <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
  <k-col :span="6"><div class="grid-content bg-purple"></div></k-col>
</k-row>

<style>
  .kview-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .kview-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```
:::

### Row Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| gutter | 栅格间隔 | number | — | 0 |
| type | 布局模式，可选 flex，现代浏览器下有效 | string | — | — |
| justify | flex 布局下的水平排列方式 | string | start/end/center/space-around/space-between | start |
| align | flex 布局下的垂直排列方式 | string | top/middle/bottom | top |
| tag | 自定义元素标签 | string | * | div |

### Col Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| span | 栅格占据的列数 | number | — | 24 |
| offset | 栅格左侧的间隔格数 | number | — | 0 |
| push |  栅格向右移动格数 | number | — | 0 |
| pull |  栅格向左移动格数 | number | — | 0 |
| xs | `<768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| sm | `≥768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| md | `≥992px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| lg | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| xl | `≥1920px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| tag | 自定义元素标签 | string | * | div |
