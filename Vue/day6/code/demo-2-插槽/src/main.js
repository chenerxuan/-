import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = true

// 全局自定义指令
// Vue.directive('color', {
//   bind(el, binding) {
//     el.style.color = binding.value
//   },
//   update(el, binding) {
//     el.style.color = binding.value
//   }
// })
Vue.directive('color', function(el, binding) {
  el.style.color = binding.value
})

// 全局过滤器
// Vue.filter('过滤器的名字', function() {})

new Vue({
  render: h => h(App),
}).$mount('#app')
