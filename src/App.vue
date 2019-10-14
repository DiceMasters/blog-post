<template>
	<div id="app">
		<div class="container">
			<div class="row">
				<div class="col-3">
					<Controlls></Controlls>
				</div>
				<div class="col-9">
					<Views></Views>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import './assets/bootstrap.min.css'

	export default {
		data() {
			return {}
		},
		components: {
			Controlls: () => import('./components/Controlls.vue'),
			Views: () => import('./components/Views.vue')
		}
	}
</script>

<style lang="stylus">
	#app
		width 100%
		min-height 100vh
		background-color #3E2723
</style>