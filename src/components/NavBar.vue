<script>
import { RouterLink } from "vue-router";
export default {
  name: "NavBar"
}
</script>
<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <div to="/" class="navbar-brand">
          <img src="@/assets/pokedex.png" width="50" height="50" class="d-inline-block align-top" alt="">
        </div>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li> <RouterLink class="nav-link px-2 text-white" to="/">Home</RouterLink></li>
          <li><RouterLink class="nav-link px-2 text-white" to="/about">About</RouterLink></li>
        </ul>
      </div>
    </div>
  </header>
</template>



<style scoped>

</style>