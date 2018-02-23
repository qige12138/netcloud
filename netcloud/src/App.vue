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
			this.axios.get('http://localhost:3000/login/cellphone?phone=18782204615&password=wyy129833047')
			.then(res=> {
				if(200 == res.status) {
					lay.toast('登录成功');
				}
			})
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
