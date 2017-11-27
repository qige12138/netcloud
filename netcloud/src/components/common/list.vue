<template>
	<div class="list">
		<header-text></header-text>	
		<list-msg></list-msg>
	</div>
</template>
<script>
	import Bus from '../../common/js/bus.js'
	import headerText from './headertext.vue'
	import listMsg from './listmsg.vue'
	export default {
		components:{
			headerText,
			listMsg
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