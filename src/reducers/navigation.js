let initState = 'Dashboard';


const Navigation = (state = initState, action) => {
	switch (action.type) {
		case 'UPDATE_PAGE_TITLE':
			return action.text
		default:
			return state
	}
}



export default Navigation;
