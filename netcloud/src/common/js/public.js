import {laye} from './layer.js'



export const lay = {
	/**
    * 提示
    * @param t String 提示语
    */
	toast : function(t) {
        laye.open({
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
            btn: t || '我知道了'
        });
    }
}

