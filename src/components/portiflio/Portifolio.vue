<template>
  <div class="login">
    <form action="#">
      <h2>Portifolio</h2>
      <ErroVue :erro="erro" />
         <label for="nome" class="fa fa-image">
        <input
          type="file"
          required
          @change="getCapa"
        />
      </label>
      <label for="nome" class="fa fa-user">
        <input
          type="text"
          v-model="nome"
          placeholder="Digite nome do portifolio"
          required
        />
      </label>
      <label for="profissao" class="fa fa-briefcase">
        <input
          type="text"
          v-model="profissao"
          placeholder="Digite a área de trabalho (profissão)"
          required
        />
      </label>
      <label for="descricao">
        <textarea
          v-model="descricao"
          id=""
          cols="10"
          rows="5"
          placeholder="Digite uma breve descricão sobre te (biografia)"
        ></textarea>
      </label>
      <button @click.prevent="novoClick">Continuar</button>
    </form>
  </div>
</template>

<script>
import ErroVue from "../base/Erro.vue";
export default {
  name: "PortiflioVue",
  components: {
    ErroVue,
  },
  props: {
    erro: String
  },
  data() {
    return {
      capa: "",
      nome: "",
      profissao: "",
      descricao: "",
    };
  },
  beforeMount(){
    this.nome = this.$store.state.usuario.usuario.nome;
  },
  methods: {
    getCapa(event){
      this.capa = event.target.files[0];
    },
    novoClick() {
      const dados = new FormData();
      dados.append("capa", this.capa, this.capa.name);
      dados.append("nome", this.nome);
      dados.append("profissao", this.profissao);
      dados.append("descricao", this.descricao);
      
      return this.$emit("novoClick", dados);
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: center;
}
.login form {
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  background-color: #fff;
  padding: 40px 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px #7f7c7c;
}

.login form h2 {
  text-transform: uppercase;
  font-size: 1.3em;
  text-align: center !important;
  padding: 0 0 20px 0;
  color: #227c9d;
}

.login form label {
  width: 100%;
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
input,
textarea {
  width: 93%;
}
.login form label input,
textarea {
  padding: 5px 10px;
  font-size: 1em;
}
.login form .fa {
  color: #c0bbbb;
}
.login form .fa-lock {
  font-size: 1.6em;
}

.login form button {
  width: 100%;
  padding: 8px;
  font-size: 1.3em;
  margin-top: 10px;
  color: #f3f0f0;
  background: linear-gradient(15deg, #2e83ea, #38d2e3);
  cursor: pointer;
}
</style>