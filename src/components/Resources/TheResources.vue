<template>
  <base-card>
    <base-button 
        @click="setSelectedTab('all-resources')"
        :mode="allResourcesButtonMode"
      >All Resources</base-button>
    <base-button 
        @click="setSelectedTab('add-resource')"
        :mode="addResourceButtonMode"
      >Add Resource</base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>
<script>
import AllResources from './AllResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    AllResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'all-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Google',
          link: 'https://google.com',
        },
      ],
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(resource) {
        const newResource = {
            id: new Date().toISOString(),
            ...resource
        }
        this.storedResources.unshift(newResource);
        this.selectedTab = 'all-resources';
    }
  },
  computed: {
    allResourcesButtonMode() {
        return this.selectedTab == 'all-resources' ? null : 'flat'
    },
    addResourceButtonMode() {
        return this.selectedTab == 'add-resource' ? null : 'flat'
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource
    };
  },
};
</script>