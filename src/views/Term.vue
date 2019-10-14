<template>
	<div class="container">
		<div class="row align-items-stretch">
			<div class="col-12">
				<h3>{{ termData.title }}</h3>
				<p>
					{{ termData.text }}
				</p>
			</div>
			<div class="col-12">
				<h4>Комментарии</h4>
				<Comments></Comments>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				termData: {}
			}
		},
		components: {
			Comments: () => import('./../components/Comments')
		},
		methods: {
			getTerm() {
				let terms = JSON.parse( localStorage.getItem('terms') )

				terms = terms.filter( val => {
					return val.id == Number(this.$route.params.id)
				})
				this.termData = terms[0]
			}
		},
		mounted() {
			this.getTerm()
		}
	}
</script>

<style lang="stylus">
	h3, h4, p
		color white
</style>