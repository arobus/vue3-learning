<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  inject: ['teams', 'users'],
  methods: {
    loadTeamMembers(teamId) {
      console.log('teamid', teamId);
      const selectedTeam = this.teams.find(t => t.id == teamId);
      
      for (const member of selectedTeam.members) {
        const selectedUser = this.users.find(user => user.id == member);
        this.members.push(selectedUser);
      }    
      this.teamName = selectedTeam.name;
    }
  },
  created() {
    this.loadTeamMembers(this.teamId);
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate', to, from, next);
    // this will be called when this component is reloaded with another param
  },  
  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>