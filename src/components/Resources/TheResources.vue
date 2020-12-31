<template>
    <base-card>
        <base-button @click="setSelectedTab('all-resources')">All Resources</base-button>
        <base-button @click="setSelectedTab('add-resources')">Add Resources</base-button>
        <component :is="selectedTab"></component>
    </base-card>
</template>
<script>
import AllResources from './AllResources.vue'
import AddResource from './AddResource.vue'

export default {
    components: {
        AllResources,
        Resource
    },
    data() {
        return {
            selectedTab: "all-resources"
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        }
    }
}
</script>