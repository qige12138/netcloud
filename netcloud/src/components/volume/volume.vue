<template>
	<div class="volume">
		<div class="volumeConent">
			<router-link tag="div" to="" class="volumeTab">
				<i class="icon iconfont tabI t_c">&#xe680;</i><span
				class="tabName bd_bottom">本地音乐<span class="num">(0)</span></span>
			</router-link>	
			<router-link tag="div" to="" class="volumeTab">
				<i class="icon iconfont tabI t_c">&#xe629;</i><span
				class="tabName bd_bottom">最近播放<span class="num">(0)</span></span>
			</router-link>
			<router-link tag="div" to="" class="volumeTab">
				<i class="icon iconfont tabI t_c">&#xe62d;</i><span
				class="tabName bd_bottom">下载管理<span class="num">(0)</span></span>
			</router-link>
			<router-link tag="div" to="" class="volumeTab">
				<i class="icon iconfont tabI t_c" >&#xe65e;</i><span
				class="tabName bd_bottom">我的电台<span class="num">(0)</span></span>
			</router-link>
			<router-link tag="div" to="" class="volumeTab">
				<i class="icon iconfont tabI t_c">&#xe620;</i><span
				class="tabName bd_bottom">我的收藏<span class="num">(0)</span></span>
			</router-link>
		</div>
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
					<p>我喜欢的音乐</p>
					<p>99首</p>
				</router-link><i
				 class="icon iconfont t_c bd_bottom">&#xe60e;</i>
			</div>
			<div>
				<router-link tag="div" to="" class="singImg">
					<img src="../../common/img/timp1.jpg">
				</router-link><router-link
				 tag="div" to="" class="singName bd_bottom">
					<p>哼哼</p>
					<p>10首</p>
				</router-link><i
				 class="icon iconfont t_c bd_bottom">&#xe60e;</i>
			</div>
		</div>
		<collect-sing></collect-sing>
	</div>
</template>
<script>
	import collectSing from './collectsing.vue'
	export default {
		components:{
			collectSing
		},
		data() {
			return {
				down:true
			}
		},
		methods:{
			view(e) {
				let down = this['down'];
				this['down'] = down ? false : true;
			}

		}

	}
</script>

<style lang="stylus">
	@import '../../common/stylus/public.styl'
	.volume 
		padding-top:48px
		font-size:$fonts_14
		color:$color_th
		.volumeTab 
			height:48px
			line-height:48px
			.tabI 
				bs()
				pl(5px)
				dis_inb()
				width:50px
				font-size:$fonts_22
			.tabName 
				dis_inb()
				width:calc(100% - 50px)
				.num 
					color:#999
					font-size:$fonts_12
					pl(3px)
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
			width:100%
			padding:4px 0 4px 4px
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