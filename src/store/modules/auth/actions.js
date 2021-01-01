export default {        
    login(ctx) {
        ctx.commit('setLogin', { isAuth: true })
    },
    logout(ctx) {
        ctx.commit('setLogin', { isAuth: false })
    }
}