import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';


import CounterModule from './modules/counter'

const store = createStore({
    namespaced: true,
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

const app = createApp(App);

app.use(store);

app.mount('#app');
