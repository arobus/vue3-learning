<template>
  <the-header title="Find a Coach"></the-header>
  <main>
    <router-view></router-view>
  </main>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/common/layout/TheHeader.vue';
import TheFooter from './components/common/layout/TheFooter.vue';
export default {
  components: {
    TheHeader,
    TheFooter
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
a{
    text-decoration: none;
}
</style>