import { createApp } from 'vue';

import App from './App.vue';
import loggerMixin from './mixins/logger'

const app = createApp(App)

// this would be called from all components
app.mixin(loggerMixin);

app.mount('#app');
