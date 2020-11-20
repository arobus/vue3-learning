<template>
    <form @submit.prevent>
        <div>
            <input type="text" v-model="name" placeholder="Name">
        </div>
        <div>
            <input type="text" v-model="phoneNumber" placeholder="Phone">
        </div>
        <div>
            <input type="text" v-model="emailAddress" placeholder="Email"> 
        </div>        
        <div> 
            <button @click="submit">Submit</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'NewFriend',
    emits: {
        'add-friend': function(friend) {
            if (friend) {
                return true; 
            } else {
                console.warn('Friend object is empty');
                return false;
            }
        }
    },
    data() {
        return {
            name: "",
            phoneNumber: "",
            emailAddress: ""
        }
    },
    methods: {
        submit() {
            const d = {
                id: new Date().toISOString(),
                name: this.name,
                phoneNumber: this.phoneNumber,
                emailAddress: this.emailAddress          
            }
            this.$emit('add-friend', d);
            this.reset();
        },
        reset() {
            this.name = "";
            this.phoneNumber = "";
            this.emailAddress = "";
        }
    }

}
</script>