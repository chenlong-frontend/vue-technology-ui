## Loading 加载

加载数据时显示动效。

### 区域加载

在表格等容器中加载数据时显示。

:::demo自定义指令`v-loading`，只需要绑定`Boolean`即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加`body`修饰符，可以使遮罩插入至 DOM 中的 body 上。在绑定了`v-loading`指令的元素上添加`kview-loading-text`属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，`kview-loading-spinner`和`kview-loading-background`属性分别用来设定图标类名和背景色值。
```html
<template>
  <div class="demo-loading" v-loading="loading" kview-loading-text="数据加载中" kview-loading-spinner="kview-icon-loading" kview-loading-background="rgba(0, 0, 0, 0.8)">
    <p>内容区域</p>
    <p>内容区域</p>
    <p>内容区域</p>
  </div>
</template>

<style>
.demo-loading {
  width: 100%;
  height: 100px;
}
</style>

<script>
  export default {
    data() {
      return {
        loading: true
      };
    }
  };
</script>
```
:::

### 整页加载

页面数据加载时显示。

:::demo 当使用指令方式时，全屏遮罩需要添加`fullscreen`修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用`lock`修饰符；当使用服务方式时，遮罩默认即为全屏，无需额外设置。

```html
<template>
  <k-button-larger @click="openFullScreen" v-loading.fullscreen.lock="loading" kview-loading-text="数据加载中" kview-loading-spinner="kview-icon-loading" kview-loading-background="rgba(0, 0, 0, 0.8)">
    开启全屏加载
  </k-button-larger>
</template>

<script>
  export default {
    data() {
      return {
        loading: false
      };
    },
    methods: {
      openFullScreen() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      }
    }
  };
</script>
```
:::

### Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| target | Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 `document.querySelector`以获取到对应 DOM 节点 | object/string | — | document.body |
| body | 同 `v-loading` 指令中的 `body` 修饰符 | boolean | — | false |
| fullscreen | 同 `v-loading` 指令中的 `fullscreen` 修饰符 | boolean | — | true |
| lock | 同 `v-loading` 指令中的 `lock` 修饰符 | boolean | — | false |
| text | 显示在加载图标下方的加载文案 | string | — | — |
| spinner | 自定义加载图标类名 | string | — | — |
| background | 遮罩背景色 | string | — | — |