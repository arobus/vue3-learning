<template>
    <ul>        
        <resource v-for="res in storedResources" :key="res.id" :title="res.title" :description="res.description" :link="res.link"></resource>
    </ul>
</template>
<script>
import Resource from './Resource.vue';
export default {
    components: {
        Resource
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