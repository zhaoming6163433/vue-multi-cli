import Vue from 'vue';
import appConfigs from 'src/configs'
import util from 'src/util/util.js'

export default async(apiurl = '', params = {}, type = 'GET', method = '', userparam = false) => {
    type = type.toUpperCase();
	if(method == 'ajax'){
		return new Promise((resolve, reject) => {
            $.ajax({
                url: apiurl,
                data: params,
                type: "POST",
                contentType : false,
                processData : false,
                success: function (res) {
                    if(res.code == 0){
                        resolve(res)
                    }else
                    if(res.code == 1000||res.code == 1001){//未登录直接跳转
                        reject(res);
                        util.vuethis.$router.push({"name":"login"});
                    }else if(res.code == 1002){
                        util.warningtip("请完善信息后操作");
                        util.vuethis.$router.push({"name":"hospitalinfo"});
                    }else{
                        util.errortip(res.message);
                        reject(res)
                    }
                },
                error:function(res){
                    reject(res);
                },
                timeout:appConfigs.timeout
            });
	    });
	}else{
		return new Promise((resolve, reject) => {
			Vue.http({
				method : type,
				url : apiurl,
				timeout:appConfigs.timeout,
				headers : {
					'Content-Type':'application/json;charset=utf-8',
				},
                body : type == 'POST'&&!userparam ? params: '',
                params: type == 'GET'&&!userparam || type == 'POST'&&userparam ? params: ''
			}).then(res => {
				resolve(res.body);
			}).catch(err => {
        util.errortip('网络请求失败');
				reject(err)
			})
		});
	}
}
