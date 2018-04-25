<template>
	<div class="list" ref="list">
		<header-text></header-text>	
		<list-msg :headData="data"></list-msg>
		<list-song :songlist="data.tracks"></list-song>
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
				data:JSON.parse(this.$route.query.ret),
				headData:{}
			}
		},
		mounted() {
		},
		created(){
			this.$nextTick(() => {
				document.documentElement.scrollTop = 0;
				Bus.$emit('headerMsg');
			});
		},
		methods:{
		}
	}
</script>