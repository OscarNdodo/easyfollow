<template>
  <div class="link-contato">
    <form action="#">
      <h2>Link de contato</h2>
      <label for="nome" class="fa fa-user">
        <input
          type="text"
          name="nome"
          placeholder="Digite nome do link"
          required
        />
      </label>
      <label for="profissao" class="fa fa-link">
        <input
          type="text"
          name="profissao"
          placeholder="Insira a URL do link"
          required
        />
      </label>
      <button @click.prevent="linkClick">Continuar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LinkVue",
  methods: {
    linkClick(){
      return this.$emit("linkClick");
    }
  }
};
</script>

<style scoped>
.link-contato {
  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: center;
}
.link-contato form {
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

.link-contato form h2 {
  text-transform: uppercase;
  font-size: 1.3em;
  text-align: center !important;
  padding: 0 0 20px 0;
  color: #227c9d;
}

.link-contato form label {
  width: 100%;
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
input, textarea{
  width: 93%;
}
.link-contato form label input, textarea {
  padding: 5px 10px;
  font-size: 1em;
}
.link-contato form .fa {
  color: #c0bbbb;
}
.link-contato form .fa-lock {
  font-size: 1.6em;
}

.link-contato form button {
  width: 100%;
  padding: 8px;
  font-size: 1.3em;
  margin-top: 10px;
  color: #f3f0f0;
  background: linear-gradient(15deg, #2e83ea, #38d2e3);
  cursor: pointer;
}
</style>