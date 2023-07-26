<template>
  <section>
    <aside>
      <h2>Perfil</h2>
      <img :src="foto" :alt="nome" />
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
      <!-- <li>
        <span>Portifolios: </span><span>{{ portifolios }} criados</span>
      </li> -->
      <li>
        <RouterLink to="/portifolio/criar" class="novo-port">
          Novo Portifolio
        </RouterLink>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "PerfilView",
  data() {
    return {
      foto: "/assets/02.jpg",
      nome: "",
      email: "",
      telefone: "",
      portifolios: "",
    };
  },
  beforeMount() {
    try {
      const usuario = this.$store.state.usuario.usuario;
      this.foto = `http://localhost:3333/files/perfil/${usuario.foto}`;
      this.nome = usuario.nome;
      this.email = usuario.email;
      this.telefone = usuario.telefone;
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
  font-size: 1.2em;
  color: #444;
}

section ul li:last-child{
  width: 100%;
  text-align: left;
  margin-top: 40px;
  background-color: #fff !important;
}
section ul li:last-child a{
  width: 100%;
  font-size: 1em;
  background: linear-gradient(15deg, #2e83ea, #38d2e3);
  padding: 10px 30px;
  color: #ffffff;
  border-radius: 5px;
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