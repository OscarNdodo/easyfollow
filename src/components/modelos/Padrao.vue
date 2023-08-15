<template>
  <main>
    <IntroVue :capa="capa" :nome="nome" :profissao="profissao" :contatos="contatos" :telefone="telefone" />
    <SobreVue :perfil="perfil" :descricao="descricao" />
    <HabilidadesVue :ferramentas="ferramentas" />
    <ProjectosVue :projectos="projectos" />
    <span class="me" >created by Oscar Ndodo</span>
  </main>
</template>

<script>
import IntroVue from "./components/Intro.vue";
import SobreVue from "./components/Sobre.vue";
import HabilidadesVue from "./components/Habilidades.vue";
import ProjectosVue from "./components/Projectos.vue";
import api from "../../api";

export default {
  name: "PadraoVue",
  props: {
    rota: Object
  },
  data(){
    return {
      //Intro
      capa: "",
      nome: "",
      profissao: "",
      telefone: "",
      //Sobre
      perfil: "",
      descricao: "",
      //Ferramentas || Habilidade
      ferramentas: [],
      //Projectos
      projectos: [],
      //Contactos
      contatos: []
    }
  },
  components: {
    IntroVue,
    SobreVue,
    HabilidadesVue,
    ProjectosVue,
  },
  async beforeMount(){
    // const usuario = this.$store.state.usuario.usuario;
    // const id = this.rota.params.id;
    // this.rota.params.id = 73287382;
    var usuario = "";
    const id = this.$store.state.portifolio;
    await api.get(`/portifolio/${id}`)
    .then((res) => res.data.portifolio)
    .then((data) => {
      //Intro
      this.capa = `http://localhost:3333/files/capa/${data.capa}`;
      this.nome = data.nome;
      this.profissao = data.profissao;
      this.descricao = data.descricao;
      usuario = data.usuario;
      // //Sobre
      // const foto = this.$store.state.usuario.usuario.foto;
      this.perfil = `http://localhost:3333/files/perfil/${data.usuarios.foto}`;
      //Ferramentas
      this.ferramentas = data.ferramentas;
      //Projectos
      this.projectos = data.projectos;
      //Contactos
      this.contatos = data.contatos;
    })
    .catch((erro) => console.log("ERRO: " + erro));
    //usuario do portifolio
    await api.get("/usuario/"+usuario)
        .then((res) => res.data)
        .then((data) => {
          this.telefone = data.usuario.telefone;
        })
        .catch((erro) => {
          this.telefone = erro.msg
        })
  },
};
</script>

<style scoped>
  .me{
    color: #6668;
    padding: 10px;
    margin-top: 100px;
  }
</style>