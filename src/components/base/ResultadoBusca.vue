<template>
  <ul class="resultados" @click.self="fecharBusca">
    <li v-for="resultado in resultados" :key="resultado.id">
    <RouterLink @click.self="fecharBusca" :id="resultado.id"  :to="portifolio+resultado.nome.replace(' ', '').replace(' ', '').replace(' ', '').replace(' ', '').toLowerCase()"> <img :src="img+resultado.capa"> {{ resultado.nome ? resultado.nome : "Sem resultados..." }}</RouterLink>
  </li>
  </ul>
</template>

<script>
export default {
  name: "ResultadoBuscaVue",
  props:{
    resultados: Object
  },
  data(){
    return {
      portifolio: "/usuario/portifolio/@",
      img: "http://localhost:3333/files/capa/"
    }
  },
  methods: {
	fecharBusca(){
    const id = event.target.id;
    this.$store.state.portifolio = id;
    // this.$router.push("/usuario/portifolio/" + id)
		this.$emit("fecharBusca");
	}
  }
};
</script>

<style scoped>~
.resultados {
  position: absolute;
  width: 100%;
  height: 90%;
  background-color: #fff;
  z-index: 999;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.resultados li {
  margin: 7px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
img{
  width: 22px;
  height: 12px;
  border-radius: 1px;
}
.resultados li a {
  padding: 5px 0;
  text-decoration: underline;
  font-size: 1.2em;
  color: blue;
}

@media screen and (min-width: 920px) {
  .resultados {
    position: absolute;
    left: 53.5%;
    width: 40%;
    height: 90%;
    background-color: #fff;
    z-index: 999;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
	border-left: 1px solid #ede5e5;
  }
  .resultados li {
    margin: 7px 0;
  }
  .resultados li a {
    padding: 5px 0;
    text-decoration: underline;
    font-size: 1.2em;
  }
}
</style>