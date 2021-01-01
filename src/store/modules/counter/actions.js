export default {
    increment(ctx) {
        // demonstrate async
        setTimeout(function() {
            ctx.commit('increment')
        }, 2000);
    },
    increase(ctx, payload) {
        ctx.commit('increase', payload)            
    }
}