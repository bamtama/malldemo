<template>
  <ul class="m-footer">
    <li>
      <i class="iconfont icon-mall"></i>
    </li>
    <li>
      <i class="iconfont icon-prize"></i>
    </li>
    <li>
      <span class="btn-c"><i class="iconfont icon-search"></i></span>
    </li>
    <li>
      <i class="iconfont icon-coupon"></i>
    </li>
    <li>
      <i class="iconfont icon-user"></i>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'baseFooter',
  components: {},
  methods: {}
}
</script>
<style lang="less" scoped="scoped">
.m-footer{
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.1733rem;
  background: #fff;
  >li{
    font-size: 0.64rem;
    width: 20%;
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  .btn-c{
    position: absolute;
    bottom: 0;
    left: 50%;
    border-radius: 50%;
    width: 1.8rem;
    height: 1.8rem;
    transform: translateX(-50%);
    background: #fff;
    box-shadow: 0 0 6px #ddd;
    text-align: center;
    >i{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 0.88rem;
      z-index: 2;
    }
    &:after{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 50%;
      width: 100%;
      background: #fff;
      z-index: 1;
    }
  }
}
</style>