<template>
    <base-card>
        <template #header>
            <h2>{{ name }}</h2>
        </template>
        <template #default>
            <div v-if="detailed">
                <p>Rate: {{ rate }}</p>
            </div>
            <ul>
                <li :key="role" v-for="role in roles">{{ role }}</li>
            </ul>
        </template>
        <template #actions>
            <base-button @click="contactCoach()" mode='flat'>Contact</base-button>
            <base-button @click="viewCoachDetails()" v-if="!detailed">View Details</base-button>
        </template>
    </base-card>
</template>
<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
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
            default: function () {
                return []
            }
        }
    },
    computed: {
        name() {
            return this.firstName + ' ' + this.lastName
        }
    },
    methods: {
        contactCoach() {
            this.$router.push("/contact/" + this.id)
        },
        viewCoachDetails() {
            this.$router.push("/coach/" + this.id)
        }
    },
    created() {
        console.log('created');
    }

}
</script>