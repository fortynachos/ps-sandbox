import { RestDBAxios } from '../index.js';


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
