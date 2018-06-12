// Pulls in a premade Axios object for making simple calls to RestDB
import { RestDBAxios } from '../index.js';


export const seeAccountDetails = (id) => ({
	type: 'SEE_ACCOUNT_DETAILS',
	id
})



/*
 *
 * Account, Contacts, Opportunities (actions) will all follow the same structure
 * With there being 3 functions that will be run
 * Request --> Fetch --> Recieved 
 * This follows a convention stated under Async Actions in Redux:
 *
 * https://redux.js.org/advanced/async-actions
 *
 * loading is to indicate the spinners inside the components to spin or not
 *
 */

export const requestAccountsData = () => ({
	type: 'REQUEST_ACCOUNTS_DATA',
	loading: true
});

export const receivedAccountsData = (json) => ({
	type: 'RECEIVED_ACCOUNTS_DATA',
	loading: false,
	json
});

export const fetchAccounts = () => {
	return dispatch => {
		dispatch(requestAccountsData());
		// Axios object created from the index.js
		RestDBAxios.get('accounts')
			.then((response) => {
				dispatch(receivedAccountsData(response.data));
			})
			.catch(err => console.log(err));
	}
};
