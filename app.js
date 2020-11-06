const app = Vue.createApp({
  data() {
    return {
      number: 0      
    }
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet"
      } else if (this.number > 37) {
        return "Too Much!"
      } else {
        return ''
      }      
    }
  },
  methods: {
    add(num) {
      this.number += num
    }
  },
  watch: {
    result() {
      const self = this
      setTimeout(function() {
        self.number = 0
      }, 5000)
    }
  }
})

app.mount("#assignment")