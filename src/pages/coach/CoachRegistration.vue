<template>
    <form @submit.prevent="submitForm">
        <base-card>
            <template #header>
                <h3>Coach Registration</h3>
            </template>
            <template #default>
                <div class="form-control" :class="{invalid: inputValidity['firstName'] }">
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" v-model.trim="firstName" />
                    <p v-if="inputValidity['firstName']">Please enter a first name</p>
                </div>
                <div class="form-control" :class="{invalid: inputValidity['lastName'] }">
                    <label for="firstName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" v-model.trim="lastName" />
                    <p v-if="inputValidity['lastName']">Please enter a last name</p>
                </div>
                <div class="form-control" :class="{invalid: inputValidity['email'] }">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" v-model.trim="email" />
                    <p v-if="inputValidity['email']">Please enter a email</p>
                </div>
                <div class="form-control" :class="{invalid: inputValidity['rate'] }">
                    <label for="rate">Rate</label>
                    <input type="rate" id="rate" name="rate" v-model.trim="rate" />
                    <p v-if="inputValidity['rate']">Please enter a rate</p>
                </div>
                <div class="form-control" :class="{invalid: inputValidity['role'] }">
                    <h3>Roles</h3>
                    <div class="form-control" v-for="role in getRoles" :key="role">
                        <input type="checkbox" :id="'role-' + role" name="role" :value="role" v-model="roles" />
                        <label :for="'role-' + role">{{ role }}</label>
                    </div>
                    <p v-if="inputValidity['role']">Please choose a role</p>
                </div>
            </template>
            <template #actions>
                <base-button type="submit">Register</base-button>
            </template>
        </base-card>
    </form>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            rate: 0.0,
            roles: [],
            availRoles: [],
            inputValidity: {
                firstName: false,
                lastName: false,
                email: false,
                rate: false,
                role: false
            }
        }
    },
    computed: {
        ...mapGetters('coach', ['getRoles'])
    },
    methods: {
        ...mapActions('coach', ['registerCoach']),
        validateInputs() {
            let valid = true;
            this.inputValidity['firstName'] = false;
            this.inputValidity['lastName'] = false;
            this.inputValidity['email'] = false;
            this.inputValidity['rate'] = false;
            this.inputValidity['role'] = false;

            if (this.firstName.length == 0) {
                this.inputValidity['firstName'] = true;
                valid = false;
            }

            if (this.lastName.length == 0) {
                this.inputValidity['lastName'] = true;
                valid = false;
            }

            if (this.email.length == 0) {
                this.inputValidity['email'] = true;
                valid = false;
            }

            if (this.rate == 0.0) {
                this.inputValidity['rate'] = true;
                valid = false;
            }

            if (this.roles.length == 0) {
                this.inputValidity['role'] = true;
                valid = false;
            }

            return valid;
        },
        submitForm() {
            if (this.validateInputs()) {
                let coach = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    rate: this.rate,
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

    .form-control {
        margin: 0.5rem 0;
    }
    .form-control.invalid input {
        border-color: red;
    }

    .form-control.invalid label {
        color: red;
    }

    label {
        font-weight: bold;
    }

    h2 {
        font-size: 1rem;
        margin: 0.5rem 0;
    }

    input,
    select {
        display: block;
        width: 100%;
        font: inherit;
        margin-top: 0.5rem;
    }

    select {
        width: auto;
    }

    input[type='checkbox'],
    input[type='radio'] {
        display: inline-block;
        width: auto;
        margin-right: 1rem;
    }

    input[type='checkbox'] + label,
    input[type='radio'] + label {
        font-weight: normal;
    }

</style>