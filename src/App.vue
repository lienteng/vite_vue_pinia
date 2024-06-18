<template>
  <div>
    <nav v-if="showNav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/auth/login">Login</router-link> |
      <router-link to="/auth/register">Register</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showNav = computed(() => route.name !== 'home')
</script>

<style scoped>
/* Styles for the default navbar */
nav {
  background-color: #222;
  color: white;
  padding: 1em;
}
router-link {
  color: white;
  margin-right: 1em;
}

</style>
