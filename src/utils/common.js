import Vue from 'vue'
import axios from 'axios'

import slider from '@/components/slider'
Vue.use(slider)

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true // ajax携带cookie

export default {
  init () {
    
  }
}