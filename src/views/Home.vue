<template>
	<div class="container">
		<div class="row align-items-stretch">
			<div class="col-12">
				<h3 class="text-light">Записи</h3>
			</div>
			<div class="col-4 card-col" v-if="terms != []" v-for="item in terms" :key="item.id">
				<Card :termId="item.id" :title="item.title" :description="item.description" :comments="item.comments"></Card>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				terms: []
			}
		},
		mounted() {
			this.terms = this.getTerms()
		},
		components: {
			Card: () => import('./../components/Card')
		}
	}
</script>

<style lang="stylus">
	h3
		padding: 10px 0
		
	.card-col
		margin-bottom 15px
</style>