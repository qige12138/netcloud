<template>
	<div class="login">
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
		
	</div>
</template>
<script>
	import {mapState,mapActions} from "vuex"
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
		mounted() {
		},
		computed:{
			...mapState(['lStatus'])
		},
		methods:{
			...mapActions({
				'assign':'assign'
			}),
			loginBtn() {
				let phone = this.phone,
					password = this.password;
				if(!phone) {
					this.net.toast('请输入手机号');
				} else if(!this.net.testPhone(phone)) {
					this.net.toast('手机号格式错误');
				} else if(!password) {
					this.net.toast('请输入密码');
				} else {
					this.login();
				}
			},
			/**
			* 登录
			*/
			login() {
				this.ajax.get('login/cellphone',
					{
						phone:this.phone,
						password:this.password,
						load:' '
					}
				)
				.then(res => {
					if(!res) return
						this.net.toast('登录成功');
						//将当前帐号密码保存到本地缓存
						this.net.setStorage('user',{phone:this.phone,password:this.password});
						this.net.setStorage('msg',res);
						setTimeout(() => {
							this.assign({s:false});
							this.$router.push({path:'./volume'});
							this.$bus.emit('login');
						},500);

				})
				.catch(err => {
					this.net.dialog('密码错误');
				})
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