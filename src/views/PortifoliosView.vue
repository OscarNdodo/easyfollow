<template>
  <section>
    <h3>Todos portifolios</h3>
    <ItemPortVue />
    <ItemPortVue />
    <ItemPortVue />
    <ItemPortVue />
  </section>
</template>

<script>
import ItemPortVue from "@/components/ItemPort.vue";
export default {
  name: "DashBoardView",
  components: {
    ItemPortVue,
  },
};
</script>

<style scoped>
section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 20px;
}
section h3 {
  font-size: 1.2em;
  margin-left: 10px;
  text-transform: uppercase;
  border-left: 3px solid #227c9d;
  padding-left: 10px;
}
</style>