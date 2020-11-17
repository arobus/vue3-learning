<template>
    <h2>My Friends</h2>
    <ul>
        <friend-contact :key="friend.name" v-for="friend in friends" :friend="friend"></friend-contact>
    </ul>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            friends: [
                {
                    name: "Anurup Raveendran",
                    phone: '1920029119200291',
                    email: 'anurup@raveedran.me'
                },
                {
                    name: "Arun Raveendran",
                    phone: '1230029119200291',
                    email: 'arun@raveedran.me'
                }
            ]
        }
    }
}
</script>