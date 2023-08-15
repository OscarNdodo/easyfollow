<template>
  <main>
    <div class="intro">
      <h1>EasyFollow</h1>
      <p>
        <!-- <router-link to="/">EasyFollow</router-link> -->
        É uma plataforma grátis de geração dinâmica de <em>portifólios</em>.
        Esta plataforma vem para ajudar a qualquer pessoa que precise de um
        website básico para mostrar suas hablidades e ferramentas de trabalho do
        seu dia-a-dia. Usando os padrões modernos de design e criação de
        websites (UI/UX). Tornando assim esta plataforma como a melhor plataforma
        de geração de portifólios, se não a única... (rs rs rs). Desenvolvida por
        <strong>Óscar Ndodo</strong>, Programador à mais de 3 (três) anos em <em>free time</em>,
        estudante universitário no curso de Informática. 
        Esta é uma das diversas ideias de como podemos usar as tecnológias
        para a ajudar aos outros.
      </p>
    </div>
    <div class="Missao">
      <h1>Termos e políticas de uso</h1>
      <p>
       Portanto não precisa saber nada de programação,
        basta seguir os passos e em um minuto ja tens um ou mais portifólios,
        sem limites.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio
        libero voluptatibus illo sequi mollitia accusamus ipsam neque odit!
        Placeat officia q uos officiis quisquam repudiandae maxime ut dolores
        enim voluptatibus!
      </p>
    </div>
    <div class="feedback">
      <h1>Apoiar a plataforma</h1>
      <p>
       Sendo esta uma plataforma grátis, existem custos que precisam serem pagos para manter  a plataforma <em>online</em>,
       fazer a manutenção, actualizações, criação de novas funcionalidades, novos modelos de portifólios, entre outras coisas que requerem muito tempo, 
       empenho e dinheiro. Portanto, se esta plataforma de ajuda ou te ajudou de alguma forma, será um grande gesto e 
       e a <em>EasyFollow</em> agradece com a sua contribuição para melhorar a plataforma e afim.
       Ainda mais, todos os apoidores podem contribuir na geração de ideias de melhorias para a plataforma. <br>
      </p>
      <ul>
        <h1>Contactos para feedback e apoios</h1>
        <li>+258845512288</li>
        <li>+258862585512</li>
        <li>devndodo@gmail.com</li>
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
      <p>&copy;easyfollow.site | 2023</p>
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
  font-size: 1.3em;
  margin-bottom: 8px;
  padding-left: 10px;
  border-left: 4px solid #227c9d;
  color: #222;
}
main div p {
  color: #2a2727;
  font-size: 1.1em;
  padding-left: 5px;
  line-height: 28px;
}
main .feedback ul {
  margin-top: 20px;
}
main .feedback ul li,
a {
  margin-top: 10px;
  padding-left: 5px;
  font-size: 1.1em;
  color: #256ee3;
}
</style>