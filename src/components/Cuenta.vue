<template>
    <h1>Saldo: {{ saldo }}</h1>
    <h2>Tipo de cuenta: {{ cuenta }}</h2>
    <p>Cuenta {{ cuenta ? 'activa' : 'desactivada' }}</p>
    <p>Servicios</p>
    <ul>
        <li v-for="(servicio, index) in servicios" :key="index">
            {{ index }} - {{ servicio }}
        </li>
    </ul>
</template>

<script>
export default {
    name: "Cuenta",
    data() {
        return {
            saldo: 1000,
            cuenta: "Visa",
            cuenta: true,
            servicios: ["giro", "abono", "transferencia"]
        }
    }
}
</script>

<style>

</style>