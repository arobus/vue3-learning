import { createApp } from 'vue';

import NewFriend from './components/NewFriend'
import FriendContact from './components/FriendContact'
import App from './App.vue';

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);
app.mount('#app');
