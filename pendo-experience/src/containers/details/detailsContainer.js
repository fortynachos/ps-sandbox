import { connect } from 'react-redux';
import Details from '../../components/details/details.js';
import { updateDetailsInputValue, addPostToTimeline } from '../../actions';




const mapStateToProps = (state) => {
	return {
		inputValue: state.TimelineReducer.inputValue,
		timelinePosts: state.TimelineReducer.timelinePosts
	}
};


const mapDispatchToProps = (dispatch) => {
	return {
		onDetailsChange: (text) => {
			dispatch(updateDetailsInputValue(text));
		},
		onDetailsSubmit: (icon, text) => {
			dispatch(addPostToTimeline(icon, text));
		}
	}
};


const FinalDetails = connect(mapStateToProps,mapDispatchToProps)(Details);

export default FinalDetails;