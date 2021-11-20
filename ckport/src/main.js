import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from "vuex";

window.$ = require('jquery')

Vue.config.productionTip = false
Vue.use(Vuex);

/*const routes = {
	'/' : Home,
	'/Education' : Education
}*/

new Vue({
  	render: h => h(App),
	router
}).$mount('#app')
