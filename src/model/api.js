import appConfigs from 'src/configs'
import vueRequest from './vueRequest'

/**
 * 测试
 */
export const get_list = (params) => vueRequest(appConfigs.urlWebHttp + '/mall/news/healthInformationCategoryList?', params, 'GET');

