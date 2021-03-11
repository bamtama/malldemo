import Vue from 'vue'
import Search from './Select.vue'
Search.install = () => {
  Vue.component('Select', Search)
}
export default Search;