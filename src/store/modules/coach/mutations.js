
export default {
    setCoaches(state, payload) {
        console.log('payload', payload);

        Object.keys(payload).map(c => {
            state.coaches = [...state.coaches, payload[c] ]
        });
    }
}