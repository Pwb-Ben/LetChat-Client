import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		baseUrl: 'http://localhost:8080',
		websocketUrl: 'ws://localhost:8088/ws',
		hasLogin: false,
		isSocketOpen: false,
		userInfo: [],
		myFriendsList: [],
		myFriendsRequestList: []
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
		},
		setMyFriendsList(state, myFriendsList) {
			state.myFriendsList = myFriendsList;
			uni.setStorage({//缓存用户登陆状态
			    key: 'myFriendsList',
			    data: myFriendsList
			})
		},
		setMyFriendsRequestList(state, myFriendsRequestList) {
			state.myFriendsRequestList = myFriendsRequestList;
			uni.setStorage({//缓存用户登陆状态
			    key: 'myFriendsRequestList',
			    data: myFriendsRequestList
			})
		}
	},
	getters: {
		baseUrl: (state, getters) => {
			return state.baseUrl
		},
		websocketUrl: (state, getters) => {
			return state.websocketUrl
		},
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