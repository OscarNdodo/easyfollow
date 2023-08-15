<template>
  <div class="projecto">
    <form action="#">
      <h2>Projecto</h2>
      <ErroVue :erro="erro" />
      <span style="margin-bottom: 5px; color: #666">Diga qual é o nome deste projecto.</span>
      <label for="nome" class="fa fa-flag">
        <input
          type="text"
          v-model.trim="nome"
          placeholder="Nome do projecto"
          required
        />
      </label>
      <span style="margin-bottom: 5px; color: #666">Insira o link de acesso ao projecto, caso exista.</span>
      <label for="link" class="fa fa-link">
        <input
          type="url"
          v-model.trim="link"
          placeholder="Link do projrcto (url)"
          required
        />
      </label>
      <span style="margin-bottom: 5px; color: #666">Insira uma imagem do projecto.</span>
      <label for="imagem" class="fa fa-image">
        <input type="file" @change="getImage" required />
      </label>
      <span style="margin-bottom: 5px; color: #666">Fale mais sobre este projecto.</span>
      <label for="descricao">
        <textarea
        name="descricao"
          v-model.trim="descricao"
          id=""
          cols="10"
          rows="5"
          placeholder="Digite uma breve descricão sobre o projecto..."
        ></textarea>
      </label>
      <button @click.prevent="projectoClick">Continuar</button>
    </form>
  </div>
</template>

<script>
  import ErroVue from"../base/Erro.vue";
export default {
  name: "ProjectoVue",
  components: {
    ErroVue
  },
  data() {
    return {
      erro: "",
      nome: "",
      link: "",
      imagem: "",
      descricao: "",
    };
  },
  methods: {
    getImage(event) {
      this.imagem = event.target.files[0];
    },
    projectoClick() {

      // if(!this.imagem){
      //   return this.erro = "Insira uma foto do projecto!"
      // }
      // if(this.nome.length < 5 || this.link.length < 5 || this.descricao.length < 4){
      //   return this.erro ="Preinha os campos!"
      // }
      try{

        const data = new FormData();
  
          data.append("imagem", this.imagem, this.imagem.name);
          data.append("nome", this.nome);
          data.append("link", this.link);
          data.append("descricao", this.descricao);
  
        return  this.$emit("projectoClick", data);
      }catch(erro) {
        this.erro = "Erro! Priecha os dados.",
        console.log(erro)
      }


    },
  },
};
</script>

<style scoped>
.projecto {
  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: center;
}
.projecto form {
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

.projecto form h2 {
  text-transform: uppercase;
  font-size: 1.3em;
  text-align: center !important;
  padding: 0 0 20px 0;
  color: #227c9d;
}

.projecto form label {
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
.projecto form label input,
textarea,
option {
  padding: 5px 10px;
  font-size: 1em;
  background-color: #fff;
}
.projecto form .fa {
  color: #c0bbbb;
}
.projecto form .fa-lock {
  font-size: 1.6em;
}

.projecto form button {
  width: 100%;
  padding: 8px;
  font-size: 1.3em;
  margin-top: 10px;
  color: #f3f0f0;
  background: linear-gradient(15deg, #2e83ea, #38d2e3);
  cursor: pointer;
}
</style>