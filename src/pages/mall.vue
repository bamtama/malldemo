<template>
  <div class="m-main">
    <div class="m-mall">
      <div class="item" v-for="i in 9" :key="`item_mall_${i}`">
        <div class="preview">
          <div class="fake-item"></div>
        </div>
        <div class="opts">
          <span class="btn">
            <i class="iconfont icon-cart"></i>
          </span>
          <span class="btn">
            <i class="iconfont icon-prize"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mallPage',
  components: {},
  data () {
    return {}
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
.fake-item{
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  background: @subColor;
  border-radius: 0.32rem;
}
</style>