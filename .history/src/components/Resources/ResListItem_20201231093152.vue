<template>
    <li>
        <base-card>
            <header>
                <h3>{{ title }}</h3>
                <button>Delete</button>
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
  props: ['title', 'description', 'link']
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

    button {
        background-color: rgb(105, 188, 236);
        border: 0;
        padding: 2em;
        line-height: 0em;
        border-radius: 5px;
        color: white;
        box-shadow: 0px 3px 3px -2px #aaa;
        max-height: 50px;
        cursor: pointer;
    }
</style>