<template>
    <base-dialog v-if="showErrorDialog" title="Error!">
        <template #default>
            <p>Resource not found</p>
        </template>
        <template #actions>
            <base-button @click="confirmError">OK</base-button>
        </template>
    </base-dialog>
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
      showErrorDialog: false
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
    },
    deleteResource(id) {
        console.log('id', id)
        if (id) {
            let index = this.storedResources.findIndex(r => r.id === id);            
            if (index != -1) {
                this.storedResources.splice(index, 1);
            } else {
                this.showErrorDialog = true;
            }
        } else {
            this.showErrorDialog = true;
        }
    },
    confirmError() {
        this.showErrorDialog = false;
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
      addResource: this.addResource,
      deleteResource: this.deleteResource
    };
  },
};
</script>