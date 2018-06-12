import { RestDBAxios } from '../index';

// As the text gets inputted into the textarea this updates the text object when it needs to be submitted
export const updateDetailsInputValue = (text) => ({
	type: 'UPDATE_DETAILS_INPUT_VALUE',
	text
});

// This object makes it easy to send the right icon into the details timeline using the below thing
var icons = {
	'New Note': 'form',
	'Email': 'mail',
	'Call': 'phone',
	'Log Activity': 'tool',
	'Create Task': 'check-circle-o',
	'Schedule': 'calendar'
};

// Takes the textarea value, and the current tab and sends to reducer
export const addPostToTimeline = (icon, entry) => ({
		type: 'ADD_POST_TO_TIMELINE',
		icon: icons[icon],
		entry
});

/*
 * Similar to the Accounts/Contacts/Opps actions
 * With there being 3 functions that will be run
 * Request --> Fetch --> Recieved 
 * This follows a convention stated under Async Actions in Redux:
 *
 * https://redux.js.org/advanced/async-actions
 *
 * loading is to indicate the spinners inside the components to spin or not
 *
 * 
 *
 */
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


export const fetchDetails = (url) => {
	return dispatch => {
		dispatch(requestDetailsData());

		// What's happening here is that I am taking the whatever the current URL is and splitting it up by "/"
		// Goes from (example):
		// "/contacts/8402502-0385-2039-40/details" -> an object that looks like ["", "contacts", "8402502-0385-2039-40", "details"]
		var urlSplit = url.split('/');

		// Now we are using the above object splits to make a URL request for the specific ID in the URL. To get a specific Object information for Details page
		// Example continued:
		// RestDBAxios.get('contacts/8402502-0385-2039-40')
		RestDBAxios.get(urlSplit[1] + "/" + urlSplit[2])
			.then(response => {
				dispatch(receivedAsyncDetailsData(response.data));
			})
			.catch(err => console.log(err));
	}
};
