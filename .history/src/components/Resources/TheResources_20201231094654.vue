<template>
    <base-card>
        <base-button @click="setSelectedTab('all-resources')">All Resources</base-button>
        <base-button @click="setSelectedTab('add-resources')">Add Resources</base-button>
        <component :is="selectedTab"></component>
    </base-card>
</template>
<script>
export default {
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