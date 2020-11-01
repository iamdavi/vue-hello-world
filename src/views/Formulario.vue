<template>
    <form @submit.prevent="procesarFormulario">
        <Input :tarea="tarea" />
    </form>

    <hr>

    <ListaTareas />
</template>

<script>
import Input from '@/components/Input';
import ListaTareas from '@/components/ListaTareas';
import { mapActions } from "vuex";
const shortid = require('shortid');

export default {
    name: "Formularios",
    data() {
        return {
            tarea: {
                id: '',
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            }
        }
    },
    components: {
        Input,
        ListaTareas
    },
    methods: {
        ...mapActions(['setTareas']),
        procesarFormulario() {
            if (this.tarea.nombre.trim() == '') {
                return false
            }

            // Generar id aleatorio
            this.tarea.id = shortid.generate()
            console.log(this.tarea.id)

            // Enviamos datos
            this.setTareas(this.tarea)

            // Limpiar datos
            this.tarea = {
                id: '',
                nombre: '',
                categorias: [],
                estado: '',
                numero: 0
            }
            return true;
        }
    }
}
</script>