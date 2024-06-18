<template>
    <nav>
      <!-- Home page specific navigation links -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/profile">Profile</router-link>
    </nav>
  </template>
  
  <script setup lang="ts">
  // Add any necessary setup logic here
  </script>
  
  <style scoped>
  /* Add your styles here */
  nav {
    background-color: #333;
    color: white;
    padding: 1em;
  }
  router-link {
    color: white;
    margin-right: 1em;
  }
  </style>
  