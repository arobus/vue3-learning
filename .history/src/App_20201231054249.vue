<template>
    <ul>        
        <res-list-item v-for="res in storedResources" :key="res.id" :title="res.title" :description="res.description" :link="res.link"></res-list-item>
    </ul>
</template>

<script>
import ResListItem from './components/Resources/ResListItem.vue'

export default {
    components: {
        ResListItem
    },
    data() {        
        return {
            storedResources: [
                { 
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation',
                    link: 'https://vuejs.org'
                },
                { 
                    id: 'google',
                    title: 'Google',
                    description: 'Google',
                    link: 'https://google.com'
                },
            ]
        }
    }
}
</script>