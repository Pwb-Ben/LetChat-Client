import store from './store.js'
import common from './common.js'

class WebSocekt {
	constructor(arg) {
	    this.socketUrl = store.getters.websocketUrl;
	}
	
	connectServer(arg){
		console.log('开始链接')
		var socketTask = uni.connectSocket({
		    url: this.socketUrl,
		    data() {
		        return JSON.stringify({
		            action: common.CONNECT,
					userId: arg
		        });
		    },
			success: function(res) {
				 console.log('成功连接服务器')
			},
			fail: function(){
				uni.showModal({
					confirmText:'链接服务器失败，请检查网络'
				})
			},
			complete: function(res){
				console.log(res)
			}
		});
		
		socketTask.onOpen(function(res) {
			console.log("websocket已打开")
			store.commit('openSocekt')
			setInterval(function(){
				uni.sendSocketMessage({
					data: JSON.stringify({action: common.KEEPALIVE})
				}) 
			},5000)
		})
		
		socketTask.onClose(function(){
			console.log("websocket已关闭")
			store.commit('closeSocekt')
		})
	}
	
	sendMessage(packet) {
		console.log("打开标志" + store.getters.isSocketOpen())
		if(store.getters.isSocketOpen()) {
			console.log("开始发送信息")
			uni.sendSocketMessage({
				data: packet,
				success:function(res){
					
				},
				fail:function(res){
					
				}
			})
		}
	}
}

const webSocket = new WebSocekt()

export default webSocket