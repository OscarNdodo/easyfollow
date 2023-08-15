<template>
  <div class="item">
    <img :src="capa" />
    <ul>
      <li>
        <RouterLink :to="path" @click="showPortifolio" :id="id" >{{ nome }}</RouterLink>
        <p>{{ profissao }}</p>
      </li>
      <li>
        <RouterLink to="/" :id="id" class="fa fa-pencil-square" style="color: #227c9d;"></RouterLink> 
        <span @click="deletePortifolio" :id="id" class="fa fa-lg fa-trash" style="color: red;"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ItemPortVue",
  props: {
    id: Number,
    capa: String,
    nome: String,
    profissao: String,

  },
  data(){
    return {
      path: `/usuario/portifolio/@${this.nome.replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").toLowerCase()}`,
  //     pathEdit: `/portifolio/editar/${this.id}`
    }
  },
  methods: {
    deletePortifolio(event){
      const id = event.target.id;
      this.$emit("deletePortifolio", id);
    },
    showPortifolio(event){
      this.$store.state.portifolio = event.target.id;
    }
  }
};
</script>

<style scoped>
img {
  width: 50px;
  height: 40px;
  margin: 0 10px 0 0;
  border-radius: 3px;
}
.item {
  width: 96%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 6px #c0c2c6;
  margin: 20px 2% 0 2%;
  padding: 5px 10px;
  border-radius: 4px;
}
.item ul{
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
}

.item ul li{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
}
.item ul li:first-child a{
	font-size: 1.1em;
	font-weight: 500;
	text-decoration: underline;
	color: #227c9d;
}
.item ul li .fa{
	font-size: 1.5em;
	text-align: center;
	float: right;
}

@media screen and (min-width: 920px){
  img {
  width: 60px;
}
.item {
  margin: 30px 2% 0 2%;
  padding: 10px;
}
.item ul li:first-child a{
	font-size: 1.3em;
}
.item ul li .fa{
	font-size: 1.5em;
}
}
</style>