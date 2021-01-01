<template>
  <ul>
    <button @click="goToTeams">Go to Teams</button>
    <button @click="saveChanges">Save Changes</button>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      changesSaved: false
    }
  },
  inject: ['users'],
  methods: {
    goToTeams() {
      this.$router.push("/teams");
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) {    
    console.log('beforeRouteEnter', to, from, next);
    next();
  },
  beforeRouteLeave(to, from, next) {    
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure?')
      next(userWantsToLeave)
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>  