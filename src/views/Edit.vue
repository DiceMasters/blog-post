<template>
	<form>
		<h3 class="text-light">Редактирование записи</h3>
		<div class="form-group">
			<label class="text-light">Заголовок</label>
			<input class="form-control" type="text" v-model="formData.title" placeholder="Введите заголовок записи">
		</div>
		<div class="form-group">
			<label class="text-light">Краткое описание</label>
			<textarea class="form-control" rows="2" v-model="formData.description" placeholder="Введите краткое описание"></textarea>
		</div>
		<div class="form-group">
			<label class="text-light">Текст записи</label>
			<textarea class="form-control" rows="4" v-model="formData.text" placeholder="Введите текст записи"></textarea>
		</div>
		<div class="form-group">
			<button class="btn btn-success" @click.prevent="saveTerm()">Сохранить</button>
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
			loadTerm(id) {
				let term = JSON.parse( localStorage.getItem('terms') ).filter( val => val.id == id)[0]

				this.formData = term
			},
			saveTerm() {
				let terms = this.getTerms(),
					self = this

				let newTerms = terms.map( function(term) {
					if ( term.id == self.$route.params.id) {
						return self.formData
					}
					return term
				})

				localStorage.setItem('terms', JSON.stringify( newTerms ))
				this.$router.push({ name: 'term', params: { id: this.$route.params.id }})
			}
		},
		mounted() {
			this.loadTerm(this.$route.params.id)
		}
	}
</script>