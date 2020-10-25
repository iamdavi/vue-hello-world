<template>
    <button>{{ textoBoton }}</button>
</template>

<script>
export default {
    name: "BtnAcciones",
    props: {
        estado: Boolean
    },
    computed: {
        textoBoton() {
            return this.estado ? 'Aumentar' : 'Disminuir'
        }
    }
}
</script>
