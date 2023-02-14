<template>
  <div class="card" style="width: 18rem;">
    <img :src="pokemon.sprite" class="card-img-top" alt="...">
    <div class="card-body">
      <RouterLink  :to="'/pokemon/'+pokemon.id">
        <h5 class="card-title">{{pokemon.id}} - {{pokemon.name}}</h5>
      </RouterLink>
      <p class="card-text">
        <strong>Types: </strong>
        <span v-for="type in pokemon.types">
          {{ type.name }} |
        </span>
      </p>
      <p class="card-text">
        <strong>Abilities: </strong>
        <span v-for="ability in pokemon.abilities">
          {{ ability.name }} |
        </span>
      </p>
      <p class="card-text">
        <strong>Height: </strong>
        {{pokemon.height}}
      </p>
      <p class="card-text">
        <strong>Weight: </strong>
        {{pokemon.weight}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonCard",
  props: {
    pokemon: Object
  }
}
</script>

<style scoped>

</style>