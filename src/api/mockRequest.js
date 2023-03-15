/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'

/**
 * 获取商家商品数组
 * 获取商家评价数组
 * 获取商家信息
 */
export const mockApi = {
    reqShopGoods() {
        return ajax('/goods')
    },
    reqShopRatings() {
        return ajax('/ratings')
    },
    reqShopInfo() {
        return ajax('/info')
    }
}