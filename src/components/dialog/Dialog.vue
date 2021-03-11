<!--弹窗Dialog 组件-->
<template>
  <div class="Dialog">
    <transition name="fade">
      <div class="mark" v-show="model && thisVisible" @click="close()"></div>
    </transition>
    <transition :name="transition">
      <div class="view" :style="width ? 'width:'+width : ''" v-show="thisVisible" :class="transition">
        <div class="title">
          <label v-text="title"></label>
          <i class="gg-icon-close" @click="close()" v-show="canClose"></i>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Dialog',
    props: {
      'width': {default: null},
      'title': {default: null},
      'model': {default: true},
      'visible': {default: false},
      'canClose': {default: 1},
      'transition': {default: 'slide-fade'}
    },
    data () {
      return {
        thisVisible: this.visible
      }
    },
    mounted () {
    },
    destroyed () {
    },
    watch: {
      visible (v) {
        this.thisVisible = v
      },
      thisVisible (v, o) {
        if (v != o && v == false){
          if(this.$el.parentNode && this.$el.parentNode.nodeName == 'BODY') {
            setTimeout(()=>{
              this.C.popup()
            }, 500)
          }
        }
        if (v) document.body.style.overflow = 'hidden'
        else document.body.style['overflow-y'] = 'auto'
      }
    },
    methods: {
      close () {
        this.thisVisible = this.canClose ? false : this.thisVisible
        this.$emit('update:visible', this.thisVisible)
      }
    }
  }
</script>

<style lang="less">
  @import "~@/assets/css/alert.less";
</style>
