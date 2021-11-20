import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    mobile: false
  },
  mutations: {
    checkMobile (state) {
		this.windownWidth = window.innerWidth;
		if (this.windownWidth <= 750) {
			this.mobile = true;
			return;
		}
		this.mobile = false;

		return;
      state.count++
    }
  }
})