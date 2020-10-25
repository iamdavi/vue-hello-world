<template>
    <button :disabled="!tieneSaldo" @click="accion">{{ texto }}</button>
</template>

<script>
export default {
    name: "AccionSaldo",
    props: {
        texto: String,
        tieneSaldo: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        accion() {
            this.$emit('accion')
        }
    }
}
</script>

<style>

</style>