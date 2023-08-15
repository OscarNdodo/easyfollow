<template>
  <header>
    <img :src="capa" alt="cover" />
    <div class="info">
      <nav>
        <RouterLink to="/">easyfollow.site</RouterLink>
        <span>&copy;{{ currentDate }}</span>
      </nav>
      <div class="sobre">
        <div class="dados">
          <h1>{{ nome }}</h1>
          <h2>{{ profissao }}</h2>
        </div>
        <ul>
          <!-- <span style="color: #fff; font-size: 1.5em;">Contactos: </span> -->
          <li><a href="#">+2858{{ telefone }}</a></li>
          <li v-for="contato in contatos" :key="contato.id"><a :href="contato.link" target="blank">{{ contato.nome }}</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "introVue",
  props: {
    capa: String,
    nome: String,
    telefone: String,
    profissao: String,
    contatos: Array
  },
  computed: {
    currentDate(){
      return new Date().getFullYear()
    }
  }
};
</script>

<style scoped>
img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40vh;
  background-color: #3a3a3d;
}
header {
  width: 100%;
}
header .info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
  height: 100%;
}
header .info nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header .info nav a,
span {
  color: #ffffff82;
  font-weight: 500;
  font-size: 0.8em;
}
header .info .sobre {
  width: 100%;
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
header .info .sobre .dados {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
header .info .sobre .dados h1 {
  color: #fff;
  font-size: 1.8em;
  text-transform: uppercase;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
header .info .sobre .dados h2 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-transform: uppercase;
  color: #ffffffd6;
  font-weight: 100;
  font-size: 1.1em;
}
header .info .sobre ul {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 15%;
}
header .info .sobre ul li {
  margin: 0 5px;
}
header .info .sobre ul li a {
  color: #ffffffde;
  font-size: .8em;
  text-decoration: underline;
}

/** Responsividade **/

@media screen and (min-width: 920px) {
  img {
    height: 100vh;
  }
  header {
    width: 100%;
  }
  header .info {
    padding: 5px 100px;
    background-color: #11111e7c;
  }
  header .info nav a,
  span {
    font-size: 1em;
  }

  header .info .sobre .dados h1 {
    font-size: 4em;
  }
  header .info .sobre .dados h2 {
    font-size: 2em;
    padding-left: 15px;
    margin-top: 10px;
    border-left: 5px solid #ffffff;
  }

  header .info .sobre ul li a {
    font-size: 1.3em;
    margin-left: 20px;
  }
}
</style>