<template>
    <button @click="increment">Add One</button>
    <button @click="increase({ value: 11 })">Add By 11</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions(['increment', 'increase'])
        // addOne() {
        //     this.$store.dispatch('increment');
        // },
        // addBy11() {
        //     // this.$store.commit('increase', { value: 11 })
        //     // another way to do it
        //     this.$store.dispatch({
        //         type: 'increase',
        //         value: 11
        //     })
        // }
    }
}
</script>