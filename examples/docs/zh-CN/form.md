## 表单

:::demo Form 组件提供了表单验证的功能，只需要通过 `rules` 属性传入约定的验证规则，并将 Form-Item 的 `prop` 属性设置为需校验的字段名即可。校验规则参见 [async-validator](https://github.com/yiminghe/async-validator)
```html
<div style="background-color:rgba(0,0,0,0.5);padding: 20px;">
<k-form :model="form" ref="form" :rules="rules">
  <k-form-item :style="{marginBottom: '12px'}" label="所属类别" prop="type">
    <k-select v-model="form.type" placeholder="请选择">
      <k-option :value="1" label="选项一"></k-option>
      <k-option :value="2" label="选项二"></k-option>
    </k-select>
  </k-form-item>
  <k-form-item :style="{marginBottom: '30px'}" label="名称" prop="name">
    <k-input v-model="form.name" :max="20"></k-input>
  </k-form-item>
</k-form>

<k-button @click="submit">提交</k-button>
<k-button @click="resetForm">重置</k-button>
</div>

<script>
  export default {
    data() {
      return {
        form: {
          type: '',
          name: ''
        },
        rules: {
          name: [{ required: true, message: '名称不得为空', trigger: 'change' }],
          type: [{ required: true, message: '类别不得为空', trigger: 'change' }]
        }
      }
    },
    methods: {
      submit() {
        this.$refs['form'].validate((valid) => {
          if (!valid) return
          alert('提交')
        });
      },
      resetForm() {
        this.$refs['form'].resetFields();
      }
    }
  }
</script>
```
:::

### Form Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model   | 表单数据对象 | object      |                  —                |  — |
| rules    | 表单验证规则 | object | — | — |

### Form Methods

| 方法名      | 说明          | 参数
|---------- |-------------- | --------------
| validate | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object))
| validateField | 对部分表单字段进行校验的方法 | Function(props: array \| string, callback: Function(errorMessage: string))
| resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | —
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果 | Function(props: array \| string)

### Form-Item Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| prop    | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string    | 传入 Form 组件的 `model` 中的字段 | — |
| label | 标签文本 | string | — | — |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | — | false |


### Form-Item Methods

| 方法名      | 说明          | 参数
|---------- |-------------- | --------------
| resetField | 对该表单项进行重置，将其值重置为初始值并移除校验结果 | -