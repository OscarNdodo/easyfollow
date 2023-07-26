<template>
  <main>
    <h2>EasyPortifólio</h2>
    <div class="container">
      <section class="image">
        <img src="/assets/01.jpg" alt="welcome" />
      </section>
      <section class="info">
        <p>
         Impressione as empresas com as suas experiências, habilidades e projectos realizados. Crie um portifólio moderno com apenas alguns cliques. Selecionado os diversos modelos disponiveis para te, de acordo com a sua área de trabalho.
        </p>
        <RouterLink to="/conta"
          >Experimentar <span class="fa fa-smile-o"></span
        ></RouterLink>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeVue",
};
</script>

<style scoped>
img {
  width: 100%;
}
.fa-arrow-righ {
  font-weight: 100 !important;
}
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  padding-bottom: 40px;
}
main h2,
h3 {
  color: #222222;
  z-index: 9;
  font-size: 1.5em;
}

main h2 {
  color: #ffffff;
  text-shadow: 0 0 5px #8b8c8d;
  margin-bottom: 5px;
}
main .image {
  margin-top: -20px;
}

main .info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -40px;
  background: linear-gradient(15deg, #ffffff, #fcfcfc);
}

main .info p {
  font-size: 1.2em;
  line-height: 25px;
  color: #333333;
  text-align: left;
  /* text-transform: uppercase; */
}

main .info a {
  width: 100%;
  padding: 10px 30px;
  color: #ffffff;
  background: linear-gradient(15deg, #2e83ea, #38d2e3);
  text-align: center;
  font-size: 1.3em;
  margin-top: 20px;
  border-radius: 5px;
}

main .info a:hover {
  background: linear-gradient(-15deg, #38d2e3 #2e83ea);
}

/* Responsividade 1024px */
@media screen and (min-width: 1024px) {
  main {
    justify-content: flex-start;
    padding: 30px 30px 0 30px;
  }
  main .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  main .info {
    width: 50%;
    margin-top: -50px;
    margin-left: 50px;
    background-color: #ffffff;
  }

  main .info p {
    font-size: 1.5em;
    line-height: 30px;
    color: #222;
    font-family: "Times New Roman", Times, serif;
    font-weight: 500;
  }

  main .info a {
    padding: 12px 30px;
    font-size: 1.3em;
    margin-top: 40px;
    font-weight: 50;
  }
  h2 {
    display: none;
  }
}
</style>