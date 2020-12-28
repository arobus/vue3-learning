<template>
    <!-- using dynamic components -->
    <!-- <keep-alive> we don't need keep alive since we are not using any inputs and don't need state to saved in case we switch  components -->
    <!-- just keeping it here for knowing the syntax--> 
        <component :is="selectedComponent"></component>
    <!-- </keep-alive>     -->
    <div style="display: flex">
        <button @click="selectedComponent = 'goals-list'" :disabled="selectedComponent == 'goals-list'">Goals List</button>
        <button @click="selectedComponent = 'manage-goals'" :disabled="selectedComponent == 'manage-goals'">Manage Goals</button>
    </div>
</template>

<script>
import GoalsList from './GoalsList.vue'
import ManageGoals from './ManageGoals.vue'
export default {
    components: {
        GoalsList,
        ManageGoals
    },
    data() {
        return {
            selectedComponent: "goals-list"
        }
    }
}
</script>