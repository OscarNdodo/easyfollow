<template>
  <main>
    <HomeVue />
  </main>
</template>

<script>
import HomeVue from "../components/Home.vue";
export default {
  name: "InicioView",
  components: {
    HomeVue,
  },

}
</script>

<style>
  main{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
</style>