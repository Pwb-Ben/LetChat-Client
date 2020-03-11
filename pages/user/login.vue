<template>
	<view class="content">
		<view class="header">
			<!-- <image src="../../static/shilu-login/logo.png"></image> -->
		</view>
		
		<view class="list">
			<view class="list-call">
				<image class="img" src="/static/shilu-login/1.png"></image>
				<input class="biaoti" v-model="username" type="number" maxlength="11" placeholder="输入账号" />
			</view>
			<view class="list-call">
				<image class="img" src="/static/shilu-login/2.png"></image>
				<input class="biaoti" v-model="password" type="text" maxlength="32" placeholder="输入密码" :password="!showPassword"/>
				<image class="img" :src="showPassword?'/static/shilu-login/op.png':'/static/shilu-login/cl.png'" @tap="display"></image>
			</view>
			
		</view>
		
		<view class="padding flex flex-direction" style="margin-top: 100upx;">
			<button class="cu-btn lg" style="background-color: #05c160; color: #ffffff;" @tap="bindLogin()">登录</button>
		</view>
		
		<view class="xieyi">
			<navigator url="forget" open-type="navigate">忘记密码</navigator>
			<text>|</text>
			<navigator url="register" open-type="navigate">注册账户</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(){
			
		},
		data() {
			return {
				username: '',
				password: '',
				showPassword: false
			};
		},
		methods: {
			display() {
			    this.showPassword = !this.showPassword
			},
		    bindLogin() {
				// if (this.account.length > 11) {
				//      uni.showToast({
				//         icon: 'none',
				//         title: '手机号不正确'
				//     });
				//     return;
				// }
		  //       if (this.password.length < 6) {
		  //           uni.showToast({
		  //               icon: 'none',
		  //               title: '密码不正确'
		  //           });
		  //           return;
		  //       }
				uni.request({
				    url: this.store.getters.baseUrl + '/user/login',
				    data: {
						username:this.username,
						password:this.password
					},
					method: 'POST',
					dataType:'application/json',
				    success: (res) => {
						if(res.statusCode!=200){
							console.log(res.data)
						}else{
							let userInfo = JSON.parse(res.data)
							console.log(userInfo)
							this.store.commit('login', userInfo)
							uni.navigateBack()
						}
				    }
				});
				
		    }
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content:center;
	}
	.header {
		width:161upx;
		height:161upx;
		/* background:rgba(63,205,235,1); */
		/* box-shadow:0upx 12upx 13upx 0upx rgba(63,205,235,0.47); */
		border-radius:50%;
		margin-top: 30upx;
		margin-left: auto;
		margin-right: auto;
	}
	.header image{
		width:161upx;
		height:161upx;
		border-radius:50%;
	}
	
	.list {
		display: flex;
		flex-direction: column;
		padding-top: 50upx;
		padding-left: 70upx;
		padding-right: 70upx;
	}
	.list-call{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100upx;
		color: #333333;
		border-bottom: 1upx solid rgba(230,230,230,1);
	}
	.list-call .img{
		width: 40upx;
		height: 40upx;
	}
	.list-call .biaoti{
		flex: 1;
		text-align: left;
		font-size: 32upx;
		line-height: 100upx;
		margin-left: 16upx;
	}

	.dlbutton {
		color: #FFFFFF;
		font-size: 34upx;
		width:470upx;
		height:100upx;
		background:linear-gradient(-90deg,rgba(63,205,235,1),rgba(188,226,158,1));
		box-shadow:0upx 0upx 13upx 0upx rgba(164,217,228,0.2);
		border-radius:50upx;
		line-height: 100upx;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100upx;
	}
	.dlbutton-hover {
		background:linear-gradient(-90deg,rgba(63,205,235,0.9),rgba(188,226,158,0.9));
	}
	.xieyi{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		margin-top: 80upx;
		color: #FFA800;
		text-align: center;
		height: 40upx;
		line-height: 40upx;
	}
	.xieyi text{
		font-size: 24upx;
		margin-left: 15upx;
		margin-right: 15upx;
	}
</style>
