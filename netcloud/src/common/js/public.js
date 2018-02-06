import {laye} from './layer.js'


console.info(laye)
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
    }
}

