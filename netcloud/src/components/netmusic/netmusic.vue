<template>
	<div class="netmusic" id="netmusic">
		<net-header></net-header>
		<router-view></router-view>
	</div>
</template>
<script>
	import netHeader from './netheader'
	export default {
		name: 'netmusic',
		components :{
			netHeader
		}
	}
</script>

<style lang="stylus">
	.netmusic 
		padding-top:48px
</style>