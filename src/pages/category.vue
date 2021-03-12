<template>
  <div class="m-main" style="overflow-y: hidden">
    <div class="m-nav">
      <ul class="nav-left">
        <li class="item" v-for="(item, index) in dataList" :key="`nav_${item.id}`" :class="{'active': navIndex == index}"
          @click="navChange(index)">
          <i class="iconfont icon-game"></i>
          <span>{{item.name}}</span>
        </li>
      </ul>
      <div class="nav-right">
        <div class="item-wrap">
          <div class="item" v-for="(item, index) in itemList" :key="`itemList_${index}`">
            <div class="inner">
              <span class="icon"></span>
              <span class="name">{{tools.randomChar(6)}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tools from '@/utils/tools'
export default {
  name: 'categoryPage',
  components: {},
  data () {
    return {
      tools: tools,
      dataList: [],
      itemList: [],
      navIndex: 3
    }
  },
  watch: {
  },
  mounted () {
    this.initData()
    this.navChange(this.navIndex)
  },
  methods: {
    initData () {
      for (let i = 0; i < tools.randomInt(5, 10); i++) {
        this.dataList.push({
          id: `g_${i}`,
          name: tools.randomChar(3),
          list: new Array(tools.randomInt(20, 80)).fill(0)
        })
      }
    },
    navChange (index) {
      this.navIndex = index
      this.itemList = this.dataList[index].list
    }
  }
}
</script>

<style lang="less" scoped>
.m-nav{
  min-height: 100%;
  font-size: 0.48rem;
  background: tint(@mainColor, 80%);
  display: flex;
  height: 100%;
  >.nav-left{
    background: tint(@mainColor, 60%);
    width: 25%;
    overflow-y: auto;
    .item{
      padding: 0.32rem 0;
      >.iconfont{
        margin: 0.16rem;
        font-size: 0.56rem;
      }
      &.active{
        background: tint(@mainColor, 80%);
      }
    }
  }
  >.nav-right{
    flex: 1 1 auto;
    overflow-y: auto;
    .item-wrap{
      display: flex;
      flex-wrap: wrap;
      .item{
        position: relative;
        width: 25%;
        text-align: center;
        >.inner{
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
        }
        &:after{
          content: '';
          display: block;
          width: 100%;
          padding: 50% 0;
        }
        .icon{
          display: block;
          width: 60%;
          height: 60%;
          margin: 0 auto;
          background: fadeout(#000, 90%);
          border-radius: 10%;
          margin-top: 0.16rem;
        }
        .name{
          font-size: 0.3467rem;
        }
      }
    }
  }
}
</style>