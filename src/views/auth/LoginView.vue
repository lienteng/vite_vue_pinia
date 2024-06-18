<template>
    <div>
      <input type="text" placeholder="username" v-model="username">
      <input type="password" placeholder="password" v-model="password">
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  export default defineComponent({
    name: 'LoginView',
    setup() {
      const username = ref('')
      const password = ref('')
      const router = useRouter()
  
      const login = () => {
        console.log('Login:', { username: username.value, password: password.value })
        // Assuming the login is successful, navigate to the home page
        router.push({ name: 'home' })
      }
  
      return {
        username,
        password,
        login
      }
    }
  })
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  