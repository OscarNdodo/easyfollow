<template>
  <p class="err">{{ erro }}</p>
</template>

<script>
export default {
  name: "ErroVue",
  props: {
    erro: String,
  },
};
</script>

<style scoped>
.err{
  color: #F00;
  text-decoration: none;
  margin-bottom: 3px;
  letter-spacing: 1px;
  font-size: 1em;
}
</style>