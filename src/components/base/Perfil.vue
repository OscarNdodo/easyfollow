<template>
  <div class="perfil">
	<img src="/assets/02.jpg">
	<div class="dados">
		<h4>Perfil</h4>
	</div>
  </div>
</template>

<script>
export default {
	name: "PerfilVue",
	// props: {
	// 		foto: {
	// 			type: String,
	// 			default: "/assets/02.jpg"
	// 		},
	// 		nome: {
	// 			type: String,
	// 			default: "Usuario"
	// 		}
	// },
	// data(){
	// 	return {
	// 		path: "http://localhost:3333/files/perfil/"
	// 	}
	// }
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