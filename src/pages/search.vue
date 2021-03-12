<template>
  <div class="m-main">
    <ul class="m-form-list">
      <li>
        <a @click="showloading">显示loading</a>
      </li>
      <li>
        <a @click="showalert">显示alert</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'searchPage',
  components: {},
  data () {
    return {
      dlgShow: false
    }
  },
  mounted () {},
  methods: {
    showloading () {
      this.C.showLoading('waiting for a moment')
      let _this = this
      setTimeout(function(){
        _this.C.hideLoading()
      }, 2000)
    },
    showalert () {
      this.C.showAlert('test')
    }
  }
}
</script>

<style>

</style>