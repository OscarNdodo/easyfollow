<template>
  <section>
    <h2>Habiildades</h2>
    <ul>
      <li class="actions">
        <span class="tech">Ferramenta</span><span class="nivel">Nivel</span>
      </li>
      <li>
        <span class="tech">Node.js</span
        ><span class="nivel">Pleno</span>
      </li>
      <li>
        <span class="tech">ReactJS</span><span class="nivel">Pleno</span>
      </li>
      <li>
        <span class="tech">PHP</span><span class="nivel">Junior</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "HabilidadesVue",
};
</script>

<style scoped>
section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 30px;
}
section h2 {
  font-size: 1.2em;
  padding-left: 10px;
  color: #484646;
  text-transform: uppercase;
  border-left: 4px solid #227c9d;
}
section ul {
  width: 100%;
  margin: 20px 0;
}
section ul li {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 4px;
  margin: 10px 0;
  color: #484646;
  font-size: 1.2em;
}
section ul li:nth-child(even){
	background-color: #e6e4e4ca;
}
section ul .actions {
  color: #227c9d;
  font-weight: bold;
}

/**RESPONSIVIDADE */
@media screen and (min-width: 920px) {
  section {
  padding: 10px 20px;
  margin-bottom: 60px;
}
section h2 {
  font-size: 1.5em;
}
section ul {
  margin: 10px 0;
}
section ul li {
  padding: 10px 6px;
  margin: 15px 0;
  font-size: 1.4em;
}
}
</style>