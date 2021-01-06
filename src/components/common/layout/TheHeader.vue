<template>
    <header>
        <router-link to="/"><h1>{{ title }}</h1></router-link>
        <the-navigation></the-navigation>
    </header>
</template>

<script>
import TheNavigation from '../nav/TheNavigation.vue'
export default {
    components: {
        TheNavigation
    },
    props: ['title']
}
</script>
<style scoped>
    header {
        width: 100%;
        height: 5rem;
        background-color: #640032;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    header h1 {
        color: white;
        margin: 0;
    }
</style>