

module.exports = {
	
	/**
	 * 和后端的枚举对应
	 */
	CONNECT: 1, 	// 第一次(或重连)初始化连接
	CHAT: 2, 		// 聊天消息
	SIGNED: 3, 		// 消息签收
	KEEPALIVE: 4, 	// 客户端保持心跳
	
	DataContent: function(action, chatMsg, extand){
		this.action = action;
		this.chatMsg = chatMsg;
		this.extand = extand;
	}
}
