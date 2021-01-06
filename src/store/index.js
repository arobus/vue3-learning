import { createStore } from 'vuex';

import CoachModule from './modules/coach'
import RequestModule from './modules/request'

const store = createStore({
    modules: {
        coach: CoachModule,
        request: RequestModule
    },
    state() {
        return {
            coachFilter: []
        }
    },
    getters: {
        coachFilter(state) {
            return state.coachFilter
        }
    },
    mutations: {
        setCoachFilter(state, payload) {
            state.coachFilter = payload
        }
    },
    actions: {
        updateCoachFilter(ctx, payload) {
            ctx.commit('setCoachFilter', payload)
        },
        requestResponse(ctx, payload) {
            console.log('ctx', ctx);
            console.log('payload', payload);
        }
    }
});

export default store;