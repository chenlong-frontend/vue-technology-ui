## 菜单

### MenuItem 菜单元素 

:::demo 
```html
<div style="background-color:rgba(0,0,0,0.2);">
<k-menu-item description="描述">
  <span>icon</span>
</k-menu-item>

<k-menu-item description="点击我" :active="active" @click="handleClick">
  <span>icon</span>
</k-menu-item>
</div>

<script>
  export default {
    data() {
      return {
        active: false,
      };
    },
    methods: {
      handleClick() {
        this.active = !this.active
      }
    }
  };
</script>
```
:::

### menu-item Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| description | 描述文字 | string | — | — |
| active | 是否激活 | boolean | — | false |

### menu-item Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click | 点击触发 | el:dom |
| before | 动画触发前 | — |
| after | 动画完成后 | — |