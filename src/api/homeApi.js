import request from './request'
import ajax from './ajax'

export const homeApi = {
    getCategorys() {
        return request({
            url: '/api/home/categorys',
            method: 'post',
        })
    },
    getShops() {
        return request({
            url: '/api/home/shops',
            method: 'post',
        })
    },
}

