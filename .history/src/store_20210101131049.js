import { createStore } from 'vuex';

import CounterModule from './modules/counter'

const store = createStore({    
    modules: {
        counter: CounterModule
    },    
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
});

export default store;