<template>
  <div class="projecto">
    <form action="#">
      <h2>Projecto</h2>
      <label for="nome" class="fa fa-flag">
        <input
          type="text"
          name="nome"
          placeholder="Nome do projecto"
          required
        />
      </label>
      <label for="nome" class="fa fa-image">
        <input type="file" name="nome" required />
      </label>
      <label for="nome">
        <textarea
          v-model="descricao"
          id=""
          cols="10"
          rows="5"
          placeholder="Digite uma breve descricão sobre o projecto)"
        ></textarea>
      </label>
      <button @click.prevent="projectoClick">Continuar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProjectoVue",
  methods: {
    projectoClick() {
      this.$emit("projectoClick");
    },
  },
};
</script>

<style scoped>
.projecto {
  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: center;
}
.projecto form {
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

.projecto form h2 {
  text-transform: uppercase;
  font-size: 1.3em;
  text-align: center !important;
  padding: 0 0 20px 0;
  color: #227c9d;
}

.projecto form label {
  width: 100%;
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
input,
textarea {
  width: 93%;
}
.projecto form label input,
textarea,
option {
  padding: 5px 10px;
  font-size: 1em;
  background-color: #fff;
}
.projecto form .fa {
  color: #c0bbbb;
}
.projecto form .fa-lock {
  font-size: 1.6em;
}

.projecto form button {
  width: 100%;
  padding: 8px;
  font-size: 1.3em;
  margin-top: 10px;
  color: #f3f0f0;
  background: linear-gradient(15deg, #2e83ea, #38d2e3);
  cursor: pointer;
}
</style>