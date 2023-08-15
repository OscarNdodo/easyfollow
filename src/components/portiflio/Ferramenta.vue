<template>
  <div class="ferramenta">
    <form action="#">
      <h2>Ferramenta ou habilidade</h2>
      <ErroVue :erro="erro" />
      <span style="margin-bottom: 5px; color: #666">Diga quais são as ferramentas ou suas habilidades que tu usa na elaboração dos seus trabalhos.</span>
      <label for="nome" class="fa fa-wrench">
        <input
          type="text"
          v-model="nome"
          placeholder="Nome da ferramenta"
          required
        />
      </label>
        <span style="margin-bottom: 5px; color: #666;">Selecione qual é o nível de dominio que você tem sobre essa ferramenta ou habilidade.</span>
      <label for="nivel" class="fa fa-trophy">
        <select v-model="nivel" >
			<option value="">Selecione o nivel</option>
			<option value="junior">Júnior</option>
			<option value="medio">Medio</option>
			<option value="pleno">Pleno</option>
			<option value="master">Master</option>
		</select>
      </label>
      <button @click.prevent="ferramentaClick">Continuar</button>
    </form>
  </div>
</template>

<script>
import ErroVue from "../base/Erro.vue";
export default {
  name: "FerramentaVue",
  components: {
    ErroVue
  },
  data(){
    return {
      erro: "",
      nome: "",
      nivel: ""
    }
  },
  methods: {
    ferramentaClick(){
      try{

      // if(this.nome.length == ""){
      //   return this.erro = "Nome da ferramenta ou habilidade"
      // }
      // if(this.nivel.length == ""){
      //   return this.erro = "Selecione um nivel"
      // }
      const data = {
        nome: this.nome,
        nivel: this.nivel
      }
      this.$emit("ferramentaClick", data);
      this.nome = "";
      this.nivel = "";
      } catch(erro) {
        this.erro = "Erro! Tente novamente.",
        console.log(erro)
      }
    }
  }
};
</script>

<style scoped>
.ferramenta {
  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: center;
}
.ferramenta form {
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

.ferramenta form h2 {
  text-transform: uppercase;
  font-size: 1.3em;
  text-align: center !important;
  padding: 0 0 20px 0;
  color: #227c9d;
}

.ferramenta form label {
  width: 100%;
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
input, select{
  width: 93%;
}
.ferramenta form label input, select, option {
  padding: 5px 10px;
  font-size: 1em;
  background-color: #fff;
}
.ferramenta form .fa {
  color: #c0bbbb;
}
.ferramenta form .fa-lock {
  font-size: 1.6em;
}

.ferramenta form button {
  width: 100%;
  padding: 8px;
  font-size: 1.3em;
  margin-top: 10px;
  color: #f3f0f0;
  background: linear-gradient(15deg, #2e83ea, #38d2e3);
  cursor: pointer;
}

</style>