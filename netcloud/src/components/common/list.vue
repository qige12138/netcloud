<template>
	<div class="list">
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
				data:this.$route.query,
				headData:{}
			}
		},
		mounted() {
			
		},
		created(){
			this.$nextTick(() => {
				Bus.$emit('headerMsg');
			});
		},
		methods:{
		}
	}
</script>