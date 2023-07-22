<template>
  <menu>
    <div>
      <PerfilVue />
    </div>
    <ul>
      <li>
        <RouterLink @click="clikLink" to="/"><span class="fa fa-home"></span>Início</RouterLink>
      </li>
      <li>
        <RouterLink @click="clikLink" to="/portifolio/criar"><span class="fa fa-plus-circle"></span>Novo</RouterLink>
      </li>
      <li>    
        <RouterLink @click="clikLink" to="/portifolios"><span class="fa fa-dashboard"></span>Todos</RouterLink>
      </li>
      <li>
        <RouterLink @click="clikLink" to="/perfil"><span class="fa fa-user"></span>Perfil</RouterLink>
      </li>
      <li>
        <RouterLink @click="clikLink" to="/sobre"><span class="fa fa-globe"></span>Sobre</RouterLink>
      </li>
      <li class="exit" style="color: red" @click="exitMenu">
        Fechar <span class="fa fa-times" style="color: red"></span>
      </li>
    </ul>
  </menu>
</template>

<script>
import PerfilVue from "./base/Perfil.vue";
export default {
  name: "MenuVue",
  components: {
    PerfilVue,
  },
  methods: {
    exitMenu() {
      this.$emit("exitMenu");
    },
    clikLink(){
      this.$emit("clikLink");
    }
  },
};
</script>

<style scoped>
.fa {
  font-size: 1.3em;
  color: #898a8b;
}
menu {
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-left: 2px solid #f6f6f6;
  z-index: 99;
}

menu div,
ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

menu ul {
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 50px;
}

menu ul li {
  width: 100%;
  margin: 7px 0;
  color: #333;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

menu ul li a,
.exit {
  width: 100%;
  padding: 0 10px;
  font-size: .9em;
  text-transform: uppercase;
  color: #2a2b30;
  padding: 5px 10px;
  border-radius: 4px;
  transition: 0.5s;
}
.exit {
  margin: 10px 0px 0 2px;
}
menu ul li a .fa {
  margin-right: 15px;
  font-size: 1.2em;
}

menu ul li a:hover {
  background-color: #898a8b3c;
}

/* Responsividade 1024px */
@media screen and (min-width: 1024px) {
  menu {
    width: 25%;
  }
}
</style>