import CircleCountDown from './CircleCountDown.vue'

const CountDown = {
  install: Vue => {
    Vue.component('circle-count-down', CircleCountDown)
  }
}
 
export default CountDown