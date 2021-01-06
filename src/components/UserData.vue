<template>
    <h2>{{ uName }}</h2>
    <h3>{{ userAge }}</h3>
</template>
<script>
import {
    computed,
    // inject
} from 'vue'

export default {
    props: ['firstName', 'lastName', 'userAge'],
    setup(props){
        const uName = computed(function() {
            return props.firstName + ' ' + props.lastName
        })

        // const age = inject('userAge') // read-only
        return { uName }
    }
}
</script>
