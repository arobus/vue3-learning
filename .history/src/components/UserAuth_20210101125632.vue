<template>
    <button v-if="!isLoggedIn" @click="login">Login</button>
    <button v-if="isLoggedIn" @click="logout">Logout</button>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['isLoggedIn'])
    },
    methods : {
        ...mapActions([ 'login', 'logout' ])
    }
}
</script>