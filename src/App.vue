<script setup>
import { RouterView } from "vue-router";
import PokemonSlider from "./components/PokemonSlider.vue";
import NavBar from "./components/NavBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <pokemon-slider/>
  <nav-bar/>
  <div class="container mt-5">
    <div class="d-flex justify-content-center">
      <RouterView />
    </div>
  </div>
  <footer-component/>
</template>

<style scoped>

</style>
