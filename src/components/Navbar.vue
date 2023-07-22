<template>
  <div>
    <header>
      <ul>
        <li><span class="fa fa-navicon" @click="showMenu"></span></li>
        <li><a href="#">EasyFollow</a></li>
      </ul>
      <PesquisarVue @btnPesquisar="btnPesquisar" />
    </header>
    <MenuVue v-show="menu" @exitMenu="exitMenu" @clikLink="clikLink" />
  </div>
</template>

<script>
import PesquisarVue from "./base/Pesquisar.vue";
import MenuVue from "./Menu.vue";
export default {
  name: "NavbarVue",
  components: {
    PesquisarVue,
    MenuVue,
  },
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    showMenu() {
      this.menu = true;
    },
    exitMenu() {
      this.menu = false;
    },
    clikLink(){
      this.menu = false;
    },
    btnPesquisar(){
      return this.$emit("btnPesquisar");
    }
  },
};
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0 0 10px #a2a7ae;
  padding: 5px 3px;
}

header ul {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
}
header ul li {
  display: flex;
  align-items: center;
  justify-content: center;
}
header ul li span {
  font-size: 1.2em;
  color: #333333;
}
header ul li a {
  text-align: center;
  margin-left: 10px;
  color: #227c9d;
  /* text-transform: uppercase; */
  font-weight: bold;
}

@media screen and (min-width: 1024px) {
  header {
    box-shadow: none;
  }
  header ul {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
  }
  header ul li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  header ul li span {
    font-size: 1.4em;
  }
  header ul li a {
    font-size: 1.3em;
    font-weight: normal;
  }
}
</style>