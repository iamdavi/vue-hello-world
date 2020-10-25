<template>
    <Titulo texto="Ruta con parámetros" />
    <h2>Parámetro: {{ $route.params.id }}</h2>
</template>

<script>
import Titulo from '@/components/Titulo'

export default {
    name: "Articulo",
    components: {
        Titulo
    }
}
</script>

<style>

</style>