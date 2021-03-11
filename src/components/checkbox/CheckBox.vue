<!--CheckBox 组件-->
<template>
  <label class="CheckBox">
    <input type="checkbox" v-model="val" :value="value" @change="$emit('change', val)" :disabled="disabled">
    <i class="gg-icon-select"></i><slot></slot>
  </label>
</template>

<script>
  export default {
    name: 'CheckBox',
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      'value': {default: null},
      'name': String,
      disabled: Boolean
    },
    data () {
      return {
        val: this.value
      }
    },
    watch: {
      value (v) {
        this.val = v
      }
    },
  }
</script>

<style lang="less">
  @import "~@/assets/css/radiocheckbox.less";
</style>
