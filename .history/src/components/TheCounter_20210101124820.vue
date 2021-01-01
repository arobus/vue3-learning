<template>
    <h3>{{ finalCounter }}</h3>    
</template>

<script>
export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter
    // }
    ...mapGetters(['finalCounter'])
  }
}
</script>