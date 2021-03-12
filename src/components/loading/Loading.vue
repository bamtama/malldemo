<!--loading 组件-->
<template>
  <div class="Loading">
    <transition name="fade">
      <div class="mark" v-show="model && visible"></div>
    </transition>
    <transition name="slide-fade">
    <div class="view" :style="'margin-top: '+ top + 'px'" v-show="visible">
      <div class="title">
        <b class="iconfont icon-loading"></b>
        <label v-text="title"></label>
        <i class="iconfont icon-close" @click="close()" v-show="!model"></i>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Loading',
    data () {
      return {
        visible: false,
        title: '',
        top: 0,
        model: 1,
      }
    },
    mounted () {
    },
    destroyed () {
    },
    methods: {
      show (_title) {
        this.title = _title || 'loading...'
        document.body.appendChild(this.$el)
        this.visible = true
        this.$nextTick(() => {
          this.top = document.documentElement.clientHeight / 2 - this.$el.querySelector('.view').clientHeight / 2
        })
      },
      remove () {
        this.visible = false
      }
    }
  }
</script>

<style lang="less">
  @import "~@/assets/css/alert.less";
</style>
