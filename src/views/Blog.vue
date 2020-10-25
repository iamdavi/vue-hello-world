<template>
    <Titulo texto="Blog" />
    <ul>
        <li v-for="post in posts" :key="post.id">
            <router-link :to="`/blog/${post.id}`">
                {{ post.body}}
            </router-link>
        </li>
    </ul>
    <!-- <button @click="consumirApi">Obtener datos</button> -->
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
                this.posts = array
            } catch (error) {
                console.log(error)
            }
        }
    },
    created() {
        this.consumirApi()
    }
}
</script>

<style>

</style>