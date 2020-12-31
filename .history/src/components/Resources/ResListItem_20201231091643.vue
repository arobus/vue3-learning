<template>
    <li>
        <div>
            <header>
                <h3>{{ title }}</h3>
                <button>Delete</button>
            </header>        
            <p>{{ description }}</p>
            <nav>
                <a :href="link">View Resource</a>
            </nav>
        </div>
    </li>
</template>
<script>
export default {
    props: ['title', 'description', 'link']
}
</script>

<style scoped>
    div {
        padding: 1rem;
        box-shadow: 0px 3px 6px -2px #333;
        border-radius: 15px;
        display: flex;
    }

    header {
        display: flex;
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
    }

    button {
        background-color: rgb(105, 188, 236);
        border: 0;
        padding: 1em;
        border-radius: 5px;
        color: white;
        box-shadow: 0px 4px -5px 2px #333;
    }
</style>