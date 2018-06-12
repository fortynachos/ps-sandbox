import { RestDBAxios } from '../index.js';

/*
 * Account, Contacts, Opportunities will all follow the same structure
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
export const requestContactsData = () => ({
	type: 'REQUEST_CONTACTS_DATA',
	loading: true
})

export const receivedContactsData = (json) => ({
	type: 'RECEIVED_CONTACTS_DATA',
	loading: false,
	json
})

export const fetchContacts = () => {
	return dispatch => {
		dispatch(requestContactsData());

		RestDBAxios.get('contacts')
			.then((response) => {
				dispatch(receivedContactsData(response.data));
			})
			.catch(err => console.log(err));
	}
};
