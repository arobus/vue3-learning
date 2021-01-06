<template>
    <Coach
        v-bind="getCoach({ id: coachID })"
        detailed="true"
    />
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        coachID: {
            type: Number,
            required: true
        }
    },
    computed: {
        ...mapGetters("coach", ['getCoach'])
    }
}
</script>
