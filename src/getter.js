export default {
	methods: {
		getTerms() {
			getTerms() {
				return ( localStorage.getItem('terms') != null ) 
					? JSON.parse(localStorage.getItem('terms')) 
					: []
			}
		}
	}
}