import * as types from './mutation-types'

const mutations = {
    [types.GET_CATEGORYS](state, categorys) {
        state.categorys = categorys
    },
    [types.GET_SHOPS](state, shops) {
        state.shops = shops
    },
    [types.GET_USER_INFO](state, userInfo) {
        state.userInfo = userInfo
    },
    [types.GET_GOODS](state, goods) {
        state.goods = goods
    },
    [types.GET_RATINGS](state, ratings) {
        state.ratings = ratings
    },
    [types.GET_INFO](state, info) {
        state.info = info
    },
}

export default mutations