<template>
    <form @submit.prevent="submitForm">
        <base-card>
            <template #header>
                <h3>Contact Coach</h3>
                <Coach v-if="getCoach({ id: coachId })" v-bind="getCoach({ id: coachId })" />
            </template>
            <template #default>
                <div class="form-control" :class="{invalid: inputValidity['firstName'] }">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" v-model.trim="name" />
                    <p v-if="inputValidity['name']">Please enter a name</p>
                </div>

                <div class="form-control" :class="{invalid: inputValidity['email'] }">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" v-model.trim="email" />
                    <p v-if="inputValidity['email']">Please enter a email</p>
                </div>
                <div class="form-control" :class="{invalid: inputValidity['content'] }">
                    <label for="content">Content</label>
                    <textarea id="content" name="content" v-model.trim="content" />
                    <p v-if="inputValidity['content']">Please enter content</p>
                </div>
            </template>
            <template #actions>
                <base-button type="submit">Submit</base-button>
            </template>
        </base-card>
    </form>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Coach from '../../components/coach/Coach.vue'
export default {
    props: ['coachId'],
    components: {
        Coach
    },
    data() {
        return {
            name: "",
            email: "",
            content: "",
            inputValidity: {
                name: false,
                email: false,
                content: false
            }
        }
    },
    computed: {
        ...mapGetters('coach', ['getCoach'])
    },
    methods: {
        ...mapActions('request', ['requestCoach']),
        validateInputs() {
            let valid = true;
            this.inputValidity['name'] = false;
            this.inputValidity['email'] = false;
            this.inputValidity['content'] = false;

            if (this.name.length == 0) {
                this.inputValidity['name'] = true;
                valid = false;
            }

            if (this.email.length == 0) {
                this.inputValidity['email'] = true;
                valid = false;
            }

            if (this.content.length == 0) {
                this.inputValidity['content'] = true;
                valid = false;
            }

            return valid;
        },
        submitForm() {
            if (this.validateInputs()) {
                let request = {
                    name: this.name,
                    email: this.email,
                    content: this.content,
                    coachId: this.coachId
                };
                this.requestCoach(request);
            }
        },
    }
}
</script>
<style scoped>
    .form-control {
        margin: 0.5rem 0;
        display: flex;
        flex-direction: column;
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