<template>
  <div class="m-header">
    <a>
      <i class="iconfont icon-checkin"></i>
    </a>
    <a>Logo</a>
    <a>
      <i class="iconfont icon-message"></i>
    </a>
  </div>
</template>
<script>
export default {
  name: 'baseFooter',
  components: {},
  methods: {}
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
}
</style>