<template>
  <section>
    <aside>
      <h2>Sobre mim</h2>
      <img src="/assets/02.jpg" alt="user" />
    </aside>
    <aside>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quas
        libero alias tempore consectetur c 0onsequuntur quasi asperiores eaque
        esse sunt temporibus ducimus expedita atque, doloribus in. Nostrum eaque
        autem modi.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quas
        libero alias tempore consectetur c 0onsequuntur quasi asperiores eaque
        esse sunt temporibus ducimus expedita atque, doloribus in. Nostrum eaque
        autem modi.
      </p>
      <button><span class="fa fa-download"></span> Curriculum Vitae</button>
    </aside>
  </section>
</template>

<script>
export default {
  name: "SobreVue",
};
</script>

<style scoped>
img {
  width: 100%;
}
section {
  width: 100%;
  margin-top: 35vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
}
section aside:first-child h2 {
  font-size: 1.2em;
  padding-left: 10px;
  color: #484646;
  text-transform: uppercase;
  border-left: 4px solid #227c9d;
}
section aside:first-child img {
  width: 360px;
  height: 380px;
  margin-top: 30px;
  border: 1px solid #227c9d;
  border-radius: 0 20px 0 20px;
  padding: 10px;
  background-color: #ffffff;
}
section aside:last-child {
  padding: 20px 20px;
}
section aside:last-child p {
  font-size: 1.3em;
  color: #333;
  margin-top: 50px;
}
section aside:last-child button {
  width: 100%;
  margin: 20px 0;
  padding: 10px;
  font-size: 1.3em;
  color: #fff;
  border-radius: 5px;
  background: linear-gradient(15deg, #2e83ea, #38d2e3);
}

/*RESPONSIVIDADE*/
@media screen and (min-width: 920px) {
section {
  width: 100%;
  margin-top: 110vh;
  margin-bottom: 100px;
  flex-direction: row;
  padding-left: 30px;
  justify-content: space-between;
  align-items: flex-start;
}
section aside:first-child{
  width: 30%;
}
section aside:first-child h2 {
  font-size: 1.5em;
  margin-top: 20px;
}

section aside:last-child {
  width: 70%;
  padding: 20px 100px;
}
section aside:last-child p {
  font-size: 1.4em;
  line-height: 30px;
}
button{
  cursor: pointer;
}
}
</style>