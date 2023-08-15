<template>
  <div class="link-contato">
    <form action="#">
      <h2>Link de contato</h2>
      <ErroVue :erro="erro" />
      <span style="margin-bottom: 5px; color: #666">Diga qual é o nome ou tipo de contacto, isto aparecerá neste portifolio.</span>
      <label for="nome" class="fa fa-user">
        <input
          type="text"
          v-model="nome"
          placeholder="Digite nome ex: facebook"
          required
        />
      </label>
      <span style="margin-bottom: 5px; color: #666">Agora insira o link/numero que servira de contacto.</span>
      <label for="link" class="fa fa-link">
        <input
          type="url"
          v-model="link"
          placeholder="Insira a URL do link"
        />
      </label>
      <button @click.prevent="linkClick">Continuar</button>
    </form>
  </div>
</template>

<script>
  import ErroVue from"../base/Erro.vue";
export default {
  name: "LinkVue",
  components: {
    ErroVue
  },
  data(){
    return {
      nome: "",
      link: ""
    }
  },
  methods: {
    linkClick(){
      // if(this.nome.length < 4 || this.link.length < 4){
      //   this.erro = "Priencha os campos!"
      // }
      try{

        const data = {
          nome: this.nome,
          link: this.link
        }
        this.$emit("linkClick", data);
        this.nome = "";
        this.link = "";
      }  catch(erro) {
          this.erro = "Erro! Tente novamente.",
          console.log(erro)
      }
    }
  }
};
</script>

<style scoped>
.link-contato {
  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: center;
}
.link-contato form {
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

.link-contato form h2 {
  text-transform: uppercase;
  font-size: 1.3em;
  text-align: center !important;
  padding: 0 0 20px 0;
  color: #227c9d;
}

.link-contato form label {
  width: 100%;
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
input, textarea{
  width: 93%;
}
.link-contato form label input, textarea {
  padding: 5px 10px;
  font-size: 1em;
}
.link-contato form .fa {
  color: #c0bbbb;
}
.link-contato form .fa-lock {
  font-size: 1.6em;
}

.link-contato form button {
  width: 100%;
  padding: 8px;
  font-size: 1.3em;
  margin-top: 10px;
  color: #f3f0f0;
  background: linear-gradient(15deg, #2e83ea, #38d2e3);
  cursor: pointer;
}
</style>