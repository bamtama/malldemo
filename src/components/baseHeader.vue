<template>
  <div class="m-header">
    <template v-if="isMain">
      <a>
        <i class="iconfont icon-checkin"></i>
      </a>
      <router-link to="/">Logo</router-link>
    </template>
    <template v-else>
      <a @click="actionBack">
        <i class="iconfont icon-arrow-left"></i>
      </a>
      <span>{{$route.meta.title}}</span>
    </template>
    <a>
      <i class="iconfont icon-message"></i>
    </a>
  </div>
</template>
<script>
export default {
  name: 'baseFooter',
  components: {},
  data () {
    return {
      isMain: true
    }
  },
  watch: {
    $route: {
      handler (nv) {
        this.isMain = nv.name == 'mainPage'
      },
      immediate: true
    }
  },
  mounted () {},
  methods: {
    actionBack () {
      if (this.$route.meta.sub == 1) {
        this.$router.replace({path: '/'})
      } else {
        this.$router.back()
      }
    }
  }
}
</script>
<style lang="less" scoped="scoped">
.m-header{
  position: absolute;
  top: 0;
  left: 0;
  height: 1.1733rem;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.64rem;
  padding: 0 0.2rem;
  box-shadow: 0 0 6px #ddd;
}
</style>