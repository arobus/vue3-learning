<template>
  <section class="container">
    <!-- use userName if using single variable ref -->
    <!-- <h2>{{ user.name }}</h2>
    <h2>{{ user.age }}</h2> -->
    <!-- <h2>{{ uName }}</h2>
    <h2>{{ uAge }}</h2> -->
    <user-data :firstName="firstName" :lastName="lastName" :userAge="uAge"></user-data>
    <button @click="changeAge">Change Age</button>
    <input v-model="firstName">
    <input ref="lastNameInput">
    <button @click="setLastName">Set Last Name</button>

  </section>
</template>

<script>
import {
   ref
  //,reactive
  ,computed
  , watch
  //, provide

  // life cycle methods create, beforeCreate are not needed in comp api because they are happening at the same time as setup
  // onBeforeMount,
  // onMounted,
  // onBeforeUpdate,
  // onUpdated,
  // onBeforeUnmount,
  // onUnMounted
  } from 'vue'

import UserData from './components/UserData.vue'
export default {
  components: {
    UserData
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  setup(
    //props, context
    ) {
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
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 31
    // })

    // setTimeout(function(){
    //   user.name = 'Max';
    //   user.age = 32;
    // }, 2000);
    // return { user: user };

    const firstName = ref('');
    const lastName = ref('');

    const uAge = ref(31);

    const uName = computed(function() {
      return firstName.value + ' ' + lastName.value
    })

    const lastNameInput = ref(null);

    function changeAge() {
      uAge.value = 32;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    watch([uAge, uName], function(newValues, oldValues) {
      console.log('oldAge', oldValues[0])
      console.log('newAge', newValues[0])
      console.log('oldName', oldValues[1])
      console.log('newName', newValues[1])
    });


    // context.emit('event-name', data)

    // provide('userAge', uAge);

    return {
      uName,
      uAge,
      changeAge,
      firstName,
      lastName,
      setLastName,
      lastNameInput
    }
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