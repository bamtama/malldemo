<template>
  <div class="m-main m-user">
    <div class="top">
      <span class="avatar">
        <img src="@@/images/banner1.jpg" />
      </span>
      <p class="name">avatar</p>
      <p class="loc">location</p>
      <div class="wallet">
        <div>
          <i class="iconfont icon-cash"></i>
          2333
        </div>
        <div>
          <i class="iconfont icon-point"></i>
          6666
        </div>
      </div>
    </div>
    <div class="bot">
      <ul class="m-form-list">
        <li v-for="i in 10" :key="`list_${i}`">
          <i class="iconfont icon-lab"></i>
          <span>some option</span>
          <i class="iconfont icon-arrow-right"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.m-user{
  background: fadeout(#000, 90%);
  .top{
    text-align: center;
    padding: 0.32rem;
    background: fadeout(@mainColor, 70%);
    .avatar{
      display: inline-block;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      overflow: hidden;
    }
    .name{
      font-size: 0.64rem;
    }
    .wallet{
      background: fadeout(#fff, 30%);
      border-radius: 0.1067rem;
      display: flex;
      padding: 0.32rem;
      margin: 0.32rem 0 0 0;
      >*{
        width: 50%;
        text-align: left;
        font-size: 0.64rem;
      }
    }
  }
}
</style>