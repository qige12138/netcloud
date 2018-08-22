<template>
	<div class="list" ref="list">
		<header-text headt="每日推荐"></header-text>	
		<!-- <list-song :songlist="data.tracks" v-if="data"></list-song> -->
	</div>
</template>
<script>
	import Bus from '@/common/js/bus.js'
	import headerText from '../common/headertext'
	import listSong from '../common/listsong'
	export default {
		components:{
			headerText,
			listSong
		},
		data(){
			return {
				data:null,
				headData:{}
			}
		},
		mounted() {
			
		},
		created(){
			this.$nextTick(() => {
				document.documentElement.scrollTop = 0;
                Bus.$emit('headerMsg');
                this.getRecommd();
			});
		},
		methods:{
			getRecommd() {
                this.ajax.get('/recommend/songs',
                    {}
                )
                .then(res=> {
                    console.info(res)
                });

            }
		}
	}
</script>