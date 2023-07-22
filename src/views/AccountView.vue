<template>
  <div class="account">
	<LoginVue @criarConta="criarConta" v-if="temConta" />
	<ContaVue @cancelarConta="cancelarConta" v-else />
  </div>
</template>

<script>
import LoginVue from "../components/Login.vue";
import ContaVue from "../components/Conta.vue";
export default {
	name: "AccountView",
	components: {
		LoginVue,
		ContaVue
	},
	data(){
		return{
			temConta: true
		}
	},
	methods: {
		cancelarConta(){
			this.temConta = true;
		},
		criarConta(){
			this.temConta = false
		}
	}
}
</script>

<style scoped>
	/* .account{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	} */
</style>