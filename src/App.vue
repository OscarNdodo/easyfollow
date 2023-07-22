<template>
  <div>
    <Navbar @btnPesquisar="btnPesquisar"/>
    <ResultadoBuscaVue @fecharBusca="fecharBusca" v-if="pesquisar" />
  </div>
  <RouterView />
</template>

<script>
import ResultadoBuscaVue from './components/base/ResultadoBusca.vue';
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
    ResultadoBuscaVue
  },
  data() {
    return {
      pesquisar: false,
    };
  },
  methods: {
    fecharBusca() {
      this.pesquisar = false;
    },
    btnPesquisar(){
      //Axaios
      this.pesquisar = true;
    }
  },
};
</script>

<style>
body {
  background-color: #ffffff;
}
@media screen and (min-width: 1024px) {
  body {
    padding: 0 150px;
  }
}
</style>