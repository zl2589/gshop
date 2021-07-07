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
}

export default mutations