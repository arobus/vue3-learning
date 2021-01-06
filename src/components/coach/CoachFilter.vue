<template>
    <base-card>
        <template #header>
            <h2>Filter Coach Type</h2>
        </template>
        <template>
            <ul>
                <li v-for="role in getRoles" :key="role">
                    <div class="form-control">
                        <input type="checkbox" :id="'role-' + role" name="role" value="role" v-model="chosenRoles" @change="updateCoachFilter(chosenRoles)" />
                        <label :for="'role-' + role">{{ role }}</label>
                    </div>
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
            chosenRoles: [],
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