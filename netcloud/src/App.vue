<template>
  <div id="app">
  	<my-header v-show="headerShow"></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import myHeader from './components/myheader/myheader'

export default {
	name: 'app',
	components: {
	  myHeader
	},
	data() {
		return {
			headerShow:true
		}
	},
	mounted() {
		this.changeHeader();
	},
	methods:{
		changeHeader() {
			let rou = this.$route;
			if(rou.path == '/volume' || rou.path == '/music' || rou.path == '/circle') {
				this.headerShow = true;
			} else {
				this.headerShow = false;
			}
		}
	},
	watch:{
		$route(rou){
			this.changeHeader();
		}
	}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	

</style>
