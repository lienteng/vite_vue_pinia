<template>
    <div>
        <input type="text" placeholder="username">
        <input type="text" placeholder="email">
        <input type="text" placeholder="password">
        <button @click="register">register</button>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        const register =()=>{
            console.log('register')
        }

        return {
            register
        }
    }
})
</script>

<style scoped>

</style>