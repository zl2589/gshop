const getter = {
    address: state => state.address,
    categorys: state => state.categorys,
    shops: state => state.shops,
    userInfo: state => {
        return state.userInfo || sessionStorage.getItem('username')
    },
    goods: state => state.goods,
    ratings: state => state.ratings,
    info: state => state.info,
}

export default getter