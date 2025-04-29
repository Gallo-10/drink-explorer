<script setup>
import { RouterView } from 'vue-router'
import './assets/Styles/App.scss'
</script>

<template>
  <div id="app">
    <header class="header">
      <RouterLink to="/" class="header_home_link">
        <h1 class="header_link">Drink Explorer 🍸</h1>
      </RouterLink>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="footer">
      <p>Feito por Gabriel Gallo</p>
    </footer>
  </div>
</template>
