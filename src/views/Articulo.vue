<template>
    <Titulo texto="Ruta con parámetros" />
    <h2>Id: {{ postData.id }}</h2>
    <h2>Título: {{ postData.title }}</h2>
    <h3>Descripción: {{ postData.body }}</h3>
</template>

<script>
import Titulo from '@/components/Titulo'

export default {
    name: "Articulo",
    data() {
        return {
            postData: {}
        }
    },
    components: {
        Titulo
    },
    methods: {
        async getPostData() {
            try {
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                const array = await data.json()
                this.postData = array
            } catch (error) {
                console.log(error)
            }
        }
    },
    created() {
        this.getPostData()
    }
}
</script>

<style>

</style>