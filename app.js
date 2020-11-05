Vue.createApp({
    data() {
        return {
            goals: [],
            goal: null,
            errors: []
        }
    },
    computed: {
        valid() {            
            return this.goal != null && typeof goal !== 'undefined' && this.goal.length > 0;
        }
    },
    methods: {
        addGoalToList() {
            if (this.valid) {
                this.goals.push(this.goal)
                this.goal = ''
                this.errors = []
            } else {
                console.error('Goal is required')
                this.errors.push("Goal is required")
            }
            
        }
    }
}).mount("#app")