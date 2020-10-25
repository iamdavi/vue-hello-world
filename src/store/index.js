import { createStore } from 'vuex'

export default createStore({
    state: {
        contador: 100
    },
    mutations: {
        incrementar(state, payload) {
            state.contador += payload
        },
        disminuir(state, payload) {
            state.contador -= payload
        }
    },
    actions: {
        accionIncrementar({ commit }) {
            commit('incrementar', 10)
        },
        accionDisminuir({ commit }, numero) {
            commit('disminuir', numero)
        },
        // Si queremos mandar mas de un parametro, tenemos que mandar un objeto
        accionBoton({ commit }, objeto) {
            if (objeto.estado) {
                commit('incrementar', objeto.numero)
            } else {
                commit('disminuir', objeto.numero)
            }
        }
    },
    modules: {
    }
})
