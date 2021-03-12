<template>
  <div class="App">
    <mheader></mheader>
    <router-view />
    <mfooter>
      <ul class="footer">
        <li>
          <router-link to="/category">
            <i class="iconfont icon-category"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/mall">
            <i class="iconfont icon-mall"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/search">
            <span class="btn-c"><i class="iconfont icon-search"></i></span>
          </router-link>
        </li>
        <li>
          <router-link to="/coupon">
            <i class="iconfont icon-coupon"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/user">
            <i class="iconfont icon-user"></i>
          </router-link>
        </li>
      </ul>
    </mfooter>
  </div>
</template>

<script>
import mheader from '@/components/baseHeader'
import mfooter from '@/components/baseFooter'
export default {
  name: 'App',
  components: {
    mheader, mfooter
  }
}
</script>
<style lang="less">
 @import "~@/assets/css/common.less";
 .footer{
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.1733rem;
  background: #fff;
  box-shadow: 0 0 6px #ddd;
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
