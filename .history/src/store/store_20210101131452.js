import { createStore } from 'vuex';

import CounterModule from './modules/counter'
import AuthModule from './modules/auth'

const store = createStore({    
    modules: {
        counter: CounterModule,
        auth: AuthModule
    }    
});

export default store;