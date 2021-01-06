<template>
    <base-card>
        <template #header>
            <h2>{{ name }}</h2>
        </template>
        <template #default>
            <ul>
                <li :key="role" v-for="role in roles">{{ role }}</li>
            </ul>
        </template>
        <template #actions>
            <base-button mode='flat'>Contact</base-button>
            <base-button>View Details</base-button>
        </template>
    </base-card>
</template>
<script>
export default {
    props: {
        firstName: {
            type: String,
            default: ''
        },
        lastName: {
            type: String,
            default: ''
        },
        detailed: {
            type: Boolean,
            default: false
        },
        rate: {
            type: Number,
            default: 0.0
        },
        roles: {
            type: Array,
            default: []
        }
    },
    computed: {
        name() {
            return this.firstName + ' ' + this.lastName
        }
    }

}
</script>