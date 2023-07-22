<template>
  <ul class="resultados" @click.self="fecharBusca">
    <li><RouterLink @click.self="fecharBusca" to="/portifolio">Nome do portifolio</RouterLink></li>
    <li><RouterLink @click.self="fecharBusca" to="#">Nome do portifolio</RouterLink></li>
    <li><RouterLink @click.self="fecharBusca" to="#">Nome do portifolio</RouterLink></li>
    <li><RouterLink @click.self="fecharBusca" to="#">Nome do portifolio</RouterLink></li>
    <li><RouterLink @click.self="fecharBusca" to="#">Nome do portifolio</RouterLink></li>
  </ul>
</template>

<script>
export default {
  name: "ResultadoBuscaVue",
  methods: {
	fecharBusca(){
		this.$emit("fecharBusca");
	}
  }
};
</script>

<style scoped>
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
}
.resultados li a {
  padding: 5px 0;
  text-decoration: underline;
  font-size: 1.2em;
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