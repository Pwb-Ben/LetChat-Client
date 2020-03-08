<template>
	<view>
		<view class="cu-bar bg-white">
			<view class="action">
				
			</view>
			<view class="action">
				<text class="cuIcon-camera text-black"></text>
			</view>
			
			
		</view>
		
		<view class="cu-list menu-avatar">
			<view class="cu-item" style="height: 200rpx;">
				<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
				<view class="content">
					<view class="text-bold text-xsl" style="font-size: 40upx;">
						123
					</view>
					<view class="text-gray text-sm text-cut" style="margin-top: 16upx;">
					微信号：1234567891213212313213212313213213213213131
					</view>
				</view>
				<view class="cuIcon-qrcode text-gray text-xsl"></view>
				<view class="cuIcon-right text-gray text-xsl"></view>
			</view>
		</view>
		
		<view class="cu-list menu" :class="['sm-border']">
			<view class="cu-item" :class="'arrow'">
				<view class="content">
					<text class="cuIcon-pay text-grey"></text>
					<text class="text-grey">支付</text>
				</view>
			</view>
		</view>
		<view class="cu-list menu" :class="['sm-border']">
			<view class="cu-item" :class="'arrow'">
				<view class="content">
					<text class="cuIcon-favor text-grey"></text>
					<text class="text-grey">收藏</text>
				</view>
			</view>
			<view class="cu-item" :class="'arrow'">
				<view class="content">
					<text class="cuIcon-pic text-grey"></text>
					<text class="text-grey">相册</text>
				</view>
			</view>
		</view>
		<view class="cu-list menu" :class="['sm-border']">
			<view class="cu-item" :class="'arrow'">
				<view class="content">
					<text class="cuIcon-settings text-grey"></text>
					<text class="text-grey">设置</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
			}
		},
		onLoad() {
	
		},
		methods: {
		
		}
	}
</script>

<style>
</style>
