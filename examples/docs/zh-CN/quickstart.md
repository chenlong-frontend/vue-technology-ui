## 快速上手

本节将介绍如何在项目中使用 kview

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import Kview from 'kview-c-ui'
import 'kview-c-ui/lib/theme-chalk/index.css'
import App from './App.vue';

Vue.use(Kview);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 Element 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

时间问题，暂时未做调试，打包规则除了添加了ts解析，套用的element ui的打包规则，按需引入应该也是兼容的。