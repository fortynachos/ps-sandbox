import axios from 'axios';

export const changePageTitle = text => ({
	type: 'UPDATE_PAGE_TITLE',
	text
});

export const updateDetailsInputValue = (text) => ({
	type: 'UPDATE_DETAILS_INPUT_VALUE',
	text
});



export const requestAccounts = () => {
	return {
		type: 'REQUEST_ACCOUNTS',
		loading: true
	}
}

export const receiveAccounts = () => {
	return {
		type: 'RECEIVED_ACCOUNTS',
		loading: false,
		accounts:
		  {
		    key: '1',
		    name: 'John Brown',
		    rep: 32,
		    territory: 'New York No. 1 Lake Park',
		  }

	}
}

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
