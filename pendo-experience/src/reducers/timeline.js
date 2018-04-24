let initTimeline = [
	{
		type: "form",
		entry: "Waiting on approval from Jane (CEO) on SaaS approved vendor agreement, aiming for February 26, 2017 close date.",
		key: "1"
	},{

		type: "mail",
		entry: "Sent follow up email to re-engage.",
		key: "2"
	},{

		type: "phone",
		entry: "Had a phone conversation discussing next steps.",
		key: "3"
	},{

		type: "tool",
		entry: "Had a troubleshooting conversation with David, Sales Engineer. Resolved.",
		key: "4"
	},{

		type: "check-circle-o",
		entry: "Demo Complete.",
		key: "5"
	},{

		type: "calendar",
		entry: "Demo Scheduled January 15, 2017.",
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
