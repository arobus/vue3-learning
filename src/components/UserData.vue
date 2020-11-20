<template>
    <div>
        <h2> User Data </h2>  
        <form @submit.prevent="submitData">
            <input type="text" :rules="!!name || 'Field is required.'" v-model="name" placeholder="Name">
            <input type="text" :rules="!!age || 'Field is required.'" v-model="age" placeholder="Age">
            <button>Submit</button>
        </form>
    </div>
</template>
<script>
export default {
    emits: ['update-user'],
    data() {
        return {
            name: '',
            age: null
        }
    },
    methods: {
        submitData() {
            if (this.name && this.age) {
                this.$emit('update-user', {
                    name: this.name,
                    age: this.age
                })
            } else {
                alert('Fields are required')
            }
        }
    }
}
</script>