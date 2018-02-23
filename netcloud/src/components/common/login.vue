<template>
	<div class="login">
		<div class="t_c logo">
			<img src="../../common/img/logo.jpg">
		</div>
		<div class="b">
			<div class="u bd_bottom">
				<i class="icon iconfont">&#xe66f;</i>
				<input type="tel" maxlength="11" placeholder="请输入手机号">
			</div>
			<div class="p bd_bottom">
				<i class="icon iconfont">&#xe642;</i>
				<input type="password" maxlength="11" placeholder="请输入密码">
			</div>
		</div>
		<div class="loginBtn t_c">
			<button>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
		</div>
	</div>
</template>
<script>
	export default {
		methods:{
			login() {
				this.axios.get('http://localhost:3000/login/cellphone?phone=18782204615&password=wyy129833047')
				.then(res=> {
					if(200 == res.status) {
						lay.toast('登录成功');
						console.info(res);
						this.getD();
					}
				})
				.catch(err => lay.dialog('密码错误'))
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
</style>