<template>
  <div class="login">
    <form enctype="multipart/form-data">
      <h2>Nova Conta</h2>
       <p class="err">{{ erro }}</p>
        <span style="text-align: left;">Foto de perfil</span>
      <label for="foto" class="fa fa-image">
        <input type="file" @change="getFoto" required style="width: 90%;" />
      </label>
      <label for="nome" class="fa fa-user">
        <input
          type="text"
          v-model="nome"
          placeholder="Digite o teu nome"
          required
        />
      </label>
      <label for="email" class="fa fa-envelope">
        <input
          type="email"
          v-model="email"
          placeholder="Digite a teu email"
          required
        />
      </label>
      <label for="telefone" class="fa fa-phone">
        <input
          type="number"
          v-model="telefone"
          placeholder="Digite a teu celular"
          required
        />
      </label>
      <label for="senha" class="fa fa-lock">
        <input
          type="password"
          v-model="senha"
          placeholder="Digite a tua senha"
          required
        />
      </label>
      <p class="conta" @click="cancelarConta">Já tenho conta</p>
      <button type="submit" @click.prevent="criarConta">Criar</button>
    </form>
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "ContaVue",
  data() {
    return {
      erro: "",
      foto: null,
      nome: null,
      email: null,
      telefone: null,
      senha: null,
    };
  },
  methods: {
    cancelarConta() {
      return this.$emit("cancelarConta");
    },
    getFoto(event) {
      this.foto = event.target.files[0];
    },
    async criarConta() {
      try {
        if (this.nome.length < 6 || this.nome == "") {
          this.erro = "O nome é muito curto!";
          this.cleanErro();
        } else if (this.email.length < 12 || this.email == "") {
          this.erro = "Email inválido!";
          this.cleanErro();
        } else if (this.telefone.length < 9) {
          this.erro = "O telefone é muito curto!";
          this.cleanErro();
        } else if (this.senha.length < 6 || this.senha == "") {
          this.erro = "O senha é muito curta!";
          this.cleanErro();
        } else {

          const dados = new FormData();
          dados.append("foto", this.foto, this.foto.name);
          dados.append("nome", this.nome);
          dados.append("email", this.email);
          dados.append("telefone", this.telefone);
          dados.append("senha", this.senha);
          // console.log(dados);
          await api
            .post("/usuario/criar", dados)
            .then((res) => {
              return res.data
            })
            .then((dado) => {
              if(!dado.error){
                this.foto = null;
                this.nome = null;
                this.email = null;
                this.telefone = null;
                this.senha = null;
                return this.$emit("cancelarConta");
              }else{
                  this.erro = dado.msg;
                  this.cleanErro();
              }
              
            })
            .catch((erro) => {
              this.erro = "Esta conta já existe!";
              console.log("Erro: " + erro);
              this.cleanErro();
            });
        }
      } catch (erro) {
        this.erro = "Priencha os campos!";
        this.cleanErro();
        console.log(erro);
      }
    },

    cleanErro() {
      setTimeout(() => {
        this.erro = undefined;
      }, 2000);
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
  z-index: 999;
}
.login .fa-times {
  position: fixed;
  top: 10px;
  font-size: 1.4em;
  color: red;
}
.login form .err{
  color: #F00;
  text-decoration: none;
  margin-bottom: 3px;
  letter-spacing: 1px;
  font-size: 1em;
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
.login form label input {
  padding: 5px 10px;
  font-size: 1em;
  text-transform: none;
}

.login form .fa {
  color: #c0bbbb;
}
.login form label .fa-lock {
  font-size: 1.6em;
}
.login form p {
  text-decoration: underline;
  font-size: 1em;
  letter-spacing: 4px;
  color: #2b3032;
  cursor: pointer;
}
.login form button {
  width: 100%;
  padding: 8px;
  font-size: 1.3em;
  margin-top: 10px;
  color: #f3f0f0;
  background: linear-gradient(15deg, #2e83ea, #38d2e3);
}
</style>