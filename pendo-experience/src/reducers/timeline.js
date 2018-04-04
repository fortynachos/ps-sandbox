let initTimeline = [
	{
		type: "form",
		entry: "Thing 1",
		key: "1"
	},{

		type: "mail",
		entry: "Thing 2",
		key: "2"
	},{

		type: "phone",
		entry: "Thing 3",
		key: "3"
	},{

		type: "tool",
		entry: "Thing 4",
		key: "4"
	},{

		type: "check-circle-o",
		entry: "Thing 5",
		key: "5"
	},{

		type: "calendar",
		entry: "Thing 6",
		key: "6"
	}
];

let timeline_key = 6;


const TimelineReducer = (
	state = {
		inputValue: '',
		timelinePosts: initTimeline
	}, action) => {
	
	switch(action.type) {
		case 'UPDATE_DETAILS_INPUT_VALUE':
			return Object.assign({}, state, {
				inputValue: action.text
			})
		case 'ADD_POST_TO_TIMELINE':
			timeline_key++;
			return Object.assign({}, state, {
				timelinePosts: [
					{
						type: action.icon,
						entry: action.entry,
						key: timeline_key
					},
					...state.timelinePosts
				],
				inputValue: ''
			})
		default:
			return state
	}
}


export default TimelineReducer;