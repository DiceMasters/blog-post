import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Create from './views/Create'
import Term from './views/Term'
import Edit from './views/Edit'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			name: 'home',
			path: '/',
			component: Home
		},
		{
			name: 'create',
			path: '/create',
			component: Create
		},
		{
			name: 'term',
			path: '/term/:id',
			component: Term,
			props: true
		},
		{
			name: 'edit',
			path: '/edit/:id',
			component: Edit,
			props: true
		}
	]
})
