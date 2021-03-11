import Tip from './Tip.vue'
const TipConstructor = Vue.extend(Tip);
let i = 0;
Tip.show = (content, type) => {
  let ins = new TipConstructor({el: document.createElement('div')})
  ins.show(content, type, i)
  i ++;
  setTimeout(()=>{
    i --;
    ins.remove()
  }, 3 * 1000)
}
export default Tip;
