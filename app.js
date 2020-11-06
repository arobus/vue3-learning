const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
      confirmName() {
        this.confirmedName = this.name
      },
      setName(e, lastName){
        this.name = e.target.value + ' ' + lastName
      },
      add(num) {
          this.counter += num
      },
      reduce(num) {
          this.counter -= num
      },
      submitForm(){          
        alert('Submitted')
      },
      resetInput(){
          this.name = ''
      }
  }
});

app.mount('#events');
