<template>
  <div class="container border-0 mb-5">
    <div class="row d-flex justify-content-center">
        <h1>{{ pokemon.name }}</h1>
        <div class="row">
          <img :src="pokemon.sprite"  class="w-50 p-3  mx-auto" >
        </div>
        <h5>
          <strong>Description: </strong>
          {{pokemon.description}}
        </h5>
        <p>
          <strong>Types: </strong>
          <span v-for="type in pokemon.types">
          {{ type.name }} |
        </span>
        </p>
        <p>
          <strong>Abilities: </strong>
          <span v-for="ability in pokemon.abilities">
          {{ ability.name }} |
        </span>
        </p>
        <p>
          <strong>Height: </strong>
          {{pokemon.height}}
        </p>
        <p>
          <strong>Weight: </strong>
          {{pokemon.weight}}
        </p>
    </div>
    <div class="row">
      <h2>Evolution Chain</h2>
      <div  class="col-lg-4 mb-2 d-flex align-items-stretch" v-for="item in evolutionChain">
        <pokemon-card :pokemon="item"/>
      </div>
    </div>
  </div>



</template>

<script>
import axios from "axios";
import PokemonCard from "@/components/PokemonCard.vue";

export default {
  components: {PokemonCard},
  data(){
    return{
      pokemon: {},
      evolutionChain: []
    }
  },
  name: "PokemonView",
  mounted() {
    axios .get('https://pokedex.herokuapp.com/api/v1/pokemon/' + this.$route.params.id)
        .then((response) => {
          this.pokemon = response.data
          this.pokemon.evolutions.forEach(pokemon => {
            axios .get('https://pokedex.herokuapp.com/api/v1/pokemon/' + pokemon.id)
                .then((response) => {
                  this.evolutionChain.push(response.data)
                }).catch(e => {
              console.log(e);
            });
          });
        }).catch(e => {
      console.log(e);
    });
  }
}
</script>

<style scoped>

</style>