export default {
    loadCoaches(ctx) {
        fetch('https://vue3-learning-default-rtdb.firebaseio.com/coaches.json', {
            method: "GET"
        })
        .then(response => response.json())
        .then(response => ctx.commit('setCoaches', response ))
    },
    registerCoach(ctx, payload) {
        if (!payload.id) {
            payload.id = new Date().toISOString();
        }

        fetch('https://vue3-learning-default-rtdb.firebaseio.com/coaches.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            payload
        })
        .then(response => response.json())
        .then(response => ctx.dispatch('requestResponse', response ))
    }
}