<!--弹窗 组件-->
<template>
  <div class="Alert">
    <transition name="fade">
    <div class="mark" v-show="visible"></div>
    </transition>
    <transition name="slide-fade">
    <div class="view" :style="'margin-top: '+ top + 'px'" v-show="visible">
      <div class="title">
        <label v-text="title"></label>
        <i class="iconfont icon-close" @click="close()"></i>
      </div>
      <div class="content" v-html="content"></div>
      <div class="btns-footer">
        <button @click="close()" v-text="nolabel" v-show="confirm">取消</button>
        <button type="primary" @click="ok()" v-text="oklabel">确定</button>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Alert',
    data () {
      return {
        visible: false,
        title: '',
        content: '',
        buttons: null,
        callback: null,
        oklabel: null,
        nolabel: null,
        confirm: false,
        top: 0,
      }
    },
    mounted () {
    },
    destroyed () {
    },
    methods: {
      show (content, title, data) {
        this.title = title || '提示'
        this.content = content
        if (data) {
          this.callback = data.callback
          this.confirm = data.confirm ? true : false
          this.oklabel = data.confirmButtonText || '确定'
          this.nolabel = data.cancelButtonText || '取消'
        } else {
          this.confirm = false;
          this.callback = null;
          this.oklabel = '确定'
          this.nolabel = '取消'
        }
        document.body.appendChild(this.$el)
        this.visible = true
        this.$nextTick(() => {
          this.top = document.documentElement.clientHeight / 2 - this.$el.querySelector('.view').clientHeight / 2
          console.log(this.$el.querySelector('.view').clientHeight, this.top, document.documentElement.clientHeight, document.documentElement.clientHeight / 2)
        })
      },
      close () {
        if (this.callback != null) this.callback(0)
        this.remove()
      },
      ok () {
        if (this.callback != null) {
          let r = this.callback(1)
          if (r != false) this.remove()
        }
        else this.remove()
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
