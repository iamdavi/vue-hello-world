<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Titulo texto="Página de inicio" />
    <h2
      :style="colorContador"
    >{{ titulo }} {{ contador }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import Titulo from '@/components/Titulo'
import { mapState } from "vuex";

export default {
  name: 'Home',
  components: {
    Titulo
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
  }
}
</script>
