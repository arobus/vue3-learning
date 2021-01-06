<template>
    <Coach
        v-if="getCoach({ id })"
        v-bind="getCoach({ id })"
        detailed="true"
    />
</template>
<script>
import { mapGetters } from 'vuex'
import Coach from '../../components/coach/Coach'
export default {
    components: {
        Coach
    },
    props: ['id'],
    computed: {
        ...mapGetters("coach", ['getCoach'])
    },
    mounted() {
        console.log('coachID', this.id)
    }
}
</script>
