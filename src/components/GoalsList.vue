<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" another-prop="sfsdf"></slot>
        </li>        
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals : ["Do #1", "Do #2"]
        }
    }
}
</script>