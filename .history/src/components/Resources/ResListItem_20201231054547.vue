<template>
    <li>
        <div>
            <header>
                <h3>{{ title }}</h3>
                <button>Delete</button>
            </header>
        </div>
        <p>{{ description }}</p>
        <nav>
            <a :href="link">View Resource</a>
        </nav>
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
    }
</style>