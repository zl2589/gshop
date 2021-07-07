import * as types from './mutation-types'
import { homeApi } from '../api/homeApi'

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
}