<template>
	<div class="list" ref="list">
		<header-text headt="歌单"></header-text>	
		<list-msg :headData="data" v-if="data"></list-msg>
		<list-song :songlist="data.tracks" v-if="data"></list-song>
	</div>
</template>
<script>
	import Bus from '@/common/js/bus.js'
	import headerText from './headertext'
	import listMsg from './listmsg'
	import listSong from './listsong'
	export default {
		components:{
			headerText,
			listMsg,
			listSong
		},
		data(){
			return {
				id:this.$route.query.id,
				data:null,
				headData:{}
			}
		},
		mounted() {
			this.getDetail();
		},
		created(){
			this.$nextTick(() => {
				document.documentElement.scrollTop = 0;
				Bus.$emit('headerMsg');
			});
		},
		methods:{
			getDetail() {
				this.ajax.get('/playlist/detail',{
					id:this.id,
					load:' '
				})
				.then((res)=> {
					this.net.closeAll();
					this.data = res.playlist;
				})
			}
			
		}
	}
</script>