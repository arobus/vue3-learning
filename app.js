const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            inputTask: '',
            taskListVisible: true
        }
    },
    computed:{
        hideShowListButtonText() {
            return this.taskListVisible ? 'Hide List' : 'Show List'
        }
    },
    methods: {
        addTask() {
            if (this.inputTask !== '') {
                this.tasks.push(this.inputTask)
                this.inputTask = ''
            } else {
                alert('Task cannot be empty')
            }
        },
        removeTask(index){
            if (this.tasks[index]) {
                this.tasks.splice(index, 1)
            } else {
                alert('Error removing task. Please try again')
            }
        },
        toggleListVisibility() {
            this.taskListVisible = !this.taskListVisible
        }

    }
})



app.mount("#assignment")