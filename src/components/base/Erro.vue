<template>
  <p class="erro">{{ erro }}</p>
</template>

<script>
export default {
name: "ErroVue",
props: {
	erro: String
}
}
</script>

<style scoped>
.erro {
  color: red;
  text-decoration: none;
  margin-bottom: 3px;
  letter-spacing: 1px;
}
</style>