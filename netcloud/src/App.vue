<template>
	<div id="app">
		<my-header></my-header>
		<router-view></router-view>	
	</div>
</template>

<script type="text/ecmascript-6">
import myHeader from './components/myheader/myheader.vue'
	export default {
		name: 'app',
		components:{
			myHeader
		}
	}

</script>