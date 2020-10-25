<template>
  <h1>{{ texto }}</h1>
</template>

<script>
export default {
    name: "Titulo",
    props: {
        texto: String
    }
}
</script>

<style scoped>
    /* - Estilos que solo afectan a este componente - */
    h1 {
        color: peru;
    }
</style>