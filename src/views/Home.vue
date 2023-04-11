<template>
  <headerComp></headerComp>
  <div class="container mt-5">
    <div class="row">
      <div class="col text-center">
        <img alt="Vue logo" src="../assets/logo.png" />
        <p class="h3 display-3 text-muted">Te Vendo</p>
        <p class="fst-italic">Encuentra todo lo que necesitas aca</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headerComp from '../components/headerComp.vue'

export default {
  name: "Home-Root",
  components: {
    headerComp
  }
};
</script>
