import { createStore } from 'vuex'

export default createStore({
    state: {
        contador: 100
    },
    mutations: {
        incrementar(state) {
            state.contador += 10
        },
        disminuir(state, payload) {
            state.contador -= payload
        }
    },
    actions: {
        accionIncrementar({ commit }) {
            commit('incrementar')
        },
        accionDisminuir({ commit }, numero) {
            commit('disminuir', numero)
        }
    },
    modules: {
    }
})
