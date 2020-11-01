import { createStore } from 'vuex'
import router from '../router'

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
            localStorage.setItem('tareas', JSON.stringify(state.tareas))
        },
        get(state) {
            return state.tareas
        },
        eliminar(state, payload) {
            // Filtramos las tareas que tengan un ID distinto del pasado en la vista
            state.tareas = state.tareas.filter(item => item.id !== payload)
            localStorage.setItem('tareas', JSON.stringify(state.tareas))
        },
        tarea(state, payload) {
            if (!state.tareas.find(item => item.id === payload)) {
                router.push('/formulario')
                return
            }
            state.tarea = state.tareas.find(item => item.id === payload)
            
        },
        update(state, payload) {
            state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
            localStorage.setItem('tareas', JSON.stringify(state.tareas))
            router.push('/formulario')
        },
        cargar(state, payload) {
            state.tareas = payload
        }
    },
    actions: {
        cargarLocalStorage({ commit }) {
            if (localStorage.getItem('tareas')) {
                const tareas = JSON.parse(localStorage.getItem('tareas'))
                commit('cargar', tareas)
                return
            }

            localStorage.setItem('tareas', JSON.stringify([]))
        },
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
        },
        setTarea({ commit }, id) {
            commit('tarea', id)
        },
        updateTarea({ commit }, tarea) {
            commit('update', tarea)
        }
    },
    modules: {
    }
})
