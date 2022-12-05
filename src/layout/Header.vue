<template>

  <header class="p-2 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <router-link :to="{ name: 'home' }" class="d-flex align-items-center mb-lg-0 text-white text-decoration-none">
          <h1 class="fs-4 m-0">iPhoneBook</h1>
        </router-link>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-md-2">
          <li>
            <router-link :class="{ 'disabled text-secondary': $route.name === 'home', 'text-white' : $route.name !== 'home'}" :to="{ name: 'home'}" class="nav-link px-2">
              Home
            </router-link>
          </li>
        </ul>

      </div>
    </div>
  </header>

</template>

<script lang="ts" setup>
const name = "Header";
</script>

<style scoped>

</style>
