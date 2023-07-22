<template>
  <main>
    <IntroVue />
    <SobreVue />
    <HabilidadesVue />
    <ProjectosVue />
  </main>
</template>

<script>
import HabilidadesVue from "./components/Habilidades.vue";
import IntroVue from "./components/Intro.vue";
import ProjectosVue from "./components/Projectos.vue";
import SobreVue from "./components/Sobre.vue";

export default {
  name: "PadraoVue",
  components: {
    IntroVue,
    SobreVue,
    HabilidadesVue,
    ProjectosVue,
  },
};
</script>

<style scoped>
</style>