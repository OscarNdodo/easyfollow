<template>
  <div class="card">
    <img src="/assets/02.jpg" alt="img-name" />
    <div class="desc">
      <a href="#" target="_blank">Sistema de gestao escolar</a>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, omnis
        ab? Provident dicta vel vero aspernatur dolorum ab libero, doloribus
        quas accusamus laboriosam nobis numquam nihil, iure qui commodi
        voluptatibus!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardVue",
};
</script>

<style scoped>
.fa-link {
  color: #555;
  font-size: 0.8em;
  transform: rotateX(160deg);
}
.card {
  width: 320px;
  box-shadow: 0 0 10px #a2a7ae;
  margin: 30px 0;
}
.card img {
  width: 100%;
  border-radius: 5px 5px 0 0;
}
.card .desc {
  width: 100%;
  margin-top: -10px;
  box-shadow: 0 0 10px #a2a7ae;
  padding: 10px;
  border-radius: 0 0 5px 5px;
}

.card .desc a {
  text-decoration: underline;
  padding: 20px 0;
  margin: 20px 0;
  color: #227c9d;
  font-size: 1.2em;
  text-transform: uppercase;
}

.card .desc p {
  margin-top: 10px;
  text-align: justify;
  color: #131313;
}
@media screen and (min-width: 920px) {
  .card .desc p {
    text-align: left;
    font-size: 1.3em;
  }
}
</style>