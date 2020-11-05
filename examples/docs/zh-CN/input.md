## 输入框

### 基础用法

:::demo
```html
<k-input placeholder="请输入内容" :max="20" v-model="value"></k-input>

<script>
  export default {
    data() {
      return {
        value: '',
      };
    },
    methods: {
    }
  };
</script>
```
:::

### input Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value/v-model | 绑定值 | string / number | - | - |
| max | 最大输入长度 | number | - | - |
| placeholder | 输入框占位文本 | string | - | - |
| validate-event | 输入时是否触发表单的校验 | boolean | - | true |
| disabled | 是否禁用 | boolean | - | false |

### input Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string | number) |
| input | 在 Input 值改变时触发 | (value: string | number) |