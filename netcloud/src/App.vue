<template>
  <div id="app">
  	<my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import myHeader from './components/myheader/myheader'

export default {
	name: 'app',
	components: {
	  myHeader
	}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	

</style>
