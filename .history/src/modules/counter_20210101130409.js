export default  {
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
        // module state is local
        // this won't work
        testAuth(state) {
            return state.isLoggedIn;
        },
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