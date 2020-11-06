const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
  },
  computed: {
    fullName() {
      if (this.name === '' || this.lastName === '') {
        return ''
      } else {
        return this.name + ' ' + this.lastName
      }      
    }
  },
  methods: {
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
          this.lastName = ''
      }
  }
});

app.mount('#events');
