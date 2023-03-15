import * as types from './mutation-types'
import { homeApi } from '../api/homeApi'
import { mockApi } from '../api/mockRequest'

export default {
   async getCategorys({ commit }) {
      let result = await homeApi.getCategorys()
      commit(types.GET_CATEGORYS, result)
   },
   async getShops({ commit }) {
      let result = await homeApi.getShops()
      commit(types.GET_SHOPS, result)
   },
   async saveUserInfo({commit}, userInfo) {
      if(userInfo !== '') {
         sessionStorage.setItem('username',userInfo.username)
         commit(types.GET_USER_INFO, userInfo)
      }
      else {
         sessionStorage.removeItem('username')
      }
   },




   // data.json
   async getShopGoods({commit}, callback) {
      const result = await mockApi.reqShopGoods()
      console.log('goods', result)
      if (result.code === 0) {
        const goods = result.data
        commit(types.GET_GOODS, {goods})
      }
    },
   async getShopRatings({commit}, callback) {
      const result = await mockApi.reqShopRatings()
      console.log('ratings', result)
      if (result.code === 0) {
        const ratings = result.data
        commit(types.GET_RATINGS, {ratings})
      }
    },
    async getShopInfo({commit}, shopId) {
      let result = await mockApi.reqShopInfo()
      console.log('info', result)
      if (result.code === 0) {
         const info = result.data
         commit(types.GET_INFO, info)
      }
   },
    





}