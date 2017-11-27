<template>
  <div id="app">
  	<my-header v-show="headerShow"></my-header>
    <router-view v-on:rouerMsg="rouerMsg"></router-view>
  </div>
</template>

<script>
import myHeader from './components/myheader/myheader'
import Bus from './common/js/bus.js'

export default {
	name: 'app',
	data() {
		return {
			headerShow:true
		}
	},
	mounted() {
		Bus.$on('headerMsg',(data) => {
			this.headerShow = false;
		})
	},
	components: {
	  myHeader
	},
	methods:{
		rouerMsg(text) {
			this.headerShow = false;
		}
	}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	

</style>
