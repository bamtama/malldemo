<!--Tip 组件-->
<template>
  <div class="Tip">
    <transition name="slide-fade">
    <infoTip class="view" :type="type" :content="title" showIcon="1" center="1" :style="'margin-top: '+ top + 'px'" :class="{show: visible}" v-show="visible"></infoTip>
    </transition>
  </div>
</template>

<script>
  import infoTip from '@/components/infoTip'
  export default {
    name: 'Tip',
    components: { infoTip },
    data () {
      return {
        visible: false,
        title: '',
        top: 0,
        type: 'info'
      }
    },
    mounted () {
    },
    destroyed () {
    },
    methods: {
      show (_title, _type, i) {
        this.type = _type
        this.title = _title
        document.body.appendChild(this.$el)
        this.visible = true
        this.$nextTick(() => {
          this.top = 100 + i * parseFloat(this.$el.querySelector('.view').clientHeight) + i * 5
          console.log(this.top)
        })
      },
      remove () {
        this.visible = false
        setTimeout(()=>{
          document.body.removeChild(this.$el)
        }, 500)
      }
    }
  }
</script>

<style lang="less">
  .Tip{
    pointer-events: none;
    .alertTip{width: auto;display: inline-flex;padding: 20px;}
  }
</style>
