<template>
  <div class="App">
    <mheader></mheader>
    <router-view />
    <mfooter></mfooter>
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
</style>
