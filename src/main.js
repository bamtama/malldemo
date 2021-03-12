import Vue from 'vue'
import C from './utils/common'
import T from './utils/tools'
export default {
  init (router, App) {
    C.init()
    Vue.prototype.T = T
    Vue.prototype.C = C
    Vue.config.productionTip = false
    new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
}