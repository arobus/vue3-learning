<template>
    <the-header title="Don't Forget Me"></the-header>
    <all-resources></all-resources>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import AllResources from './components/Resources/AllResources.vue'

export default {
    components: {
        AllResources,
        TheHeader
    }
}
</script>