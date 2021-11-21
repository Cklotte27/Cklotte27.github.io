import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  	state: {
		mobile: false,
		windowWidth: null,
	},
	mutations: {
		checkMobile(state){
			if (state.windowWidth <= 750) {
				state.mobile = true;
				return;
			}
			state.mobile = false;
		},
		checkScreenWidth(state){
			state.windowWidth = window.innerWidth;
		}
	},
	actions: {
		checkMobileDevice ({commit}){
			commit('checkScreenWidth');
			commit('checkMobile');
		}
	},
	getters: {
	},
	modules: {
		
	}
	
})