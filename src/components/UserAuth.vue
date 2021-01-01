<template>
    <button v-if="!isLoggedIn" @click="login">Login</button>
    <button v-if="isLoggedIn" @click="logout">Logout</button>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('auth', ['isLoggedIn'])
    },
    methods : {
        ...mapActions('auth', [ 'login', 'logout' ])
    }
}
</script>