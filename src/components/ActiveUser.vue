<template>
    <div>
        <h2>Active User</h2>
        <p>Name: <span v-text="name"></span></p>
        <p>Age: <span v-text="age"></span></p>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    }
}
</script>