<template>
  <form action="#">
    <input type="search" name="search" placeholder="Search..." />
    <button type="submit" @click.prevent="btnPesquisar" class="fa fa-search"></button>
  </form>
</template>

<script>
export default {
	name: "PesquisarVue",
  methods: {
    btnPesquisar(){
      return this.$emit("btnPesquisar");
    }
  }
};
</script>

<style scoped>
form {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0 0 6px #d7d8d9;
  margin-right: 10px;
  border: 1px solid #f7f7f7;
  border-radius: 4px;
  padding: 5px 3px;
}
form input {
  width: 85%;
  outline: none;
  padding: 5px;
  font-size: 1.1em;
  border-right: 1px solid #eafafc;
}
form button {
  width: 15%;
  height: 100%;
  padding: 2px;
  font-size: 1.2em;
  color: #333333;
  background-color: #ffffff;
  cursor: pointer;
}

form button:hover{
  color: #888;
}

@media screen and (min-width: 1024px) {
  form{
    width: 45%;
  }
  form input{
    font-size: 1.3em;
  }
}
</style>