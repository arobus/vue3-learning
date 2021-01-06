<template>
    <base-card>
        <template #header>
            <h2>Filter Coach Type</h2>
        </template>
        <template #default>
            <ul>
                <li v-for="role in getRoles" :key="'filter-'+role">
                        <input type="checkbox" :id="'role-' + role" name="role" :value="role" v-model="chosenRoles" @change="updateCoachFilter(chosenRoles)" />
                        <label :for="'role-' + role">{{ role }}</label>

                </li>
            </ul>
        </template>
    </base-card>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            chosenRoles: [ "Frontend"],
        }
    },
    computed: {
        ...mapGetters('coach', ['getRoles'])
    },
    methods: {
        ...mapActions( ['updateCoachFilter'] )
    }
}
</script>
<style scoped>
    li { list-style: none; }
</style>