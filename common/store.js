import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		isSocketOpen: false,
		userInfo: {},
		userStatus: {}
	},	
	mutations: {
		login(state, userInfo) {
			state.hasLogin = true;
			state.userInfo = userInfo;
			uni.setStorage({//缓存用户登陆状态
			    key: 'userInfo',
			    data: userInfo
			})
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			uni.removeStorage({  
		        key: 'userInfo'
		    })
		},
		openSocekt(state) {
			state.isSocketOpen = true
		},
		closeSocekt(state) {
			state.isSocketOpen = false
		}
	},
	getters: {
		isSocketOpen: (state, getters) => {
		    return state.isSocketOpen
		},
		hasLogin: (state, getters) => {
			return state.hasLogin
		},
		userInfo: (state, getters) => {
			return state.userInfo
		}
	}
})

export default store