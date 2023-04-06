<template>
  <headerComp />
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <router-view />
</template>

<script>
import headerComp from './components/headerComp.vue'


export default {
  name: 'App',
  components: {
    headerComp
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  margin:0px;
  padding:0px;

}
</style>
