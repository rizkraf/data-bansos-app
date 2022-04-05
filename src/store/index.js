import { createStore } from 'vuex'

export default createStore({
    state() {
        return {

        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})