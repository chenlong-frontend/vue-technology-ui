## 数字输入框

使用此组件需要引入输入框

### 基础用法

:::demo
```html
<k-number-input placeholder="请输入" :max="20" :min="0" v-model="value"></k-number-input>

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

### number-input Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value/v-model | 绑定值 | string / number | - | - |
| precision | 数值精度 | number | - | - |
| placeholder | 输入框占位文本 | string | - | - |
| min | 最大值 | number | - | - |
| max | 最小值 | number | - | - |
| unit | 单位(仅展示) | string | - | - |
| width | 宽 | string | - | 100% |
| height | 高 | string | - | auto |
| disabled | 是否禁用 | boolean | - | false |
| validate-event | 输入时是否触发表单的校验 | boolean | - | true |

### number-input Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string | number) |
| input | 在 Input 值改变时触发 | (value: string | number) |