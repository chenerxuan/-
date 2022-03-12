// 导入vue包，得到Vue构造函数
import Vue from 'vue'
//导入App.vue根组件，将来要把App.vue中的模板结构，渲染到HTML页面中
// import App from './App.vue'
import Test from './Test.vue'

Vue.config.productionTip = false

//创建Vue的实例对象
new Vue({
  // el: '#app',
  //把render函数指定的组件渲染到HTML页面中
  render: h => h(Test),
}).$mount('#app')
