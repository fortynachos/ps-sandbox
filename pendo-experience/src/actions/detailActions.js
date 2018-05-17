import { RestDBAxios } from '../index';

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


export const requestDetailsData = (url) => ({
	type: 'REQUEST_DETAILS_DATA',
	loading: true,
	url
})

export const receivedAsyncDetailsData = (json) => ({
	type: 'RECEIVED_DETAILS_DATA',
	loading: false,
	json
})

export const newDetailsData = (objectType, name, address, phone) => ({
	type: 'NEW_DETAILS_DATA',
	loading: false,
	objectType,
	name,
	address,
	phone
})

export const fetchDetails = (url) => {
	return dispatch => {
		dispatch(requestDetailsData());

		var urlSplit = url.split('/');
		console.log(urlSplit);

		RestDBAxios.get(urlSplit[1] + "/" + urlSplit[2])
			.then(response => {
				dispatch(receivedAsyncDetailsData(response.data));
			})
			.catch(err => console.log(err));
	}
};
