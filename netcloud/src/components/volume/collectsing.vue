<template>
	<div class="collectsing">
		<div class="creat">
			<i class="icon iconfont down  t_c" :class="{'rota':!down}"  @click="view()">&#xe64b;</i><span
			  @click="view()">创建的歌单</span><i
			class="icon iconfont set t_r" ref="set">&#xe55a;</i>
		</div>
		<div class="creatSing" v-show="down">
			<div>
				<router-link tag="div" to="" class="singImg">
					<img src="../../common/img/timg.jpg">
				</router-link><router-link
				 tag="div" to="" class="singName bd_bottom">
					<p>收藏的音乐</p>
					<p>99首</p>
				</router-link><i
				 class="icon iconfont t_c bd_bottom">&#xe60e;</i>
			</div>
			<div>
				<router-link tag="div" to="" class="singImg">
					<img src="../../common/img/timp1.jpg">
				</router-link><router-link
				 tag="div" to="" class="singName bd_bottom">
					<p>收藏的音乐</p>
					<p>10首</p>
				</router-link><i
				 class="icon iconfont t_c bd_bottom">&#xe60e;</i>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				down:true
			}
		},
		methods:{
			view:function(e) {
				let down = this['down'];
				this['down'] = down ? false : true;
			}

		}
	}
</script>

<style lang="stylus">
	@import '../../common/stylus/public.styl'
	.collectsing
		.creat 
			height:28px
			line-height:28px
			background: #e0e0e0
			.down
				dis_inb()
				width: 30px
				transition:all .2s linear
			.rota 
				transform:rotate(-90deg)
			span 
				dis_inb()
				width:calc(100% - 70px)
			.set
				width: 40px;
				dis_inb()
				bs()
				pr(5px)
		.creatSing 
			bs()
			padding:4px 0 4px 4px
			height:58px
			.singImg 
				dis_inb()
				pr(4px)
				width:50px
				height:50px
				vertical-align: middle
			.singName 
				bs()
				pl(5px)
				dis_inb()
				pt(6px)
				width:calc(100% - 94px)
				height:58px
				vertical-align: middle
				p:nth-child(1)
					line-height:28px
				p:nth-child(2)
					color:$color_66
					font-size:$fonts_10
			i 
				dis_inb()
				width:40px
				height:58px
				line-height:58px
				vertical-align: middle
				color:#999
</style>