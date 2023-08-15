<template>
  <div class="nb">
    <Navbar @btnPesquisar="btnPesquisar"/>
    <ResultadoBuscaVue v-show="pesquisar" :resultados="resultados" @fecharBusca="fecharBusca" />
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
      resultados: [],
    };
  },
  beforeMount(){
    return this.$router.push("/");
  },
  methods: {
    fecharBusca() {
      this.pesquisar = false;
    },
    btnPesquisar(event){
      this.resultados = event.busca;
      this.pesquisar = true;
    }
  },
};
</script>

<style>
body {
  background-color: #ffffff;
}
input[type="email"], input[type="password"]{
  text-transform: lowercase;
}
@media screen and (min-width: 1024px) {
  body {
    padding: 0 150px;
  }
}
</style>