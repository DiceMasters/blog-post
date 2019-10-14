<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text">{{ description.substring(0, 90).trim() + '...' }}</p>
			<router-link :to="{ name: 'term', params: { id: termId } }" class="btn btn-primary">Подробнее</router-link>
			<span class="badge badge-primary">{{ comments.length }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['termId', 'title', 'description', 'comments']
	}
</script>

<style lang="stylus">
	.card
		height 100%
		background-color #8D6E63
		border-color #6D4C41
		position relative
		
		.badge
			background-color #5D4037
			position absolute
			top 10px
			right 10px
			
		.btn-primary
			background-color #5D4037
			border none
			
			&:hover, &:focus
				background-color #3E2723
</style>