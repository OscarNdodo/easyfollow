<template>
  <div class="login">
    <form>
      <h2>Login</h2>
      <p class="erro">{{ erro }}</p>
      <label for="email" class="fa fa-envelope">
        <input
          type="email"
          v-model="email"
          placeholder="Digite o teu email"
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
      <p class="conta" @click="criarConta">Não tenho conta</p>
      <button @click.prevent="login">Login</button>
    </form>
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "LoginVue",
  data() {
    return {
      erro: "",
      email: "",
      senha: "",
    };
  },
  methods: {
    criarConta() {
      return this.$emit("criarConta");
    },
    login() {
      if (this.email.length < 13 || this.senha.length < 6) {
        this.erro = "Email ou senha incorrecta!";
      }
      const dados = {
        email: this.email,
        senha: this.senha,
      };
      api
        .post("/login", dados)
        .then((res) => res.data)
        .then((dado) => {
          if (dado.error) {
            this.erro = dado.msg;
            this.cleanErro();
          } else {
            this.$store.state.usuario = dado;
            this.$router.push("/perfil");
          }
        })
        .catch((err) => {
          this.erro = err.response.data.msg;
          this.cleanErro();
        });
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
  top: 60px;
  font-size: 1.4em;
  color: red;
}
.login .erro{
  color: red;
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
  margin-top: 20vh;
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
  width: 90%;
  padding: 5px 10px;
  font-size: 1em;
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