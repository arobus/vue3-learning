const app = Vue.createApp({
    data(){
        return {
            output: '',
            confirmedOutput: ''
        }
    },
    methods: {
        showAlert(){
            alert('You clicked the button!')
        },
        setOutput(e){
            this.output = e.target.value
        },
        setConfirmedOutput(e){
            this.confirmedOutput = this.output
        }
    }
})

app.mount("#assignment")