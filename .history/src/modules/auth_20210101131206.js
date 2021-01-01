export default {
    namespaced: true,
    state() {
        return {             
            isLogin: false
        }
    },
    mutations: {        
        setLogin(state, payload) {
            state.isLogin = payload.isAuth;
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.isLogin;
        }
    },
    actions: {        
        login(ctx) {
            ctx.commit('setLogin', { isAuth: true })
        },
        logout(ctx) {
            ctx.commit('setLogin', { isAuth: false })
        }
    }
}