import { RestDBAxios } from '../index.js';

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
