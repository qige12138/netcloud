import {laye} from './layer.js'



export const net = {
    /**
     * 增加日期格式化方法
     * @param fmt Number 时间戳
     * @returns {*}
     */
    format(fmt) { //author: meizz 
		var o = {
			"M+": this.getMonth() + 1, //月份 
			"d+": this.getDate(), //日 
			"h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12,
            "H+": this.getHours(), //小时
			"m+": this.getMinutes(), //分 
			"s+": this.getSeconds(), //秒 
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
			"S": this.getMilliseconds() //毫秒 
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	},
	/**
    * 提示
    * @param t String 提示语
    */
	toast(t) {
        layer.open({
            content: t || '提示',
            skin: 'msg',
            time: 2//2秒后自动关闭
        });
    },
    /**
    * 加载
    * @param t String 提示语
    * @param shadeClose 点击是否关闭提示框
    */
    load(t,shadeClose) {
        shadeClose = shadeClose ? true : false;
        layer.open({
            type: 2,
            content: t,
            shade: 'background-color: rgba(0,0,0,.5)',
            shadeClose:shadeClose
        });
    },
    /**
    * 提示点击弹框
    * @param cont String 提示语
    * @param t String 按钮文字
    */
    dialog(cont,t) {
        layer.open({
            content: cont || '',
            btn: t || '好的'
        });
    },
    /**
    * 关闭所有弹窗
    */
    closeAll() {
        layer.closeAll();
    },
    /**
    * 创建本地缓存
    * @param name String k
    * @param val Object value
    */
    setStorage(name,val) {
        localStorage.setItem(name,JSON.stringify(val))
    },
    /**
    * 获取本地缓存
    * @param name String k
    * @return {val}
    */
    getStorage(name) {
        return JSON.parse(localStorage.getItem(name))
    },
    /**
    * 清除本地缓存
    * @param name String k
    */
    rmStorage(name) {
        name = name || '';
        localStorage.removeItem(name);
    },
    /**
    * 验证手机号
    * @param num Number 手机号码
    * return boolean
    */
    testPhone(num) {
        let reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
        return reg.test(num)
    },
     /**
    * 获取用户信息
    */
    msg() {
        let msg;
        this.getStorage('msg') && (msg = this.getStorage('msg'));
        return msg
    },
     /**
    * 获取用户uid
    */
    uid() {
        let uid;
        this.getStorage('msg') && (uid = this.getStorage('msg')['account']['id']);
        return uid
    },
    /**
    * 数字超过一亿用亿表示,超过一万用万表示
    * @param num number
    */
    formatNum(num) {
        num = num > 100000000 ? ((num / 100000000).toFixed(1) + '亿') : num;
        num = num > 10000 ? ((num / 10000).toFixed(1) + '万') : num;
        return num
    },
    /**
    * 将Number 的时间转化为 "00:00:00"格式的字符串
    * @params t Number
    */
    dealTime(t) {
        t = parseInt(t);
        let h = parseInt(t / 3600),
            m = parseInt(t / 60),
            s = t % 60;
        m < 10 && ( m = '0' + m);
        s < 10 && ( s = '0' + s);
        h = h == 0 ? m : h + ":" + m;
        return h + ':' + s

    },
    /**
    * 大于999的数字显示999+
    * @params num Number
    */
    dealNum(num) {
        return num > 999 ? '999+' : num 
    }


}

