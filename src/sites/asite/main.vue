<template>
  <div class="m-main">
    <Slider :slots="imgs" width="100%" height="56%">
      <template v-for="(item, i) in imgs" v-slot:[item.key]>
        <img :src="getImg(item.key)" :key="`slider_img_${i}`" />
      </template>
    </Slider>
    <div class="enters_wrap">
      <ul class="cate_tabs">
        <li class="item" v-for="item, i in categories" :key="`cate_tab_${i}`" :class="{'cur': curTab == i}" @click="tabChange(i)">
          <i class="iconfont" :class="`icon-${item.icon}`"></i>
        </li>
      </ul>
      <Slider :slots="categories" :showIndicator="false" :showArrows="false" :auto="false" @change="pageChange">
        <template v-for="(item, i) in categories" v-slot:[item.key]>
          <div class="cate_page" :key="`slider_page_${i}`">
            <router-link to="/" v-for="val, i in item.list" :key="`enter_${i}`">
              <i class="iconfont icon-lab"></i>
            </router-link>
          </div>
        </template>
      </Slider>
    </div>
    <div class="btns_wrap">
      <router-link to="/">
        品类
      </router-link>
      <router-link to="/">
        品类
      </router-link>
      <router-link to="/">
        品类
      </router-link>
      <router-link to="/">
        品类
      </router-link>
    </div>
    <div class="list_wrap" style="height:10000px">
      <div>
        <span>推荐</span>
        <i></i>
      </div>
    </div>
  </div>
</template>

<script>
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
          list: new Array(Math.ceil(Math.random() * 20)).fill(0)
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
.enters_wrap{
  background: fadeout(@mainColor2, 50%);
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
    text-align: center;
  }
}
</style>