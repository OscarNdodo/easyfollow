<template>
  <section>
    <AlertVue
      v-show="alerta"
      @clickNao="clickNao"
      @clickSim="clickSim"
      msg="Eliminar este portifolio ?"
    />
    <h3>Todos portifolios</h3>
    <ItemPortVue
      v-for="portifolio in portifolios"
      :key="portifolio.id"
      :id="portifolio.id"
      :capa="url + portifolio.capa"
      :nome="portifolio.nome"
      :profissao="portifolio.profissao"
      @deletePortifolio="deletePortifolio"
    />
  </section>
</template>

<script>
import AlertVue from "../components/portiflio/Alert.vue";
import ItemPortVue from "@/components/ItemPort.vue";
import api from "@/api";
export default {
  name: "DashBoardView",
  components: {
    ItemPortVue,
    AlertVue,
  },
  data() {
    return {
      confirma: false,
      alerta: false,
      url: "http://localhost:3333/files/capa/",
      portifolios: "",
    };
  },
  async beforeMount() {
    this.listarPort();
  },
  methods: {
    clickNao() {
      this.confirma = false;
      this.alerta = false;
      
        //chamar a lista de portifolios
        this.listarPort();
    },
    clickSim() {
      this.confirma = true;
      this.alerta = false;
        //chamar a lista de portifolios
        this.listarPort();
    },
    async deletePortifolio(event) {
      this.alerta = true;
      if (this.confirma) {
        // this.confirma = true;
        //chamar a lista de portifolios
        this.listarPort();
        const usuario = this.$store.state.usuario.usuario.id;
        const token = this.$store.state.usuario.token;
        await api
          .delete(`/usuario/${usuario}/portifolio/${event}/delete`, {
            headers: { Authorization: `Bearer ${token}` },
          }).
          then(() => {
            //chamar a lista de portifolios
            return this.listarPort();
          })
          .catch((erro) => {
            console.log(erro);
          });
      }
    },
    async listarPort() {
      const usuario = this.$store.state.usuario.usuario.id;
      const token = this.$store.state.usuario.token;
      await api
        .get(`/usuario/${usuario}/portifolios`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => res.data)
        .then((data) => {
          if (!data.error) {
            this.portifolios = this.$store.state.portifolios = data.portifolios;
          } else {
            console.log(data.error);
          }
        });
    },
  },
};
</script>

<style scoped>
section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 20px;
}
section h3 {
  font-size: 1.2em;
  margin-left: 10px;
  text-transform: uppercase;
  border-left: 3px solid #227c9d;
  padding-left: 10px;
}
</style>