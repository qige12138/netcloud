<template>
  <div id="app" class="over">
  	<my-header v-show="headerShow"></my-header>
    <router-view></router-view>
    <login v-show="login"></login>	
  </div>
</template>

<script>
import myHeader from './components/myheader/myheader'
import Login from './components/common/login'
import store from '@/common/js/store'

export default {
	name: 'app',
	components: {
	  myHeader,
	  Login
	},
	store,
	data() {
		return {
			headerShow:true,
			login:true
		}
	},
	mounted() {
		this.changeHeader();
	},
	methods:{
		changeHeader() {
			let rou = this.$route,
				routerName = ['/volume','/music','/circle',"/video","/station"];
			this.headerShow = -1 == routerName.indexOf(rou.path) ? false : true;
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
	.over 
		height:100%
		overflow:hidden

</style>
