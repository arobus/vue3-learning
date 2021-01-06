<template>
  <user-alert v-if="alertIsVisible" title="Add a User?" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script>
import alertMixin from '../mixins/alert';
import UserAlert from './UserAlert.vue';

export default {
  components: {
    UserAlert,
  },
  // if we add a data property which is already in the mixin here in the component,
  // the component value overrides it
  // for e,g
  // data() {
  // return { isAlertVisible: true }
  //}
  // this would make the add user dialog visible on page load
  mixins: [ alertMixin ]
};
</script>