<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <main-header v-if="lang !== 'play'"></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
    <main-footer v-if="lang !== 'play' && !isComponent"></main-footer>
  </div>
</template>

<script>
  import { use } from 'main/locale';
  import zhLocale from 'main/locale/lang/zh-CN';

  use(zhLocale);

  export default {
    name: 'app',

    computed: {
      lang() {
        return 'zh-CN';
      },
      isComponent() {
        return /^component-/.test(this.$route.name || '');
      }
    },

    mounted() {

    }
  };
</script>
