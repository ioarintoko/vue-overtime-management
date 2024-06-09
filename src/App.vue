<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="header">
    <h3>Timesheet<br />Management</h3>
  </div>
  <div class="nav">
    <h2>HH Timesheet</h2>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
h2 {
  color: darkslategray;
  font-weight: 400;
}

.header {
  color: var(--vt-c-red);
  font-weight: 700;
  background-color: var(--vt-c-white);
  border-bottom: 8px solid #f9f9f9;
  padding: 16px;
}

.nav {
  background-color: var(--vt-c-white);
  padding-left: 2rem;
  margin: 4px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin: 2rem;
}

nav a.router-link-exact-active {
  color: var(--vt-c-blue);
  background-color: var(--vt-c-lightblue);
}

nav a.router-link-exact-active:hover {
  background-color: var(--vt-c-lightblue);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
