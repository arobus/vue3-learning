<template>
    <base-card :key="'req-'+req.id" v-for="req in getRequests">
        <h2>Name: {{ req.name }} </h2>
        <h3>Email: {{ req.email }} </h3>
        <p>{{ req.content }} </p>
    </base-card>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('request', ['getRequests'])
    },
    methods: {
        ...mapActions('request', ['loadRequests'])
    },
    created() {
        this.loadRequests()
    }
}
</script>