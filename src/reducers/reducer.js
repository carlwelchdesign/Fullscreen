export default (state = { data: [] }, action) => {
	switch (action.type) {
		case 'LOAD_DATA':
			return {
				data: action.payload
			}
		default:
			return state
	}
}