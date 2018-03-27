<template>
  <div id="app" :class="{'over':lStatus}">
  	<my-header v-show="headerShow"></my-header>
    <router-view></router-view>
    <login v-show="lStatus"></login>
  </div>
</template>

<script>
import myHeader from './components/myheader/myheader'
import Login from './components/common/login'
import {mapState,mapActions} from "vuex"
export default {
	name: 'app',
	components: {
	  myHeader,
	  Login
	},
	computed:{
		...mapState(['lStatus'])
	},
	data() {
		return {
			headerShow:true
		}
	},
	mounted() {
		// if(this.net.getStorage('user')) {
		// 	this.assign({s:false});
		// } else {
		// 	this.assign({s:true});
		// 	this.net.rmStorage();
		// }

		this.changeHeader();
	},
	methods:{
		...mapActions({
			'assign':'assign'
		}),
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
