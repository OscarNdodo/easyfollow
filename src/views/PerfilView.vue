<template>
  <section>
    <aside>
      <h2>Perfil</h2>
      <img src="/assets/02.jpg" alt="user" />
    </aside>
    <ul>
      <li>
        <span>Nome: </span><span>{{ nome }}</span>
      </li>
      <li>
        <span>Email: </span><span>{{ email }}</span>
      </li>
      <li>
        <span>Celular: </span><span>{{ telefone }}</span>
      </li>
      <li>
        <span>Portifolios: </span><span>{{ portifolios }} criados</span>
      </li>
    </ul>
  </section>
</template>

<script>
import api from "@/api";
export default {
  name: "PerfilView",
  data() {
    return {
      nome: "",
      email: "",
      telefone: "",
      portifolios: "",
    };
  },
  beforeMount() {
    try {
      const id = this.$store.state.usuario.usuario.id;
      api
        .get(`/usuario/${id}`)
        .then((res) => res.data.usuario)
        .then((dados) => {
          this.nome = dados.nome;
          this.email = dados.email;
          this.telefone = dados.telefone;
          this.portifolios = dados.portifolios.length;
        })
        .catch((erro) => {
          console.log("ERRO: " + erro);
        });
    } catch (err) {
      console.log("ERRO: " + err);
    }
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
section {
  width: 100%;
  margin-top: 5vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
}
section aside:first-child h2 {
  font-size: 1.2em;
  padding-left: 10px;
  color: #484646;
  text-transform: uppercase;
  border-left: 4px solid #227c9d;
}
section aside:first-child img {
  width: 360px;
  height: 380px;
  margin-top: 30px;
  border: 1px solid #227c9d;
  border-radius: 0 20px 0 20px;
  padding: 10px;
  background-color: #ffffff;
}
section ul {
  width: 100%;
  padding: 25px 30px;
}
section ul li {
  padding: 5px;
  margin: 5px 0;
  font-size: 1.3em;
  color: #444;
}
section ul li:nth-child(even) {
  background-color: #e3dddd;
}
section ul li span:last-child {
  color: #222;
  font-weight: 500;
}
/*RESPONSIVIDADE*/
@media screen and (min-width: 920px) {
  section {
    width: 100%;
    margin-bottom: 100px;
    flex-direction: row;
    padding-left: 30px;
    justify-content: space-between;
  }
}
</style>