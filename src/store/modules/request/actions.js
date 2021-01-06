export default {
    loadRequests(ctx) {
        fetch('https://vue3-learning-default-rtdb.firebaseio.com/requests.json', {
            method: "GET"
        })
        .then(response => response.json())
        .then(response => ctx.commit('setRequests', response ))
    },
    requestCoach(ctx, payload) {
        if (!payload.id) {
            payload.id = new Date().toISOString();
        }

        fetch('https://vue3-learning-default-rtdb.firebaseio.com/requests.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(response => ctx.dispatch('requestResponse', response ))
    }
}