<!--Select 组件-->
<template>
  <div class="Select" v-show="thisVisible" @click="visible = !visible">
    <input ref="inputV" type="hidden" :value="value"/>
    <div class="Sinput" v-if="selectItem">
      <img class="icon" v-if="c_icon(selectItem)" :src="c_icon(selectItem)"/>
      <i class="txt" v-text="c_label(selectItem)"></i>
    </div>
    <div class="Sinput" v-else>
      <i class="txt" v-text="placeholder"></i>
    </div>
    <i class="sign iconfont icon-arrow-down"></i>
    <div ref="popover" class="popover" v-show="visible">
      <a class="Option" v-for="(item, i) in data" :key="i" @click="changeItem(item)" :class="{selected: value == c_value(item)}">
        <img class="icon" v-if="c_icon(item)" :src="c_icon(item)"/>
        <i class="txt" v-text="c_label(item)"></i>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Select',
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      'value': String,
      'data': Array,
      placeholder: String,
      valueFild: String,
      labelFild: String,
      iconFild: String,
    },
    data () {
      return {
        selectItem: null,
        visible: false
      }
    },
    mounted () {
    },
    destroyed () {
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
      c_icon () {
        return function (item) {
          return this.iconFild ? item[this.iconFild] : item.icon
        }
      }
    },
    watch: {
      value (v) {
        let newV = null
        for (let i in this.data) {
          if (this.c_value(this.data[i]) == parseInt(v)) newV = this.data[i]
        }
        this.selectItem = newV
        console.log('watch',v, this.selectItem)
      }
    },
    methods: {
      changeItem (item) {
        this.$refs.inputV.value = this.c_value(item)
        this.$emit('change', this.$refs.inputV.value)
      }
    }
  }
</script>

<style lang="less">
  .Select{
    position: relative;
    display: inline-flex;
    align-items: center;
    border: 1px solid #ececec;
    >.Sinput, .Option{
      display: flex;
      align-items: center;
      text-align: left;
      flex: 1;
      >.icon{
        width: 0.7rem;
        height: 0.7rem;
        margin-right: 0.4rem;
      }
      >.txt{
        flex: 1;
      }
    }
    .Option{line-height: 0.6rem;}
    .popover{
      position: absolute;
      background: #fff;
      border: 1px solid #eee;
      left: 0;
      width: 100%;
      padding: 0;
      top: calc(100% - 1px);
      overflow-y: auto;
      max-height: 4rem;
      z-index: 1;
      >.Option{
        padding: 0.2rem 0.4rem;
        &:hover, &.selected{
          background: fade(@mainColor, 20%);
        }
        &.selected{pointer-events: none}
      }
    }
  }
</style>
