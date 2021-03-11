import Popup from './Popup.vue'
const PopupConstructor = Vue.extend(Popup);
Popup.init = () => {
  new PopupConstructor({el: document.createElement('div')})
}
export default Popup;
