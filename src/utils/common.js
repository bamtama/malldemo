import Vue from 'vue'
import axios from 'axios'

import slider from '@/components/slider'
import dialog from '@/components/dialog'
import loading from '@/components/loading'
import alert from '@/components/alert'
Vue.use(slider)
Vue.use(dialog)
Vue.use(loading)
Vue.use(alert)

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true

export default {
  init () {
    window.eventHub = new Vue()
  },
  showLoading (str = 'loading') {
    loading.show(str, this)
  },
  hideLoading () {
    loading.hide()
  },
  showAlert (text, title, oktext, callback) {
    return alert.show(text, title || "提示", {
      confirmButtonText: oktext || '确定',
      callback: action => {
        if (callback != null) callback(action)
      }
    })
  }
}