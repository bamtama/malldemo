<template>
  <div class="m-main">
    <ul class="coupon-wrap">
      <li v-for="item in dataList" :key="`coupon_${item.id}`">
        <div class="item">
          <span class="amount">{{item.amount}}</span>
          <span class="info">
            <p class="name">{{item.name}}</p>
            <p class="valid-date">{{item.date}}</p>
          </span>
        </div>
      </li>
    </ul>
    <ul class="m-opts">
      <li>
        <a class="btn btn-plain">领取更多</a>
      </li>
      <li>
        <a class="btn" @click="dlgShow = true">输入兑换码领取</a>
      </li>
    </ul>
    <Dialog title="请输入兑换码" :visible.sync="dlgShow">
       内容表单blahblah，略
    </Dialog>
  </div>
</template>

<script>
export default {
  main: 'couponPage',
  components: {},
  data () {
    return {
      dataList: [],
      dlgShow: false
    }
  },
  mounted () {
    this.initData()
    console.log(this.dataList)
  },
  methods: {
    initData () {
      let tmplist = []
      for (let i = 0; i < this.T.randomInt(1,5); i++) {
        tmplist.push({
          id: `id_${i}`,
          amount: this.T.randomInt(50, 200),
          name: this.T.randomChar(8),
          date: this.T.randomDate()
        })
      }
      this.dataList = tmplist
    }
  }
}
</script>
<style lang="less" scoped>
.coupon-wrap{
  .item{
    display: flex;
    width: 100%;
    height: 2.4rem;
    padding: 0.16rem 0.48rem;
    font-size: 0.56rem;
    >.amount, >.info{
      background: @subColor;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    >.amount{
      width: 25%;
      border-radius: 0.16rem 0 0 0.16rem;
      &:after, &:before{
        content: '';
        position: absolute;
        top: -0.16rem;
        right: -0.16rem;
        width: 0.32rem;
        height: 0.32rem;
        border-radius: 50%;
        background: #fff;
        z-index: 1;
      }
      &:before{
        top: auto;
        bottom: -0.16rem;
      }
    }
    >.info{
      padding: 0 0 0 0.64rem;
      flex: 1 1 auto;
      border-radius: 0 0.16rem 0.16rem 0;
      flex-direction: column;
      align-items: stretch;
      .valid-date{
        font-size: 0.32rem;
      }
      &:before{
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        height: 70%;
        width: 0.0267rem;
        overflow: hidden;
        transform: scaleX(0.5) translateY(-50%);
        background: linear-gradient(fadeout(@borderColor, 50%) 50%,transparent 50%);
        background-size:100% 10%;
      }
    }
  }
}
</style>