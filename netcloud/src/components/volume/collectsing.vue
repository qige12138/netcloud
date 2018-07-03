<template>
	<div class="collectsing">
		<div class="creat">
			<i class="icon iconfont down  t_c" :class="{'rota':!down_0}"  @click="view(0)">&#xe64b;</i><span
			  @click="view(0)">{{userName}}的歌单</span><i
			class="icon iconfont set t_r" ref="set">&#xe600;</i>
		</div>
		<div class="creat_sing" v-show="down_0">
			<div  v-if="songList.length">
				<div v-for="song in songList" :key="song['id']">
					<div class="sing_img" :songId="song['id']" @click="golist(song.id)">
						<img :src="song['coverImgUrl']">
					</div><div
					  :songId="song['id']"  class="sing_name bd_bottom" @click="golist(song.id)">
						<p>{{song['name']}}</p>
						<p>{{song['trackCount']}}&nbsp;by&nbsp;<span>{{song['creator']['nickname']}}</span></p>
					</div><i
					 class="icon iconfont t_c bd_bottom">&#xe60e;</i>
				</div>
			</div>			
		</div>
	</div>
</template>

<script>
	import {mapState,mapActions} from "vuex"
	export default {
		data() {
			return {
				down_0:true,
				msg:'listMsg',
				userName:null,
				songList:[]
			}
		},
		computed:{
			...mapState(['lStatus'])
		},
		created() {
			this.$bus.on('login',()=> {
				this.userName = this.net.msg().profile.nickname;
				this.getSubcount();
			});
			this.getSubcount();
		},
		methods:{
			view(e) {
				let down = 'down_' + e;
				let downC = this[down];
				this[down] = downC ? false : true;
			},
			/**
			* 跳转歌单详情
			* @params id 歌单id
			*/
			golist(id) {
				this.ajax.get('/playlist/detail',{
					id:id,
					load:' '
				})
				.then(res=> {
					this.net.closeAll();
					this.$router.push({
						path:'/list',
						query:{
							ret:JSON.stringify(res.playlist)
						}
					})
				})
				
			},
			getSubcount() {
				this.ajax.get('user/playlist',{
					uid:this.net.uid()
				})
				.then(res => {
					if(!res) return
					this.songList = res.playlist;
				})
				.catch(err => {
				});
			}

		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.collectsing
		.creat 
			height:28px
			line-height:28px
			background: #e0e0e0
			overflow:hidden
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
		.creat_sing 
			bs()
			padding:4px 0 4px 4px
			.sing_img 
				dis_inb()
				pr(4px)
				width:50px
				height:50px
				vertical-align: middle
				img 
					w(100%)
					h(100%)
			.sing_name 
				bs()
				pl(5px)
				dis_inb()
				pt(6px)
				width:calc(100% - 94px)
				height:58px
				vertical-align: middle
				p:nth-child(1)
					line-height:28px
					overflow_t()
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