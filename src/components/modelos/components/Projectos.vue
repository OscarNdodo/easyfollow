<template>
  <section>
    <h2>Projectos</h2>
    <div class="container">
      <CardVue v-for="projecto in projectos" 
      :key="projecto.id" 
      :imagem="projecto.imagem" 
      :link="projecto.link" 
      :nome="projecto.nome" 
      :descricao="projecto.descricao" />
    </div>
  </section>
</template>

<script>
import CardVue from "./Card.vue";
export default {
  name: "ProjectosVue",
  props: {
    projectos: Array
  },
  components: {
    CardVue,
  },
};
</script>

<style scoped>
section {
  width: 100%;
  padding: 10px 30px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
section h2 {
  font-size: 1.2em;
  padding-left: 10px;
  color: #484646;
  text-transform: uppercase;
  border-left: 4px solid #227c9d;
  margin-bottom: 20px;
}
/**RESPONSIVIDADE */
@media screen and (min-width: 920px) {
  section {
    padding: 10px 10px;
  }
  .container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  section h2 {
    font-size: 1.5em;
    margin-bottom: 30px;
  }
}
</style>