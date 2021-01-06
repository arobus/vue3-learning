<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h2>{{ user.age }}</h2>
  </section>
</template>

<script>
import {
  // ref
  reactive
  } from 'vue'
export default {
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  setup() {
    // single variable ref
    // const uName = ref('Maximilian');

    // setTimeout(function(){
    //   uName.value = 'Max';
    // }, 2000);
    // return { userName: uName };

    // object ref
    // const user = ref({
    //   name: 'Maximilian',
    //   age: 31
    // });

    // setTimeout(function(){
    //   user.value.name = 'Max';
    //   user.value.age = 32;
    // }, 2000);
    // return { user: user };

    // object reactive
    const user = reactive({
      name: 'Maximilian',
      age: 31
    })

    setTimeout(function(){
      user.name = 'Max';
      user.age = 32;
    }, 2000);
    return { user: user };
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>