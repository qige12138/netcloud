<template>
	<div class="volume">
		<div class="volumeConent">
			<router-link tag="div" to="" class="volumeTab">
				<i class="icon iconfont tabI t_c" >&#xe65e;</i><span
				class="tabName bd_bottom">我的电台<span class="num">({{count}})</span></span>
			</router-link>
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
				count:0
			}
		},
		mounted() {
			this.$bus.on('login',()=> {
				this.getDj();
			});
			this.getDj();
		},
		methods:{
			getDj() {
				this.ajax.get('user/dj',{
					uid:this.net.uid()
				})
				.then(res=> {
					if(!res) return
					this.count = res.count;
				});
			}

		}

	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.volume 
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
				position:relative
				top:2px
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