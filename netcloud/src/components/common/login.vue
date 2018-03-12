<template>
	<div class="login" :class="{'t_100':status}">
		<div class="t_c logo">
			<img src="../../common/img/logo.jpg">
		</div>
		<div class="b">
			<div class="u bd_bottom">
				<i class="icon iconfont">&#xe66f;</i>
				<input type="tel" v-model="phone" maxlength="11" placeholder="请输入手机号">
			</div>
			<div class="p bd_bottom">
				<i class="icon iconfont">&#xe642;</i>
				<input type="password" v-model="password"  placeholder="请输入密码">
			</div>
		</div>
		<div class="loginBtn t_c" :class="{'po_no':po}">
			<button @click="loginBtn()">{{btnT}}</button>
		</div>
		<div>
			<p>{{count}}</p>
			<button @click="add(10)">+</button>
		</div>
		
	</div>
</template>
<script>
	import {net} from '@/common/js/public'
	import store from '@/common/js/store'
	import {mapState, mapMutations} from "vuex"
	export default {
		data() {
			return {
				phone:null,
				password:null,
				btnT:'登录',
				status:false,
				po:false
			}
		},
		store,
		computed:mapState(['count']),
		methods:{
			mapMutations([
				'add','reduce'
			]),
			loginBtn() {
				this.$store.commit('add',10)
				// let phone = this.phone,
				// 	password = this.password;
				// if(!phone) {
				// 	net.toast('请输入手机号');
				// } else if(!this.testPhone(phone)) {
				// 	net.toast('手机号格式错误');
				// } else if(!password) {
				// 	net.toast('请输入密码');
				// } else {
				// 	this.btnT = '登录中...';
				// 	this.po = true;
				// 	net.load(' ');
				// 	this.login();
				// }
			},
			/**
			* 登录
			*/
			login() {
				this.axios.get('http://localhost:3000/login/cellphone',{
					params:{
						'phone':this.phone,
						'password':this.password
					}
				})
				.then(res=> {
					if(200 == res.status) {
						net.toast('登录成功');
						//将当前帐号密码保存到本地缓存
						net.setStorage('user',{phone:this.phone,password:this.password});
						setTimeout(() => {
							this.status = true;
							net.closeAll();
						},500);
					}
				})
				.catch(err => {
					net.closeAll();
					this.btnT = '登录';
					net.dialog('密码错误');
				});
			},
			/**
			* 验证手机号
			* @param num Number 手机号码
			* return boolean
			*/
			testPhone(num) {
				let reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
				return reg.test(num)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '../../common/stylus/public.styl'
	.login 
		width:100%
		height:100%
		fi()
		top:0
		left:0
		z-index:100
		bg_color(#fff)
		transition:.3s all linear
		&.t_100 
			top:-100%
		.logo
			pad_(20%,0)
			img
				width:28%
		.b 
			pad_(0,20px)
			div
				padding:15px 0 5px 0
				input
					font-size:$fonts_14
					outline:none
					pl(3px)
					background:transparent
				i
					dis_inb()
					width:20px
				&.u
					i
						font-size:20px
						
				&.p
					i
						font-size:18px
		.loginBtn 	
			pt(20px)	
			button
				btn()
				bg_color(#EC1A1D)
				color:#fff
				width:78%
				height:40px
				border-radius:20px
				font-size:$fonts_16
				letter-spacing:6px
</style>