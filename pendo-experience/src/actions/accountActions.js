import { RestDBAxios } from '../index.js';


export const seeAccountDetails = (id) => ({
	type: 'SEE_ACCOUNT_DETAILS',
	id
})



export const requestAccountsData = () => ({
	type: 'REQUEST_ACCOUNTS_DATA',
	loading: true
})

export const receivedAccountsData = (json) => ({
	type: 'RECEIVED_ACCOUNTS_DATA',
	loading: false,
	json
})

export const fetchAccounts = () => {
	return dispatch => {
		dispatch(requestAccountsData());

		RestDBAxios.get('accounts')
			.then((response) => {
				dispatch(receivedAccountsData(response.data));
			})
			.catch(err => console.log(err));
	}
};
