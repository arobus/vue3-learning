import { createApp } from 'vue';

import store from './store/'
import router from './router'

import App from './App.vue'


import BaseCard from './components/common/UI/BaseCard.vue'
import BaseButton from './components/common/UI/BaseButton.vue'
import BaseDialog from './components/common/UI/BaseDialog.vue'
import BaseSpinner from './components/common/UI/BaseSpinner.vue'

const app = createApp(App)

app.config.devtools = true

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.component('base-spinner', BaseSpinner);

app.use(store);
app.use(router);

app.mount('#app');
