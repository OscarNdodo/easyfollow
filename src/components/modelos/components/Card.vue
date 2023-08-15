<template>
  <div class="card">
    <img :src="url+imagem" :alt="imagem" @click="closeImg" />
    <div class="desc" :style="display">
      <a :href="link" target="blank">{{ nome }}</a>
      <p>
        {{ descricao }}
        <button @click="showImg" style="text-align: center;">Imagem</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardVue",
  props: {
    imagem: String,
    link: String,
    nome: String,
    descricao: String
  },
  data(){
    return {
      url: "http://localhost:3333/files/projecto/",
      display: "",
    }
  },
  methods: {
    showImg(){
      this.display = "display: none;"
    },
    closeImg(){
      this.display = ""
    }
  }
};
</script>

<style scoped>
.fa-link {
  color: #555;
  font-size: 0.8em;
  transform: rotateX(160deg);
}
.card {
  width: 280px;
  height: 320px;
  box-shadow: 0 0 10px #a2a7ae;
  margin: 30px;
  margin-bottom: 100px;
}
.card img {
  width: 100%;
  height: 390px;
  border-radius: 5px 5px 0 0;
  transition: 1s;
}
.card .desc {
  width: 100%;
  height: 400px;
  position: relative;
  padding: 20px;
  margin-top: -400px;
  border-radius: 5px;
  box-shadow: 0 0 10px #a2a7ae;
  padding: 10px;
  border-radius: 0 0 5px 5px;
  background-color: #fff;
  transition: 1s;
}

.card .desc a {
  text-decoration: underline;
  padding: 20px 0;
  margin: 40px 0;
  color: #227c9d;
  font-size: 1.3em;
  font-weight: bold;
  text-transform: uppercase;
}

.card .desc p {
  width: 100%;
  margin-top: 10px;
  text-align: justify;
  color: #131313;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}
.card .desc button{
  text-align: center;
/*  border: 2px solid skyblue;*/
  background: linear-gradient(15deg, #2e83ea, #38d2e3);
  color: #fff;
  cursor: pointer;
  width: 100%;
  font-size: .8em;
  text-transform: uppercase;
  height: 35px;
}
@media screen and (min-width: 920px) {
  .card .desc p {
    text-align: left;
    font-size: 1.3em;
  }
}
</style>