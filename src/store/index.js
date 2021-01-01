import { createStore } from 'vuex';

import ProductsModule from './modules/products'
import AuthModule from './modules/auth'
import CartModule from './modules/cart'

const store = createStore({    
    modules: {
        products: ProductsModule,
        auth: AuthModule,
        cart: CartModule
    }    
});

export default store;