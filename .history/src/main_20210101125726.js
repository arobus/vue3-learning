import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return { 
            counter: 0,
            isLogin: false
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value
        },
        setLogin(state, payload) {
            state.isLogin = payload.isAuth;
        }

    },
    getters: {
        isLoggedIn(state) {
            return state.isLogin;
        },
        finalCounter(state) {
            return state.counter * 2;

        },
        normalizeCounter(state, getters) {
            console.log('state', state);
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
            setTimeout(function() {
                ctx.commit('increment')
            }, 2000);
        },
        increase(ctx, payload) {
            setTimeout(function() {
                ctx.commit('increase', payload)
            }, 2000);
        },
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
