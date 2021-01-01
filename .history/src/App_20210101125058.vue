<template>
  <base-container title="Vuex"></base-container>
  <the-counter></the-counter>
  <favorite-value></favorite-value>
  <change-counter></change-counter>

</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import UserAuth from './components/UserAuth.vue';
 
export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue,
    ChangeCounter,
    UserAuth
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
