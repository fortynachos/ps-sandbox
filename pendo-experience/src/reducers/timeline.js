const TimelineReducer = (state ='', action) => {
	switch(action.type) {
		case 'UPDATE_DETAILS_INPUT_VALUE':
			return action.text
		default:
			return state
	}
}


export default TimelineReducer;