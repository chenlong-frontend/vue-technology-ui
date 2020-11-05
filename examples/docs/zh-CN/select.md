## 选择框

### 基础式 option

:::demo
```html
<div style="background-color:rgba(0, 79, 175, 0.1);padding: 20px;">
  <k-select v-model="value" placeholder="请选择">
    <k-option :value="1" label="选项一"></k-option>
    <k-option :value="2" label="选项二"></k-option>
  </k-select>
</div>

<script>
  export default {
    data() {
      return {
        value: 1
      }
    }
  }
</script>
```
:::


### 卡片式 option-card

:::demo
```html
<div style="background-color:rgba(0, 79, 175, 0.1);padding: 20px;">
  <k-select v-model="value" placeholder="请选择">
    <k-option-card width="96px" height="98px" :value="1" label="标题">
      <div>内容</div>
    </k-option-card>
  </k-select>
</div>

<script>
  export default {
    data() {
      return {
        value: 1
      }
    }
  }
</script>
```
:::

### Select Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | boolean / string / number | — | — |
| placeholder | 输入框占位文本 | string | — | — |
| disabled | 是否禁用 | boolean | — | false |
| appendToBody | 下拉框是否插入到body之下 | boolean | — | false |
| styles | 外框样式 | object | — | — |

### Select Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 选中值发生变化时触发 | 目前的选中值 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |

### option Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选项的值 | string/number/object | — | — |
| label | 选项的标签 | string/number | — | — |

### option-card Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选项的值 | string/number/object | — | — |
| label | 选项的标签 | string/number | — | — |
| width | 宽度 | string | — | 0 |
| height | 高度 | string | — | 0 |