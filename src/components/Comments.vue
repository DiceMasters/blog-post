<template>
	<div class="wrap">
		<div class="list-group">
			<div class="list-group-item" v-for="item in comments" :key="item.id">
				<p class="mb-1">{{ item.text }}</p>
				<div class="d-flex w-100 justify-content-end">
					<span class="badge badge-dark" @click="removeComment(item.id)">Удалить</span>
				</div>
			</div>
		</div>
		<form>
			<h5 class="text-light">Новый комментарий</h5>
			<div class="form-group">
				<textarea class="form-control" rows="3" v-model="commentData.text" @keypress.enter.prevent="createComment()"></textarea>
			</div>
			<div class="form-group">
				<button class="btn btn-success" @click.prevent="createComment()">Отправить</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				comments: this.getComments(),
				commentData: {
					id: 0,
					text: ''
				}
			}
		},
		methods: {
			getComments() {
				return JSON.parse(localStorage.getItem('terms')).filter(val => val.id == this.$route.params.id)[0].comments
			},
			createComment() {
				let terms = JSON.parse( localStorage.getItem('terms') )

				terms.map( val => {
					if ( this.$route.params.id == val.id ) {
						if ( val.comments.length != 0 ) { this.commentData.id = val.comments.length + 1 }

						val.comments.push( this.commentData )
					}
				})

				localStorage.setItem('terms', JSON.stringify( terms ))
				this.commentData.text = ''
				this.commentsUpdate()
			},
			removeComment(commentId) {
				let terms = this.getTerms()

				terms.map( val => {
					if ( this.$route.params.id == val.id ) {
						val.comments = val.comments.filter( comment => comment.id != commentId )
					}
				})

				localStorage.setItem('terms', JSON.stringify( terms ))
				this.commentsUpdate()
			},
			commentsUpdate() {
				this.comments = JSON.parse( localStorage.getItem('terms')).filter( val => this.$route.params.id == val.id )[0].comments
			}
		}
	}
</script>

<style lang="stylus">
	.list-group-item
		background-color #8d6e63
		
		.badge
			background-color #3e2723
			cursor: pointer
</style>