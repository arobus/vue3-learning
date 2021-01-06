export default {
    getCoaches(state) {
        return state.coaches;
    },
    getRoles(state) {
        return state.roles;
    },
    getCoach(state, payload) {
        return state.coaches.find(c => c.id === payload.id);
    }
}