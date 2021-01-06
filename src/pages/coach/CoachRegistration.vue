<template>
    <form @submit.prevent="submitForm">
        <base-card>
            <template #header>
                <h3>Coach Registration</h3>
            </template>
            <template #default>
                <div class="form-control" :class="{invalid: inputValidity['firstName'] == 'invalid' }">
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" v-model.trim="firstName" />
                    <p v-if="inputValidity['firstName'] == 'invalid'">Please enter a first name</p>
                </div>
                <div class="form-control" :class="{invalid: inputValidity['lastName'] == 'invalid' }">
                    <label for="firstName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" v-model.trim="lastName" />
                    <p v-if="inputValidity['lastName'] == 'invalid'">Please enter a last name</p>
                </div>
                <div class="form-control" :class="{invalid: inputValidity['email'] == 'invalid' }">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" v-model.trim="email" />
                    <p v-if="inputValidity['email'] == 'invalid'">Please enter a email</p>
                </div>
                <h3>Roles</h3>
                <div class="form-control" v-for="role in getRoles" :key="role">
                    <input type="checkbox" :id="'role-' + role" name="role" value="role" v-model="roles" />
                    <label :for="'role-' + role">{{ role }}</label>
                </div>
            </template>
            <template #actions>
                <base-button type="submit">Register</base-button>
            </template>
        </base-card>
    </form>
</template>
<script>
export default {
    data() {
        return {
            firstName: null,
            lastName: null,
            email: null,
            roles: [],
            availRoles: []
        }
    },
    computed: {
        ...mapGetters('coach', ['getRoles'])
    },
    methods: {
        ...mapActions('coach', ['registerCoach']),
        validateInputs() {
            let valid = true;

            return valid;
        },
        submitForm() {
            if (this.validateInputs()) {
                let coach = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    roles: this.roles
                };
                this.registerCoach(coach);
            }
        },
    }
}
</script>
<style scoped>
    .form-control {
        margin: 0.5rem 0;
    }

    input[type='text'] {
        display: block;
        width: 20rem;
        margin-top: 0.5rem;
    }
</style>