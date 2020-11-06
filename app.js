const app = Vue.createApp({
  data() {
    return { 
        goal: '',
        goals: [] 
    };
  },
  methods: {
      removeGoal(index) {
        this.goals.splice(index, 1)
      },
      addGoal() {
        if (this.goal !== '') {
            this.goals.push(this.goal)
            this.goal = ''
        } else {
            alert('Goal cannot be empty')
        }
      }
  }
});

app.mount('#user-goals');
