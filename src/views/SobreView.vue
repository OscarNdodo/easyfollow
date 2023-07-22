<template>
  <main>
    <div class="intro">
      <h1>EasyFollow</h1>
      <p>
        <em><strong>EasyFollow</strong></em> é uma plataforma gratís de geração dinâmica de
        <em>portifolios</em>, desenvolvida por <strong>Óscar Ndodo</strong>,
        Programador a mais de 3 anos e estudante universitário no curso de
        Informatica (especialização em redes). A plataforma veio para ajudar a qualquer pessoa que
        precise de um website basíco para mostrar suas hablidades e ferramentas
        de trabalho do seu dia-a-dia.
      </p>
    </div>
    <div class="Missao">
      <h1>Missão</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio
        libero voluptatibus illo sequi mollitia accusamus ipsam neque odit!
        Placeat officia q uos officiis quisquam repudiandae maxime ut dolores
        enim voluptatibus!
      </p>
    </div>
    <div class="feedback">
      <h1>Contactos</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio
        libero voluptatibus illo sequi mollitia accusamus ipsam neque odit!
        Placeat officia q uos officiis quisquam repudiandae maxime ut dolores
        enim voluptatibus!
      </p>
      <ul>
        <li>+258845512288</li>
        <li>+258862585512</li>
        <li>devndodo@gmail.com</li>
        <li>oscarndodo12@gmail.com</li>
        <li>
          <a
            href="https://www.github.com/oscarndodo"
            target="_blank"
            class="fa fa-github"
          >
            Oscar Ndodo</a
          >
        </li>
        <li>
          <a
            href="https://www.linkedin.com/oscarndodo"
            target="_blank"
            class="fa fa-linkedin"
          >
            Oscar Ndodo</a
          >
        </li>
      </ul>
    </div>
    <div>
      <p>&copy;easyfollow.site | Oscar Ndodo | 2023</p>
    </div>
  </main>
</template>

<script>
export default {
  name: "SobreView",
};
</script>

<style scoped>
main {
  width: 100%;
  display: flex;
  margin: 30px 0;
  padding: 0 10px;
}
main div {
  width: 100%;
  padding: 10px 0;
}
main div h1 {
  font-size: 1.5em;
  margin-bottom: 8px;
  padding-left: 10px;
  border-left: 4px solid #227c9d;
  color: #222;
}
main div p {
  color: #333;
  font-size: 1.1em;
}
main .feedback ul {
  margin-top: 20px;
}
main .feedback ul li {
  margin-top: 10px;
  padding-left: 5px;
  border-left: 4px solid #227c9d;
  font-size: 1.1em;
  color: #434346;
}
</style>