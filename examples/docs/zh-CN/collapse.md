## 折叠面板

### 基础用法

:::demo
```html
<k-collapse v-model="active">
  <k-collapse-item title="标题1" :itemName='1'>
    <div>
      {{active}}
    </div>
  </k-collapse-item>
    <k-collapse-item title="标题2" :itemName='2'>
    <div>
      {{active}}
    </div>
  </k-collapse-item>
</k-collapse>

<script>
  export default {
    data() {
      return {
        active: 0
      }
    }
  }
</script>
```
:::

### collapse Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 当前激活的面板 | string | - | - |

### collapse Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 当前激活面板改变时触发 | (activeNames: string) |

### collapse-item Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 唯一标志符 | string | - | - |
| title | 面板标题 | string | - | - |