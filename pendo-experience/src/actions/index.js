import axios from 'axios';

export const changePageTitle = text => ({
	type: 'UPDATE_PAGE_TITLE',
	text
});

export const updateDetailsInputValue = (text) => ({
	type: 'UPDATE_DETAILS_INPUT_VALUE',
	text
});

var icons = {
	'New Note': 'form',
	'Email': 'mail',
	'Call': 'phone',
	'Log Activity': 'tool',
	'Create Task': 'check-circle-o',
	'Schedule': 'calendar'
};

export const addPostToTimeline = (icon, entry) => ({
		type: 'ADD_POST_TO_TIMELINE',
		icon: icons[icon],
		entry
});

export const seeAccountDetails = (id) => ({
	type: 'SEE_ACCOUNT_DETAILS',
	id
})



export const requestDetailsData = (url) => ({
	type: 'REQUEST_DETAILS_DATA',
	loading: true,
	url
})

export const receivedDetailsData = (json) => ({
	type: 'RECEIVED_DETAILS_DATA',
	loading: false,
	json
})

export const fetchDetails = () => {
	return dispatch => {
		dispatch(requestDetailsData());

		axios.get('https://randomuser.me/api/')
			.then(response => {
				dispatch(receivedDetailsData(response.data.results));
			})
			.catch(err => console.log(err));
	}
};
