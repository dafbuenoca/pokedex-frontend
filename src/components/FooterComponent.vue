<template>
  <footer class="text-center text-white" style="background-color: #f1f1f1;">
    <div class="container pt-4">
      <section class="mb-4">
        <!-- Facebook -->
        <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.facebook.com/profile.php?id=100081062267977"
            role="button"
            data-mdb-ripple-color="dark"
        ><fa :icon="['fab', 'facebook']" /></a>

        <!-- Twitter -->
        <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
        ><fa :icon="['fab', 'twitter']" /></a>

        <!-- Instagram -->
        <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.instagram.com/felipe.bueno.k/"
            role="button"
            data-mdb-ripple-color="dark"
        ><fa :icon="['fab', 'instagram']" /></a>

        <!-- Linkedin -->
        <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
        >
          <fa :icon="['fab', 'linkedin']" />
        </a>
        <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/dafbuenoca"
            role="button"
            data-mdb-ripple-color="dark"
        >
          <fa :icon="['fab', 'github']" />
        </a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2023 Develop by Daniel Felipe Bueno
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style scoped>

</style>