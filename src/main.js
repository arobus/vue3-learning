import { createApp } from 'vue';

import store from './store/'
import router from './router'

import App from './App.vue'


import BaseCard from './components/common/UI/BaseCard.vue'
import BaseButton from './components/common/UI/BaseButton.vue'

const app = createApp(App)

app.component(BaseCard);
app.component(BaseButton);

app.use(store);
app.use(router);

app.mount('#app');
