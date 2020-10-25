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
    <AccionSaldo texto="Aumentar saldo" />
    <AccionSaldo texto="Disminuir texto" />
</template>

<script>
import AccionSaldo from './AccionSaldo'

export default {
    name: "Cuenta",
    data() {
        return {
            saldo: 1000,
            cuenta: "Visa",
            cuenta: true,
            servicios: ["giro", "abono", "transferencia"]
        }
    },
    components: {
        AccionSaldo
    },
    methods: {
        aumentar() {
            this.saldo += 100
        },
        disminuir() {
            this.saldo -= 100
        }
    }
}
</script>

<style>

</style>