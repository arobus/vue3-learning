const app = Vue.createApp({
    data() {
        return {
            name: "Anurup Raveendran",
            age: 30,
            image: "https://i.imgur.com/QLEsSjE.jpeg",

        }
    },
    methods: {
        outputRandNumber() {
            return Math.random()
        }
    }
})

app.mount("#assignment")