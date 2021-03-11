<template>
  <div class="m-slider">
    <template v-if="showArrows">
      <i class="iconfont icon-arrow-left" @click="actionPrevOrNext(-1)"></i>
      <i class="iconfont icon-arrow-right" @click="actionPrevOrNext(1)"></i>
    </template>
    <div class="indicator" v-if="showIndicator">
      <template v-for="(val, index) in mSlots">
        <span class="dot" :class="{'cur': index === curIndex}" :key="`${prefix}_i_${index}`"
          @click="actionDirect(index)">
          <slot :name="val">
            <i class="default" :data-slotname="val"></i>
          </slot>
        </span>
      </template>
    </div>
    <div class="inner"
      @mousedown="actionMoveStart($event)"
      @mouseup="actionMoveEnd($event)"
      @touchstart="actionMoveStart($event)"
      @touchend="actionMoveEnd($event)">
      <template v-for="(item, index) in mSlots">
        <transition :name="curSlideName" :key="`${prefix}_${index}`" mode="out-in">
          <div class="item" :data-slotname="item[slotKeyName]" v-show="index === curIndex">
            <slot :name="item[slotKeyName]"></slot>
          </div>
        </transition>
      </template>
    </div>
  </div>
</template>

<script>
/*
  slots: 插槽内容对象数组，必须有key或者自定义key [{key: ''}]
  duration: 动画运行时间
  auto: 是否自动播放
  touchable: 是否拖动切换
*/
export default {
  name: 'slider',
  props: {
    width: {},
    height: {},
    slots: {type: Array},
    slotKeyName: {type: String, default: 'key'},
    indicator: {type: Array, default: () => {return null}},
    duration: {type: Number},
    auto: {type: Boolean, default: true},
    touchable: {type: Boolean, defualt: true},
    showIndicator: {type: Boolean, default: true},
    showArrows: {type: Boolean, default: true}
  },
  data () {
    return {
      prefix: (new Date()).getTime(),
      handler: null,
      curIndex: 0,
      maxLen: 0,
      mDuration: 300,
      curSlideName: 'slide',
      startX: 0,
      endX: 0,
      mSlots: []
    }
  },
  watch: {
    slots: {
      handler (nv) {
        this.mSlots = nv || []
        this.init()
      },
      deep: true,
      immediate: true
    }
  },
  mounted () {
  },
  methods: {
    init () {
      this.maxLen = this.mSlots.length
      if (this.maxLen > 0) {
        this.mIndicator = []
        for (let i = 0; i < this.maxLen; i++) {
          this.mIndicator.push(`ind_${i}`)
        }
      }
      this.auto && this.actionAutoPlay()
      this.$nextTick(() => {
        console.log(document.querySelector('.inner .item').clientHeight)
        console.log(document.querySelector('.inner .item').clientWidth)
      })
    },
    actionMoveStart (event) {
      this.startX = event.touches && event.touches[0] && event.touches[0].clientX
    },
    actionMoveEnd (event) {
      this.endX = event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientX
      let offset = this.startX - this.endX
      this.actionPrevOrNext(offset < -10 ? 1 : (offset > 10 ? -1 : '' ))
    },
    actionPrevOrNext (type) {
      this.clearAutoPlay()
      this._sliding(type)
    },
    actionDirect (index) {
      this.clearAutoPlay()
      this.curIndex = index
      this.beginAuto()
    },
    actionAutoPlay () {
      this.clearAutoPlay()
      this.handler = setInterval(this._sliding, 1000)
    },
    clearAutoPlay () {
      if (this.auto && this.handler) {
        clearInterval(this.handler)
        this.handler = null
      }
    },
    _sliding (type) {
      switch (type) {
        default:
        case 1:
          this.curIndex = (++ this.curIndex) % this.maxLen
          this.curSlideName = 'slide'
          break
        case -1:
          this.curIndex = (-- this.curIndex + this.maxLen) % this.maxLen
          this.curSlideName = 'slide-1'
          break
      }
      this.beginAuto()
      this.$emit('change', this.curIndex)
    },
    beginAuto () {
      this.auto && setTimeout(this.actionAutoPlay, this.mDuration * 2)
    }
  },
}
</script>

<style lang="less" scoped>
.m-slider{
  display: flex;
  position: relative;
  width: 100%;
  height: 233px;
  // height: 0;
  // padding: 56.25% 0 0 0;
  overflow: hidden;
  >i[class*="icon-arrow"]{
    position: absolute;
    z-index: 99;
    top: 50%;
    left: 0.1333rem;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: fadeout(#000, 60%);
    color: #fff;
    text-align: center;
    line-height: 1rem;
    &.icon-arrow-right{
      left: auto;
      right: 0.1333rem;
    }
  }
  >.indicator{
    position: absolute;
    bottom: 0.32rem;
    left: 0;
    width: 100%;
    height: 0.4267rem;
    z-index: 9;
    text-align: center;
    >.dot>.default{
      display: inline-block;
      margin: 0 0.16rem;
      width: 0.4267rem;
      height: 0.4267rem;
      background: fadeout(#fff, 50%);
      border-radius: 50%;
    }
    >.dot.cur>.default{
      background: fadeout(#fff, 20%);
    }
  }
  >.inner{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    .item{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      /deep/ img {
        height: 100%;
        width: 100%;
      }
    }
  }
  [class*="-enter-active"],
  [class*="-leave-active"]{
    transition: all 300ms;
  }
  .slide-enter{
    transform: translateX(-100%);
  }
  .slide-enter-to, .slide-leave{
    transform: translateX(0);
  }
  .slide-leave-to{
    transform: translateX(100%);
  }
  .slide-1-enter{
    transform: translateX(100%);
  }
  .slide-1-enter-to, .slide-1-leave{
    transform: translateX(0);
  }
  .slide-1-leave-to{
    transform: translateX(-100%);
  }
}
</style>