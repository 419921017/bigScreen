import state from 'src/vuex/store'
import axios from 'src/units/axios'


export function getWxTicket(params) {
    return axios({
        url: 'https://qyapi.weixin.qq.com/cgi-bin/gettoken',
        method: 'get',
        params: params
    });
}

export function getWxTocken(token) {
    return axios({
        url: 'https://qyapi.weixin.qq.com/cgi-bin/get_jsapi_ticket',
        method: 'get',
        params: token
    });
}