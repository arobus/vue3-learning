<template>
  <base-container title="Vuex" v-if="isLoggedIn">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <change-counter></change-counter>
  </base-container>


  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
  

</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import UserAuth from './components/UserAuth.vue';

import { mapGetters } from 'vuex'
export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue,
    ChangeCounter,
    UserAuth
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
