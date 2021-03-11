import Vue from 'vue'
import C from './utils/common'
export default {
  init (router, App) {
    C.init()
    Vue.config.productionTip = false
    new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
}