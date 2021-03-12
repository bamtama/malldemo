<template>
  <div class="m-main">
    <Slider :slots="imgs">
      <template v-for="(item, i) in imgs" v-slot:[item.key]>
        <img class="slider_img" :src="getImg(item.key)" :key="`slider_img_${i}`" />
      </template>
    </Slider>
    <div class="enters_wrap">
      <ul class="cate_tabs">
        <li class="item" v-for="item, i in categories" :key="`cate_tab_${i}`" :class="{'cur': curTab == i}" @click="tabChange(i)">
          <i class="iconfont" :class="`icon-${item.icon}`"></i>
        </li>
      </ul>
      <Slider :slots="categories" :showIndicator="false" :showArrows="false" :auto="false" @change="pageChange" :activeIndex="curTab">
        <template v-for="(item, i) in categories" v-slot:[item.key]>
          <div class="cate_page" :key="`slider_page_${i}`">
            <router-link to="/" v-for="val, i in item.list" :key="`enter_${i}`">
              <i class="iconfont icon-lab"></i>
            </router-link>
          </div>
        </template>
      </Slider>
    </div>
    <div class="list_wrap">
      <h5>
        <span>推荐</span>
        <router-link to="/">
          查看更多 <i class="iconfont icon-arrow-right"></i>
        </router-link>
      </h5>
      <ul class="cont">
        <li v-for="i in 10" :key="`list_${i}`">内容00{{i}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import tools from '@/utils/tools'
export default {
  name: 'mainPage',
  components: {},
  data () {
    let tmplist = []
    for (let i = 1; i < 4; i++) {
      tmplist.push({key: `banner${i}.jpg`})
    }
    return {
      imgs: tmplist,
      categories: [],
      cateIndicator: [],
      curTab: 0
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      let tmplist = []
      for (let i = 0; i < 4; i++) {
        tmplist.push({
          key: `cate_${i}`,
          title: `品类 ${i}`,
          icon: 'category',
          imguri: `banner${i}.jpg`,
          list: new Array(tools.randomInt(7, 16)).fill(0)
        })
      }
      // 源数据
      this.categories = JSON.parse(JSON.stringify(tmplist))
      console.log('main cateindicator', this.cateIndicator)
    },
    getImg (imgsrc) {
      return require(`@@/images/${imgsrc}`);
    },
    tabChange (i) {
      this.curTab = i
    },
    pageChange (index) {
      this.curTab = index
    }
  }
}
</script>

<style lang="less" scoped>
.slider_img{
  float: left;
  width: 100%;
  height: 100%;
}
.enters_wrap{
  background: fadeout(@mainColor, 50%);
}
.cate_tabs{
  display: flex;
  justify-content: space-between;
  >li{
    width: 25%;
    color: #fff;
    font-size: 0.64rem;
    padding: 0.16rem 0;
    text-align: center;
    &.cur{
      background: fadeout(#000, 80%);
    }
  }
}
.cate_page{
  display: flex;
  flex-wrap: wrap;
  >*{
    width: 25%;
    height: 2.6667rem;
    font-size: 1.28rem;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}
.list_wrap{
  background: fadeout(@mainColor, 80%);
  font-size: 0.3467rem;
  padding-bottom: 0.48rem;
  >h5{
    display: flex;
    justify-content: space-between;
    padding: 0.24rem;
  }
  >.cont{
    display: flex;
    flex-wrap: wrap;
    >li{
      padding: 0.24rem;
      width: 50%;
    }
  }
}
</style>