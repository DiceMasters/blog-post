<template>
	<div class="controlls_box">
		<div class="controlls_head">
			<router-link :to="{ path: '/' }" class="h4">BlogPost</router-link>
			<p><small>Блог на localStorage</small></p>
		</div>
		<div class="controlls_body">
			<div class="controlls_body_inner">
				<router-link :to="{ path: '/create' }" class="btn btn-success">Создать...</router-link>
				<router-link :to="{ name: 'edit', params: { id: this.$route.params.id } }" v-if="this.$route.name == 'term'" class="btn btn-primary">Редактировать</router-link>
				<button v-if="this.$route.name == 'term'" class="btn btn-danger" @click="removeTerm()">Удалить</button>
			</div>
			<div class="controlls_body_inner">
				<button class="btn btn-warning" @click="loadDemo()">Загрузить демо</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			loadDemo() {
				let terms = [
					{
						id: 0,
						title: 'Зачем фрилансеру договор?',
						description: 'Давно выяснено, что при оценке дизайна и композиции читаемый',
						text: '«Опять обманул заказчик». «Мне не заплатили за работу». «Какой-то мутный тип: непонятно, чего хочет, но деньги обещает неплохие». «Уже три месяца кормит завтраками». «Не нужно было связываться: к работе придирается по каждой мелочи, а платить не торопится».',
						comments: [
							{ id: 0, text: 'Он не гарантирует безоблачного сотрудничества с кем угодно. Но если дело дойдет до искового заявления, в суде будет проще доказывать свои права. ' },
							{ id: 1, text: 'Но есть одна штука, которая поможет фрилансеру чувствовать себя более уверенно. Это договор фрилансера и заказчика.' },
							{ id: 2, text: 'Так фрилансеры рассказывают об опыте работы с недобросовестными заказчиками. ' }
						]
					},
					{
						id: 1,
						title: 'Чем живут наши преподаватели',
						description: 'За прошедшие годы текст Lorem Ipsum получил много версий.',
						text: '«Опять обманул заказчик». «Мне не заплатили за работу». «Какой-то мутный тип: непонятно, чего хочет, но деньги обещает неплохие». «Уже три месяца кормит завтраками». «Не нужно было связываться: к работе придирается по каждой мелочи, а платить не торопится».',
						comments: [
							{ id: 0, text: 'Он не гарантирует безоблачного сотрудничества с кем угодно. Но если дело дойдет до искового заявления, в суде будет проще доказывать свои права. ' },
							{ id: 1, text: 'Но есть одна штука, которая поможет фрилансеру чувствовать себя более уверенно. Это договор фрилансера и заказчика.' },
							{ id: 2, text: 'Так фрилансеры рассказывают об опыте работы с недобросовестными заказчиками. ' }
						]
					},
					{
						id: 2,
						title: 'Факультет тестирования ПО — короткая дорога в IT',
						description: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые',
						text: '«Опять обманул заказчик». «Мне не заплатили за работу». «Какой-то мутный тип: непонятно, чего хочет, но деньги обещает неплохие». «Уже три месяца кормит завтраками». «Не нужно было связываться: к работе придирается по каждой мелочи, а платить не торопится».',
						comments: [
							{ id: 0, text: 'Он не гарантирует безоблачного сотрудничества с кем угодно. Но если дело дойдет до искового заявления, в суде будет проще доказывать свои права. ' },
							{ id: 1, text: 'Но есть одна штука, которая поможет фрилансеру чувствовать себя более уверенно. Это договор фрилансера и заказчика.' },
							{ id: 2, text: 'Так фрилансеры рассказывают об опыте работы с недобросовестными заказчиками. ' }
						]
					}
				]
				localStorage.setItem('terms', JSON.stringify(terms) )
				this.$router.go()
			},
			removeTerm() {
				let terms = this.getTerms()

				localStorage.setItem('terms', JSON.stringify( terms.filter( val => this.$route.params.id != val.id) ))
				this.$router.push({name: 'home'})
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.controlls
		&_box
			height 100vh
			background-color #4E342E
			position sticky
			top 0
			
		&_head
			height 60px
			display flex
			flex-direction column
			justify-content center
			padding 0 15px
			
			a, p
				color white
				text-decoration none
				margin-bottom 0
				
		&_body
			height calc(100% - 60px)
			display flex
			flex-direction column
			justify-content space-between
			align-items stretch
			padding 0 15px
			
			&_inner
				display flex
				flex-direction column
				align-items stretch
			
			.btn
				margin-bottom 15px
</style>