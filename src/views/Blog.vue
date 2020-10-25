<template>
    <Titulo texto="Blog" />
    <button @click="consumirApi">Obtener datos</button>
</template>

<script>
import Titulo from "@/components/Titulo";

export default {
    name: "Blog",
    components: {
        Titulo
    },
    data() {
        return {
            posts: []
        }
    },
    methods: {
        async consumirApi() {
            try {
                const data = await fetch('https://jsonplaceholder.typicode.com/posts')
                const array = await data.json()
                console.log(array)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style>

</style>