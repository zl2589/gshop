const getter = {
    address: state => state.address,
    categorys: state => state.categorys,
    shops: state => state.shops,
    userInfo: state => {
        return state.userInfo || sessionStorage.getItem('username')
    },
}

export default getter