<template>
  <div class="about">
    <Titulo texto="About page" />
    <input 
      type="text"
      v-model="texto"
    >
    <p>{{ texto }}</p>
  </div>
</template>

<script>
import Titulo  from "@/components/Titulo";

export default {
  name: "About",
  components: {
    Titulo
  },
  data() {
    return {
      texto: ''
    }
  }
}
</script>

<style>

</style>