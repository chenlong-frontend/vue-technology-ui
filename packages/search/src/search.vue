<template>
  <div class="kview-search">
    <span class="kview-search__icon font_family icon-icon_search02"></span>
    <div class="kview-search__flex">
      <div class="kview-search__input">
        <span v-if="isClearable" class="kview-search__clear font_family icon-icon_error01" @click="onClear"></span>
        <k-input :styles="inputStyle" @enter="onSearch" :placeholder="placeholder" :value="value" @input="onInput"></k-input>
      </div>
      <div v-if="right" class="kview-search__text" @click="onSearch">
        <span>搜索</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop,Vue, Watch } from 'vue-property-decorator'

@Component
export default class KSearch extends Vue {
  name = 'KSearch'

  @Prop({default: '请输入关键词'}) placeholder: string
  @Prop({default: ''}) value: string
  @Prop({default: true}) right: boolean
  @Prop({default: false}) clearable: boolean

  onInput(event) {
    this.$emit('input', event);
  }

  onSearch() {
    this.$emit('search')
  }

  onClear() {
    this.onInput('')
    this.$emit('clear')
  }

  get isClearable () {
    return this.clearable
  }

  inputStyle = {
    paddingLeft: '30px'
  }
}
</script>
