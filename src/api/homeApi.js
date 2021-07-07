import request from './request'

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
    }
}

