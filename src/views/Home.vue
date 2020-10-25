<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Titulo texto="Página de inicio" />
    <h2
      :style="colorContador"
    >
      {{ titulo }} {{ contador }}
    </h2>
    <button @click="accionIncrementar">Aumentar</button>
    <BtnDisminuir />

    <hr>

    <BtnAcciones :estado="true" />
    <BtnAcciones :estado="false" />
  </div>
</template>

<script>
// @ is an alias to /src
import Titulo from '@/components/Titulo'
import BtnDisminuir from '@/components/BtnDisminuir'
import BtnAcciones from '@/components/BtnAcciones'
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: 'Home',
  components: {
    Titulo,
    BtnDisminuir,
    BtnAcciones
  },
  data () {
    return {
      titulo: "Mi contador Vuex:"
    }
  },
  computed: {
    ...mapState(['contador']),
    colorContador() {
      return this.contador > 50 ? {'color': 'green'} : {'color': 'red'}
    }
  },
  methods: {
    ...mapMutations(['incrementar']),
    ...mapActions(['accionIncrementar'])
  }
}
</script>
