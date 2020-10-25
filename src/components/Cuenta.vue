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
    <!-- Dejamos que los componentes hijos accedan a metodos del componente padre
    a través del @, el nombre que lo sigue puede ser el que queramos -->
    <AccionSaldo 
        texto="Aumentar saldo" 
        @accion="aumentar"
    />
    <AccionSaldo 
        texto="Disminuir saldo" 
        :tieneSaldo="tieneSaldo"
        @accion="disminuir"
    />
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
            servicios: ["giro", "abono", "transferencia"],
            tieneSaldo: true
        }
    },
    components: {
        AccionSaldo
    },
    methods: {
        aumentar() {
            this.tieneSaldo = true
            this.saldo += 100
        },
        disminuir() {
            if (this.saldo === 0) {
                this.tieneSaldo = false

                alert('El saldo está a', this.tieneSaldo)
                return
            }
            this.saldo -= 100
        }
    },
    computed: {
        hasSaldo() {
            return this.saldo > 0 ? true : false
        }
    }
}
</script>

<style>

</style>