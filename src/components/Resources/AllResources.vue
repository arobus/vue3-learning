<template>
    <ul>        
        <resource v-for="res in resources" :key="res.id" :title="res.title" :description="res.description" :link="res.link"></resource    >
    </ul>
</template>
<script>
import Resource from './Resource.vue';
export default {
    inject: ['resources'],
    components: {
        Resource
    },
    data() {        
        return {
            
        }
    }
}
</script>