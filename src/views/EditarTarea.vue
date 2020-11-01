<template>
    <p>Editar tarea: {{ $route.params.id }} - {{ tarea }}</p>
    <form @submit.prevent="updateTarea(tarea)">
        <Input :tarea="tarea" />
    </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Input from '@/components/Input'

export default {
    name: "EditarTarea",
    components: {
        Input
    },
    computed: {
        // Llamamos al state tarea, que en un principio está vacio.
        ...mapState(['tarea'])
    },
    methods: {
        // "Importamos", el método para llenar dicha tarea.
        ...mapActions(['setTarea', 'updateTarea'])
    },
    created() {
        // Nada más cargar la página, que rellene la tarea con los datos.
        this.setTarea(this.$route.params.id)
    }
}
</script>

<style>

</style>