import {laye} from './layer.js'



export const net = {
	/**
    * 提示
    * @param t String 提示语
    */
	toast : function(t) {
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
    load : function(t,shadeClose) {
        shadeClose = shadeClose ? true : false;
        layer.open({
            type: 2,
            content: t || '加载中，先喝杯茶~~',
            shade: 'background-color: rgba(0,0,0,.5)',
            shadeClose:shadeClose
        });
    },
    /**
    * 提示点击弹框
    * @param cont String 提示语
    * @param t String 按钮文字
    */
    dialog : function(cont,t) {
        layer.open({
            content: cont || '',
            btn: t || '好的'
        });
    },
    /**
    * 关闭所有弹窗
    */
    closeAll: function() {
        layer.closeAll();
    },
    /**
    * 创建本地缓存
    * @param name String k
    * @param val Object value
    */
    setStorage : function(name,val) {
        localStorage.setItem(name,JSON.stringify(val))
    },
    /**
    * 获取本地缓存
    * @param name String k
    * @return {val}
    */
    getStorage : function(name) {
        return JSON.parse(localStorage.getItem(name))
    }

}

