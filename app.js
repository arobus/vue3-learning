const app = Vue.createApp({
  data() {
    return {
      userDefinedClass: '',
      paraVisible: true,      
      userDefinedBGColor: ''
    }
  },
  computed: {
    paraClasses() {
      return {
        user1: this.userDefinedClass === 'user1',
        user2: this.userDefinedClass === 'user2',
        visible: this.paraVisible,
        hidden: !this.paraVisible
      }
    },
    paraStyle(){
      return {
        backgroundColor: this.userDefinedBGColor !== '' ? this.userDefinedBGColor : '#8ddba4'
      }
    }
  },
  methods: {
    toggle() {
      this.paraVisible = !this.paraVisible
    }
  }
})

app.mount("#assignment")