<template>
    <the-header title="Don't Forget Me"></the-header>
    <the-resources></the-resources>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheResources from './components/Resources/TheResources.vue'

export default {
    components: {
        TheResources,
        TheHeader
    }
}
</script>