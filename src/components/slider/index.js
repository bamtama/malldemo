import Vue from 'vue'
import slider from './slider.vue'
slider.install = () => {
  Vue.component('Slider', slider)
}
export default slider;
