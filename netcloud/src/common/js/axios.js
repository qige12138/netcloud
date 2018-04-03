import axios from 'axios'
import {net} from './public'
import vue from 'vue'
import qs from 'qs'

axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let ajax = {
	get(url,data) {
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
	switch(code) {
		case 200: // 成功
			return res.data;
		default:
			net.dialog(res.data.msg)
			return null
	}
}, err => Promise.reject(err));


export default ajax

