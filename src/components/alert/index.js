import Vue from 'vue'
import Alert from './Alert.vue'
const AlertConstructor = Vue.extend(Alert);
const ins = new AlertConstructor({el: document.createElement('div')})
Alert.show = (content, text, data) => {
  ins.show(content, text, data)
}
export default Alert;
