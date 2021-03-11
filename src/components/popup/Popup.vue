<!--全局弹窗控制组件-->
<template>
  <component ref="popup" :is="popupComponent" :param="param"></component>
</template>

<script>
  import components from '@/util/popups'
  export default {
    name: 'Popup',
    components: components.components,
    data () {
      return {
        inited: false,
        popupComponent: null,
        waitList: [],
        param: null,
        must: ['login', 'reg'], // 强制覆盖显示的窗口 无视队列
      }
    },
    mounted () {
      this.popupComponent = this.C.popupComponent
      this.C.on('POPUP_SHOW', this.show)
    },
    destroyed () {
      this.C.off('POPUP_SHOW', this.show)
    },
    watch: {
      popupComponent (val) {
        if(this.waitList.length > 0){
          if(!val){
            let o = this.waitList.shift()
            this.param = o.param
            this.popupComponent = o.path
          }
        }
      }
    },
    methods: {
      show (data) {
        let isMust = this.must.indexOf(data.path) > -1 // 属于强制队列
        if(this.popupComponent && data.path && !isMust){
          // 存在未关闭的窗口，加入等待队列
          this.waitList.push(data)
          return
        }
        this.param = data.param
        if (isMust) this.waitList = [] // 强制弹出会清空队列
        this.popupComponent = this.C.popupComponent = data.path
        document.body.appendChild(this.$el)
      }
    }
  }
</script>
