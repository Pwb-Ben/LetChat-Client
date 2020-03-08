import store from './store.js'

class WebSocekt {
	constructor(arg) {
	    this.socketUrl = 'ws://localhost:8088/ws'
	}
	
	connectServer(packet){
		console.log('开始链接')
		var socketTask = uni.connectSocket({
		    url: this.socketUrl,
		    data() {
		        return {
		            packet
		        };
		    },
		    // header: {
		    //     'content-type': 'application/json'
		    // },
		    // method: 'POST',
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
			uni.sendSocketMessage({
				data: JSON.stringify({action:'1',userId:'123'}),
				success:function(res){
					
				},
				fail:function(res){
					
				}
			})
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