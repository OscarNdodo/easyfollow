<template>
  <PadraoVue :rota="rota" />
</template>

<script>
import PadraoVue from "@/components/modelos/Padrao.vue";
export default {
	name: "portifolioView",
	components: {
		PadraoVue
	},
	data(){
		return {
			rota: {}
		}
	},
	beforeMount(){
		this.rota = this.$route;
	}
}
</script>

<style scoped>

</style>