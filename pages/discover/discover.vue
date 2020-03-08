<template>
	<view>
		<view class="cu-bar bg-white" style="background-color: #f7f7f7">
			<view class="action">
				发现
			</view>
			<view class="action">
				<text class="cuIcon-search text-grey"></text>
				<text class="cuIcon-roundadd" style="color: #f7f7f7"></text>
				<text class="cuIcon-roundadd text-grey"></text>
			</view>
		</view>
		<view class="cu-list menu" :class="['sm-border','']">
			<view class="cu-item" :class="'arrow'">
				<view class="content">
					<text class="cuIcon-global text-grey"></text>
					<text class="text-grey">朋友圈</text>
				</view>
			</view>
		</view>
		
		<view class="cu-list menu" :class="['sm-border','']">
			<view class="cu-item" :class="'arrow'">
				<view class="content">
					<text class="cuIcon-scan text-grey"></text>
					<text class="text-grey">扫一扫</text>
				</view>
			</view>
		</view>
		
		<view class="cu-list menu" :class="['sm-border','']">
			<view class="cu-item" :class="'arrow'">
				<view class="content">
					<text class="cuIcon-people text-grey"></text>
					<text class="text-grey">附近的人</text>
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
	.page {
		height: 100Vh;
		width: 100vw;
	}
	
	.page.show {
		overflow: hidden;
	}
	
	.switch-sex::after {
		content: "\e716";
	}
	
	.switch-sex::before {
		content: "\e7a9";
	}
	
	.switch-music::after {
		content: "\e66a";
	}
	
	.switch-music::before {
		content: "\e6db";
	}
</style>
