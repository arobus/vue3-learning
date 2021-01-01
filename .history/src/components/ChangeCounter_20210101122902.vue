<template>
    <button @click="addOne">Add One</button>
    <button @click="addBy11">Add By 11</button>
</template>

<script>
export default {
    methods: {
        addOne() {
            this.$store.commit('increment');
        },
        addBy11() {
            // this.$store.commit('increase', { value: 11 })
            // another way to do it
            this.$store.commit({
                type: 'increase',
                value: 11
            })
        }
    }
}
</script>