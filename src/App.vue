<template>
    <div style="display: flex; justify-content: space-between;">
        <active-user v-if="user.name !== ''" v-bind="user"></active-user>
        <user-data @update-user="updateUser"></user-data>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {
                name: "",
                age: null
            }
        }
    },
    methods: {
        updateUser(user) {
            this.user = user
        }
    }
}
</script>