import axios from 'axios'
import {net} from './public'
import vue from 'vue'
import qs from 'qs'

axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.withCredentials = true;

let ajax = {
	get(url,data) {
		data['load'] && net.load(data['load']);
		return axios.get(url,{params:data})
	},
	post(url,data) {
		return axios.post(url, qs.stringify(data));
	}
}

axios.interceptors.request.use(config => {
	return config;
}, err => Promise.reject(null));

axios.interceptors.response.use(res => {
	let code = res.data.code;
	net.closeAll();
	//感觉点赞接口有问题 但是我又想做点赞这个功能，很纠结，先这么处理
	if('http://localhost:3000/comment/like' == res.config.url) {
		return res.data
	}
	switch(code) {
		case 200: // 成功
			return res.data;
		case 400: // 参数错误
			break;
		default:
			net.dialog(res.data.msg)
			return null
	}
}, err => Promise.reject(err));


export default ajax

