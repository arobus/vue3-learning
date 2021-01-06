<template>
    <CoachFilter />
    <div v-if="coachList.length > 0">
        <Coach
            v-for="coach in coachList"
            :key="coach.id"
            v-bind="coach"
        />
    </div>
    <div v-else>
        <base-card>
            <template #header>
                <h3> No coaches registered </h3>
            </template>
            <template #actions>
                <router-link to="register">Register Coach</router-link>
            </template>
        </base-card>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Coach from '../../components/coach/Coach.vue'
import CoachFilter from '../../components/coach/CoachFilter.vue'

export default {
    components: {
        Coach,
        CoachFilter
    },
    computed: {
        ...mapGetters('coach', ['getCoaches', 'getFilteredCoaches']),
        ...mapGetters(['coachFilter']),
        coachList() {
            console.log('x', this.coachFilter)
            return this.getCoaches.filter(c => c.roles.every(el => this.coachFilter.indexOf(el) !== -1))
        }
    },
    methods: {
        ...mapActions('coach', ['loadCoaches'])
    },
    created(){
        this.loadCoaches();
        console.log(this.$store.state['coach'].coaches)
    }
}
</script>