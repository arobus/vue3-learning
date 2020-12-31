<template>
    <base-dialog v-if="showErrorDialog" title="Error!">
        <template #default>
            <p>Please check inputs again</p>
        </template>
        <template #actions>
            <base-button @click="confirmError">OK</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input v-model="title" id="title" name="title" type="text">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea v-model="description" id="description" name="description" rows="3"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input v-model="link" id="link" name="link" type="url">
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
export default {
    inject: ['addResource'],
    data() {
        return {
            title: "",
            description: "",
            link: "",
            showErrorDialog: false          
        }
    },
    methods: {
        submitData() {
            if (this.isInputsValid) {
                this.addResource({ title: this.title, description: this.description, link: this.link });

            } else {
                this.showErrorDialog = true;
            }
        },
        confirmError() {
            this.showErrorDialog = false;
        }
    },
    computed: {
        isInputsValid() {
return (this.title.trim() != "" && this.description.trim() != "" && this.link.trim() != "" );
        }
    }
}
</script>

<style scoped>
    label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
    }

    input,
    textarea {
        display: block;
        width: 100%;
        font: inherit;
        padding: 0.15rem;
        border: 1px solid #ccc;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: #3a0061;
        background-color: #f7ebff;
    }

    .form-control {
        margin: 1rem 0;
    }
</style>