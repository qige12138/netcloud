<template>
	<div class="list">
		<header-text></header-text>	
		<list-msg></list-msg>
		<list-song></list-song>
	</div>
</template>
<script>
	import Bus from '../../common/js/bus.js'
	import headerText from './headertext.vue'
	import listMsg from './listmsg.vue'
	import listSong from './listsong.vue'
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
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	
		

</style>