<template>
  <div class="login">
    <form action="#">
      <h2>Portifolio</h2>
      <ErroVue :erro="erro" />
      <span style="margin-bottom: 5px; color: #666">Escolha uma imagem que será a capa para este portifolio.</span>
      <label for="foto" class="fa fa-image">
        <input naem="foto" type="file" required @change="getCapa" />
      </label>
       <span style="margin-bottom: 5px; color: #666">Este é o nome que aparecerá neste portifolio.</span>
      <label for="nome" class="fa fa-user">
        <input
          type="text"
          name="nome"
          v-model="nome"
          placeholder="Digite nome do portifolio"
          required
        />
      </label>
       <span style="margin-bottom: 5px; color: #666">Diga qual é a sua profissão ou area d actuação que deve aparecer neste portifolio.</span>
      <label for="profissao" class="fa fa-briefcase">
        <input
          type="text"
          name="profissao"
          v-model="profissao"
          placeholder="Digite a área de trabalho (profissão)"
          required
        />
      </label>
       <span style="margin-bottom: 5px; color: #666">Escreva tudo o que puder sobre te, pois isso aparecerá neste portifolio.</span>
      <label for="descricao">
        <textarea
          v-model="descricao"
          name="descricao"
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
  data() {
    return {
      erro: "",
      capa: "",
      nome: "",
      profissao: "",
      descricao: "",
    };
  },
  beforeMount() {
    this.nome = this.$store.state.usuario.usuario.nome;
  },
  methods: {
    getCapa(event) {
      return this.capa = event.target.files[0];
    },
    novoClick() {
      if(this.capa.length == ""){
        return this.erro = "Insira uma foto de capa!"
      }
      if(this.nome.length == ""){
        return this.erro = "Insira um nome"
      }
      if(this.profissao.length == ""){
        return this.erro = "Insira uma profissao"
      }
      if(this.descricao.length == ""){
        return this.erro = "Insira uma descrição"
      }
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
.login form span{
  font-size: 1em;
  color: #222;
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