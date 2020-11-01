import { createStore } from 'vuex'

export default createStore({
    state: {
        contador: 100,
        // TAREAS
        tareas: [], // array que contiene todas las tareas
        tarea: { // Objeto Tarea
            id: '',
            nombre: '',
            categorias: [],
            estado: '',
            numero: 0
        }
    },
    mutations: {
        incrementar(state, payload) {
            state.contador += payload
        },
        disminuir(state, payload) {
            state.contador -= payload
        },
        // TAREAS
        set(state, payload) {
            state.tareas.push(payload)
        },
        get(state) {
            return state.tareas
        },
        eliminar(state, payload) {
            // Filtramos las tareas que tengan un ID distinto del pasado en la vista
            state.tareas = state.tareas.filter(item => item.id !== payload)
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
        },
        setTareas({ commit }, tarea) {
            commit('set', tarea)
        },
        getTareas({ commit }) {
            commit('get')
        },
        deleteTarea({ commit }, id) {
            commit('eliminar', id)
        }
    },
    modules: {
    }
})
