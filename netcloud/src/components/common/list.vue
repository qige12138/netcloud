<template>
	<div class="list">
		<header-text></header-text>	
		<list-msg></list-msg>
		<list-song v-on:goSong="goSing"></list-song>
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
		created(){
			this.$nextTick(() => {
				Bus.$emit('headerMsg');
			});
		},
		methods:{
			goSing() {
				this.$router.push({
					path:'/sing'
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	
		

</style>