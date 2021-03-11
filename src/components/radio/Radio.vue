<!--Radio 组件-->
<template>
  <div class="RadioGroup">
    <label class="Radio" v-for="item in data">
      <input type="radio" :disabled="disabled" :value="c_value(item)" v-model="val" @change="$emit('change', val)">
      <i class="gg-icon-select"></i>{{c_label(item)}}
    </label>
  </div>
</template>

<script>
  export default {
    name: 'Radio',
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      'value': {default: null},
      'data': Array,
      valueFild: String,
      labelFild: String,
      disabled: Boolean
    },
    data () {
      return {
        val: this.value
      }
    },
    mounted () {
      console.log('Radio1', this.id, this.name, this.value)
    },
    watch: {
      value (v) {
        this.val = v
      }
    },
    computed: {
      c_value () {
        return function (item) {
          return this.valueFild ? item[this.valueFild] : item.value
        }
      },
      c_label () {
        return function (item) {
          return this.labelFild ? item[this.labelFild] : item.label
        }
      },
    },
  }
</script>

<style lang="less">
  @import "~@/assets/css/radiocheckbox.less";
</style>
