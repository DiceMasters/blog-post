<template>
	<form>
		<h3 class="text-light">Новая запись</h3>
		<div class="form-group">
			<input class="form-control" type="text" v-model="formData.title" placeholder="Введите заголовок записи">
		</div>
		<div class="form-group">
			<textarea class="form-control" rows="2" v-model="formData.description" placeholder="Введите краткое описание"></textarea>
		</div>
		<div class="form-group">
			<textarea class="form-control" rows="4" v-model="formData.text" @keypress.enter.prevent="createTerm()" placeholder="Введите текст записи"></textarea>
		</div>
		<div class="form-group">
			<button class="btn btn-success" @click.prevent="createTerm()">Создать запись</button>
		</div>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					id: 0,
					title: '',
					description: '',
					text: '',
					comments: []
				}
			}
		},
		methods: {
			createTerm() {
				let terms = this.getTerms()

				if ( terms.length != 0 )
					this.formData.id = terms[ terms.length - 1 ].id + 1

				terms.push( this.formData )
				localStorage.setItem('terms', JSON.stringify(terms))

				this.$router.push('/')
			}
		}
	}
</script>

<style lang="stylus">
	form 
		padding 15px 0
		
	.form-group:not(:last-child)
		padding-bottom 15px
</style>