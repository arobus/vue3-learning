<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ buttonText }}</button>
        <ul v-if="showDetails">
            <li>
                <strong>Phone: </strong><span>{{ friend.phone }}</span>
            </li>
            <li>
                <strong>Email: </strong><span>{{ friend.email }}</span>
            </li>
        </ul>
    </li>
</template>
<script>
export default {
    name: 'App',
    props: ['friend'],
    data() {
        return {
            showDetails: false                     
        }
    },
    computed: {
        buttonText() {
            return this.showDetails ? 'Hide Details' : 'Show Details';
        }
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails;
        }
    }
}
</script>