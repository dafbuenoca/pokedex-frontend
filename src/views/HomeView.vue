<template>
  <div class="row">
    <div  class="col-lg-4 mb-2 d-flex align-items-stretch" v-for="item in pokemonList">
      <PokemonCard :pokemon="item"/>
    </div>
    <div class="pagination mx-auto my-5">
      <v-pagination
          class="pagination mx-auto"
          v-model="page"
          :pages="pageCount"
          :range-size="1"
          active-color="black"
          @update:modelValue="getPokemonList"
      />
    </div>

  </div>


</template>

<script setup>
import axios from "axios";
import PokemonCard from "@/components/PokemonCard.vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import {onMounted, ref} from "vue";

let page = ref(0)
let pokemonList = ref(null)
let pageCount = ref(null)

onMounted(async () => {
  await getPokemonList()
})
const getPokemonList = async () => {
  try {
    let res = await axios.get('https://pokedex.herokuapp.com/api/v1/pokemon?size=12&page=' + page.value)
    pageCount.value = res.data.totalPages -1
    pokemonList.value = res.data.content
  } catch (err) {
    console.log(err)
  }
}

</script>
<style>
pagination{
  align-items: center;
  margin-top: 100px !important;
  margin-bottom: 100px !important;
}
</style>
