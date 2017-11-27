<template>
	<div class="listmsg">
		<div class="msgHeader">
			<div class="imgMsg">
				<img src="/static/img/timg.60690e1.jpg">
				<i class="icon iconfont">&#xe613;</i>
				<div>
					<i class="icon iconfont">&#xe681;</i>
					<span>151万</span>
				</div>
				
			</div>
			<div class="msg">
				<p>我不要天上的星星，我要尘世的幸福</p>
				<div>
					<div>
						<img src="/static/img/timg.60690e1.jpg">
						<i class="icon iconfont">&#xe602;</i>
					</div>
					<span>小仙<i class="icon iconfont">&#xe637;</i></span>
					
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {

	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.listmsg
		bs()
		pad(10px 25px)
		bg_color(rgb(71,74,60))
		color:$color_ff
		.msgHeader 
			display:flex
			.imgMsg
				flex:12
				re()
				img
					width:100%
					top:0
					left:0
				div
					ab()
					right:4px
					top:4px
					font_s(12px)
				&>i
					ab()
					right:4px
					bottom:4px
			.msg
				bs()
				flex:17
				pl(16px)
				p
					font_s(16px)
					pt(10px)
					lh(22px)
				&>div
					margin-top:13%
					div
						dis_inb()
						width:30px
						height:0
						pb(30px)
						re()
						img
							ab()
							width:100%
							height:100%
							border-radius:50%
						&>i
							ab()
							color:#ffbd20
							border-radius:50%
							font_s(8px)
							right:-3px
							bottom:0
					span
						re()
						top:-10px
						pl(5px)
						font_s(14px)
						i
							pl(5px)
				
		
</style>