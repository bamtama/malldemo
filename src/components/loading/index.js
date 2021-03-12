import Vue from 'vue'
import Loading from './Loading.vue'
const LoadingConstructor = Vue.extend(Loading);
const ins = new LoadingConstructor({el: document.createElement('div')})
Loading.show = (content) => {
  ins.show(content)
}
Loading.hide = () => {
  ins.remove()
}
export default Loading;