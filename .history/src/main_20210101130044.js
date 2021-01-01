import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';


const counterModule = {
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value
        },
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2;
        },
        normalizeCounter(state, getters) {
            const finalCounter =  getters.finalCounter;
            if (finalCounter < 0) {
                return 0;
            } else if (finalCounter > 100) {
                return 100;

            } else {
                return finalCounter;
            }

        }
    },
    actions: {
        increment(ctx) {
            // demonstrate async
            setTimeout(function() {
                ctx.commit('increment')
            }, 2000);
        },
        increase(ctx, payload) {
            ctx.commit('increase', payload)            
        }
    }
}

const store = createStore({
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
