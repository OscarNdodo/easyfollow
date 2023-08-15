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
  name: "EditarPortifolioViewVue",
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
      idPortifolio: "",
      token: ""
    };
  },
  async beforeMount(){
    const portifolio = this.$route.params.id;
    await api.get(`/portifolio/${portifolio}`)
    .then((res) => res.data)
    .then((data) => {
      console.log(data)
    })
    .catch((erro) => console.log(erro))
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
    //Criar novo portifolio
    async novoClick(event) {
    this.idUsuario = this.$store.state.usuario.usuario.id;
    this.token = this.$store.state.usuario.token
      const data = event;
      //Ajax || Axios
      await api.put(`/usuario/${this.idUsuario}/portifolio/editar`, data, {
        headers: { "Authorization": `Bearer ${this.token}`}
      })
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
    // Criar nova ferramenta
    async ferramentaClick(event) {
      const data = event;
      this.msgAlert = "Deseja adicionar outra ferramenta ?";
      this.alert = true;
      if (this.confirma) {
        //Ajax ||axios
      await api.post(`/usuario/${this.idUsuario}/portifolio/${this.idPortifolio}/ferramenta/criar`, data, {
        headers: { "Authorization": `Bearer ${this.token}`}
      })
      .then((res) => res.data)
      .then((dados) => {
        if(!dados.error){
          // this.idPortifolio = dados.portifolio.id;
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
    //Criar novo projecto
    async projectoClick(event) {
      const data = event;
      this.msgAlert = "Deseja adicionar outro projecto ?";
      this.alert = true;
      if (this.confirma) {
        //Ajax || Axios
        await api.post(`/usuario/${this.idUsuario}/portifolio/${this.idPortifolio}/projecto/criar`, data, {
        headers: { "Authorization": `Bearer ${this.token}`}
      })
        .then((res) => res.data)
        .then((dados) => {
          if(!dados.error){
          this.ferramenta = false;
          this.projecto = true;
          }else{
            this.erro = dados.msg;
          }
        })
        .catch((erro) => {
          this.erro = "Erro! Tente novamente.";
          console.log("ERRO: " + erro );
        })
      } else {
        this.alert = false;
        this.projecto = false;
        this.contato = true;
        this.confirma = true;
      }
    },
    //Criar novo link de contato
    async linkClick(event) {
      const data = event;
      this.msgAlert = "Deseja adicionar outro link de contacto ?";
      this.alert = true;
      if (this.confirma) {
        //Ajax || Axios
      await api.post(`/usuario/${this.idUsuario}/portifolio/${this.idPortifolio}/contato/criar`, data, {
        headers: { "Authorization": `Bearer ${this.token}`}
      })
      .then((res) => res.data)
      .then((dados) => {
        if(!dados.error){
          this.contato = true;
        }
      })
      .catch((erro) => {
        this.erro = "Erro! Tente novamente",
        console.log("ERRO: " + erro)
      })
      } else {
        this.alert = false;
        this.contato = false;
      }
      this.$router.push("/portifolios")
    },
  },
};
</script>

<style scoped>
</style>