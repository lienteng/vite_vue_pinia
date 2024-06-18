<template>
    <aside>
      <!-- Sidebar content -->
      <ul>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/settings">Settings</router-link></li>
        <li><router-link to="/logout">Logout</router-link></li>
      </ul>
    </aside>
  </template>
  
  <script setup lang="ts">
  // Add any necessary setup logic here
  </script>
  
  <style scoped>
  /* Add your styles here */
  aside {
    width: 200px;
    background-color: #f4f4f4;
    padding: 1em;
    position: fixed;
    height: 100%;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 1em 0;
  }
  router-link {
    color: #333;
  }
  </style>
  