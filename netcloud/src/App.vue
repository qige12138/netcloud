<template>
  <div id="app">
  	<my-header v-show="headerShow"></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import myHeader from './components/myheader/myheader'
import {lay} from './common/js/public'

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
		this.login();
		let a = ''; 
		this.changeHeader();
	},
	methods:{
		changeHeader() {
			let rou = this.$route,
				routerName = ['/volume','/music','/circle',"/video","/station"];
			this.headerShow = -1 == routerName.indexOf(rou.path) ? false : true;
		},
		login() {
			this.axios.get('http://localhost:3000/music/url?id=33894312&proxy=http://121.196.226.246:84')
			.then(res=> console.info(res))
			.catch(err => lay.dialog('密码错误'))
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
