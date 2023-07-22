<template>
  <main>
    <PortifolioVue @novoClick="novoClick" v-if="novo" :erro="erro" />
    <FerramentaVue @ferramentaClick="ferramentaClick" v-else-if="ferramenta" />
    <ProjectoVue @projectoClick="projectoClick" v-else-if="projecto" />
    <LinkVue @linkClick="linkClick" v-else-if="contato" />
    <div class="done" v-else>
      <h2>Portifolio Criado!</h2>
      <RouterLink to="/portifolios">Concluir</RouterLink>
    </div>
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
      nomeUsuario: "",
      portifolio: {},
    };
  },
  beforeMount() {
    this.idUsuario = this.$store.state.usuario.usuario.id;
    this.nomeUsuario = this.$store.state.usuario.usuario.nome;
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
    novoClick(event) {
      const data = event;
      api.post(`/usuario/${this.idUsuario}/criar`, data)
      .then((res) => console.log(res))
      .catch((erro) => console.log(erro))
      this.novo = false;
      this.ferramenta = true;
    },
    ferramentaClick() {
      this.msgAlert = "Deseja adicionar outra ferramenta ?";
      this.alert = true;
      if (this.confirma) {
        //Axais
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
.done {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px #a2a7ae;
  padding: 20px;
  border-radius: 5px;
  margin-top: 200px;
}
.done h2 {
  font-size: 1.2em;
  color: #227c9d;
  text-transform: uppercase;
  padding: 20px 0;
}
.done a {
  width: 100%;
  padding: 10px 30px;
  color: #ffffff;
  background: linear-gradient(15deg, #2e83ea, #38d2e3);
  text-align: center;
  font-size: 1.3em;
  margin-top: 20px;
  border-radius: 5px;
}
</style>