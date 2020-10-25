<template>
    <form @submit.prevent="procesarFormulario">
        <input 
            type="text"
            class="form-control my-2"
            placeholder="Ingrese nombre"
            v-model.trim="tarea.nombre"
        >
        <div class="form-check form-check-inline">
            <input 
                class="form-check-input" 
                type="checkbox" 
                id="inlineCheckbox1" 
                v-model="tarea.categorias"
                value="javascript"
            >
            <label 
                class="form-check-label"
                for="inlineCheckbox1"
            >
                JavaScript
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input 
                class="form-check-input" 
                type="checkbox" 
                id="inlineCheckbox2" 
                v-model="tarea.categorias"
                value="nodejs"
            >
            <label 
                class="form-check-label"
                for="inlineCheckbox2"
            >
                Node.js
            </label>
        </div>

        <hr>

        <div class="form-check form-check-inline">
            <input 
                class="form-check-input" 
                type="radio" 
                id="inlineRadio1" 
                v-model="tarea.estado"
                value="urge"
            >
            <label 
                class="form-check-label"
                for="inlineRadio1"
            >
                Node.js
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input 
                class="form-check-input" 
                type="radio" 
                id="inlineRadio2" 
                v-model="tarea.estado"
                value="relax"
            >
            <label 
                class="form-check-label"
                for="inlineRadio2"
            >
                Node.js
            </label>
        </div>

        <hr>

        <input 
            type="number"
            class="form-control"
            v-model.number="tarea.numero"
        >

        <button 
            class="btn btn-dark btn-block mt-3" 
            type="submit"
            :disabled="!procesarFormulario()"
        >
            Procesar
        </button>

        <p>{{ tarea }}</p>
    </form>
</template>

<script>
export default {
    name: "Formularios",
    data() {
        return {
            tarea: {
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            }
        }
    },
    methods: {
        procesarFormulario() {
            if (this.tarea.nombre.trim() == '') {
                return false
            }
            this.tarea = {
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            }
            return true;
        }
    },
    computed: {
        habilitarBoton() {
            return this.procesarFormulario()
        }
    }
}
</script>