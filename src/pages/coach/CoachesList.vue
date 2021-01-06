<template>
    <Coach
        v-for="coach in coachList"
        :key="coach.id"
        v-bind="coach"
    />
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Coach from '../../components/coach/Coach.vue'

export default {
    components: {
        Coach
    },
    computed: {
        ...mapGetters('coach', ['getCoaches']),
        ...mapGetters(['coachFilter']),
        coachList() {
            return this.getCoaches.filter(c => c.roles.every(el => this.coachFilter.indexOf(el) !== -1))
        }
    },
    methods: {
        ...mapActions('coach', ['loadCoaches'])
    },
    created(){
        this.loadCoaches();
    }
}
</script>