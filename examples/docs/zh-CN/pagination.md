## 分页

当数据量过多时，使用分页分解数据。

### 基础用法

:::demo 设置`layout`，表示需要显示的内容，用逗号分隔，布局元素会依次显示。`prev`表示上一页，`next`为下一页，`pager`表示页码列表，`size`和特殊的布局符号`->`，`->`后的元素会靠右显示，`jumper`表示跳页元素，`total`表示总条目数，`size`用于设置每页显示的页码数量。
```html
<div style="background-color:rgba(0,0,0,0.5);padding: 20px;">
<k-pagination
  :current-page.sync="current"
  :pageSize="3"
  :total="10">
</k-pagination>
</div>

<script>
  export default {
    data() {
      return {
        current: 2
      }
    }
  }
</script>
```
:::


### Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| page-size | 每页显示条目个数，支持 .sync 修饰符 | number | — | 10 |
| total | 总条目数 | number | — | — |
| current-page | 当前页数，支持 .sync 修饰符 | number | — | 1 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| current-change | currentPage 改变时会触发 | 当前页 |
