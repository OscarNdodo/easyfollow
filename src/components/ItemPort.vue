<template>
  <div class="item">
    <img src="/assets/02.jpg" alt="" />
    <ul>
      <li>
        <RouterLink to="/portifolio">Oscar Ndodo</RouterLink>
        <p>Front-End Developer</p>
      </li>
      <li>
        <RouterLink to="/portifolio/criar" class="fa fa-pencil-square" style="color: #227c9d;"></RouterLink>
        <span class="fa fa-trash" style="color: red;"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ItemPortVue",
};
</script>

<style scoped>
img {
  width: 40px;
  margin: 0 10px 0 0;
}
.item {
  width: 96%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 6px #c0c2c6;
  margin: 20px 2% 0 2%;
  padding: 5px 10px;
  border-radius: 4px;
}
.item ul{
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
}

.item ul li{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
}
.item ul li:first-child a{
	font-size: 1.1em;
	font-weight: 500;
	text-decoration: underline;
	color: #227c9d;
}
.item ul li .fa{
	font-size: 1.2em;
	text-align: center;
	float: right;
}

@media screen and (min-width: 920px){
  img {
  width: 60px;
}
.item {
  margin: 30px 2% 0 2%;
  padding: 10px;
}
.item ul li:first-child a{
	font-size: 1.3em;
}
.item ul li .fa{
	font-size: 1.5em;
}
}
</style>