<template>
	<view>
		<view class="cu-bar bg-white" style="background-color: #f7f7f7">
			<view class="action">
				Chat
			</view>
			<view class="action">
				<text class="cuIcon-search text-grey"></text>
				<text class="cuIcon-roundadd" style="color: #f7f7f7"></text>
				<text class="cuIcon-roundadd text-grey"></text>
			</view>
		</view>
		<mz-network-error @clickFn="hancleClick"></mz-network-error>
		<view class="cu-list menu-avatar">
			<view class="cu-item" @tap="toChat">
				<!-- 头像 -->
				<view class="cu-avatar radius lg" style="background-image:url(../../static/img/default.png);">
					<!-- 未签收记录条数 -->
					<view class="cu-tag badge">10</view>
				</view>
				<view class="content">
					<view class="text-black">
						<!-- 用户昵称 -->
						<view class="text-cut">瓦洛兰之盾-塔里克</view>
						<!-- <view class="cu-tag round bg-orange sm">战士</view> -->
					</view>
					<view class="text-gray text-sm flex">
						<!-- 最后一条通话记录 -->
						<view class="text-cut">
							塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。
						</view>
					</view>
				</view>
				<view class="action">
					<!-- 最后一条通话记录时间 -->
					<view class="text-grey text-xs">22:20</view>
				</view>
			</view>
		</view>
		<view class="cu-list menu-avatar">
			<view class="cu-item" :class="modalName=='move-box-'+ index?'move-cur':''" v-for="(item,index) in 4" :key="index"
			 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + index">
				<view class="cu-avatar radius lg" :style="[{backgroundImage:'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100'+ (index+2) +'.jpg)'}]"></view>
				<view class="content">
					<view class="text-black">
						<!-- 用户昵称 -->
						<view class="text-cut">瓦洛兰之盾-塔里克</view>
						<!-- <view class="cu-tag round bg-orange sm">战士</view> -->
					</view>
					<view class="text-gray text-sm">
						<text class="cuIcon-infofill text-red  margin-right-xs"></text> 消息未送达
						<!-- 最后一条通话记录 -->
						<view class="text-cut">
							塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。
						</view>
					</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">22:20</view>
					<view class="cu-tag round bg-grey sm">5</view>
				</view>
				<view class="move">
					<view class="bg-grey">置顶</view>
					<view class="bg-red">删除</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import mzNetworkError from '@/components/mz-network-error/mz-network-error.vue'
	import settings from "@/common/settings.js"
	import socket from "../../common/socket.js"
	export default {
		components: {
			mzNetworkError
		},
		data() {
			return {
				chatUserList:[{}],
				tapId:'',
				userInfo:'',
				isTap: false
			}
		},
		onLoad() {
			// uni.clearStorage()
			// if(!this.store.getters.hasLogin){
			// 	uni.navigateTo({
			// 		url:'../user/login'
			// 	})
			// }
			// console.log("isSocketOpen:" + this.store.getters.isSocketOpen);
		},
		onShow() {
			this.userInfo = this.store.getters.userInfo;
			
			if(!this.store.getters.isSocketOpen){
				console.log('on show start connect');
				socket.connectServer(this.userInfo.id);
			}
		},
		methods: {
			hancleClick() {
				settings.openAppSetting();
			},
			touch() {
				this.isTap = !this.isTap
			},
			toChat() {
				uni.navigateTo({
					url:'chat'
				});
				// uni.sendSocketMessage({
				// 	data: JSON.stringify({action:'1',userId:'456'}),
				// 	success:function(res){
						
				// 	},
				// 	fail:function(res){
						
				// 	}
				// });
			}
		}
	}
</script>

<style>

</style>
