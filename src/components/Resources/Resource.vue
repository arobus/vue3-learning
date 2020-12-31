<template>
    <li>
        <base-card>
            <header>
                <h3>{{ title }}</h3>
                <base-button @click="deleteResource(id)" mode="flat">Delete</base-button>
            </header>        
            <p>{{ description }}</p>
            <nav>
                <a :href="link">View Resource</a>
            </nav>
        </base-card>
    </li>
</template>
<script>
export default {  
  inject: ['deleteResource'],
  props: ['id', 'title', 'description', 'link']
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    p {
        padding: 0.5em;
        width: 100%;
    }

    li {
        list-style:  none;
    }

    nav a {
        text-decoration: none;
        color: steelblue;
    }    
</style>