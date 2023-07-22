<template>
  <div class="perfil">
	<img src="/assets/02.jpg">
	<div class="dados">
		<h4>User name</h4>
		<!-- <span class="fa fa-sign-out"></span> -->
	</div>
  </div>
</template>

<script>
export default {
	name: "PerfilVue"
}
</script>

<style scoped>
	img{
		width: 100px;
		height: 100px;
		border-radius: 50%;
		border: 2px solid #aaa;
		padding: 5px;
	}
	.perfil{
		display: flex;
		flex-direction: column;
		margin-top: 40px;
	}
	.perfil .dados{
		display: flex;
		flex-direction: row;
	}

	.perfil .dados h4{
		padding: 10px 5px;
		font-size: 1.2em;
		color: #222;

	}
</style>