<template>
  <main>
    <PortifolioVue @novoClick="novoClick" v-if="novo" :erro="erro" />
    <FerramentaVue @ferramentaClick="ferramentaClick" v-else-if="ferramenta" />
    <ProjectoVue @projectoClick="projectoClick" v-else-if="projecto" />
    <LinkVue @linkClick="linkClick" v-else-if="contato" />
    <AlertVue
      @clickNao="clickNao"
      @clickSim="clickSim"
      v-show="alert"
      :msg="msgAlert"
    />
  </main>
</template>

<script>
import FerramentaVue from "@/components/portiflio/Ferramenta.vue";
import PortifolioVue from "@/components/portiflio/Portifolio.vue";
import ProjectoVue from "@/components/portiflio/Projecto.vue";
import LinkVue from "@/components/portiflio/Link.vue";
import AlertVue from "@/components/portiflio/Alert.vue";
import api from "@/api";

export default {
  name: "NovoView",
  components: {
    PortifolioVue,
    FerramentaVue,
    ProjectoVue,
    LinkVue,
    AlertVue,
  },
  data() {
    return {
      alert: false,
      msgAlert: "",
      confirma: true,
      novo: true,
      ferramenta: false,
      projecto: false,
      contato: false,
      //Portifolio criar
      idUsuario: "",
      idPortifolio: ""
    };
  },
  methods: {
    clickNao(event) {
      this.confirma = event;
      this.alert = false;
    },
    clickSim(event) {
      this.confirma = event;
      this.alert = false;
    },
    async novoClick(event) {
    this.idUsuario = this.$store.state.usuario.usuario.id;
      const data = event;
      await api.post(`/usuario/${this.idUsuario}/portifolio/criar`, data)
      .then((res) => res.data)
      .then((dados) => {
        if(!dados.error){
          this.idPortifolio = dados.portifolio.id;
          this.novo = false;
          this.ferramenta = true;
        }else{
          this.erro = dados.msg;
        }
      })
      .catch((erro) => {
        this.erro = "Erro! Tente novamente.";
        console.log("ERRO: " + erro);
      })

    },
    async ferramentaClick(event) {
      const data = event;
      this.msgAlert = "Deseja adicionar outra ferramenta ?";
      this.alert = true;
      if (this.confirma) {
        //Axais
      await api.post(`/usuario/${this.idUsuario}/portifolio/${this.idPortifolio}/ferramenta/criar`, data)
      .then((res) => res.data)
      .then((dados) => {
        if(!dados.error){
          this.idPortifolio = dados.portifolio.id;
          this.novo = false;
          this.ferramenta = true;
        }else{
          this.erro = dados.msg;
        }
      })
      .catch((erro) => {
        this.erro = "Erro! Tente novamente.";
        console.log("ERRO: " + erro);
      })
      } else {
        this.alert = false;
        this.ferramenta = false;
        this.projecto = true;
        this.confirma = true;
      }
    },
    projectoClick() {
      this.msgAlert = "Deseja adicionar outro projecto ?";
      this.alert = true;
      if (this.confirma) {
        //Ajax
      } else {
        this.alert = false;
        this.projecto = false;
        this.contato = true;
        this.confirma = true;
      }
    },
    linkClick() {
      this.msgAlert = "Deseja adicionar outro link de contacto ?";
      this.alert = true;
      if (this.confirma) {
        //Ajax
      } else {
        this.alert = false;
        this.contato = false;
      }
    },
  },
};
</script>

<style scoped>
</style>