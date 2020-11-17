const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                }

            ]
        }
    }
})

app.component('friend-contact', {
    template: `<li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="showDetails">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>`,
  props: ['friend'], // not in lecture
  data() {
      return {
          showDetails: false
      }
  },
  methods: {
      toggleDetails() {
          this.showDetails = !this.showDetails
      }
  }
  
})


app.mount("#app");

