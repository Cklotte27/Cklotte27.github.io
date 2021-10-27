import Vue from 'vue'
import App from './App.vue'
//import Home from './pages/Home.vue'
//import Education from './pages/Education.vue'

Vue.config.productionTip = false

/*const routes = {
	'/' : Home,
	'/Education' : Education
}*/

new Vue({
  render: h => h(App),
}).$mount('#app')
