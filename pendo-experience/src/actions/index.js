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
