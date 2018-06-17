/**
 * 配置编译环境和线上环境之间的切换
 *
 * urlWebHttp: 域名地址
 * toastime: toast时间
 *
 */
import Vue from 'vue';

const toastime = 3000;
const timeout = 60000;

let urlWebHttp;
let plant = '';

/* 定义不同入口，跳转路径配置 index.js*/
if (location.hostname === 'localhost') {
  Vue.prototype.HTTPLOCAT = '/module'
} else {
  const http = window.location.protocol + '//' + location.hostname + ':' + location.port
  Vue.prototype.HTTPLOCAT = http + '/' // （这个路径改为你服务器的路径）
}

console.log(process.env)
//切换环境 //线上https://healthapi.zhiscity.com/wmp/rest/weixinShare/getBase4JsSdk/ff8080815d2a2b25015d83703046009a
switch (process.env.srconfig) {
	case 'dev':
		urlWebHttp = location.protocol + "//" + window.location.hostname;
		break;
	case 'beta':
		urlWebHttp = location.protocol + "//" + window.location.hostname;
		break;
	case 'pro':
		urlWebHttp = location.protocol + "//" + window.location.hostname;
		break;
	case 'testdev':
		urlWebHttp = location.protocol + "//" + window.location.hostname;
		break;
	default://默认开发
		urlWebHttp = "https://devo2o.zhiscity.com";
		break;
}

//判断平台
if(navigator.userAgent.match(/MicroMessenger/igm)){
	plant = 'weixin';
}


export default{
	urlWebHttp,
	plant
}
