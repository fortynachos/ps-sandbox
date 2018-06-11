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
export const requestOpportunitiesData = () => ({
	type: 'REQUEST_OPPORTUNITIES_DATA',
	loading: true
})

export const receivedOpportunitiesData = (json) => ({
	type: 'RECEIVED_OPPORTUNITIES_DATA',
	loading: false,
	json
})

export const fetchOpportunities = () => {
	return dispatch => {
		dispatch(requestOpportunitiesData());

		RestDBAxios.get('opportunities')
			.then((response) => {
				dispatch(receivedOpportunitiesData(response.data));
			})
			.catch(err => console.log(err));
	}
};
