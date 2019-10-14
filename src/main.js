import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

Vue.mixin({
	methods: {
		getTerms() {
			let term = localStorage.getItem('terms')

			if ( localStorage.getItem('terms') != null && localStorage.getItem('terms') != '' ) 
				return JSON.parse(localStorage.getItem('terms')) 
			else return []
		}
	}
})
